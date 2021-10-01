/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import "./main.css";
import mascot from "../assets/images/mascot.gif";
import Android from "../assets/svgs/android-fill.svg";
import Apple from "../assets/svgs/apple-fill.svg";
import Unmute from "../assets/svgs/volume-up-line.svg";
import Mute from "../assets/svgs/volume-mute-line.svg";
import Player from "react-player";
import R from "../assets/svgs/r.svg";
import P from "../assets/svgs/p.svg";
import GO from "../assets/svgs/go.svg";
import Tick from "../assets/images/Tick.png";
import TickShadow from "../assets/svgs/tick_shadow.svg";
import Reward from "../assets/images/reward-animation.gif";
import RewardAnimation from "../assets/reward-animation.mp4";
import Watermark from "../assets/svgs/WATERMARK.svg";
import Notch from "../assets/svgs/notch.png";
import TickAnimation from "../assets/images/TICK.gif";
import { Component } from "react";
import { withRouter } from "react-router";
import Reactga from "react-ga";

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

class Main extends Component {
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
      played: 0,
      seeking: false,
      email: "",
      emailSent: false,
      fade: true,
      sending: false,
      podCoins: 0,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        fetched: true,
        podCoins: Math.floor(Math.random() * 100),
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

  changePod = () => {
    if (this.state.videoNumber + 1 === 4) {
      // this.setState({ videoNumber : 4, played: 0 });
      // setTimeout( () => {
      //   this.setState({videoNumber : 5, played: 0})
      // }, 1000);
      return;
    }

    if (this.state.videoNumber + 1 < 4) {
      this.setState({
        [`videoPlay${this.state.videoNumber + 1}`]: true,
        videoNumber: this.state.videoNumber + 1,
      });

      Reactga.event({
        category: "Video",
        action: `User skipped pod ${this.state.videoNumber}`,
      });
      return;
    }

    Reactga.event({
      category: "Video",
      action: `User saw the reward screen`,
    });

    this.setState({ videoNumber: 5, fade: false });
  };

  handlePodChange = (videoNumber) => {
    Reactga.event({
      category: "Video",
      action: `User watched completely pod ${this.state.videoNumber}`,
    });

    this.setState({
      [`videoPlay${videoNumber}`]: true,
      videoNumber: videoNumber,
      [`videoMute${videoNumber}`]: false,
    });
  };

  handleSeekMouseDown = (e) => {
    this.setState({ seeking: true });
  };

  handleSeekChange = (e) => {
    this.setState({ played: parseFloat(e.target.value) });
  };

  handleSeekMouseUp = (e) => {
    this.setState({ seeking: false });
    const num = this.state.videoNumber > 3 ? 3 : this.state.videoNumber;
    this[`videoRef${num}`].seekTo(parseFloat(e.target.value));
  };

  handlePodProgress = (event) => {
    if (!this.state.seeking) {
      this.setState({ played: event.played });
    }
  };

  handleInput = (event) => {
    this.setState({ email: event.target.value });
  };

  validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  };

  sendEmail = async () => {
    if (this.state.emailSent) return;
    const email = this.state.email;
    if (!this.validateEmail(email)) {
      alert("Enter a valid email");
      return;
    }
    this.setState({ sending: true });
    const url = `https://script.google.com/macros/s/AKfycbyLQR57IujZMJobanWRdTBJVhbblX8epuzZrv8hJNcmARt9QoKsb0mbges8kKFA_qZHjA/exec?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        this.setState({ emailSent: true, sending: false, email: "" })
      )
      .catch((err) =>
        alert("Sorry! We are facing some issue. Please try again later")
      );
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
                      className={`react-player fade`}
                      width="200"
                      height="340"
                      ref={(ref) => {
                        this.videoRef1 = ref;
                      }}
                      url="https://opdemediallp.s3.ap-south-1.amazonaws.com/f3011870-6b13-4522-8062-231280e5333b.mp4"
                      controls={false}
                      playing={this.state.videoPlay1}
                      muted={this.state.mute}
                      onProgress={this.handlePodProgress}
                      onEnded={() => {
                        this.handlePodChange(2);
                      }}
                    />
                  ) : this.state.videoNumber == 2 ? (
                    <>
                      <Player
                        id="2"
                        className={`react-player fade`}
                        width="200"
                        height="340"
                        ref={(ref) => {
                          this.videoRef2 = ref;
                        }}
                        url="https://opdemediallp.s3.ap-south-1.amazonaws.com/ba71877c-f09e-4c79-919c-19b7ad5f43e1.mp4"
                        onEnded={() => {
                          this.handlePodChange(3);
                        }}
                        controls={false}
                        onProgress={this.handlePodProgress}
                        playing={this.state.videoPlay2}
                        muted={this.state.mute}
                      />
                    </>
                  ) : this.state.videoNumber === 3 ||
                    this.state.videoNumber === 4 ? (
                    <>
                      <>
                        <Player
                          id="3"
                          className={`react-player fade`}
                          width="200"
                          height="340"
                          ref={(ref) => {
                            this.videoRef3 = ref;
                          }}
                          url="https://opdemediallp.s3.ap-south-1.amazonaws.com/a4ac7ce2-8cca-4761-8d6e-cbf21f1864d2.mp4"
                          controls={false}
                          playing={
                            this.state.videoNumber == 3 && this.state.videoPlay3
                          }
                          muted={this.state.mute}
                          onProgress={this.handlePodProgress}
                          onEnded={() => {
                            this.state.videoNumber == 3 &&
                              this.setState({
                                videoNumber: 4,
                                videoPlay1: false,
                                videoPlay2: false,
                                videoPlay3: false,
                              });

                            Reactga.event({
                              category: "Video",
                              action: "User saw the pod 3 completely",
                            });
                          }}
                        />
                      </>
                      {this.state.videoNumber === 4 && (
                        <>
                          <div className="r-button-overlay">
                            <img
                              style={{
                                height: "100%",
                                width: "100%",
                                animation: "SlowFade 1s linear ease-in-out",
                              }}
                              src={TickAnimation}
                            ></img>
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="phone-text">
                        <span
                          style={{
                            color: "rgb(109, 68, 188)",
                            lineHeight: "16px",
                            letterSpacing: "-1px",
                            fontFamily: "Cairo-SemiBold",
                            fontSize: "14px",
                          }}
                        >
                          {" "}
                          CONGRATULATIONS! <br /> YOU HAVE EARNED
                        </span>
                        <span
                          style={{
                            color: "6d44bc",
                          }}
                        ></span>
                        <div className="center" style={{ padding: "4px" }}>
                          <span
                            style={{
                              height: "32px",
                              width: "32px",
                              marginRight: "4px",
                            }}
                          >
                            <img
                              style={{
                                height: "100%",
                                width: "100%",
                              }}
                              src={P}
                            ></img>
                          </span>
                          <span
                            style={{
                              color: "#25b254",
                              fontFamily: "Cairo-Bold",
                            }}
                          >
                            {this.state.podCoins} POD COINS
                          </span>
                        </div>
                        <div
                          style={{
                            height: "78px",
                            width: "78px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: "8px",
                          }}
                        >
                          {/* <img
                        src={Reward}
                        alt="congratulations"
                        style={{height: '200%', width: '200%', objectFit:'cover', zIndex: '-1'}}
                      /> */}
                          <video
                            src={RewardAnimation}
                            autoPlay={true}
                            loop={true}
                            controls={false}
                            style={{
                              height: "200%",
                              width: "200%",
                              objectFit: "cover",
                              zIndex: "-1",
                            }}
                          ></video>
                        </div>
                      </div>
                      <div className="lower-section">
                        <p className="message">
                          You can actually earn for all your listening. We are
                          in development. Please give your email for audio
                          Newsletter & updates
                        </p>
                        <div className="message purple-box ">
                          <p>Promise we will not spam You !</p>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <input
                              className="email-input"
                              type="email"
                              placeholder="welovelistening@abcd.in"
                              value={this.state.email}
                              onChange={this.handleInput}
                              name="email"
                            ></input>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                ) : (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      height: "-webkit-fill-available",
                    }}
                  >
                    <div className="phone-text">
                      FETCHING PODS TILL
                      <div className="phone-text-bold">{timeNow()}</div>
                    </div>
                    <div className="phone-radar-area">
                      <div className="phone-central-circle" />
                      <div className="phone-radar-inner-ring ring-1 radar-inner" />
                      <div className="phone-radar-inner-ring ring-2 radar-inner" />
                      <div className="phone-radar-inner-ring ring-3 radar-inner" />
                      {/* <div className="phone-radar-inner-ring ring-4" /> */}
                    </div>
                  </div>
                )}
              </div>
              <div
                onClick={() => {
                  this.setState({
                    videoMute1: !this.state.videoMute1,
                    videoMute2: !this.state.videoMute2,
                    videoMute3: !this.state.videoMute3,
                    mute: !this.state.mute,
                  });
                }}
                className={`volume-button `}
              >
                <div className="phone-radar-area volume-button-logo">
                  <div className="phone-central-circle volume-button-logo">
                    <img
                      height={24}
                      src={this.state.mute === true ? Unmute : Mute}
                    />
                  </div>
                  <div
                    className={`phone-radar-inner-ring ring-1   ${
                      this.state.videoNumber >= 1 && this.state.videoNumber < 4
                        ? "volume-ring"
                        : ""
                    }`}
                  />
                  <div
                    className={`phone-radar-inner-ring ring-2   ${
                      this.state.videoNumber >= 1 && this.state.videoNumber < 4
                        ? "volume-ring"
                        : ""
                    }`}
                  />
                  <div
                    className={`phone-radar-inner-ring ring-3   ${
                      this.state.videoNumber >= 1 && this.state.videoNumber < 4
                        ? "volume-ring"
                        : ""
                    }`}
                  />
                  {/* <div className="phone-radar-inner-ring ring-4" /> */}
                </div>
                {/* <div
                  className={`volume-button-logo ${
                    this.state.videoNumber >= 1 && this.state.videoNumber < 4
                      ? "ripple-effect"
                      : ""
                  }`}
                >
                  <img
                    height={24}
                    src={this.state.mute === true ? Unmute : Mute}
                  />
                </div> */}

                <p className="volume-button-text">
                  {this.state.mute === true ? "TAP TO HEAR" : "TAP TO MUTE"}
                </p>
              </div>
              <input
                type="range"
                min={0}
                max={0.999999}
                step="any"
                value={this.state.played}
                onMouseDown={this.handleSeekMouseDown}
                onPointerDown={this.handleSeekMouseDown}
                onChange={this.handleSeekChange}
                onMouseUp={this.handleSeekMouseUp}
                onPointerUp={this.handleSeekMouseUp}
                className={`seek`}
                disabled={
                  this.state.videoNumber >= 4 || !this.state.fetched
                    ? true
                    : false
                }
              />
              {this.state.videoNumber >= 4 ? (
                <div
                  onClick={() => {
                    this.state.fetched && this.changePod();
                  }}
                >
                  {this.state.videoNumber > 4 ? (
                    <div className="go-container" onClick={this.sendEmail}>
                      <div className="r-button">
                        <img
                          className={
                            this.state.sending ? "disable-r-button" : ""
                          }
                          style={{
                            height: "100%",
                            width: "100%",
                          }}
                          src={GO}
                        ></img>
                      </div>
                      {this.state.emailSent && (
                        <img
                          style={{
                            height: "52px",
                            width: "52px",
                          }}
                          src={TickAnimation}
                        ></img>
                      )}
                    </div>
                  ) : (
                    <div className="r-button">
                      <img
                        className={
                          this.state.videoNumber > 4 ? "disable-r-button" : ""
                        }
                        style={{
                          height: "100%",
                          width: "100%",
                        }}
                        src={R}
                      ></img>
                    </div>
                  )}

                  <p className="volume-button-text">
                    {this.state.videoNumber > 4 ? "" : "TAP FOR REWARDS"}
                  </p>
                </div>
              ) : (
                <>
                  <div
                    onClick={() => {
                      this.state.fetched && this.changePod();
                    }}
                    style={{
                      backgroundColor: this.state.fetched
                        ? this.state.videoNumber !== 3
                          ? "#EAB611"
                          : "#5e5e5e"
                        : "#5e5e5e",
                      borderColor: this.state.fetched
                        ? this.state.videoNumber !== 3
                          ? "#6D44BC"
                          : "#b4b4b4"
                        : "#b4b4b4",
                      cursor: "pointer",
                    }}
                    className="bottom-button"
                  ></div>
                  {<p className="volume-button-text">TAP TO CHANGE</p>}
                </>
              )}
            </div>

            <div className="phone-right-container route-buttons">
              <div
                className={`what-we-do`}
                // className="what-we-do"
                onClick={() => {
                  this.props.history.push("/about");
                }}
              >
                WHAT WE DO?
              </div>
              <div
                className="brand-identity-design"
                onClick={() => this.props.history.push("/design")}
              >
                OPOD BRANDING
              </div>
            </div>
          </div>

          <div className="watermark">
            <img src={Watermark} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Main);
