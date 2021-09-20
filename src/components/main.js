/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import "./main.css";
import Logo from "../assets/images/logo.png";
import InstagramLogo from "../assets/svgs/instagram-fill.svg";
import FacebookLogo from "../assets/svgs/facebook-box-fill.svg";
import LinkedinLogo from "../assets/svgs/linkedin-box-fill.svg";
import mascot from "../assets/images/mascot.png";
import Android from "../assets/svgs/android-fill.svg";
import Apple from "../assets/svgs/apple-fill.svg";
import Unmute from "../assets/svgs/volume-up-line.svg";
import Mute from "../assets/svgs/volume-mute-line.svg";
import Player from "react-player";
import R from "../assets/images/R.png";
import Tick from "../assets/images/Tick.png";
import Phone from "../assets/images/PHONE.png";
import NewPhone from "../assets/svgs/phone_new.svg"
import Reward from "../assets/images/reward.png";
import Watermark from "../assets/svgs/WATERMARK.svg";
import Notch from "../assets/svgs/notch.png"
// import Video from "../assets/videos/Facebook Ads & Facebook Marketing MASTERY 2021 _ Coursenvy ®.ts";
import { Component } from "react";
import { useHistory } from "react-router";

const timeNow = () => {
  var time = new Date(Date.now());
  //   time = time.getTime();
  var hh = time.getHours();
  const suffix = hh >= 12 ? "PM" : "AM";
  if (hh == 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh -= 12;
  }
  var mm = time.getMinutes();
  if (String(mm).length === 1) {
    mm = "0" + mm;
  }
  return hh + ":" + mm + suffix;
};

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      mute: true,
      screen: 0,
      fetched: false,
      videoNumber: 1,
      videoPlay1: true,
      videoPlay2: false,
      videoPlay3: false,
      videoMute1: true,
      videoMute2: true,
      videoMute3: true,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        fetched: true,
      });
    }, 5000);
  }

  videoPlayer = () => {
    if (this.state.videoNumber === 1) {
      this.setState({
        // videoMute1: false,
        videoPlay1: !this.state.videoPlay1,
      });
    }
    if (this.state.videoNumber === 2) {
      this.setState({
        videoPlay2: !this.state.videoPlay2,
        // videoMute2: false,
      });
    }
    if (this.state.videoNumber === 2) {
      this.setState({
        videoPlay3: !this.state.videoPlay3,
        // videoMute3: false,
      });
    }
  };

  render() {
    return (
      <div
        ref={(ref) => {
          this.pageRef = ref;
        }}
        className="container"
      >
        <div className="mid-section">
          <div className="information">
            <span
              style={{
                fontFamily: "Cairo-Bold",
              }}
            >
              OPOD{" "}
            </span>{" "}
            IS A VERNACULAR SOCIAL MEDIA APP <br /> THAT BRINGS DAILY EVENTS IN
            A STREAM OF <br />
            <span
              style={{
                fontFamily: "Cairo-Bold",
              }}
            >
              {" "}
              30 SECS AUDIO PODS{" "}
            </span>
          </div>

          <div className="phone-section">
            <div className="phone-left-container">
              <div>
                <img src={mascot} alt="mascot" height="100px" width="100px" />
              </div>
              <div className="information">
                HEAR MORE TO EARN MORE <br /> Work in progress!{" "}
              </div>
              <div className="coming-soon">COMING SOON</div>
              <div className="platform-buttons">
                <div className="android-button">
                  <img height={24} src={Android} />
                </div>
                <div className="button-divider" />
                <div className="ios-button">
                  <img height={24} src={Apple} />
                </div>
              </div>
            </div>
            <div className="phone-center-container">
    
            <div className="phone">
              <img src={Notch} className="phone-notch"></img>
              {/* <div className="phone-svg">
              <img  src={NewPhone} />
              </div> */}

              {/* <div className="phone-camera" /> */}
              
              {this.state.fetched ? (
                this.state.videoNumber == 1 ? (
                  <Player
                    id="1"
                    className="react-player"
                    width="200"
                    height="340"
                    ref={(ref) => {
                      this.videoRef1 = ref;
                    }}
                    url="https://opodbucket.s3.ap-south-1.amazonaws.com/video1.mp4"
                    controls={false}
                    playing={this.state.videoPlay1}
                    muted={this.state.mute}
                    onEnded={() => {
                      this.setState({
                        videoPlay2: true,
                        videoNumber: 2,
                        videoMute2: false,
                      });
                    }}
                  />
                ) : this.state.videoNumber == 2 ? (
                  <>
                    <Player
                      id="2"
                      className="react-player"
                      width="200"
                      height="340"
                      ref={(ref) => {
                        this.videoRef2 = ref;
                      }}
                      url="https://opodbucket.s3.ap-south-1.amazonaws.com/video3.mp4"
                      onEnded={() => {
                        this.setState({
                          videoMute3: false,
                          videoPlay3: true,
                          videoNumber: 3,
                        });
                      }}
                      controls={false}
                      playing={this.state.videoPlay2}
                      muted={this.state.mute}
                    />
                  </>
                ) : this.state.videoNumber == 3 ||
                  this.state.videoNumber == 4 ? (
                  <>
                    <Player
                      id="3"
                      className="react-player"
                      width="200"
                      height="340"
                      ref={(ref) => {
                        this.videoRef3 = ref;
                      }}
                      url="https://opodbucket.s3.ap-south-1.amazonaws.com/video2.mp4"
                      controls={false}
                      playing={
                        this.state.videoNumber == 3 && this.state.videoPlay3
                      }
                      muted={this.state.mute}
                      onEnded={() => {
                        this.state.videoNumber == 3 &&
                          this.setState({
                            videoNumber: 4,
                            videoPlay1: false,
                            videoPlay2: false,
                            videoPlay3: false,
                          });
                      }}
                    />
                  </>
                ) : (
                  <>
                    <div className="phone-text">
                      <span
                        style={{
                          color: "#6d44bc",
                          lineHeight: "36px",
                        }}
                      >
                        {" "}
                        CONGRATULATIONS!
                      </span>
                      <span
                        style={{
                          color: "6d44bc",
                        }}
                      >
                        YOU HAVE EARNED
                      </span>
                      <span
                        style={{
                          color: "#25b254",
                        }}
                      >
                        23 POD COINS
                      </span>
                      <img
                        src={Reward}
                        alt="congratulations"
                        height="80px"
                        width="80px"
                      />
                    </div>
                    <div className="lower-section">
                      <div className="purple-box">
                        Sign Up for daily audio pods to redeem your coins
                      </div>
                      <div>APP COMING SOON</div>
                    </div>
                  </>
                )
              ) : (
                <>
                  <div className="phone-text">
                    FETCHING PODS TILL
                    <div className="phone-text-bold">{timeNow()}</div>
                  </div>
                  <div className="phone-radar-area">
                    <div className="phone-central-circle" />
                    <div className="phone-radar-inner-ring ring-1" />
                    <div className="phone-radar-inner-ring ring-2" />
                    <div className="phone-radar-inner-ring ring-3" />
                    {/* <div className="phone-radar-inner-ring ring-4" /> */}
                  </div>
                </>
              )}
            </div>
            <div
                onClick={() => {
                  this.setState({
                    videoMute1: !this.state.videoMute1,
                    videoMute2: !this.state.videoMute2,
                    videoMute3: !this.state.videoMute3,
                    mute: !this.state.mute
                  });
                }}
                className="volume-button"
              >
                <div className="volume-button-logo">
                <img
                  height={24}
                  src={this.state.mute === true ? Unmute : Mute}
                />
                </div>
                
                <p className="volume-button-text">{this.state.mute === true ? "TAP TO HEAR" : "TAP TO MUTE"}</p>
              </div>
              
            </div>

         

            <div className="phone-right-container">
             
            </div>
          </div>
          {this.state.videoNumber === 5 ? (
            <div className="r-button">
              <img
                style={{
                  height: '100%',
                  width: '100%',
                }}
                src={R}
              ></img>
            </div>
          ) : this.state.videoNumber === 4 ? (
            <div
              onClick={() => {
                this.setState({
                  videoNumber: 5,
                });
              }}
              className="r-button"
            >
              <img
                style={{
                  height: 48,
                  width: 48,
                }}
                src={Tick}
              ></img>
              <div class="r-button-text">Click to collect rewards</div>
            </div>
          ) : (
            <>
              <div
              onClick={() => {
                this.state.fetched && this.videoPlayer();
              }}
              style={{
                backgroundColor: this.state.fetched ? "#EAB611" : "#5e5e5e",
                borderColor: this.state.fetched ? "#6D44BC" : "#b4b4b4",
                cursor: "pointer",
              }}
              className="bottom-button"
            ></div>
            { this.state.fetched && <p className="volume-button-text">TAP TO CHANGE</p>}
            </>
          )}
          <div
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              height: 500,
              width: 500,
              overflow: "hidden",
              zIndex: -1,
            }}
          >
            <img
              style={{
                height: 1000,
                width: 1000,
              }}
              src={Watermark}
            />
          </div>
        </div>

        {/* {this.state.fetched ? (
          <div className="lower-mobile-section">
            <div className="lower-whole-container">
              <div className="phone">
                <div className="phone-camera" />
                <Player
                  className="react-player"
                  width="200"
                  height="340"
                  ref={(ref) => {
                    this.videoRef1 = ref;
                  }}
                  url="/Videos/video1.mp4"
                  controls={false}
                  playing={this.state.videoPlay1}
                  muted={this.state.videoMute1}
                  onEnded={() => {
                    this.setState({
                      videoMute2: false,
                      videoPlay2: true,
                    });
                  }}
                />
              </div>
              <div
                onClick={() => {
                  this.setState({
                    videoPlay1: !this.state.videoPlay1,
                  });
                }}
                style={{
                  backgroundColor: "#EAB611",
                  borderColor: "#6D44BC",
                  marginLeft: "auto",
                  marginRight: "auto",
                  cursor: "pointer",
                }}
                className="bottom-button"
              ></div>
              <div
                onClick={() => {
                  this.setState({
                    videoMute1: !this.state.videoMute1,
                  });
                }}
                className="volume-button-1"
              >
                <img height={24} src={this.state.videoMute1 ? Unmute : Mute} />
              </div>
            </div>
            <div
              style={{
                display: this.state.fetched ? "flex" : "none",
              }}
              className="lower-whole-container"
            >
              <div className="phone">
                <div className="phone-camera" />
                <Player
                  className="react-player"
                  width="200"
                  height="340"
                  ref={(ref) => {
                    this.videoRef2 = ref;
                  }}
                  url="/Videos/video1.mp4"
                  onEnded={() => {
                    this.setState({
                      videoMute3: false,
                      videoPlay3: true,
                    });
                  }}
                  controls={false}
                  playing={this.state.videoPlay2}
                  muted={this.state.videoMute2}
                />
              </div>
              <div
                onClick={() => {
                  this.setState({
                    videoPlay2: !this.state.videoPlay2,
                  });
                }}
                style={{
                  backgroundColor: "#EAB611",
                  borderColor: "#6D44BC",
                  marginLeft: "auto",
                  marginRight: "auto",
                  cursor: "pointer",
                }}
                className="bottom-button"
              ></div>
              <div
                onClick={() => {
                  this.setState({
                    videoMute2: !this.state.videoMute2,
                  });
                }}
                className="volume-button-1"
              >
                <img height={24} src={this.state.videoMute2 ? Unmute : Mute} />
              </div>
            </div>
            <div className="lower-whole-container">
              <div className="phone">
                <div className="phone-camera" />
                <Player
                  className="react-player"
                  width="200"
                  height="340"
                  ref={(ref) => {
                    this.videoRef3 = ref;
                  }}
                  url="/Videos/video1.mp4"
                  controls={false}
                  playing={this.state.videoPlay3}
                  muted={this.state.videoMute3}
                />
              </div>
              <div
                onClick={() => {
                  this.setState({
                    videoPlay3: !this.state.videoPlay3,
                  });
                }}
                style={{
                  backgroundColor: "#EAB611",
                  borderColor: "#6D44BC",
                  marginLeft: "auto",
                  marginRight: "auto",
                  cursor: "pointer",
                }}
                className="bottom-button"
              ></div>
              <div
                onClick={() => {
                  this.setState({
                    videoMute3: !this.state.videoMute3,
                  });
                }}
                className="volume-button-1"
              >
                <img height={24} src={this.state.videoMute3 ? Unmute : Mute} />
              </div>
            </div>
          </div>
        ) : null} */}

        {/* <div className="divider"></div> */}
        {/* <div className="footer">
          <div className="company-details">
            OPOD MEDIA LLP. MUMBAI <br />
            email: hello@opod.in
          </div>

          <div className="contact-now">CONTACT NOW!</div>
          <div className="privacy-policy">PRIVACY POLICY</div>
          <div className="careers">CAREERS</div>
          <div className="terms-and-conditions">TERMS {"&"} CONDITIONS</div>
        </div> */}
      </div>
    );
  }
}
