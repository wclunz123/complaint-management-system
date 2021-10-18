import React from "react";
import { Link } from "react-scroll";

import image from "../../Images/profile.jpg";

import "./Home.css";

const Home = (props) => {
  const scrollToBottomHandler = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="home">
      <div className="home-content">
        <div className="home-content__hook">
          <img src={image} alt={image} />
          <div className="home-content__overlay-hook">Hi, I'm Leonard</div>
        </div>
        <div className="home-content__badge">
          {props.data.badge &&
            props.data.badge.map((item) => {
              return <img key={item.id} src={item.image} alt={item.id} />;
            })}
        </div>

        <h1>Technophile, Learnaholic, and Idealist</h1>
        <p>
          I design and code beautifully simple things, and I love what I do.
        </p>
        <div className="home-content__button-container">
          <Link
            className="home-content__button-contact buttons"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={0}
          >
            Say Hello
          </Link>
          <Link
            className="home-content__button-explore buttons"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-50}
            duration={0}
          >
            Portfolio
          </Link>
        </div>
        <div className="smoothscroll" onClick={scrollToBottomHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-arrow-down-circle"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
