import React from "react";
import { Link } from "react-router-dom";
import Arrow1 from "./../../Assets/Images/works-shape.png";
import Arrow2 from "./../../Assets/Images/works-shape2.png";
import LoansImg1 from "./../../Assets/Images/loans-img.jpg";
import Loansimg2 from "./../../Assets/Images/loans-img2.jpg";
import Loansimg3 from "./../../Assets/Images/loans-img3.jpg";
import LoansBanner from "./../../Assets/Images/loans-banner.jpg";

function Loans() {
  const backgroundImageUrl = `url(${LoansBanner})`;

  const bannerStyle = {
    backgroundImage: backgroundImageUrl,
  };
  return (
    <>
      <div className="page-title-area item-bg-7" style={bannerStyle}>
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                <h2>Loans</h2>
                <ul>
                  <li>
                    {" "}
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>Loans</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="loan-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="loan-image">
                <img src={LoansImg1} alt="image" />
                <div className="loan-shape">
                  <div className="text">
                    <img src={LoansImg1} alt="image" />
                    <span>We believe in those made to do more</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="loan-content">
                <h3>What is a Money Crest Deal loan?</h3>
                <p>
                  We encounter many challenges in our lives at different stages.
                  While we face these challenges through personal efforts,
                  financial help is something that we all look for. Personal
                  loan is an unsecured loan given by financial institutions and
                  banks which helps us to meet our personal occurrences.
                </p>
                <ul className="list">
                  <li>Unsecured loans of between 50,000 - 50,00,000</li>
                  <li>Borrow over 1-5 years at a fixed interest rate of 9%*</li>
                  <li>FREE mentoring for the first year of the loan</li>
                  <li>No minimum trading requirement.</li>
                </ul>
                <h4>Resources to help you with your Loan</h4>
                <ul className="loan-list">
                  <li>
                    <i className="flaticon-check"></i>
                    Business Plan
                  </li>
                  <li>
                    <i className="flaticon-check"></i>
                    Budget Planner
                  </li>
                  <li>
                    <i className="flaticon-check"></i>
                    Cashflow Forecast
                  </li>
                </ul>
                <div className="loan-btn">
                  <a href="#" className="default-btn">
                    Apply now
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overview-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>What’s the process?</span>
            <h2>The Loans have helped us move our business forward</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="overview-item">
                <div className="number">
                  <span>Apply</span>
                  <strong>1</strong>
                </div>
                <h3>
                  Easily apply in <br /> minutes
                </h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="overview-item">
                <div className="number">
                  <span>Process</span>
                  <strong>2</strong>
                </div>
                <h3>
                  Clear and transparent <br /> process
                </h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="overview-item">
                <div className="number">
                  <span>Support</span>
                  <strong>3</strong>
                </div>
                <h3>
                  Support from real <br /> people
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="overview-shape">
          <div className="shape">
            <img src={Arrow1} alt="image" />
          </div>
          <div className="shape2">
            <img src={Arrow2} alt="image" />
          </div>
        </div>
      </section>

      <section className="deserve-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="deserve-item">
                <h3>How do I apply for a loan</h3>
                <div className="deserve-content">
                  <span>1</span>
                  <h4>Interest on Loan</h4>
                  <p>
                    Interest rate on car loan is an essential factor. Many banks
                    are available in market that offers lucrative car loan
                    interest rates. If you are looking for a good deal then it
                    is must to research properly and choose the best for your
                    yourself.
                  </p>
                </div>
                <div className="deserve-content">
                  <span>2</span>
                  <h4>Credit Score</h4>
                  <p>
                    One of the most important criteria is a good credit score.
                    Good credit score reflects your credit history. If you do
                    not have a good credit history then getting a loan becomes
                    very difficult because eon the basis of that our loan is
                    approved. It is must to have a good credit score. It should
                    be at least 700 to match the requirement.
                  </p>
                </div>
                <div className="deserve-content">
                  <span>3</span>
                  <h4>Processing Fee</h4>
                  <p>
                    Lenders who provide car loan charge processing fee as well.
                    If they are giving you cheap car loan then in that they
                    might have high processing fee. Either they charge fix
                    processing fee or a percentage of the loan amount. So, you
                    must always watch out this thing while taking a car loan.
                  </p>
                </div>
                <div className="deserve-content">
                  <span>4</span>
                  <h4>Your loan is funded</h4>
                  <p>
                    Starting a new business can be a tedious task. Beginning
                    from the concept till the capital investment is all what you
                    invest your efforts in. Everything can be planned on paper
                    till the time find out our investment source. Here, business
                    loans help you give a kickstart to your business.
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
              <div className="default-image">
                <img src={Loansimg2} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="check-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="check-image">
                <img src={Loansimg3} alt="image" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="check-content">
                <h3>Want to check your eligibility before you apply?</h3>
                <p>
                  To qualify for a personal loan, you need to fulfill the
                  eligibility. These include age, your employment type, your
                  employment status, your net monthly income, your CIBIL score,
                  repayment history, work experience, and the maximum EMI
                  allowed as per your salary.
                </p>
              </div>
              <div className="check-text">
                <h3>Payment flexibility for your loan</h3>
                <p>
                  Money Crest Deal such plan in which the loan is structured in
                  a way that the EMI is higher during the initial years and
                  subsequently decreases in the later years. Watch outs:
                  Interest portion in EMI is as it is higher in the initial
                  years.
                </p>
                <ul className="list">
                  <li>Fill Loan Application Form</li>
                  <li>Choose your preferred monthly payment</li>
                  <li>Increase your payment amount anytime</li>
                  <li>No fees, hidden or otherwise</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="funding-form-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Apply for funding</span>
            <h2>Get funded from the comfort of your home</h2>
          </div>
          <div className="row">
            <form className="funding-form">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Full Name*</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Business Website</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Work Email*</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Password</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Monthly Revenue*</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="buy-checkbox-btn">
                <div className="item">
                  <input className="inp-cbx" id="cbx" type="checkbox" />
                  <label className="cbx" for="cbx">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>
                      I have read and agree to Clearbanc’s{" "}
                      <a href="privacy-policy.php">Privacy Policy</a> and{" "}
                      <a href="terms-condition.php">Terms of Service</a>
                    </span>
                  </label>
                </div>
              </div>
              <div className="funding-btn">
                <button type="submit" className="default-btn">
                  Get Funding
                  <span></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Loans;
