import React from "react";
import Slider from "react-slick";
import homeimg3 from "./../../Assets/Images/home-img3.jpg";
import homeimg4 from "./../../Assets/Images/home-img4.jpg";
import homeimg5 from "./../../Assets/Images/ceo1.jpg";
import quations from "./../../Assets/Images/icons/quote.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OurClients() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Adjust the speed as needed
  };

  return (
    <section className="clients-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span>Clients words</span>
          <h2>What our clients say</h2>
          <p>
            We are really thankful to Money Crest for our easy car loan process.
            We wish them lot of success. Executives have built a great relation
            and helped in each and every step. Thank you so much team!!
          </p>
        </div>
        <Slider {...settings}>
          <div className="clients-item">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="clients-info-text">
                  <p>
                    “Thank you, Money Crest for helping me in my Personal loan
                    at the time I needed the most. It was really a simple and a
                    quick process without any hassle. Kudos to you guys!”
                  </p>
                  <h3>Salman Cowen</h3>
                  <span>Founder</span>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="clients-image">
                  <img src={homeimg3} alt="image" />
                  <div className="icon-1">
                    <i>
                      <img
                        src={quations}
                        alt="quations"
                        width="100%"
                        height="100%"
                      />
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clients-item">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="clients-info-text">
                  <p>
                    “I am glad that I came in contact with your team for my loan
                    against property. You guys made it so easy for me. The best
                    part was I did not have to go anywhere for this process and
                    everything was done in an ease. I am a happy customer.”
                  </p>
                  <h3>Ajay Singal</h3>
                  <span>CFO</span>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="clients-image">
                  <img src={homeimg4} alt="image" />
                  <div className="icon-1">
                    <i>
                      <img
                        src={quations}
                        alt="quations"
                        width="100%"
                        height="100%"
                      />
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clients-item">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="clients-info-text">
                  <p>
                    “It is only because of Money Crest that my dream to buy a
                    house is fulfilled. They gave me various options of
                    different banks and I had a chance to choose the best. I got
                    my dream home and I can pay the amount in easy EMI’s. God
                    bless your team with lots of success.”
                  </p>
                  <h3>Anuj Sahoo</h3>
                  <span>Founder</span>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="clients-image">
                  <img src={homeimg5} alt="image" />
                  <div className="icon-1">
                    <i>
                      <img
                        src={quations}
                        alt="quations"
                        width="100%"
                        height="100%"
                      />
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default OurClients;
