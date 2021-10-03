import React from "react";
import WhiteBorder from "../../assets/images/whatWeDo/white_circle_outline.svg";

import handsFree from "../../assets/images/whatWeDo/handsFree.svg";
import organizedPods from "../../assets/images/whatWeDo/organizedPods.svg";
import periodic from "../../assets/images/whatWeDo/periodic.svg";
import perspective from "../../assets/images/whatWeDo/perspective.svg";
import rewards from "../../assets/images/whatWeDo/rewards.svg";
import hyperLocal from "../../assets/svgs/hyper-local.svg";
import ReactPlayer from "react-player";
import purpleCircle from "../../assets/images/whatWeDo/purple.svg";
import yellowCircle from "../../assets/images/whatWeDo/yellow.svg";
import MobileGif from "../../assets/images/what-we-do-mobile.gif";
import RightArrow from "../../assets/svgs/right-arrow.svg";

import { useHistory } from "react-router";

const WhatWeDo = () => {
  const history = useHistory();
  return (
    <div style={{ lineHeight: "22px" }}>
      <div className="top-header">
        <div className="header-text">
          WHAT OPOD <span>DOES</span>?
        </div>
        <div className="border-image-container">
          <img src={WhiteBorder} alt="border" />
        </div>
      </div>

      <div className="what-we-do-content">
        <div className="section1">
          <div className="info1">
            OPOD Audio is a social audio app that rewards its listeners for{" "}
            listening to{" "}
            <span>
              <b>30-secs audio pods</b>
            </span>
            .
          </div>
          <div className="description1">
            It is the only news app that rewards its listeners with POD coins,
            based on news consumption volumes. POD coins can be redeemed against
            the marketplace, thereby justifying our value proposition,
            <span
              style={{
                fontFamily: "Cairo-Bold",
                whiteSpace: "pre",
              }}
            >
              {" "}
              more you listen, more you earn.
            </span>
            <div className="striped-border"></div>
          </div>
        </div>

        <div className="section1">
          <div className="content-image-container left">
            <img src={purpleCircle} alt="border" />
          </div>
          <div className="info1 caps">WE BRING YOU THE EASE OF EXPERIENCE</div>
          <div className="description-images">
            <div className="card-container">
              <div className="card">
                <div className="card-image">
                  <img src={handsFree} alt="img" height="150px" width="150px" />
                </div>
                <div className="description1 card-caption">
                  <b>Hands-free</b> <br /> (allows multitasking)
                </div>
              </div>

              <div className="card">
                <div className="card-image">
                  <img
                    src={organizedPods}
                    alt="img"
                    height="150px"
                    width="150px"
                  />
                </div>
                <div className="description1 card-caption">
                  <b>Organised Pods</b> <br /> (follows chronology)
                </div>
              </div>

              <div className="card">
                <div className="card-image">
                  <img src={periodic} alt="img" height="150px" width="150px" />
                </div>
                <div className="description1 card-caption">
                  <b>Periodic notifications</b> <br />
                  (no constant bugging)
                </div>
              </div>
              <div className="card">
                <div className="card-image">
                  <img
                    src={perspective}
                    alt="img"
                    height="150px"
                    width="150px"
                  />
                </div>
                <div className="description1 card-caption">
                  <b>Perspective based</b> <br />
                  (thoroughly researched facts)
                </div>
              </div>
              {/* </div> */}
              <div className="card">
                <div className="card-image">
                  <img src={rewards} alt="img" height="150px" width="150px" />
                </div>
                <div className="description1 card-caption">
                  <b>Earn Rewards</b> <br /> (listen more, earn more)
                </div>
              </div>
              <div className="card">
                <div className="card-image">
                  <img
                    src={hyperLocal}
                    alt="img"
                    height="150px"
                    width="150px"
                  />
                </div>
                <div className="description1 card-caption">
                  <b>Hyperlocal Content</b> <br /> (Customized regional content)
                </div>
              </div>
            </div>

            {/* <div className="top">
             
             
            </div> */}
          </div>
          <div className="info1 title">
            So just sit back, plug in your headphones and enjoy{" "}
            <b>‘FACTainment’</b> - customized to your mood and routine.
          </div>
          <div className="striped-border"></div>
        </div>

        <div className="section1">
          <div className="info1">But What does OPOD mean?</div>
          <div className="description1">
            OPOD empowers you with perspective and context to form your own
            opinions. Hence the O in OPOD stands for Opinion and POD represents
            an audio snippet, much like a podcast.
          </div>
          <div className="striped-border"></div>
        </div>

        <div className="section1">
          <div className="content-image-container right">
            <img src={purpleCircle} alt="border" />
          </div>
          <div className="feature-box-container">
            <div className="feature-box">
              <p>Fetch</p>
            </div>
            <div className="feature-box-right-arrow">
              <img src={RightArrow}></img>
            </div>
            <div className="feature-box">
              <p>List</p>
            </div>
            <div className="feature-box-right-arrow">
              <img src={RightArrow}></img>
            </div>
            <div className="feature-box">
              <p>Reward</p>
            </div>
            <div className="feature-box-right-arrow">
              <img src={RightArrow}></img>
            </div>
            <div className="feature-box">
              <p>Redeem</p>
            </div>
          </div>
          <div className="mobile-gif">
            <img src={MobileGif}></img>
          </div>
          <div className="striped-border"></div>
        </div>

        <div className="section1">
          <div className="content-image-container left">
            <img src={purpleCircle} alt="border" />
          </div>
          <div className="info1">
            Know the process of OPOD working and pipeline here:
          </div>
          <div className="video-tags description-images">
            <div className="video-container videos">
              <div className="video-player">
                <div className="video">
                  <ReactPlayer
                    url=" https://www.youtube.com/watch?v=1NjEC0SLbas"
                    width="100%"
                    playing={false}
                    playIcon={
                      <>
                        <button>Play</button>
                        Click
                      </>
                    }
                    style={{
                      borderRadius: "16px",
                      border: "2px solid #6d44bc",
                      overflow: "hidden",
                    }}

                    // light="https://i.stack.imgur.com/zw9Iz.png"
                  />
                </div>
                <div className="description1">IN ENGLISH</div>
              </div>
              <div className="video-player">
                <div className="video">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=QjHQwfkGZKc"
                    playing={false}
                    width="100%"
                    playIcon={
                      <>
                        <button>Play</button>
                        Click
                      </>
                    }
                    style={{
                      borderRadius: "16px",
                      border: "2px solid #6d44bc",
                      overflow: "hidden",
                    }}

                    // light="https://i.stack.imgur.com/zw9Iz.png"
                  />
                </div>
                <div className="description1">हिंदी में जाने </div>
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
              history.push("/demo");
            }}
          >
            OPOD DEMO
          </div>
          <div
            className="brand-identity-design"
            onClick={() => history.push("/design")}
          >
            OPOD DESIGN
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
