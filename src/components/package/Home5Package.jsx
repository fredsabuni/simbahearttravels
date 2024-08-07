import Link from "next/link";
import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import wildtourPackage from "../../data/WildlifeTourPackages.json";
SwiperCore.use([Navigation, Autoplay]);

import { Swiper, SwiperSlide } from "swiper/react";
function Home5Package() {
  const package5Slide = {
    slidesPerView: "auto",
    speed: 800,
    loop: true,
    freeMode: true,
    spaceBetween: 0,
    grabCursor: true,
    loop: true,
    freeModeMomentum: false,
    navigation: {
      nextEl: ".wild-package-prev",
      prevEl: ".wild-package-next",
    },

    breakpoints: {
      280: {
        slidesPerView: "auto",
        navigation: false,
      },
      420: {
        slidesPerView: 2,
        navigation: false,
      },
      576: {
        slidesPerView: 2,
        navigation: false,
      },
      768: {
        slidesPerView: 3,
        navigation: false,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <div className="wild-package-section pt-120 pb-120" id="safari-section">
      <div className="container">
        <div className="row mb-60">
          <div className="col-md-8">
            <div className="about5-title">
              <span>SAFARI TOUR</span>
              <h2 className="mb-0">
                Destinations.
              </h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="slider-arrows arrows-style-4 sibling-2 text-center d-lg-flex d-none flex-row justify-content-center align-items-center gap-4">
              <div
                className="wild-package-prev swiper-prev-arrow"
                tabIndex={0}
                role="button"
                aria-label="Previous slide"
              >
                <img src="assets/images/icons/arrow-left5.svg" alt="image" />
              </div>
              <div
                className="wild-package-next swiper-next-arrow"
                tabIndex={0}
                role="button"
                aria-label="Next slide"
              >
                <img src="assets/images/icons/arrow-right5.svg" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slider-wrap">
        <div className="container">
          <Swiper {...package5Slide} className="swiper wild-package-slider">
            <div className="swiper-wrapper">
              {wildtourPackage.map((item) => {
                const { id, type, place, price, image, title } = item;
                return (
                  <SwiperSlide key={id} className="swiper-slide">
                    <div className="wild-package-single">
                      <img
                        src={image}
                        className="wild-package-img"
                        alt="image"
                      />
                      <div className="text">
                        <span>{type}</span>
                        <h4>
                          <Link href="/tour-package-details">
                            <a>{title}</a>
                          </Link>
                        </h4>
                      </div>
                      <div className="content-wrapper">
                        <div className="content">
                          <h4>{place}</h4>
                          <p className="price">{price}</p>
                          <Link href="/contact">
                            <a className="details-btn">Book Now</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Home5Package;
