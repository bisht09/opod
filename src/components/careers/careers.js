import React from "react";
import WhiteBorder from "../../assets/images/whatWeDo/white_circle_outline.svg";
import LinkedInLogo from "../../assets/svgs/linkedin-box-fill.svg";
import EqualWork from "../../assets/svgs/equal-work.svg";

const Careers = () => {
  return (
    <div style={{ lineHeight: "22px" }}>
      <div className="top-header">
        <div className="header-text">
          OPOD <span>CAREERS</span>
        </div>
        <div className="border-image-container">
          <img src={WhiteBorder} alt="border" />
        </div>
      </div>

      <div className="what-we-do-content">
        <div className="section1">
          <div className="info1">
            OPOD is a vernacular social audio platform that incorporates the
            goodness of both worlds - audio and visual media. It is a team of
            talented, inspired, positive-minded and best in the industry design
            and content experts
          </div>
          <div className="description1">
            If you share our passion for bringing to our listeners innovative,
            perspective-based and context driven information, then <b>OPOD</b>{" "}
            is the place for you. <br />
            <br />
            If you share our desire to be part of our continued industry
            success, review our open positions and apply to the ones that match
            your understanding and career interests.
            <div className="striped-border"></div>
          </div>
        </div>

        <div className="section1">
          <div className="info1">
            You can submit your Cover Letter and (or) Resume to: <br />
            <a
              href="mailto:hello@opod.in"
              target="_blank"
              style={{
                textTransform: "none",
                fontFamily: "Cairo-SemiBold",
                color: "black",
                textDecoration: "none",
              }}
            >
              hello@opod.in
            </a>
          </div>
          <div
            className="description1"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="equal-opportunity">
              <div className="card-image">
                <img src={EqualWork} alt="img" height="150px" width="150px" />
              </div>
              <div>
                OPOD is an equal opportunity employer and makes employment
                decisions without regard to race, color, religion, sex, sexual
                orientation, gender identity, national origin, protected veteran
                status, disability status, or any other status protected by law.
              </div>
            </div>
            <div
              style={{
                fontFamily: "Cairo-SemiBold",
                textTransform: "uppercase",
              }}
            >
              Be updated with Job postings & information about us
            </div>
            <div className="linkedin">
              <a
                target="_blank"
                href="https://www.linkedin.com/company/opod-audio"
              >
                <img height={24} src={LinkedInLogo} alt="linkedIn" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
