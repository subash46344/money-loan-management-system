import React from "react";
import { Link } from "react-router-dom";
import LoanForm from "./LoanForm";
import PersonalBanner from "./../../Assets/Images/personalLoan-banner.jpg";
import PersonalImg from "./../../Assets/Images/personalLoan-img.jpg";
import sign from "./../../Assets/Images/icons/check.png";
import quick from "./../../Assets/Images/icons/review.png";
import Easyloan from "./../../Assets/Images/icons/repayment.png";
import Transparency from "./../../Assets/Images/icons/transparency.png";

function PersonalLoan() {
  const backgroundImageUrl = `url(${PersonalBanner})`;

  const bannerStyle = {
    backgroundImage: backgroundImageUrl,
  };
  return (
    <>
      <div className="page-title-area item-bg-4" style={bannerStyle}>
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                <h2>Personal Loan</h2>
                <ul>
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>Personal Loan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="services-details-area ptb-100">
        <div className="container">
          <div className="row">
            {/* Loan Form */}
            <LoanForm />

            <div className="col-lg-8 col-md-12">
              <div className="services-details-desc">
                <div className="image">
                  <img src={PersonalImg} alt="image" />
                </div>
                <div className="content">
                  <h3>About personal loan and how does it work</h3>
                  <p>
                    Getting a personal loan is a good idea if you have a stable
                    income and a good credit score because you will then be
                    offered a low rate of interest. On the contrary, with an
                    unstable job and a low credit score, the interest rate
                    offered to you will be comparatively higher.
                  </p>
                  <p className="text">
                    Personal loans are installment loans; if you're approved,
                    you'll receive a lump sum of cash that you repay in fixed
                    amounts on a monthly basis until the loan term expires. To
                    determine whether you qualify for a personal loan, a lender
                    will check your credit and income and gauge your ability to
                    afford the loan.
                  </p>
                </div>
                <div className="services-details-features">
                  <div className="content">
                    <h3>Features of personal loan</h3>
                    <p>
                      A personal loan allows you the freedom to use the money in
                      any way you want. ... A personal loan is an 'unsecured
                      loan', meaning you are not required to provide any
                      security to the lender in the form of cash, shares or any
                      other assets.
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="features-item">
                        <div className="icon">
                          <i>
                            <img
                              src={quick}
                              alt="quick"
                              width="70%"
                              height="70%"
                            />
                          </i>
                        </div>
                        <h3>
                          Quick <br /> approval
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="features-item">
                        <div className="icon">
                          <i>
                            <img
                              src={Easyloan}
                              alt="Easyloan"
                              width="70%"
                              height="70%"
                            />
                          </i>
                        </div>
                        <h3>
                          Easy loan <br /> Repayment
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="features-item">
                        <div className="icon">
                          <i>
                            <img
                              src={Transparency}
                              alt="Transparency"
                              width="70%"
                              height="70%"
                            />
                          </i>
                        </div>
                        <h3>
                          100% <br /> Transparency
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="services-details-others">
                  <h3>You deserve a better personal loan</h3>
                  <p>
                    Here are common reasons to take out a personal loan:
                    Consolidate high-interest debt: Taking a personal loan is
                    one way to consolidate high-interest debt, such as credit
                    card debt, into a single payment. Ideally, the loan has a
                    lower interest rate than your existing debt and allows you
                    to pay it off faster.
                  </p>
                </div>
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
                      Your loan is funded with Best service: We assure
                      incredible services from our end.
                    </p>
                  </div>
                  <div className="deserve-btn">
                    <a href="#" className="default-btn">
                      Apply now
                      <span></span>
                    </a>
                  </div>
                </div>
                <div className="services-details-list">
                  <div className="content">
                    <h3>Eligibility Criteria</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida.
                    </p>
                    <ul className="list">
                      <li>
                        <i>
                          <img src={sign} alt="sign" width="2%" height="2%" />
                        </i>
                        Monthly income of ₹20,000 per month
                      </li>
                      <li>
                        <i>
                          <img src={sign} alt="sign" width="2%" height="2%" />
                        </i>
                        Age: 21-60 years old
                      </li>
                      <li>
                        <i>
                          <img src={sign} alt="sign" width="2%" height="2%" />
                        </i>
                        CIBIL: Required (680-900)
                      </li>
                      <li>
                        <i>
                          <img src={sign} alt="sign" width="2%" height="2%" />
                        </i>
                        No defaults in the last 24 months.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PersonalLoan;
