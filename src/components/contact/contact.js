import React, { useState } from "react";
import WhiteBorder from "../../assets/images/whatWeDo/white_circle_outline.svg";
import mascot from "../../assets/images/mascot.gif";
import "./contact.css";
import Modal from "react-modal";
Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "auto",
    width: "360px",
    color: "black",
    boxShadow: " 0 0 5px 5px rgba(0, 0, 0, 0.164)",
    textAlign: "justify-all",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    lineHeight: "24px",
    borderColor: "black",
  },
};
const Contact = () => {
  const [form, updateForm] = useState({
    reason: "question",
    email: "",
    name: "",
    number: "",
  });
  const [emailSent, toggleEmailStatus] = useState(true);
  const [sending, emailSending] = useState(false);

  const handleChange = (event) => {
    console.log(form);
    updateForm({ ...form, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    emailSending(true);
    event.preventDefault();
    await sendEmail();
  };

  const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  };
  const sendEmail = async () => {
    if (emailSent) return;
    const email = form.email;
    if (!validateEmail(email)) {
      alert("Enter a valid email");
      return;
    }

    const url = `https://script.google.com/macros/s/AKfycbwdhU_Z3_dBy3YgWiJHAgWP_4gTq8LGek6XTuHWIUnNkB-2geKzCbdWKr3ByFxRoXqstw/exec?sheetName=Contact%20Us&email=${form.email}&name=${form.name}&reason=${form.reason}&number=${form.number}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        updateForm({
          reason: "question",
          email: "",
          name: "",
          number: "",
        });
        emailSending(false);
        toggleEmailStatus(true);
      })
      .catch((err) => {
        alert("Sorry! We are facing some issue. Please try again later");
        emailSending(false);
      });
  };

  const closeModal = () => {
    toggleEmailStatus(!emailSent);
    updateForm({
      reason: "question",
      email: "",
      name: "",
      number: "",
    });
  };
  return (
    <div style={{ lineHeight: "22px" }}>
      <div className="top-header">
        <div className="header-text">
          CONTACT <span>US</span>
        </div>
        <div className="border-image-container">
          <img src={WhiteBorder} alt="border" />
        </div>
      </div>

      <div className="what-we-do-content">
        <div className="section1">
          <div className="description1">
            <form onSubmit={handleSubmit}>
              <label className="required" for="reason">
                I'm contacting you because
              </label>
              <select
                name="reason"
                value={form["reason"]}
                onChange={handleChange}
                required={true}
              >
                <option value="offer">I have an offer for you</option>
                <option value="question">
                  I have a question about a product
                </option>
                <option value="request">
                  I'd like to request an interview
                </option>
                <option value="advertise">
                  I’d like to advertise on your platform
                </option>
              </select>

              <label className="required" for="name">
                My full name
              </label>
              <input
                name="name"
                value={form["name"]}
                onChange={handleChange}
                type="name"
                required={true}
                placeholder="John Doe"
              ></input>

              <label className="required" for="email">
                You can reply me at
              </label>
              <input
                name="email"
                value={form["email"]}
                onChange={handleChange}
                type="email"
                required={true}
                placeholder="welovelistening@abcd.in"
              ></input>

              <label for="number">My contact number is</label>
              <input
                name="number"
                value={form["number"]}
                onChange={handleChange}
                type="tel"
                pattern="[0-9]{10}"
                placeholder="9994443332"
              ></input>
              <p style={{ marginBottom: "12px" }}>Example: 9994443332</p>

              <button type="submit" disabled={sending}>
                SUBMIT
              </button>
            </form>
            <div className="striped-border"></div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={emailSent}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={true}
      >
        <div className="modal-box">
          <div>
            <img src={mascot} alt="mascot" height="100px" width="100px" />
          </div>
          <span>
            Thank you for your response. We will get back to you soon. In the
            meanwhile, check us out on{" "}
            <a
              style={{ display: "inline-block", color: "#6d44bc" }}
              target="_blank"
              href="https://www.instagram.com/hello_opod/"
            >
              Instagram
            </a>{" "}
            or write directly to us at{" "}
            <a
              style={{ display: "inline-block", color: "#6d44bc" }}
              href="mailto:hello@opod.in"
            >
              hello@opod.in
            </a>
          </span>
        </div>
      </Modal>
    </div>
  );
};

export default Contact;
