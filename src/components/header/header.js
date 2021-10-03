import React, { useEffect, useState } from "react";
import Logo from "../../assets/svgs/logo.svg";

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
import { Redirect, useRouteMatch } from "react-router-dom";
const Header = () => {
  const history = useHistory();
  const [leftItem, setLeftItem] = useState(false);
  const about = useRouteMatch("/about") || { path: "" };
  const design = useRouteMatch("/design") || { path: "" };
  const demo = useRouteMatch("/demo") || { path: "" };

  useEffect(() => {
    if (window.location.hash.includes("about")) setLeftItem(true);
    else setLeftItem(false);
  }, [history.location.pathname]);

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
        {demo.path !== "/demo" && (
          <div
            className={`home-page desktop `}
            onClick={() => {
              history.push("/");
            }}
          >
            OPOD DEMO
          </div>
        )}

        {about.path !== "/about" && (
          <div
            className={`what-we-do desktop `}
            // className="what-we-do"
            onClick={() => history.push("/about")}
          >
            WHAT WE DO?
          </div>
        )}

        {design.path !== "/design" && (
          <div
            className="brand-identity-design desktop"
            onClick={() => history.push("/design")}
          >
            OPOD DESIGN
          </div>
        )}
        <div
          className={`header-logo  ${
            about.path === "/about" ? "active-header" : ""
          }`}
          onClick={() => {
            history.push("/about");
          }}
        >
          <img
            src={about.path === "/about" ? WhatWeDoPurple : WhatWeDoWhite}
          ></img>
        </div>
        <div
          className={`header-logo ${
            design.path === "/design" ? "active-header" : ""
          }`}
          onClick={() => {
            history.push("/design");
          }}
        >
          <img src={design.path === "/design" ? BrandPurple : BrandWhite}></img>
          {/* <span className="tooltiptext">Coming Soon</span> */}
        </div>
        <SocialMediaDropDown />

        <div className={`social-media desktop`}>
          <div className="instagram" style={{ marginTop: 0 }}>
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
