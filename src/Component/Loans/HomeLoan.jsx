import React from "react";
import { Link } from "react-router-dom";
import LoanForm from "./LoanForm";
import home_img from "./../../Assets/Images/home-img.jpg";
import homeloanbanner from "./../../Assets/Images/home_loan_banner.jpg";
import sign from "./../../Assets/Images/icons/check.png";
import quick from "./../../Assets/Images/icons/review.png";
import Easyloan from "./../../Assets/Images/icons/repayment.png";
import Transparency from "./../../Assets/Images/icons/transparency.png";

function HomeLoan() {
  const backgroundImageUrl = `url(${homeloanbanner})`;

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
                <h2>Home Loan</h2>
                <ul>
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>Home Loan</li>
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
                  <img src={home_img} alt="image" />
                </div>
                <div className="content">
                  <h3>About Home Loan and how does it work</h3>
                  <p>
                    When applying for a home loan, most lenders expect you to
                    pay several fees and charges in addition to the home loan
                    interest rate. So, before you apply, speak to your lender
                    about what these charges are. Typically, you have to pay a
                    processing fee, foreclosure charge, prepayment charges, EMI
                    bounce penalty, and more.
                  </p>
                  <p>
                    As per the scheme formulated by National Housing Bank (NHB),
                    the maximum period of the loan period is 15 years. The
                    residual life of the property should be at least 20 years.
                    Where the borrower lives longer than 15 years, periodic
                    payments will not be made by lender.
                  </p>
                </div>
                <div className="services-details-features">
                  <div className="content">
                    <h3>Features of Home Loan</h3>
                    <p className="text">
                      Low interest rates: Low home loan interest rates make home
                      loans very attractive to potential buyers. Also, it is
                      easy to get these loans as by their nature, they are
                      approved in lieu of a collateral or asset. Flexible
                      tenure: Repaying your home loan is easier with flexible
                      tenures offered by various banks.
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
                  <h3>You deserve a better Home Loan</h3>
                  <p>
                    Before you make a pre-payment, you should know that the
                    pre-payment amount must be at least three times your
                    existing home loan EMI.
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
                      A salary of Rs. 20,000 generally falls in the category of
                      a low-income borrower group. So, an instant personal loan
                      app with a maximum approval amount of 1.5 Lakhs can be
                      availed by the borrower with a starting salary of Rs.
                      20,000.
                    </p>
                    <ul className="list">
                      <li>
                        <i>
                          <img src={sign} alt="sign" width="2%" height="2%" />
                        </i>
                        You should be a resident of India.
                      </li>
                      <li>
                        <i>
                          <img src={sign} alt="sign" width="2%" height="2%" />
                        </i>
                        You should be between 21 and 60 years of age.
                      </li>
                      <li>
                        <i>
                          <img src={sign} alt="sign" width="2%" height="2%" />
                        </i>
                        You should be a salaried individual with a work
                        experience of 3 years or more.
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

export default HomeLoan;
