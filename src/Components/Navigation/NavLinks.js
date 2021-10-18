import React from "react";
import { Link } from "react-scroll";

import "./NavLinks.css";



const NavLinks = (props) => {

  const closeDrawer = () => {
    props.onSelect();
  };

  return (
    <React.Fragment>
      <div className="nav-header">
        <a
          href="http://www.google.com"
          target="_blank"
          rel="noreferrer"
        >
          leonard.me
        </a>
      </div>
      <ul className="nav-links">
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={0}
            onClick={closeDrawer}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={0}
            onClick={closeDrawer}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            offset={-80}
            duration={0}
            onClick={closeDrawer}
          >
            Education
          </Link>
        </li>

        <li>
          <Link
            activeClass="active"
            to="techstacks"
            spy={true}
            smooth={true}
            offset={-50}
            duration={0}
            onClick={closeDrawer}
          >
            Techstacks
          </Link>
        </li>

        <li>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-50}
            duration={0}
            onClick={closeDrawer}
          >
            Projects
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default NavLinks;
