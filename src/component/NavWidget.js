import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars, faHouse, faAddressCard, faBriefcase, faServer, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter, faFacebook, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import profilePicture from "../asset/img/myProfilePicture.png";
import "../asset/style/NavWidget.css";
import { NavLink } from "react-router-dom";

function NavWidget() {
    const [toggle, setToggle] = useState(true);

    const FIRSTNAME_WITH_INITIALS = process.env.REACT_APP_FIRSTNAME_WITH_INITIALS || "ZACCHAEUS A.S.";
    const socialLink = [
      { icon: faXTwitter, link: process.env.REACT_APP_TWITTER || "#twitter" },
      { icon: faFacebook, link: process.env.REACT_APP_FACEBOOK || "#facebook" },
      { icon: faInstagram, link: process.env.REACT_APP_INSTAGRAM || "#instagram" },
      { icon: faLinkedin, link: process.env.REACT_APP_LINKEDIN || "#linkedin" },
      { icon: faGithub, link: process.env.REACT_APP_GITHUB || "#github" },
    ];

    const socialWidget= socialLink.map(social=> <SocialIcon info={social} key={social.link} />);

  const handleToggle = (e) => {
    e.preventDefault();
    setToggle((toggle) => !toggle);
  };

  return (
    <header id="header-panel" className={toggle ? "open" : "close"}>
      <img src={profilePicture} alt="Profile" />
      <div className="name-panel">{FIRSTNAME_WITH_INITIALS}</div>
      <div className="socials-panel">{socialWidget}</div>
      <nav onClick={handleToggle}>
        {/*use <NavLink> kater*/}
        <NavLink to="/" className={({isActive})=> isActive ? "nav-item active" : "nav-item"}>
          <FontAwesomeIcon icon={faHouse} className="nav-icon" />
          Home
        </NavLink>
        <NavLink to="/about" className={({isActive})=> isActive ? "nav-item active" : "nav-item"}>
          <FontAwesomeIcon icon={faAddressCard} className="nav-icon" />
          About
        </NavLink>
        <NavLink to="/portfolio" className={({isActive})=> isActive ? "nav-item active" : "nav-item"}>
          <FontAwesomeIcon icon={faBriefcase} className="nav-icon" />
          Portfolio
        </NavLink>
        <NavLink to="/services" className={({isActive})=> isActive ? "nav-item active" : "nav-item"}>
          <FontAwesomeIcon icon={faServer} className="nav-icon" />
          Services
        </NavLink>
        <NavLink to="/contact" className={({isActive})=> isActive ? "nav-item active" : "nav-item"}>
          <FontAwesomeIcon icon={faEnvelope} className="nav-icon" />
          Contact
        </NavLink>
      </nav>

      <div className="toggle-icon-container">
        <FontAwesomeIcon
          icon={toggle ? faXmark : faBars}
          className="toggle-icon"
          onClick={handleToggle}
        />
      </div>
    </header>
  );
}

function SocialIcon({info}){
    return (
      <div>
        <a href={info.link} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={info.icon} className="socials" />
        </a>
      </div>
    );
}

export default NavWidget;
