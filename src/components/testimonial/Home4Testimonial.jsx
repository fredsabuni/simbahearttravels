import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay]);
function Home4Testimonial() {
    const  testimonial4Sldier = {
        slidesPerView: "auto",
    speed: 1000,
    autoplay: true,
    spaceBetween: 25,
    loop: true,
    roundLengths: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: 'true',
    },
    navigation: {
      nextEl: ".testi4-next",
      prevEl: ".testi4-prev",
    },
    breakpoints: {
      280:{
          slidesPerView: "auto",
        navigation: false,
        },
        386:{
          slidesPerView: "auto",
          navigation: false,
        },
    576:{
      slidesPerView: "auto",
      navigation: false,
    },
    768:{
      slidesPerView: "auto",
      navigation: false,
    },
    992:{ 
      slidesPerView: 2
    },
  }
    }
  return (
    <div className="testimonial-section4 pb-120 position-relative overflow-hidden">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6 text-center">
        <div className="section-title4 sibling3">
          <span>Testimonial</span>
          <h2>What Our Visitors Say!</h2>
          <img src="assets/images/icons/section-title-vector.svg" alt="image" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <Swiper {...testimonial4Sldier} className="swiper testimonial4-slider">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="testimonial-single1 sibling-4">
                <div className="testi-author">
                  <div className="image">
                    <div className="testi-quote">
                      <img src="assets/images/icons/quote-icon4.svg" alt="image" />
                    </div>
                    <img src="assets/images/bg/testi11.png" alt="image" />
                  </div>
                  <div className="author-text">
                    <h5>Johan Martin Sr</h5>
                    <span>Toronto.</span>
                  </div>
                </div>
                <p>“This place is great! I had a very pleasant stay here. Great stuff and beautiful suites with a fabulous view etiam rhoncus maecenas”!</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="testimonial-single1 sibling-4">
                <div className="testi-author">
                  <div className="image">
                    <div className="testi-quote">
                      <img src="assets/images/icons/quote-icon4.svg" alt="image" />
                    </div>
                    <img src="assets/images/bg/testi42.png" alt="image" />
                  </div>
                  <div className="author-text">
                    <h5>Willam jori</h5>
                    <span>London.</span>
                  </div>
                </div>
                <p>“This place is great! I had a very pleasant stay here. Great stuff and beautiful suites with a fabulous view etiam rhoncus maecenas”!</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="testimonial-single1 sibling-4">
                <div className="testi-author">
                  <div className="image">
                    <div className="testi-quote">
                      <img src="assets/images/icons/quote-icon4.svg" alt="image" />
                    </div>
                    <img src="assets/images/bg/testi11.png" alt="image" />
                  </div>
                  <div className="author-text">
                    <h5>JMartin Luthar</h5>
                    <span>Newyork.</span>
                  </div>
                </div>
                <p>“This place is great! I had a very pleasant stay here. Great stuff and beautiful suites with a fabulous view etiam rhoncus maecenas”!</p>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
        <div className="slider-arrows arrows-style-3 sibling-2 text-center d-xl-flex d-none flex-row justify-content-between align-items-center w-100">
          <div className="testi4-prev swiper-prev-arrow" tabIndex={0} role="button" aria-label="Previous slide"> 
            <i className="bi bi-arrow-left" />
          </div>
          <div className="testi4-next swiper-next-arrow" tabIndex={0} role="button" aria-label="Next slide"> 
            <i className="bi bi-arrow-right" />
          </div>
        </div>
      </div>   
    </div>
  </div>
</div>

  )
}

export default Home4Testimonial