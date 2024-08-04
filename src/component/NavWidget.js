import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars, faHouse, faAddressCard, faBriefcase, faServer, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter, faFacebook, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import profilePicture from "../asset/img/myProfilePicture.jpg";
import "../asset/style/NavWidget.css";

function NavWidget() {
    const [toggle, setToggle] = useState(false);

    const FIRSTNAME_WITH_INITIALS = process.env.REACT_APP_FIRSTNAME_WITH_INITIALS || "ZACCHAEUS A.S.";
    const socialLink = [
      { icon: faXTwitter, link: process.env.REACT_APP_TWITTER || "#" },
      { icon: faFacebook, link: process.env.REACT_APP_FACEBOOK || "#" },
      { icon: faInstagram, link: process.env.REACT_APP_INSTAGRAM || "#" },
      { icon: faLinkedin, link: process.env.REACT_APP_LINKEDIN || "#" },
      { icon: faGithub, link: process.env.REACT_APP_GITHUB || "#" },
    ];

    const socialWidget= socialLink.map(social=> <SocialIcon info={social} />);

  const handleToggle = (e) => {
    e.preventDefault();
    setToggle((toggle) => !toggle);
  };

  return (
    <header id="header-panel" className={toggle ? "open" : "close"}>
      <img src={profilePicture} alt="Profile" />
      <div className="name-panel">{FIRSTNAME_WITH_INITIALS}</div>
      <div className="socials-panel">{socialWidget}</div>
      <nav>
        {/*use <NavLink> kater*/}
        <div className="nav-item active">
          <FontAwesomeIcon icon={faHouse} className="nav-icon" />
          Home
        </div>
        <div className="nav-item">
          <FontAwesomeIcon icon={faAddressCard} className="nav-icon" />
          About
        </div>
        <div className="nav-item">
          <FontAwesomeIcon icon={faBriefcase} className="nav-icon" />
          Portfolio
        </div>
        <div className="nav-item">
          <FontAwesomeIcon icon={faServer} className="nav-icon" />
          Services
        </div>
        <div className="nav-item">
          <FontAwesomeIcon icon={faEnvelope} className="nav-icon" />
          Contact
        </div>
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
