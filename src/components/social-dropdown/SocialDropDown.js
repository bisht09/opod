import React, { useState } from "react";
import SocialArrow from "../../assets/svgs/social-arrow.svg";
import InstagramLogo from "../../assets/svgs/instagram-fill.svg";
import LinkedInLogo from "../../assets/svgs/linkedin-box-fill.svg";
import TwitterLogo from "../../assets/svgs/twitter.svg";
import "./index.css";

const SocialDropDown = () => {
  const [active, toggelState] = useState(false);
  return (
    <div className="dropdown-container mobile">
      <div className={`arrow-container `} onClick={() => toggelState(!active)}>
        <img src={SocialArrow} className={`${active ? "rotate" : ""}`}></img>
        <div
          className={`social-media-container`}
          style={{ display: active ? "flex" : "none" }}
        >
          <div className={`social-media`}>
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
    </div>
  );
};

export default SocialDropDown;
