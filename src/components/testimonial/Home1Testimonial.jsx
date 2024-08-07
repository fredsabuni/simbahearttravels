import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay]);

function Home1Testimonial() {
    const testimonial = {
        slidesPerView: "auto",
        speed: 1000,
        autoplay: true,
        spaceBetween: 25,
        loop: true,
        roundLengths: true,
        pagination: {
          el: ".testimonial1-pagination",
          clickable: 'true',
        }
    }
  return (
    <div className="testimonial-section overflow-hidden">
  <div className="container-fluid px-0">
    <div className="testimonial-wrapper">
      <div className="testimonial-area">
        <img src="assets/images/icons/testi-quote.svg" className="testi-quote" alt="image" />
        <div className="testimonial-wrap">
          <Swiper {...testimonial} className="swiper testimonial1-slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-single1">
                  <div className="testimonial-content">
                    <ul className="star-list">
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-half" /></li>
                    </ul>
                    <p>“This place is great! I had a very pleasant stay here. Great stuff and beautiful suites with a fabulous view etiam rhoncus maecenas”!</p>
                  </div>
                  <div className="testi-author1">
                    <div className="image">
                      <img src="assets/images/bg/testi11.png" alt="image" />
                    </div>
                    <div className="author-text">
                      <h5>Johan Martin Sr</h5>
                      <p>South America.</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-single1">
                  <div className="testimonial-content">
                    <ul className="star-list">
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-half" /></li>
                    </ul>
                    <p>“This place is great! I had a very pleasant stay here. Great stuff and beautiful suites with a fabulous view etiam rhoncus maecenas”!</p>
                  </div>
                  <div className="testi-author1">
                    <div className="image">
                      <img src="assets/images/bg/testi11.png" alt="image" />
                    </div>
                    <div className="author-text">
                      <h5>Johan Martin Sr</h5>
                      <p>South America.</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-single1">
                  <div className="testimonial-content">
                    <ul className="star-list">
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-fill" /></li>
                      <li><i className="bi bi-star-half" /></li>
                    </ul>
                    <p>“This place is great! I had a very pleasant stay here. Great stuff and beautiful suites with a fabulous view etiam rhoncus maecenas”!</p>
                  </div>
                  <div className="testi-author1">
                    <div className="image">
                      <img src="assets/images/bg/testi12.png" alt="image" />
                    </div>
                    <div className="author-text">
                      <h5>Johan Martin Sr</h5>
                      <p>South America.</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
            <div className="testimonial1-pagination d-flex align-items-center justify-content-sm-end justify-content-center pt-sm-0 pt-4" />
          </Swiper>
        </div>
      </div>
      <div className="newsletter-area">
        <div className="banner-form-box">
          <h3>Join Newsletter</h3>
          <p>Etiam rhoncus. Maecenas temp us, tellus eget condimentum rho</p>
          <form className="newsletter-form">
            <div className="form-inner">
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="form-inner">
              <input type="email" placeholder="Your E-mail" />
            </div>
            <button className="eg-btn btn--primary btn--lg w-100">Join Us</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Home1Testimonial