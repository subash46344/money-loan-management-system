import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./HeaderStyle.css";
import logo from "./../../Assets/Images/logo-12.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("1111111111");
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling animation
    });
  };
  return (
    <>
      <div className="navbar-area arun">
        <div className="main-responsive-nav">
          <div className="container">
            <div className="main-responsive-menu mean-container">
              {/* responsive start*/}

              <div className="mean-bar">
                <nav
                  className="mean-nav"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "100px",
                  }}
                >
                  {isOpen && (
                    <ul className="navbar-nav" style={{ display: "flex" }}>
                      <li className="nav-item">
                        <Link
                          to={"/"}
                          className="nav-link"
                          onClick={() => {
                            toggleMenu();
                            scrollToTop();
                          }}
                        >
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to={"/AboutUs"}
                          className="nav-link"
                          onClick={() => {
                            toggleMenu();
                            scrollToTop();
                          }}
                        >
                          About
                        </Link>
                      </li>
                      <li className="nav-item">
                        {/* <a href="#" className="nav-link">
                        Services
                        <i className="bx bx-chevron-down"></i>
                      </a> */}
                        <ul
                          className="dropdown-menu"
                          style={{
                            display: "block",
                            color: "#fff",
                            background: "none",
                          }}
                        >
                          <li className="nav-item">
                            <Link
                              to={"/HomeLoan"}
                              className="nav-link"
                              onClick={() => {
                                toggleMenu();
                                scrollToTop();
                              }}
                            >
                              Home Loan
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              to={"/PersonalLoan"}
                              className="nav-link"
                              onClick={() => {
                                toggleMenu();
                                scrollToTop();
                              }}
                            >
                              Personal Loan
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              to={"/BusinessLoan"}
                              className="nav-link"
                              onClick={() => {
                                toggleMenu();
                                scrollToTop();
                              }}
                            >
                              Business Loan
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              to={"/CarLoan"}
                              className="nav-link"
                              onClick={() => {
                                toggleMenu();
                                scrollToTop();
                              }}
                            >
                              Car Loan
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              to={"/Insurance"}
                              className="nav-link"
                              onClick={() => {
                                toggleMenu();
                                scrollToTop();
                              }}
                            >
                              Insurance
                            </Link>
                          </li>
                        </ul>
                        {/* <a
                        className="mean-expand"
                        href="#"
                        style={{ fontSize: "18px" }}
                      >
                        +
                      </a> */}
                      </li>

                      <li className="nav-item mean-last">
                        <Link
                          to={"/ContactUs"}
                          className="nav-link"
                          onClick={() => {
                            toggleMenu();
                            scrollToTop();
                          }}
                        >
                          Contact
                        </Link>
                        <li className="nav-item mean-last">
                          <Link
                            to={"/EmiCalculater"}
                            className="nav-link"
                            onClick={() => {
                              toggleMenu();
                              scrollToTop();
                            }}
                          >
                            EmiCalculater
                          </Link>
                        </li>
                      </li>
                    </ul>
                  )}
                </nav>
              </div>
              {/* responsive end*/}
              <div className="logo">
                <Link
                  to={"/"}
                  onClick={() => {
                    toggleMenu();
                    scrollToTop();
                  }}
                >
                  <img
                    src={logo}
                    alt="image"
                    style={{
                      width: "220px",
                      height: "100px",
                      position: "fixed",
                      top: "0",
                    }}
                  />
                </Link>
              </div>
              <button
                className="meanmenu-reveal"
                onClick={toggleMenu}
                style={{
                  position: "fixed",
                  top: "0",
                  right: "0",
                  marginRight: "20px",
                  backgroundColor: "red",
                  marginTop: "10px",
                  border: "none",
                  outline: "none",
                }}
              >
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
        <div className="main-navbar">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link to={"/"} onClick={scrollToTop}>
                <img
                  src={logo}
                  alt="image"
                  style={{ width: "220px", height: "100px" }}
                />
              </Link>
              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to={"/"} className="nav-link" onClick={scrollToTop}>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link" onClick={scrollToTop}>
                      Services
                      <i className="bx bx-chevron-down"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          to={"/HomeLoan"}
                          className="nav-link"
                          onClick={scrollToTop}
                        >
                          Home Loan
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to={"/PersonalLoan"}
                          className="nav-link"
                          onClick={scrollToTop}
                        >
                          Personal Loan
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to={"/BusinessLoan"}
                          className="nav-link"
                          onClick={scrollToTop}
                        >
                          Business Loan
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to={"/CarLoan"}
                          className="nav-link"
                          onClick={scrollToTop}
                        >
                          Car Loan
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to={"/Insurance"}
                          className="nav-link"
                          onClick={scrollToTop}
                        >
                          Insurance
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      to={"/AboutUs"}
                      className="nav-link"
                      onClick={scrollToTop}
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to={"/ContactUs"}
                      className="nav-link"
                      onClick={scrollToTop}
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to={"/EmiCalculater"}
                      className="nav-link"
                      onClick={scrollToTop}
                    >
                      EmiCalculater
                    </Link>
                  </li>
                  <li className="nav-item"></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
