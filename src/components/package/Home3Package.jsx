import Link from "next/link";
import React from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay]);
function Home3Package() {
  const packageSLider = {
    slidesPerView: "auto",
    speed: 800,
    loop: true,
    freeMode: true,
    spaceBetween: 25,
    grabCursor: true,
    freeModeMomentum: false,
    navigation: {
      nextEl: ".package2-prev",
      prevEl: ".package2-next",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: "true",
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
        navigation: false,
      },
      420: {
        slidesPerView: 1,
        navigation: false,
      },
      576: {
        slidesPerView: 2,
        navigation: false,
      },
      768: {
        slidesPerView: 2,
        navigation: false,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
      1500: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <div className="tour-package-section2 pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-start align-items-center mb-60">
          <div className="col-lg-6 col-md-8 text-md-start text-center">
            <div className="section-title3 d-flex flex-column justify-content-center mb-0">
              <span>Featured Tours</span>
              <h2>Get The Best Astrip Tour’s</h2>
            </div>
          </div>
          <div className="col-lg-6 col-md-4">
            <div className="slider-arrows arrows-style-4 text-center d-md-flex d-none flex-row gap-5 justify-content-end align-items-center pt-1">
              <div
                className="package2-prev swiper-prev-arrow"
                tabIndex={0}
                role="button"
                aria-label="Previous slide"
              >
                <i className="bi bi-arrow-left" />
              </div>
              <div
                className="package2-next swiper-next-arrow"
                tabIndex={0}
                role="button"
                aria-label="Next slide"
              >
                <i className="bi bi-arrow-right" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Swiper {...packageSLider} className="swiper package-slider2">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="tour-package-single2">
                    <div className="image">
                      <img
                        src="assets/images/bg/package21.png"
                        className="img-fluid"
                        alt="image"
                      />
                      <span className="blog-date">
                        <i className="bi bi-calendar-check" />
                        From $2250
                      </span>
                    </div>
                    <div className="content">
                      <h4>
                        <Link href="/tour-package-details">
                          <a>Great Wall Tour of China</a>
                        </Link>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <Link href="/tour-package-details">
                        <a className="read-more-btn sibling-2">
                          Explorer Now
                          <i className="bi bi-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="tour-package-single2">
                    <div className="image">
                      <img
                        src="assets/images/bg/package23.png"
                        className="img-fluid"
                        alt="image"
                      />
                      <span className="blog-date">
                        <i className="bi bi-calendar-check" />
                        From $2250
                      </span>
                    </div>
                    <div className="content">
                      <h4>
                        <Link href="/tour-package-details">
                          <a>Familay Tour in Egypt</a>
                        </Link>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <Link href="/tour-package-details">
                        <a className="read-more-btn sibling-2">
                          Explorer Now
                          <i className="bi bi-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="tour-package-single2">
                    <div className="image">
                      <img
                        src="assets/images/bg/package24.png"
                        className="img-fluid"
                        alt="image"
                      />
                      <span className="blog-date">
                        <i className="bi bi-calendar-check" />
                        From $2250
                      </span>
                    </div>
                    <div className="content">
                      <h4>
                        <Link href="/tour-package-details">
                          <a>The City Of Taj Mahal</a>
                        </Link>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <Link href="/tour-package-details">
                        <a className="read-more-btn sibling-2">
                          Explorer Now
                          <i className="bi bi-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="tour-package-single2">
                    <div className="image">
                      <img
                        src="assets/images/bg/package21.png"
                        className="img-fluid"
                        alt="image"
                      />
                      <span className="blog-date">
                        <i className="bi bi-calendar-check" />
                        From $2250
                      </span>
                    </div>
                    <div className="content">
                      <h4>
                        <Link href="/tour-package-details">
                          <a>The Colosseum, Rome</a>
                        </Link>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <Link href="/tour-package-details">
                        <a className="read-more-btn sibling-2">
                          Explorer Now
                          <i className="bi bi-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home3Package;
