import React from "react";
import { Link } from "react-router-dom";
import Arrow1 from "./../../Assets/Images/works-shape.png";
import Arrow2 from "./../../Assets/Images/works-shape2.png";
import funding from "./../../Assets/Images/funding-banner.jpg";
import fundingimg from "./../../Assets/Images/funding-img1.jpg";
import fundingimg2 from "./../../Assets/Images/funding-img2.jpg";

function Funding() {
  const backgroundImageUrl = `url(${funding})`;

  const bannerStyle = {
    backgroundImage: backgroundImageUrl,
  };
  return (
    <>
      <div class="page-title-area item-bg-6" style={bannerStyle}>
        <div class="d-table">
          <div class="d-table-cell">
            <div class="container">
              <div class="page-title-content">
                <h2>Funding</h2>
                <ul>
                  <li>
                    {" "}
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>Funding</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="funding-area ptb-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="funding-image">
                <img src={fundingimg} alt="image" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="funding-content">
                <span>About Funding</span>
                <h3>
                  A fast approach to business financing. Business funding made
                  fast and simple.
                </h3>
                <p>
                  Money Crest Deal is partnered with tops banks to give you best
                  loan facilities at attractive interest rates. We bridge the
                  gap between you and our partner banks to provide you one stop
                  solution for all your loan needs. Money Crest deal does not
                  let you wander in search of banks. We let you compare and
                  choose the best for yourself.
                </p>
                <strong>We Reimagined Fundraising.</strong>
                <ul class="funding-list">
                  <li>
                    <span>(1)</span>
                    <b>Fast</b> Get a term sheet in 20 min
                  </li>
                  <li>
                    <span>(2)</span>
                    <b>Flexible</b> Our data driven investments range from 1K to
                    1M+
                  </li>
                  <li>
                    <span>(3)</span>
                    <b>Fair</b> No equity or personal guarantee
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="choose-area pt-100 pb-70">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="choose-title">
                <span>Transparent process</span>
                <h2>Why people choose us</h2>
                <p>To have a strong hold Also B2C segment.</p>
              </div>
              <div class="choose-image">
                <img src={fundingimg2} alt="image" />
                <a
                  href="https://www.youtube.com/watch?v=2_4l-EBNtl8"
                  class="video-btn popup-youtube"
                >
                  <i class="flaticon-play-button"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="process-item bg-top1">
                    <div class="icon">
                      <i class="flaticon-guarantee"></i>
                    </div>
                    <h3>Guarantee</h3>
                    <p>
                      We target to be no. 1 DSA company in Delhi NCR, with the
                      best business model for our stakeholders.
                    </p>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="process-item bg-top2">
                    <div class="icon">
                      <i class="flaticon-speed"></i>
                    </div>
                    <h3>Speed</h3>
                    <p>
                      Money Crests deal wishes to be the most promising Sales
                      and Marketing company.
                    </p>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="process-item bg-top3">
                    <div class="icon">
                      <i class="flaticon-reliability"></i>
                    </div>
                    <h3>Reliability</h3>

                    <p>
                      To serve, protect and promote the effectiveness of member
                      companies and the individual entities they represent.
                    </p>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="process-item bg-top4">
                    <div class="icon">
                      <i class="flaticon-user-experience"></i>
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

      <section class="works-area pt-100 pb-70">
        <div class="container">
          <div class="section-title">
            <span>How it works</span>
            <h2>The funds have helped us move our business forward</h2>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="works-item">
                <div class="icon">
                  <i class="flaticon-user"></i>
                </div>
                <h3>
                  Connect Your <br /> Accounts
                </h3>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="works-item">
                <div class="icon">
                  <i class="flaticon-reciever"></i>
                </div>
                <h3>
                  Receive Your <br /> Funding
                </h3>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="works-item">
                <div class="icon">
                  <i class="flaticon-growth"></i>
                </div>
                <h3>
                  Grow Your <br /> Business
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="works-shape">
          <div class="shape">
            <img src={Arrow1} alt="image" />
          </div>
          <div class="shape2">
            <img src={Arrow2} alt="image" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Funding;
