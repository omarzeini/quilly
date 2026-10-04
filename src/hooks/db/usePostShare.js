import { useCallback, useEffect, useState } from "react";
import supabase from "../../lib/supabase";

const usePostShare = (blogId, initialShares = 0) => {
  const [sharesCount, setSharesCount] = useState(Number(initialShares) || 0);

  useEffect(() => {
    if (blogId) setSharesCount(Number(initialShares) || 0);
  }, [blogId, initialShares]);

  const incrementShares = useCallback(async () => {
    if (!blogId) return;

    setSharesCount((count) => count + 1);

    try {
      for (let attempt = 0; attempt < 5; attempt += 1) {
        const { data: blog, error: readError } = await supabase
          .from("blogs")
          .select("shares")
          .eq("id", blogId)
          .single();

        if (readError) throw readError;

        const currentShares = Number(blog.shares) || 0;
        let updateQuery = supabase
          .from("blogs")
          .update({ shares: currentShares + 1 })
          .eq("id", blogId);

        updateQuery = blog.shares == null
          ? updateQuery.is("shares", null)
          : updateQuery.eq("shares", blog.shares);

        const { data: updatedBlog, error: updateError } = await updateQuery
          .select("shares")
          .maybeSingle();

        if (updateError) throw updateError;
        if (updatedBlog) return;
      }

      throw new Error("Could not increment the post share count.");
    } catch (error) {
      setSharesCount((count) => Math.max(0, count - 1));
      console.error("Error updating post share count:", error);
    }
  }, [blogId]);

  return { sharesCount, incrementShares };
};

export default usePostShare;