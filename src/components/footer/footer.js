import React from "react";
import { useHistory } from "react-router";

const Footer = () => {
  const history = useHistory();
  return (
    <>
      {/* <div className="divider"></div> */}
      <div className="footer center">
        <div className="footer-details">
          <div className="company-details">
            OPOD MEDIA LLP. MUMBAI <br />
            email: hello@opod.in
          </div>

          <div className="footer-buttons">
            <div
              className="contact-now"
              onClick={() => history.push("/contact-us")}
            >
              <span>CONTACT US</span>
            </div>
            <div
              className="privacy-policy"
              onClick={() => history.push("/privacy-policy")}
            >
              <span>PRIVACY POLICY</span>
            </div>
            <div className="careers" onClick={() => history.push("/careers")}>
              <span>CAREERS</span>
            </div>
            <div className="terms-and-conditions tooltip">
              <span>
                TERMS {"&"} CONDITIONS{" "}
                <span className="tooltiptext">Coming Soon</span>
              </span>
            </div>
          </div>
        </div>
        <p className="copyright">
          <span>&#169;</span> OPOD MEDIA 2021
        </p>
      </div>
    </>
  );
};

export default Footer;
