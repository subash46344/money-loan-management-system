import React from "react";
import { Link } from "react-router-dom";
import homebanner from "./../../Assets/Images/home-banner1.jpg";
import personalLoanIcon from "./../../Assets/Images/icons/personal-loan.png";
import BusinessLoan from "./../../Assets/Images/icons/business-loan-icon.png";
import CarLoan from "./../../Assets/Images/icons/car-loan-icon.png";
import HouseLoan from "./../../Assets/Images/icons/home-loan-icon.png";
import creditCardLoan from "./../../Assets/Images/icons/credit-card-loan.png";
import EductionLoan from "./../../Assets/Images/icons/educationLoan.png";

function Banner() {
  const backgroundImageUrl = `url(${homebanner})`;

  const bannerStyle = {
    backgroundImage: backgroundImageUrl,
  };
  return (
    <>
      <div className="main-banner-area bg-two" style={bannerStyle}>
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="main-banner-content">
                <h1>We believe in those made to do more</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partner-area bg-color ptb-30">
        <div className="container">
          <div className="best-services-slider">
            <div
              className="partner-slider owl-carousel owl-theme"
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                padding: "10px 25px",
              }}
            >
              <div className="tabs-item">
                <Link to={"/PersonalLoan"}>
                  <i>
                    <img
                      src={personalLoanIcon}
                      alt="personalLoanIcon"
                      width="70%"
                      height="70%"
                    />
                  </i>
                  <span>Personal loan</span>
                </Link>
              </div>
              <div className="tabs-item">
                <Link to={"/BusinessLoan"}>
                  <i>
                    <img
                      src={BusinessLoan}
                      alt="BusinessLoan"
                      width="70%"
                      height="70%"
                    />
                  </i>
                  <span>Business loan</span>
                </Link>
              </div>
              <div className="tabs-item">
                <Link to={"/CarLoan"}>
                  <i>
                    <img src={CarLoan} alt="CarLoan" width="70%" height="70%" />
                  </i>
                  <span>Car loan</span>
                </Link>
              </div>
              <div className="tabs-item">
                <Link to={"/HomeLoan"}>
                  <i>
                    <img
                      src={HouseLoan}
                      alt="HouseLoan"
                      width="70%"
                      height="70%"
                    />
                  </i>
                  <span>House loan</span>
                </Link>
              </div>
              <div className="tabs-item">
                <a href="#">
                  <i>
                    <img
                      src={creditCardLoan}
                      alt="creditCardLoan"
                      width="70%"
                      height="70%"
                    />
                  </i>
                  <span>Credit Cards</span>
                </a>
              </div>
              <div className="tabs-item">
                <a href="#">
                  <i>
                    <img
                      src={EductionLoan}
                      alt="EductionLoan"
                      width="70%"
                      height="70%"
                    />
                  </i>
                  <span>Education Loan</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
