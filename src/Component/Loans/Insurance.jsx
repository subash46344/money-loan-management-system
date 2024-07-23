import React from "react";
import { Link } from "react-router-dom";
import LoanForm from "./LoanForm";
import PersonalBanner from "./../../Assets/Images/insurance-banner.jpg";
import PersonalImg from "./../../Assets/Images/insurance.jpg";
import sign from "./../../Assets/Images/icons/check.png";
import quick from "./../../Assets/Images/icons/review.png";
import Easyloan from "./../../Assets/Images/icons/repayment.png";
import Transparency from "./../../Assets/Images/icons/transparency.png";

function Insurance() {
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
                <h2>Insurance </h2>
                <ul>
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>Insurance </li>
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
                  <h3>About Insurance and how does it work</h3>
                  <p>
                    Insurance is a financial tool designed to protect
                    individuals, businesses, and other entities from financial
                    loss. It works on the principle of risk management, where
                    individuals or organizations pay a premium to an insurance
                    company in exchange for protection against specified risks.
                  </p>
                  <p className="text">
                    Central to the functioning of insurance is the concept of
                    risk transfer. By assuming the mantle of risk, insurance
                    companies offer a lifeline to policyholders, shouldering the
                    burden of potential loss in exchange for a modest premium.
                    This premium serves as the lifeblood of the insurance
                    ecosystem, fueling the collective pool from which claims are
                    sated and financial solace is bestowed upon the afflicted.
                  </p>
                </div>
                <div className="services-details-features">
                  <div className="content">
                    <h3>How Does Insurance Work?</h3>
                    <h6>Policy Purchase:</h6>
                    <p>
                      To obtain insurance coverage, individuals or businesses
                      purchase an insurance policy from an insurance company.
                      The policy outlines the terms, conditions, and coverage
                      details
                    </p>
                    <h6>Premium Payment:</h6>
                    <p>
                      Policyholders pay a premium to the insurance company at
                      regular intervals, typically monthly, quarterly, or
                      annually. The premium amount is determined based on
                      factors such as the level of coverage, the type of
                      insurance, and the risk profile of the insured.
                    </p>
                    <h6>Risk Pooling:</h6>
                    <p>
                      Insurance operates on the principle of risk pooling, where
                      premiums collected from policyholders are pooled together
                      to create a fund. This fund is used to pay out claims to
                      policyholders who experience covered losses.
                    </p>
                    <h6>Claims Process:</h6>
                    <p>
                      When an insured event occurs, such as an accident,
                      illness, or property damage, the policyholder files a
                      claim with the insurance company. The insurer evaluates
                      the claim to determine if it falls within the policy's
                      coverage.
                    </p>
                    <h6>Claim Settlement:</h6>
                    <p>
                      If the claim is approved, the insurance company provides
                      financial compensation to the policyholder to cover the
                      losses or expenses incurred. This may involve paying for
                      medical bills, repairing damaged property, or providing a
                      death benefit to beneficiaries.
                    </p>
                    <h6>Risk Assessment and Underwriting</h6>
                    <p>
                      Insurance companies assess the risk associated with
                      insuring a particular individual or asset before issuing a
                      policy. This process, known as underwriting, involves
                      evaluating factors such as age, health, occupation, and
                      past insurance claims history.
                    </p>
                    <h6>Conclusion</h6>
                    <p>
                      Insurance plays a vital role in modern society by
                      mitigating financial risks and uncertainties. By
                      understanding how insurance works and choosing appropriate
                      coverage, individuals and businesses can safeguard their
                      financial well-being and protect against unexpected
                      losses.
                    </p>
                  </div>
                  {/* <div className="row">
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
                  </div> */}
                </div>
                {/* <div className="services-details-others">
                  <h3>You deserve a better personal loan</h3>
                  <p>
                    Here are common reasons to take out a personal loan:
                    Consolidate high-interest debt: Taking a personal loan is
                    one way to consolidate high-interest debt, such as credit
                    card debt, into a single payment. Ideally, the loan has a
                    lower interest rate than your existing debt and allows you
                    to pay it off faster.
                  </p>
                </div> */}
                {/* <div className="deserve-item">
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
                </div> */}
                {/* <div className="services-details-list">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Insurance;
