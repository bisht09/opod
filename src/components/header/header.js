import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.png";

import InstagramLogo from "../../assets/svgs/instagram-fill.svg";
import FacebookLogo from "../../assets/svgs/facebook-box-fill.svg";
import LinkedInLogo from "../../assets/svgs/linkedin-box-fill.svg";
import { useHistory } from "react-router";
import { useReactPath } from "../../hooks/windowPathHook";

const Header = () => {
  const history = useHistory();
  const [leftItem, setLeftItem] = useState(false);
  const path = useReactPath();

  useEffect(() => {
    if (window.location.hash.includes("about")) setLeftItem(true);
    else setLeftItem(false);
  }, [path]);
  return (
    <div className="header">
      <a href="http://www.opod.in/" className="logo-image">
        <img className="logo-image" src={Logo} alt="logo" />
      </a>
      {window.location.hash.includes("about") && (
        <div
          className={`home-page ${leftItem ? "left-header-item" : ""}`}
          onClick={() => {
            history.push("/");
          }}
        >
          OPOD Demo
        </div>
      )}
      <div
        className={`what-we-do ${!leftItem ? "left-header-item" : ""}`}
        // className="what-we-do"
        onClick={() => {
          history.push("/about");
        }}
      >
        WHAT WE DO?
      </div>
      <div className="brand-identity-design tooltip">
        BRAND IDENTITY DESIGN
        <span className="tooltiptext">Coming Soon</span>
      </div>
      <div className={`social-media ${leftItem ? "collapse" : ""}`}>
        <div className="instagram">
          <a href="https://www.instagram.com/hello_opod/">
            <img height={24} src={InstagramLogo} alt="instagram" />
          </a>
        </div>
        <div className="linkedin">
          <a href="https://www.linkedin.com/company/opod-audio">
            <img height={24} src={LinkedInLogo} alt="linkedIn" />
          </a>
        </div>
        <div className="facebook">
          <a href="https://www.facebook.com/OPOD-AUDIO-102114922136709/">
            <img height={24} src={FacebookLogo} alt="facebook" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
