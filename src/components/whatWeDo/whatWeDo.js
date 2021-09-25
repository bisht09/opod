import React from "react";
import WhiteBorder from "../../assets/images/whatWeDo/white_circle_outline.svg";

import handsFree from "../../assets/images/whatWeDo/handsFree.svg";
import organizedPods from "../../assets/images/whatWeDo/organizedPods.svg";
import periodic from "../../assets/images/whatWeDo/periodic.svg";
import perspective from "../../assets/images/whatWeDo/perspective.svg";
import rewards from "../../assets/images/whatWeDo/rewards.svg";
import ReactPlayer from "react-player";
import purpleCircle from "../../assets/images/whatWeDo/purple.svg";
import yellowCircle from "../../assets/images/whatWeDo/yellow.svg";
import MobileGif from "../../assets/images/mobile.gif";
import RightArrow from "../../assets/svgs/right-arrow.svg";

const WhatWeDo = () => {
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
        {/* <div className="content-image-container">
          <img src={purpleCircle} alt="border" />
        </div>
        <div className="content-image-container">
          <img src={purpleCircle} alt="border" />
        </div>
        <div className="content-image-container">
          <img src={purpleCircle} alt="border" />
        </div>
        <div className="content-image-container">
          <img src={purpleCircle} alt="border" />
        </div> */}
        {/* <div className="footer-image-container">
          <img
            style={{
              height: "100%",
              width: "200%",
            }}
            src={yellowCircle}
            alt="border"
          />
        </div> */}
        <div className="section1">
          <div className="info1">
            OPOD Audio is a social audio app that rewards its listeners for{" "}
            listening to 30-secs audio pods.
          </div>
          <div className="description1">
            It is the only news app that rewards its listeners with POD coins,
            based on news consumption volumes. POD coins can be redeemed against
            the marketplace, thereby justifying our value proposition -
            <span
              style={{
                fontFamily: "Cairo-Bold",
              }}
            >
              the more you listen, the more you earn.
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
            <div className="top">
              <div className="card">
                <div className="card-image">
                  <img src={handsFree} alt="img" height="150px" width="150px" />
                </div>
                <div className="description1 card-caption">
                  Hands-free <br /> (allows multitasking)
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
                  Organised Pods <br /> (follows chronology)
                </div>
              </div>
            </div>

            <div className="bottom">
              {/* <div
              className="bottom-"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              > */}
              <div className="card">
                <div className="card-image">
                  <img src={periodic} alt="img" height="150px" width="150px" />
                </div>
                <div className="description1 card-caption">
                  Periodic notifications <br />
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
                  Perspective based <br />
                  (thoroughly researched facts)
                </div>
              </div>
              {/* </div> */}
              <div className="card">
                <div className="card-image">
                  <img src={rewards} alt="img" height="150px" width="150px" />
                </div>
                <div className="description1 card-caption">
                  Earn Rewards <br /> (listen more, earn more)
                </div>
              </div>
            </div>
          </div>
          <div className="info1 title">
            So just sit back, plug in your headphones and enjoy ‘FACTainment’ -
            customized to your mood and routine.
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
            <div className="top videos">
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
                      border: "5px solid #6d44bc",
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
                      border: "5px solid #6d44bc",
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
      </div>
    </div>
  );
};

export default WhatWeDo;
