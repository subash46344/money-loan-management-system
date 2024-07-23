import React from "react";
import { Link } from "react-router-dom";
import contactBanner from "./../../Assets/Images/contact-banner.jpeg";
import working from "./../../Assets/Images/icons/clock.png";
import phone from "./../../Assets/Images/icons/phone-call.png";
import address from "./../../Assets/Images/icons/location.png";
import email from "./../../Assets/Images/icons/gmail.png";
import contactUs from "./../../Assets/Images/contact-us.jpg";

function ContactUs() {
  const backgroundImageUrl = `url(${contactBanner})`;

  const bannerStyle = {
    backgroundImage: backgroundImageUrl,
  };
  return (
    <>
      <div className="page-title-area item-bg-1" style={bannerStyle}>
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                <h2>Contact</h2>
                <ul>
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="contact-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Let's discuss</span>
            <h2>Whatever question you have, please feel free to ask.</h2>
          </div>
          <div className="row">
            <div
              className="col-lg-8"
              style={{ height: "600px", paddingRight: "100px" }}
            >
              {/* <div className="contact-form">
                <div className="title">
                  <h3>Write Us</h3>
                </div>

                <form
                  action="sendcontactemail.php"
                  method="post"
                  id="contactForm"
                >
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          required
                          data-error="Please enter your name"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Email Address</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          required
                          data-error="Please enter your email"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Phone</label>
                        <input
                          type="number"
                          name="phone"
                          id="phone"
                          className="form-control"
                          required
                          data-error="Please enter your phone"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Subject</label>
                        <input
                          type="text"
                          name="msg_subject"
                          id="msg_subject"
                          className="form-control"
                          required
                          data-error="Please enter your subject"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Message</label>
                        <textarea
                          name="message"
                          className="form-control"
                          id="message"
                          cols="30"
                          rows="5"
                          required
                          data-error="Write your message"
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <button type="submit" className="default-btn">
                        Send message
                        <span></span>
                      </button>
                      <div
                        id="msgSubmit"
                        className="h3 text-center hidden"
                      ></div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </form>
              </div> */}
              <img
                src={contactUs}
                alt=""
                srcset=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="col-lg-4">
              <div className="contact-side-box">
                <div className="title">
                  <h3>Contact Money Crest Deal</h3>
                </div>
                <div className="info-box">
                  <div className="icon">
                    <i>
                      <img
                        src={working}
                        alt="working"
                        width="10%"
                        height="10%"
                      />
                    </i>
                  </div>
                  <h4>Working Hours</h4>
                  <ul className="list">
                    <li>
                      Mon – Fri
                      <span>09:00 AM - 10:00 PM</span>
                    </li>
                    <li>
                      Sat & Sun
                      <span>CLOSED</span>
                    </li>
                  </ul>
                </div>
                <div className="info-box">
                  <div className="icon">
                    <i>
                      <img src={phone} alt="phone" width="10%" height="10%" />
                    </i>
                  </div>
                  <h4>Address</h4>
                  <span> A-20 4th Floor Laxmi Nagar N.D DELHI -110092</span>
                </div>
                <div className="info-box">
                  <div className="icon">
                    <i>
                      <img
                        src={address}
                        alt="address"
                        width="10%"
                        height="10%"
                      />
                    </i>
                  </div>
                  <h4>Phone</h4>
                  <span>
                    <a href="tel:8766305079">8766305079</a>
                  </span>
                </div>
                <div className="info-box">
                  <div className="icon">
                    <i>
                      <img src={email} alt="email" width="10%" height="10%" />
                    </i>
                  </div>
                  <h4>Email</h4>
                  <span>
                    <a href="mail:info@moneycrest.com">info@moneycrest.com</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="map">
        <div className="container-fluid">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.6860358732156!2d77.27895287528932!3d28.63917047566114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfca8cf54303b%3A0xa5e85d50ff4ab9da!2sSHRI%20RAM!5e0!3m2!1sen!2sin!4v1705742269381!5m2!1sen!2sin"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
