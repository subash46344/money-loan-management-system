import React from "react";
import { Link } from "react-router-dom";
import LoanForm from "./LoanForm";
import CarLoanImg from "./../../Assets/Images/carloan-img.jpg";
import CarBanner from "./../../Assets/Images/carLoan_banner.jpg";
import sign from "./../../Assets/Images/icons/check.png";
import quick from "./../../Assets/Images/icons/review.png";
import Easyloan from "./../../Assets/Images/icons/repayment.png";
import Transparency from "./../../Assets/Images/icons/transparency.png";

function CarLoan() {
  const backgroundImageUrl = `url(${CarBanner})`;

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
                <h2>Car Loan</h2>
                <ul>
                  <li>
                    {" "}
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>Car Loan</li>
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
                  <img src={CarLoanImg} alt="car loan" />
                </div>
                <div className="content">
                  <h3>About Car loan and how does it work</h3>
                  <p>
                    In such type of loans, the buyer can avail the loan amount
                    either before or after purchasing the car, however it is up
                    to the bank's discretion. The car is hypothecated as
                    security and the user needs to pay the EMIs regularly to pay
                    off the loan amount within specified loan tenure.
                  </p>
                  <p className="text">
                    A car loan is the agreement between you and a lender that
                    says they will give you the money to buy a car. In return,
                    you'll pay them back with .
                  </p>
                </div>
                <div className="services-details-features">
                  <div className="content">
                    <h3>Features of car loan</h3>
                    <p>
                      An auto loan will give you the advantage of buying a
                      vehicle with monthly payments you can afford. Auto loans
                      also help build your credit rating, provided that you make
                      the payments on time, and give you the opportunity to buy
                      a better vehicle that may have been too expensive if you
                      were to pay cash.
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
                  <h3>You deserve a better Car loan</h3>
                  <p>
                    A Car Loan can help you save on tax if you are a
                    self-employed professional or business owner and use the car
                    for business purposes. But a salaried employee cannot claim
                    tax deductions on Car Loan interest repayments like with a
                    Home Loan. The reason behind this is that a car is
                    considered as a luxury product.
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
                      Proof of identity documents: Aadhar card, passport, pan
                      card or voters ID card etc. Proof of address documents:
                      Aadhar card, passport, telephone or electricity bill, Shop
                      & Establishment Act certificate (for self-employed
                      individuals), among others. Proof of income documents:
                      Bank statement of the last six months.
                    </p>
                    <ul className="list">
                      <li>
                        <i>
                          <img src={sign} alt="sign" width="2%" height="2%" />
                        </i>
                        upto 85 percent of the car value
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
                        Net Monthly Income must be more than 25,000.
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
                        CIBIL: Required (680-900).
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

export default CarLoan;
