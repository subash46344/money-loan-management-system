import React from "react";
import { Link } from "react-router-dom";
import about1 from "./../../Assets/Images/about1.jpg";
import aboutus1 from "./../../Assets/Images/aboutus1234.jpg";
import phonebanner from "./../../Assets/Images/aboutus-phone.jpg";
import ceo1 from "./../../Assets/Images/ceo1.jpg";
import ceo2 from "./../../Assets/Images/ceo2.jpg";
import aboutbanner from "./../../Assets/Images/about-banner.jpg";
import CallIcon from "./../../Assets/Images/icons/call.png";
import quations from "./../../Assets/Images/icons/quote.png";
import sign from "./../../Assets/Images/icons/check.png";
import Guarantee from "./../../Assets/Images/icons/guarantee.png";
import Speed from "./../../Assets/Images/icons/speedometer.png";
import Reliability from "./../../Assets/Images/icons/reliability.png";
import Experience from "./../../Assets/Images/icons/best-customer-experience.png";
import play from "./../../Assets/Images/icons/play.png";

function AboutUs() {
  const backgroundImageUrl = `url(${aboutbanner})`;

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
                <h2>About Us</h2>
                <ul>
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>About</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="about-image">
                <img src={about1} alt="image" />
                <img src={aboutus1} alt="image" />
                <div className="experience">
                  <h4>25</h4>
                  <p>We have more than years of experience</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-content">
                <span>Welcome To Money Crest.</span>
                <h3>
                  We have been working very efficiently with loan and funding.
                </h3>
                <p>
                  We reformed this company with the name of Money Crest in 2021.
                  We are the great minds with innovative ideas who took this
                  decision to bridge the gap between people and financial
                  institutions
                </p>
                <strong>In business, we focus on 3 things.</strong>
                <ul className="about-list">
                  <li>
                    <i>
                      <img src={sign} alt="sign" width="5%" height="5%" />
                    </i>
                    Low Interest Rates
                  </li>
                  <li>
                    <i>
                      <img src={sign} alt="sign" width="5%" height="5%" />
                    </i>
                    Maximum Loan Amount
                  </li>
                  <li>
                    <i>
                      <img src={sign} alt="sign" width="5%" height="5%" />
                    </i>
                    Best Service
                  </li>
                </ul>
                <div className="about-btn">
                  <a href="#" className="default-btn">
                    View more
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="choose-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="choose-title">
                <span>Transparent process</span>
                <h2>Why people choose us</h2>
                <p>To have a strong hold Also B2C segment.</p>
              </div>
              <div className="choose-image">
                <img src={phonebanner} alt="image" />
                <a href="#" className="video-btn popup-youtube">
                  <i>
                    <img src={play} alt="play" width="100%" height="100%" />
                  </i>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="process-item bg-top1">
                    <div className="icon">
                      <i>
                        <img
                          src={Guarantee}
                          alt="Guarantee"
                          width="70%"
                          height="70%"
                        />
                      </i>
                    </div>
                    <h3>Guarantee</h3>
                    <p>
                      We target to be no. 1 DSA company in Delhi NCR, with the
                      best business model for our stakeholders.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="process-item bg-top2">
                    <div className="icon">
                      <i>
                        <img src={Speed} alt="Speed" width="70%" height="70%" />
                      </i>
                    </div>
                    <h3>Speed</h3>
                    <p>
                      Money Crests deal wishes to be the most promising Sales
                      and Marketing company.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="process-item bg-top3">
                    <div className="icon">
                      <i>
                        <img
                          src={Reliability}
                          alt="Reliability"
                          width="70%"
                          height="70%"
                        />
                      </i>
                    </div>
                    <h3>Reliability</h3>

                    <p>
                      To serve, protect and promote the effectiveness of member
                      companies and the individual entities they represent.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="process-item bg-top4">
                    <div className="icon">
                      <i>
                        <img
                          src={Experience}
                          alt="Experience"
                          width="70%"
                          height="70%"
                        />
                      </i>
                    </div>
                    <h3>Experience</h3>
                    <p>
                      To ensure that the marketing by member companies of
                      products and the direct sales opportunity is conducted
                      with the highest level of business ethics and services to
                      consumers in society.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="clients-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Clients words</span>
            <h2>What our clients say</h2>
            <p>
              We are really thankful to Money Crest for our easy car loan
              process. We wish them lot of success. Executives have built a
              great relation and helped in each and every step. Thank you so
              much team!!{" "}
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="clients-item">
                <div className="info">
                  <img src={ceo1} alt="image" />
                  <h4>Salman Cowen</h4>
                  <span>Founder</span>
                </div>
                <p>
                  Thank you, Money Crest for helping me in my Personal loan at
                  the time I needed the most. It was really a simple and a quick
                  process without any hassle. Kudos to you guys!
                </p>
                <div className="icon">
                  <i
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  >
                    <img
                      src={quations}
                      alt="quations"
                      width="10%"
                      height="10%"
                    />
                  </i>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="clients-item">
                <div className="info">
                  <img src={ceo2} alt="image" />
                  <h4>Minashi Singal</h4>
                  <span>CEO</span>
                </div>
                <p>
                  I am glad that I came in contact with your team for my loan
                  against property. You guys made it so easy for me. The best
                  part was I did not have to go anywhere for this process and
                  everything was done in an ease. I am a happy customer.
                </p>
                <div className="icon">
                  <i
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  >
                    <img
                      src={quations}
                      alt="quations"
                      width="10%"
                      height="10%"
                    />
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="solution-area bg-top">
        <div className="container">
          <div className="solution-item">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="content">
                  <h3>
                    We are here to help your business Call to discuss your
                    Solution
                  </h3>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="solution-info">
                  <i>
                    <img
                      src={CallIcon}
                      alt="CallIcon"
                      width="70%"
                      height="70%"
                    />
                  </i>
                  <h3>
                    <a href="tel:8766305079">8766305079</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
