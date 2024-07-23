import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

function LoanForm() {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    // Perform validation here
    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const phone = form.current.user_mobile_no.value.trim();

    let isValid = true;

    // Name validation
    if (!name || !/^[a-zA-Z\s]+$/.test(name)) {
      setNameError("Please enter a valid name (only letters and spaces).");
      isValid = false;
    } else {
      setNameError("");
    }

    // Email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Phone number validation
    if (!phone || !/^\d{10}$/.test(phone)) {
      setPhoneError("Please enter a valid 10-digit phone number.");
      isValid = false;
    } else {
      setPhoneError("");
    }

    if (!isValid) {
      setMessage("");
      return;
    }

    emailjs
      .sendForm(
        "service_y96yx2o",
        "template_9ewcnr5",
        form.current,
        "mFAYx3hb_A-uh0XGM"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("We will contact you as soon as possible.");
        },
        (error) => {
          console.log(error.text);
          setMessage("There was an error. Please try again later.");
        }
      );
    form.current.reset();
  };

  return (
    <>
      <div className="col-lg-4 col-md-12">
        <aside className="widget-area" id="secondary">
          <section className="widget widget_categories">
            <h3 className="widget-title">Categories</h3>
            <ul>
              <li className="nav-item">
                <Link to={"/HomeLoan"} className="nav-link">
                  Home Loan
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/PersonalLoan"} className="nav-link">
                  Personal Loan
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/BusinessLoan"} className="nav-link">
                  Business Loan
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/CarLoan"} className="nav-link">
                  Car Loan
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/Insurance"} className="nav-link">
                  Insurance
                </Link>
              </li>
            </ul>
          </section>
          <section className="widget widget_hours">
            <h3 className="widget-title">Opening Hours</h3>
            <ul>
              <li>
                Mon – Fri
                <span>9:00 AM - 10:00 PM</span>
              </li>
              <li>
                Sat & Sun
                <span>CLOSED</span>
              </li>
            </ul>
          </section>
          <section className="widget widget_appointment">
            <h3 className="widget-title">Book an Appointment</h3>
            <h2
              style={{ color: "green", fontSize: "20px", fontWeight: "bold" }}
            >
              {message}
            </h2>
            <form
              ref={form}
              onSubmit={sendEmail}
              method="post"
              id="contactForm"
            >
              <div className="form-group">
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  className="form-control"
                  required
                  data-error="Please enter your name"
                  placeholder="Name"
                />
                <div
                  className="help-block with-errors"
                  style={{ color: "red" }}
                >
                  {nameError}
                </div>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  className="form-control"
                  required
                  data-error="Please enter your email"
                  placeholder="Email"
                />
                <div
                  className="help-block with-errors"
                  style={{ color: "red" }}
                >
                  {emailError}
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="user_mobile_no"
                  id="phone_number"
                  required
                  data-error="Please enter your number"
                  className="form-control"
                  placeholder="Phone"
                />
                <div
                  className="help-block with-errors"
                  style={{ color: "red" }}
                >
                  {phoneError}
                </div>
              </div>
              <button type="submit" className="default-btn">
                Send Message
                <span></span>
              </button>
              <div id="msgSubmit" className="h3 text-center hidden"></div>
              {/* {message && <div className="message">{message}</div>} */}
              <div className="clearfix"></div>
            </form>
          </section>
        </aside>
      </div>
    </>
  );
}

export default LoanForm;
