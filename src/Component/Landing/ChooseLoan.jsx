import React from "react";
import homeimg1 from "./../../Assets/Images/home-img1.jpg";
import CallIcon from "./../../Assets/Images/icons/call.png";
function ChooseLoan() {
  return (
    <>
      <section className="deserve-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Funding circles</span>
            <h2>You deserve a better business loan</h2>
            <p>
              Over lakhs of people have experienced the convenience of personal
              loans through Money Crest..{" "}
            </p>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="deserve-item">
                <h3>Why to Choose Us.</h3>
                <div className="deserve-content">
                  <span>1</span>
                  <h4>Low Interest Rates</h4>
                  <p>
                    Low interest rates: We have partnered with banks that
                    provides attractive interest rates.
                  </p>
                </div>
                <div className="deserve-content">
                  <span>2</span>
                  <h4>Maximum Tenure</h4>
                  <p>
                    Maximum tenure: You can avail maximum tenure at per banks
                    discretion.
                  </p>
                </div>
                <div className="deserve-content">
                  <span>3</span>
                  <h4>Maximum Loan Amount</h4>
                  <p>
                    Maximum loan amount: We try to provide maximum loan amount
                    to match your needs.
                  </p>
                </div>
                <div className="deserve-content">
                  <span>4</span>
                  <h4>Your loan is funded</h4>
                  <p>
                    Your loan is funded with Best service: We assure incredible
                    services from our end.
                  </p>
                </div>
                <div className="deserve-btn">
                  <a href="#" className="default-btn">
                    Apply now
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="company-wrap">
                <img src={homeimg1} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="solution-area">
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

export default ChooseLoan;
