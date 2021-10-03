import React from "react";
import OpodDesign from "../../assets/svgs/opod-design.svg";
import OpodHalf from "../../assets/svgs/opod-half.svg";
import FontText from "../../assets/svgs/font-text.svg";
import Mascot from "../../assets/images/mascot.gif";
import AppleStore from "../../assets/svgs/apple-store.svg";
import PlayStore from "../../assets/svgs/play-store.svg";
import Mobile from "../../assets/images/mobile.gif";
import BottomBanner from "../../assets/images/bottom-banner.png";

import { useHistory } from "react-router";
const Brand = () => {
  const history = useHistory();
  return (
    <div style={{ lineHeight: "22px" }}>
      <div className="top-header design-header">
        <div className="header-text">
          OPOD <span>DESIGN</span>
        </div>
        <div className="border-image-container header-design-overlay">
          <img src={OpodHalf} alt="border" />
        </div>
      </div>
      <div className="design-content">
        <div className="design-section">
          <div className="info1">
            THE LOGO/INSIGNIA OF OPOD IS CONSTRUCTED USING PRIMITIVE GEOMETRICAL
            SHAPE OF A CIRCLE
          </div>
          <div
            className="description1"
            style={{ color: "black", textAlign: "center" }}
          >
            <span style={{ fontFamily: "Cairo-Bold" }}>‘O’</span> stands for an
            opinion/opinions and the term{" "}
            <span style={{ fontFamily: "Cairo-Bold" }}>‘POD’</span> is sensed as
            a container. The insignia is constructed using the four circles.
            They come together to compartmentalize the info into different
            genres and routines, thus forming the brand identity of{" "}
            <span style={{ fontFamily: "Cairo-Bold" }}>OPOD</span>.
          </div>
        </div>

        <div className="design-section">
          <div className="design-two-column ">
            <div
              style={{
                flex: 2,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={OpodDesign}></img>
            </div>
            <div className="info1" style={{ flex: 1, minWidth: "40%" }}>
              <ul
                style={{
                  paddingLeft: "40px",
                  borderLeft: "1px solid #6d44bc",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",

                  flexDirection: "column",
                }}
              >
                <li>Strictly Geometrical</li>
                <li>Strong & Balanced</li>
                <li>Signifies Completeness</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="design-section">
          <div className="design-two-column reverse-column">
            <div
              className="info1"
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <ul
                style={{
                  paddingRight: "40px",
                  borderRight: "1px solid #6d44bc",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",

                  flexDirection: "column",
                }}
              >
                <li>Simple & Modern</li>
                <li>Condensed & Clear</li>
                <li>Best for mobile reading</li>
              </ul>
            </div>
            <div
              className="font-section"
              style={{
                flex: 2,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={FontText}></img>
            </div>
          </div>
        </div>

        <div className="design-section">
          <div className="design-two-column color-code-container">
            <div style={{ flex: 2 }}>
              <div className="color-code">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#eab611",
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                    }}
                  ></div>
                  <p>#EAB611</p>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#6d44bc",
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                    }}
                  ></div>
                  <p>#6d44BC</p>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "50%",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#6d44bc",
                        height: "100px",
                        width: "100px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "50%",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#eab611",
                          height: "66.66px",
                          width: "66.66px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "50%",
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: "#6d44bc",
                            height: "33.33px",
                            width: "33.33px",
                            borderRadius: "50%",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <p style={{ color: "white" }}>{"s"}</p>
                </div>
              </div>
            </div>
            <div className="info1" style={{ flex: 1, minWidth: "40%" }}>
              <ul
                style={{
                  paddingLeft: "40px",
                  borderLeft: "1px solid #6d44bc",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",

                  flexDirection: "column",
                }}
              >
                <li style={{ marginBottom: "24px" }}>
                  <b>Yellow</b> is the most luminous in a color spectrum. It's
                  the color of happiness, attention and optimism, of
                  enlightenment and creativity.
                </li>
                <li style={{ textTransform: "none" }}>
                  <b>Purple</b> combines the calm stability of blue and the
                  fierce energy of red. The color purple is often associated
                  with royalty, nobility, luxury, power, and ambition.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="design-section"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              height: "220px",
              width: "220px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginBottom: "16px",
            }}
          >
            <img
              src={Mascot}
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            ></img>
            <p
              style={{
                fontFamily: "Cairo-SemiBold",
                color: "#6d44bc",
                fontSize: "22px",
                borderTop: "1px solid #6d44bc",
              }}
            >
              Meet <b>OPODUS</b>
            </p>
          </div>
          <div className="info1" style={{ textAlign: "center" }}>
            <p style={{ color: "black" }}>
              The octopus character <b>OPODUS</b>, is an integral part of the
              brand’s presence. May be hard to believe, but this cute animal has
              a deep symbolism. On the one hand, it represents the constant
              desire to have multiple hands to keep up with our{" "}
              <b>fast-moving lifestyle</b> and the current style of{" "}
              <b>multitasking</b>. On the other hand, it conveys the idea of
              diving into the deep and <b>exploring multiple perspectives</b>,
              <span> just like the product</span>.
            </p>
          </div>
          <div className="info1" style={{ fontFamily: "Cairo-SemiBold" }}>
            This friendly octopus is a symbolism of playfulness while conveying
            the feeling that <b>OPOD</b> is easy and fun to use. His overall
            look, with headphones plugged-in and multi-tasking hands represent
            today’s India - lending its ears to what matters.
          </div>
        </div>

        {/* <div className="design-section">
          <div className="design-two-column reverse-column">
            <div
              className="font-section"
              style={{
                flex: 1,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={FontText}></img>
            </div>
          </div>
        </div> */}

        <div className="design-section" style={{ marginBottom: 0 }}>
          <div className="design-two-column mobile-playstore">
            <div
              className="design-mobile"
              style={{
                flex: 1,
              }}
            >
              <div style={{ width: "100%" }}>
                <img
                  src={Mobile}
                  style={{ width: "100%", height: "100%" }}
                ></img>
              </div>
            </div>
            <div
              className="info1"
              style={{
                flex: 2,
                minWidth: "40%",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <div>
                <ul
                  style={{
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    padding: "40px",
                    flexDirection: "column",
                  }}
                >
                  <li>Listen & Read</li>
                  <li>Audio Feedback</li>
                  <li>Hop with a POD button</li>
                  <li>Bulleted Information</li>
                  <li>Vernacular Support</li>
                </ul>
              </div>
              <div
                style={{
                  backgroundColor: "#eab611",
                  width: "100%",
                  padding: "60px 20px 20px 20px",
                }}
                className="coming-soon-container"
              >
                <p className="coming-soon-design">Coming Soon @</p>
                <div className="play-store">
                  <img src={AppleStore}></img>
                  <img src={PlayStore}></img>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="design-section route-buttons"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            flexDirection: "row",
            padding: "16px",
            marginBottom: "12px",
          }}
        >
          <div
            className={`what-we-do`}
            // className="what-we-do"
            onClick={() => {
              history.push("/about");
            }}
          >
            WHAT WE DO?
          </div>
          <div
            className="brand-identity-design"
            onClick={() => history.push("/demo")}
          >
            OPOD DEMO
          </div>
        </div>
      </div>

      <div
        className="bottom-banner"
        style={{ width: "100vw", overflow: "hidden" }}
      >
        <img
          src={BottomBanner}
          alt="bottom-banner"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        ></img>
        <p>
          <span style={{ fontFamily: "Cairo-Bold", fontSize: "55px" }}>
            OPOD
          </span>{" "}
          HAPPINESS
        </p>
      </div>
    </div>
  );
};

export default Brand;
