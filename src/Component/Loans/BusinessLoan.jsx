import React from "react";
import { Link } from "react-router-dom";
import LoanForm from "./LoanForm";
import banner from "./../../Assets/Images/business_banner.jpg";
import bgimage from "./../../Assets/Images/business_img.jpg";
import sign from "./../../Assets/Images/icons/check.png";
import quick from "./../../Assets/Images/icons/review.png";
import Easyloan from "./../../Assets/Images/icons/repayment.png";
import Transparency from "./../../Assets/Images/icons/transparency.png";

function BusinessLoan() {
  const backgroundImageUrl = `url(${banner})`;

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
                <h2>Business Loan</h2>
                <ul>
                  <li>
                    {" "}
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>Business Loan</li>
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
                  <img src={bgimage} alt="image" />
                </div>
                <div className="content">
                  <h3>About business loan and how does it work</h3>
                  <p>
                    If you are looking for the flexibility in term of processing
                    & documentation then Capital First is the place for you. The
                    highest loan amount offered by the bank is 75 lakh which is
                    enormously huge when it comes to other banks & financial
                    institutions. No guarantor is required when you are applying
                    for the business loan at capital first.
                  </p>
                  <p className="text">
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis. At vero eos
                    et accusam et justo duo dolores et ea rebum.
                  </p>
                </div>
                <div className="services-details-features">
                  <div className="content">
                    <h3>Features of business loan</h3>
                    <p>
                      While companies that are looking to expand often already
                      have enough money to become larger, taking out a loan
                      allows them to maintain their operating cash flow, making
                      it easier for them to cover any unexpected expenses.
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
                  <h3>You deserve a better business loan</h3>
                  <p>
                    Need minimum 3 years business stability and annual turnover
                    of ₹20 Lakhs to be eligible. Get Unsecured Business Loan
                    without any security or collateral with minimal
                    documentation.
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
                      The minimum age of the applicant should be of 21 years.
                      The maximum age of the applicant should not exceed to 60
                      years.
                    </p>
                    <ul className="list">
                      <li>
                        <i>
                          <img src={sign} alt="sign" width="2%" height="2%" />
                        </i>
                        The business should be making profit for the last 1 year
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
                        The current business should be at least 48 months old
                      </li>
                      <li>
                        <i>
                          <img src={sign} alt="sign" width="2%" height="2%" />
                        </i>
                        No defaults in the last 24 months.
                      </li>
                      <li>
                        <i>
                          <img src={sign} alt="sign" width="2%" height="2%" />
                        </i>
                        CIBIL: Required (680-900)
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

export default BusinessLoan;
