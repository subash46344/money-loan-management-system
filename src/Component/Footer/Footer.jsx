import React from "react";
import { Link } from "react-router-dom";
import whatsappicon from "./../../Assets/Images/WhatsApp.png";
import logo from "./../../Assets/Images/logo-12.png";
import Twitter from "./../../Assets/Images/icons/twitter.png";
import facebook from "./../../Assets/Images/icons/facebook.png";
import instgram from "./../../Assets/Images/icons/instagram.png";
import Linkedin from "./../../Assets/Images/icons/linkedin.png";
import location from "./../../Assets/Images/icons/location.png";
import email from "./../../Assets/Images/icons/gmail.png";
import phone from "./../../Assets/Images/icons/phone-call.png";

function Footer() {
  // Top redirct
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling animation
    });
  };
  return (
    <>
      <section className="footer-area bg-top pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <div
                  className="logo"
                  style={{ width: "70%", marginRight: "20px" }}
                >
                  <a href="#">
                    <img
                      src={logo}
                      alt="fast credit deal"
                      style={{
                        width: "100%",
                        height: "150px",
                      }}
                    />
                  </a>
                </div>
                {/* <p>
                  Attaining financial freedom means getting the power to achieve
                  your envisioned financial goals and make decisions without any
                  financial constraints.
                </p> */}
                <a
                  href="https://wa.me/8766305079?text=Hello%20there,%20I%20am%20interested%20in%20knowing%20more%20about%20the%20Loan!"
                  target="_blank"
                >
                  <img
                    src={whatsappicon}
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </a>
                <ul className="social">
                  <li>
                    <b>Follow us:</b>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i>
                        <img
                          src={Twitter}
                          alt="Twitter"
                          width="40px"
                          height="40px"
                        />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i>
                        <img
                          src={facebook}
                          alt="facebook"
                          width="40px"
                          height="40px"
                        />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i>
                        <img
                          src={instgram}
                          alt="instgram"
                          width="40px"
                          height="40px"
                        />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i>
                        <img
                          src={Linkedin}
                          alt="Linkedin"
                          width="40px"
                          height="40px"
                        />
                      </i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Quick Links</h3>
                <ul className="quick-links">
                  <li>
                    <Link to={"/AboutUs"} onClick={scrollToTop}>
                      About
                    </Link>
                  </li>
                  {/* <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms of Service</a>
                  </li> */}
                  <li>
                    <Link to={"/ContactUs"} onClick={scrollToTop}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Our Services</h3>
                <ul className="quick-links">
                  <li>
                    <Link to={"/HomeLoan"} onClick={scrollToTop}>
                      Home Loan
                    </Link>
                  </li>
                  <li>
                    <Link to={"/PersonalLoan"} onClick={scrollToTop}>
                      Personal Loan
                    </Link>
                  </li>

                  <li>
                    <Link to={"/BusinessLoan"} onClick={scrollToTop}>
                      Business Loan
                    </Link>
                  </li>
                  <li>
                    <Link to={"/CarLoan"} onClick={scrollToTop}>
                      Car Loan
                    </Link>
                  </li>
                  <li>
                    <Link to={"/Insurance"} onClick={scrollToTop}>
                      Insurance
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Contact Us</h3>
                <div className="info-contact">
                  <i>
                    <img
                      src={location}
                      alt="location"
                      width="30px"
                      height="30px"
                    />
                  </i>
                  <span>A-20 4th Floor Laxmi Nagar N.D DELHI -110092</span>
                </div>
                <div className="info-contact">
                  <i>
                    <img src={email} alt="email" width="30px" height="30px" />
                  </i>
                  <span>
                    <a href="mail:info@moneycrest.com">info@moneycrest.com</a>
                  </span>
                </div>
                <div className="info-contact">
                  <i>
                    <img src={phone} alt="phone" width="30px" height="30px" />
                  </i>
                  <span>
                    <a href="tel:8766305079">8766305079</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="copy-right-area">
        <div className="container">
          <div className="copy-right-content">
            <p style={{ color: "#fff" }}>
              ©2024. | Designed By : Money Crest Private Limited. | All rights
              reserved.
              {/* <a
                href="#"
                target="_blank"
                alt="For Contact Web Development 9891789359"
                title="For Contact Web Development 9891789359"
              > */}
              {/* Arun Kumar */}
              {/* </a> */}
            </p>
          </div>
        </div>
      </div>

      <div className="go-top">
        <i className="bx bx-chevron-up"></i>
      </div>
    </>
  );
}

export default Footer;
