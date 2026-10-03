import "./LandingPage.css";
// COMPONENTS
import Nav from "../../components/navbar/Nav";
import Post from "../../components/post/Post";
// ICONS
import Menu from "../../icons/Menu";
import MenuClose from "../../icons/MenuClose";
import Trusted from "../..//icons/trusted-icon";
import RightArrow from "../../icons/RightArrow";
import AccountAdd from "../../icons/AccountAdd";
import Pen from "../../icons/Pen";
import Community from "../../icons/Community";
import Flash from "../../icons/Flash";
import Facebook from "../../icons/Facebook";
import X from "../../icons/X";
import Instagram from "../../icons/Instagram";
import Linkedin from "../../icons/LinkedIn";
import Sun from "../../icons/sun";
import Eye from "../../icons/Eye";
import Heart from "../../icons/Heart";
import Comment from "../../icons/Comment";
import Save from "../../icons/global-bookmark";
// IMAGES
import logo from "../../images/logo.png";
import writingIllustration from "../../images/writing-illustration.png";
import statsIllustration from "../../images/stats-illustration.png";
// HOOKS
import useWindowSize from "../../hooks/useWindowSize";
import useDarkMode from "../../hooks/useDarkMode";
// REACT & OTHER
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";
import Loader from "../../components/ui/loader";
import AlertIcon from "../../icons/alert-icon";

const LandingPage = () => {
  // const [menuIcon, setMenuIcon] = useState(true);
  // const [menuOpen, setMenuOpen] = useState(false);
  // const [visibleElements, setVisibleElements] = useState({});
  // const elementRefs = useRef({});
  // const { width } = useWindowSize();
  // useEffect(() => {
  //   const callback = (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         setVisibleElements((prev) => ({
  //           ...prev,
  //           [entry.target.dataset.id]: true,
  //         }));
  //       }
  //     });
  //   };

  //   const options = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0.1,
  //   };

  //   const observer = new IntersectionObserver(callback, options);

  //   const currentElements = Object.values(elementRefs.current);

  //   currentElements.forEach((el) => {
  //     if (el) observer.observe(el);
  //   });

  //   return () => {
  //     currentElements.forEach((el) => {
  //       if (el) observer.unobserve(el);
  //     });
  //   };
  // }, []);

  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percentage = scrollableHeight > 0
        ? (window.scrollY / scrollableHeight) * 100
        : 0;

      setScrollPercentage(percentage);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const darkMode = useStoreState((state) => state.theme.darkMode);
  const setDarkMode = useStoreActions((actions) => actions.theme.setDarkMode);

  useDarkMode(darkMode);

  const navigate = useNavigate();

  
  return (
    <>
      <header className="LPHeader">
       
        <>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
            className="logoContainer"
          >
            <img
              style={{ borderRadius: "5px" }}
              loading="lazy"
              src={logo}
              alt=""
            />
            <p>quilly</p>
          </div>

          <div className="authBtnsContainer">
            <button onClick={() => navigate("/auth")} className="signInBtn">
              Sign in
            </button>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                setDarkMode(!darkMode);
              }}
            >
              <Sun height={"20px"} width={"20px"} color={`var(--text)`} />
            </span>
          </div>
        </>

      </header>
      <div className="scroll-container">
        <div
          className="scroll-bar"
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>

      <main className="LPMain">
        <section className="heroSection">
          <div className="heroTextContainer">
            {/* <p className="label">
              {" "}
              <Trusted
                height={"15px"}
                width={"20px"}
                color={`var(--text)`}
              />{" "}
              Trusted By Thousands of Writers
            </p> */}
            <h2>Blogging reimagined for the social era.</h2>
            <p className="heroParagraph">
              Create, publish, and engage. <strong>quilly</strong> gives writers
              a simple way to share ideas and build a community around their
              work.
            </p>

            <div className="CTABtnsContainer">
              <button
                onClick={() => navigate("/auth")}
                className="btn1 animate__zoomOutRight"
              >
                Start Writing Free{" "}
              </button>
              <button className="btn2">Explore Feed</button>
            </div>
          </div>

          {/* <img  className="preview-image" src={profilePreview} fetchPriority="high" alt="" /> */}
          <img
            src={writingIllustration}
            alt="writing-illustration"
            className="writing-illustration"
          />
        </section>

        <section id="trending-stories" className="creation-flow-section">
          <div className="creation-section-header">
            <h3>The Creation Experience</h3>
            <p>Everything you need to turn a thought into a published story.</p>
          </div>

          <div className="creation-flows-container">
            <div className="creation-flow-card ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 256 256"
              >
                <g
                  id="galaEditor0"
                  fill="none"
                  stroke="rgb(55, 136, 250)"
                  strokeDasharray="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="4"
                  strokeOpacity="1"
                  strokeWidth="16"
                >
                  <path id="galaEditor1" d="m 16,64 224.93778,0.09256" />
                  <path
                    id="galaEditor2"
                    d="M 48,16 H 207.91114 C 225.62929,16 240,30.281849 240,48 v 160 c 0,17.71816 -14.28185,32 -32,32 H 48 C 30.281848,240 16.069099,225.73073 16.06221,208.01257 L 16,48 C 15.993112,30.281851 30.281848,16 48,16 Z"
                  />
                  <path id="galaEditor3" d="M 191.96444,64.092555 192,16" />
                  <path id="galaEditor4" d="M 48.044437,112.06589 H 80.02666" />
                  <path
                    id="galaEditor5"
                    d="M 48.044437,144.04812 H 175.97333"
                  />
                  <path
                    id="galaEditor6"
                    d="M 48.044437,176.03034 H 127.99999"
                  />
                  <path id="galaEditor7" d="M 48.044437,208.01256 H 80.02666" />
                </g>
              </svg>
              <p>Social style editor</p>
              <p>
                Write like you post on social media. A distraction-free canvas
                makes publishing feel effortless.
              </p>
            </div>
            <div className="creation-flow-card ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 20 20"
              >
                <path
                  fill="rgb(55, 136, 250)"
                  d="M9.967 8.193L5 13h3v6h4v-6h3L9.967 8.193zM18 1H2C.9 1 0 1.9 0 3v12c0 1.1.9 2 2 2h4v-2H2V6h16v9h-4v2h4c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM2.5 4.25a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5zm2 0a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5zM18 4H6V3h12.019L18 4z"
                />
              </svg>
              <p>One tap publishing</p>
              <p>
                Hit publish and your story reaches readers instantly. No
                settings, No waiting
              </p>
            </div>
            <div className="creation-flow-card ">
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(55, 136, 250)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart preview-icon"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
              >
                <path
                  fill="rgb(55, 136, 250)"
                  d="M2.5 7.57C2.5 4.804 4.927 2.5 8 2.5c2.275 0 4.208 1.27 5.048 3.053a.5.5 0 0 0 .904-.426C12.94 2.978 10.645 1.5 8 1.5c-3.554 0-6.5 2.683-6.5 6.07c0 1.3.438 2.501 1.177 3.485l-.754 2.216c-.283.834.645 1.556 1.384 1.079l1.964-1.27q.533.232 1.113.37a.5.5 0 1 0 .232-.972a5.8 5.8 0 0 1-1.168-.416l-.253-.123l-2.259 1.46l.865-2.544l-.178-.215A4.8 4.8 0 0 1 2.5 7.57m12.49 4.3c.545-.403 1.265-.445 1.815-.278c1.428.436 1.859 2.015 1.47 3.184c-.3.923-.966 1.597-1.594 2.033a5 5 0 0 1-.916.503c-.263.108-.542.188-.765.188s-.5-.08-.763-.187a4.8 4.8 0 0 1-.912-.5c-.626-.436-1.29-1.11-1.6-2.034c-.39-1.174.043-2.738 1.465-3.186l.005-.001c.563-.171 1.256-.106 1.795.278m1.524.678c-.42-.127-.882-.013-1.103.306l-.393.57l-.417-.553c-.25-.33-.715-.443-1.114-.323c-.736.233-1.081 1.108-.813 1.913c.22.656.707 1.172 1.223 1.531c.255.178.507.31.718.395q.158.064.267.091l.086.018q.03.005.032.004l.031-.003l.087-.019q.109-.028.27-.092a4 4 0 0 0 .723-.398c.519-.36 1.003-.876 1.213-1.522l.001-.004c.27-.81-.08-1.69-.81-1.914"
                />
                <path
                  fill="rgb(55, 136, 250)"
                  d="M15 7.5c-4.107 0-7.5 3.1-7.5 7s3.393 7 7.5 7c1.14 0 2.222-.237 3.191-.663l2.33 1.505c.796.515 1.795-.264 1.49-1.162l-.894-2.628A6.66 6.66 0 0 0 22.5 14.5c0-3.9-3.393-7-7.5-7m-6.5 7c0-3.28 2.875-6 6.5-6s6.5 2.72 6.5 6a5.68 5.68 0 0 1-1.33 3.636l-.178.216l1.072 3.15l-2.797-1.807l-.253.122c-.9.436-1.924.683-3.014.683c-3.625 0-6.5-2.72-6.5-6m-3-9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 10a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1A.5.5 0 0 1 5 10m.5-2.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"
                />
              </svg>
              <p>Engagement</p>
              <p>
                Likes, comments and saves let readers respond the moment they
                finish reading.
              </p>
            </div>
          </div>
        </section>

        <section className="creation-flow-section engagement-section">
          <div className="creation-section-header">
            <h3>Engagement Tools</h3>
            <p>
              Build a relationship with every reader through liking, commenting
              and saving.
            </p>
          </div>

          <div className="tools-cards-container">
            <div className="tool-card">
              <div className="icon-text-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgb(55, 136, 250)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-heart preview-icon"
                >
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                </svg>
                <p>Like</p>
              </div>

              <p>Show appreciation with a single tap.</p>
            </div>

            <div className="tool-card">
              <div className="icon-text-container">
                <Comment
                  width={"24px"}
                  height={"24px"}
                  color={"rgb(55, 136, 250)"}
                />
                <p>Comment</p>
              </div>
              <p>Start conversations beneath any story.</p>
            </div>
            <div className="tool-card">
              <div className="icon-text-container">
                <Save
                  width={"24px"}
                  height={"24px"}
                  color={"rgb(55, 136, 250)"}
                />
                <p>Save</p>
              </div>
              <p>Bookmark stories to revisit later.</p>
            </div>
          </div>
        </section>

        <section className=" creation-flow-section insights-section">
          <div className="left-container">
            <div className="creation-section-header">
              <h3>Know What Resonates</h3>
              <p>
                Track views, likes, reads and comments to understand your
                audience and keep writing what matters.
              </p>
            </div>

            <div className="insights-list-container">
              <ul>
                <li>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgb(55, 136, 250)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check preview-icon"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>{" "}
                  Know your total views  
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgb(55, 136, 250)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check preview-icon"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>{" "}
                  Know your total comments  
                </li>
                <li>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgb(55, 136, 250)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check preview-icon"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>{" "}
                  Know your total reads  
                </li>
                <li>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgb(55, 136, 250)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check preview-icon"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>{" "}
                  Know your total likes  
                </li>
                <li>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgb(55, 136, 250)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check preview-icon"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>{" "}
                  Per post views in your profile
                </li>
              </ul>
            </div>
          </div>

          <div className="right-container">
            <img
              src={statsIllustration}
              alt="stats illustrations"
              width={"200px"}
              height={"200px"}
            />
          </div>
        </section>

        <div role="button" onClick ={() => navigate("/auth")} className="bottom-cta-container">
          <p>It takes less than a minute so</p>
          <button onClick ={() => navigate("/auth")}>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 512 512"
            >
              <path
                fill="white"
                d="M492.47 21.938c-82.74-.256-167.442 12.5-242.814 45.093c5.205 13.166 9.578 28.48 13.188 45.532C242.55 97.27 217.167 92.385 194.72 95.5c-46.22 28.432-87.13 66.305-119.44 115.594c25.193 7.756 51.57 22.81 72.845 43.844c-31.87-7.045-68.907-5.895-99.188 3c-13.743 28.688-25.008 60.48-33.343 95.687c128.71-30.668 130.522 3.514 50.75 140.438c16.877 12.614 42.182 13.77 61.906-1.563C134 267.936 231.43 326.246 254.188 354.562c14.288-40.59 34.77-82.54 62.906-126.468c-17.29-14.667-39.21-24.838-63.813-32.375c25.364-5.256 50.91-10.928 74.126-11.22c6.482-.082 12.78.272 18.844 1.156c17.57-24.007 37.408-48.612 59.75-73.97c-12.538-6.31-25.476-11.454-38.125-14.967c17.132-5.76 35.274-8.34 52.844-8.157c2.01.02 4.004.095 6 .187c20.07-21.708 41.927-43.976 65.75-66.813zM426.72 47.28c-130.93 65.394-226.626 162.926-281.784 286.25C172.34 184.41 287.048 84.57 426.72 47.28z"
              />
            </svg>{" "}
            Start Your Writing Journey?
          </button>
        </div>

        {/* <div style={{ height: "100vh" }}></div> */}

        {/* <section className="bottomSection">
          <div className="firstContainer">
            <div className="container">
              <h3
                style={{
                  color: "rgb(55, 136, 250)",
                  fontSize: "1rem",
                }}
                className="heading"
              >
                <img
                  style={{ borderRadius: "5px" }}
                  loading="lazy"
                  src={logo}
                  alt=""
                />
                quilly
              </h3>
              <p className="subHeading">
                The modern home for writers, thinkers, and storytellers. Join a
                community of over 20,000 creators sharing their journey with the
                world.
              </p>
              <div className="socialsContainer">
                <span className="socialContainer">
                  {" "}
                  <Facebook
                    width={"14px"}
                    height={"14px"}
                    color={"rgb(55, 136, 250)"}
                  />{" "}
                </span>
                <span className="socialContainer">
                  {" "}
                  <X
                    width={"10px"}
                    height={"10px"}
                    color={"rgb(55, 136, 250)"}
                  />{" "}
                </span>
                <span className="socialContainer">
                  {" "}
                  <Instagram
                    width={"15px"}
                    height={"15px"}
                    color={"rgb(55, 136, 250)"}
                  />{" "}
                </span>
                <span className="socialContainer">
                  {" "}
                  <Linkedin
                    width={"10px"}
                    height={"10px"}
                    color={"rgb(55, 136, 250)"}
                  />{" "}
                </span>
              </div>
            </div>

            <div className="container">
              <h3 className="heading">Platform</h3>
              <ul>
                <li>How it Works</li>
                <li>Pricing Plans</li>
                <li>Author Tools</li>
                <li>Member Benefits</li>
                <li>API & Integration</li>
              </ul>
            </div>
          </div>

          <div className="secondContainer">
            <div className="container">
              <h3 className="heading">Resources</h3>
              <ul>
                <li>Community Forum</li>
                <li>Writing Guide</li>
                <li>Help Center</li>
                <li>Creator Academy</li>
                <li>Blog</li>
              </ul>
            </div>

            <div className="container">
              <h3 className="heading">Company</h3>
              <ul>
                <li>About Us</li>
                <li>Carees</li>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </section> */}
        <footer className="footer">
          <h3
            style={{
              color: "rgb(55, 136, 250)",
              fontSize: "1rem",
            }}
            className="heading"
          >
            <img
              style={{ borderRadius: "5px" }}
              loading="lazy"
              src={logo}
              alt=""
            />
            quilly
          </h3>
          <p>
            © 2026 All rights reserved. Built with love by a creator for
            creators.
          </p>
          <p>Terms</p>
          <p>Privacy </p>

          {/* <div className="container">
            <div className="rightContainer">
              <p>
                © 2026 All rights reserved. Built with love by
                a creator for creators.
              </p>
            </div>
            <div className="statement">
              <span>
                <AlertIcon height="20px" width="20px" color="#cabe00" />
              </span>
              <p>
                All the links in the footer do not work, they are just a
                blueprint
              </p>
            </div>
            <div className="leftContainer">
              <p>Terms</p>
              <p>Privacy </p>
            </div>
          </div> */}
        </footer>
      </main>
    </>
  );
};

export default LandingPage;
