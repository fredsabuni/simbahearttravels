import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay]);
function Home5Testimonial() {
    const testimonialSlide= {
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
      nextEl: ".testi2-next",
      prevEl: ".testi2-prev",
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
    <div className="testimonial-section pt-120 pb-120">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-8 col-lg-10 col-md-12">
          <div className="section-title5 text-center">
            <img src="assets/images/icons/sec-title-vector3.svg" alt="image" />
            <span>Testimonial</span>
            <h2>What Our <span>What Our Visitors Say!</span></h2>
            <p>The Wildlife conservation is long term commitment and journey that requires the cooperation of everyone in the community.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <Swiper {...testimonialSlide} className="swiper testimonial5-slider pb-1">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-single1 sibling-3">
                  <p>“This place is great! I had a very pleasant stay here. Great stuff and beautiful suites with a fabulous view etiam rhoncus maecenas”!</p>
                  <div className="testi-author">
                    <div className="image">
                      <div className="testi-quote">
                        <img src="assets/images/icons/quote3.svg" alt="image" />
                      </div>
                      <img src="assets/images/bg/testi11.png" alt="image" />
                    </div>
                    <div className="author-text">
                      <h5>Johan Martin Sr</h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-single1 sibling-3">
                  <p>“combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated therefore”!</p>
                  <div className="testi-author">
                    <div className="image">
                      <div className="testi-quote">
                        <img src="assets/images/icons/quote3.svg" alt="image" />
                      </div>
                      <img src="assets/images/bg/testi12.png" alt="image" />
                    </div>
                    <div className="author-text">
                      <h5>Angelo Mathes</h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-single1 sibling-3">
                  <p>“But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you.”!</p>
                  <div className="testi-author">
                    <div className="image">
                      <div className="testi-quote">
                        <img src="assets/images/icons/quote3.svg" alt="image" />
                      </div>
                      <img src="assets/images/bg/testi11.png" alt="image" />
                    </div>
                    <div className="author-text">
                      <h5>David Mortana</h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
     
    </div>
  </div>
  
  )
}

export default Home5Testimonial