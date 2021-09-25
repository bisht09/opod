import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.png";

import InstagramLogo from "../../assets/svgs/instagram-fill.svg";
import LinkedInLogo from "../../assets/svgs/linkedin-box-fill.svg";
import TwitterLogo from "../../assets/svgs/twitter.svg";
import WhatWeDoPurple from "../../assets/svgs/what-we-do-purple.svg";
import WhatWeDoWhite from "../../assets/svgs/what-we-do-white.svg";
import BrandPurple from "../../assets/svgs/brand-purple.svg";
import BrandWhite from "../../assets/svgs/brand-white.svg";

import SocialMediaDropDown from "../social-dropdown/SocialDropDown";

import { useHistory } from "react-router";
import { useReactPath } from "../../hooks/windowPathHook";

const Header = () => {
  const history = useHistory();
  const [leftItem, setLeftItem] = useState(false);
  const path = useReactPath();
  console.log(path);

  useEffect(() => {
    if (window.location.hash.includes("about")) setLeftItem(true);
    else setLeftItem(false);
  }, [path]);
  return (
    <div className="header">
      <div>
        <a href="http://www.opod.in/" className="logo-image">
          <img className="logo-image" src={Logo} alt="logo" />
        </a>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        {window.location.hash.includes("about") && (
          <div
            className={`home-page desktop ${
              leftItem ? "left-header-item" : ""
            }`}
            onClick={() => {
              history.push("/");
            }}
          >
            OPOD Demo
          </div>
        )}
        <div
          className={`what-we-do desktop ${
            !leftItem ? "left-header-item" : ""
          }`}
          // className="what-we-do"
          onClick={() => {
            history.push("/about");
          }}
        >
          WHAT WE DO?
        </div>
        <div className="brand-identity-design tooltip desktop">
          BRAND IDENTITY DESIGN
          <span className="tooltiptext">Coming Soon</span>
        </div>
        <div
          className={`header-logo  ${
            path === "#/about" ? "active-header" : ""
          }`}
          onClick={() => {
            history.push("/about");
          }}
        >
          <img src={path === "#/about" ? WhatWeDoPurple : WhatWeDoWhite}></img>
        </div>
        <div
          className={`header-logo tooltip ${
            path === "#/brand-identity" ? "active-header" : ""
          }`}
        >
          <img
            src={path === "#/brand-identity" ? BrandPurple : BrandWhite}
          ></img>
          <span className="tooltiptext">Coming Soon</span>
        </div>
        <SocialMediaDropDown />

        <div className={`social-media desktop`}>
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
            <a href="https://twitter.com/AudioOpod">
              <img
                height={24}
                src={TwitterLogo}
                style={{ padding: "1px" }}
                alt="facebook"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
