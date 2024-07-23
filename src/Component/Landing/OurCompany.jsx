import React from "react";
import homeimg2 from "./../../Assets/Images/home-img2.jpg";
import project from "./../../Assets/Images/icons/idea.png";
import target from "./../../Assets/Images/icons/target.png";
import sales from "./../../Assets/Images/icons/key.png";
import promises from "./../../Assets/Images/icons/assets.png";

function OurCompany() {
  return (
    <>
      <section className="company-area bg-color ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="company-content">
                <h3>Our company values</h3>
                <div className="company-text">
                  <div className="icon">
                    <i>
                      <img
                        src={project}
                        alt="project"
                        width="10%"
                        height="10%"
                      />
                    </i>
                  </div>
                  <h4>Protect and Promote</h4>
                  <p>
                    To serve, protect and promote the effectiveness of member
                    companies and the individual entities they represent.
                  </p>
                </div>
                <div className="company-text">
                  <div className="icon">
                    <i>
                      <img src={target} alt="target" width="10%" height="10%" />
                    </i>
                  </div>
                  <h4>Our target</h4>
                  <p>
                    We target to be no. 1 DSA company in Delhi NCR, with the
                    best business model for our stakeholders.
                  </p>
                </div>
                <div className="company-text">
                  <div className="icon">
                    <i>
                      <img src={sales} alt="sales" width="10%" height="10%" />
                    </i>
                  </div>
                  <h4>Direct sales</h4>
                  <p>
                    To ensure that the marketing by member companies of products
                    and the direct sales opportunity is conducted with the
                    highest level of business ethics and services to consumers
                    in society.
                  </p>
                </div>
                <div className="company-text">
                  <div className="icon">
                    <i>
                      <img
                        src={promises}
                        alt="promises"
                        width="10%"
                        height="10%"
                      />
                    </i>
                  </div>
                  <h4>Our promises</h4>
                  <p>
                    Money Crests wishes to be the most promising Sales and
                    Marketing company.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="company-wrap">
                <img src={homeimg2} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurCompany;
