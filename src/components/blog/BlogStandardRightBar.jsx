import Link from "next/link";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
function BlogStandardRightBar() {
  const [isOpen, setOpen] = useState(false);
  const blogSlider = {
    slidesPerView: "auto",
    speed: 1200,
    spaceBetween: 15,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: true,
    loop: true,
    roundLengths: true,
    navigation: {
      nextEl: ".blog1-prev",
      prevEl: ".blog1-next",
    },
  };
  return (
    <>
      <div className="blog-standard-area">
        <div className="blog-standard-single">
          <div className="blog-format">
            <span className="blog-date">August 08, 2022</span>
            <div className="blog-image">
              <img
                src="assets/images/blog/blog-standard1.png"
                className="img-fluid"
                alt="image"
              />
            </div>
          </div>
          <div className="blog-content">
            <h3>
              <Link href="/blog-details">
                <a>What to Know Before You Travel Plan a Trip.</a>
              </Link>
            </h3>
            <div className="author-area">
              <p>
                By <a href="#">Leslie Alexander -</a> Comments: 0{" "}
              </p>
            </div>
            <p>
              This is all good for beginners but when these blogs grow, most
              bloggers forgot about design and instead doubled down on SEO and
              marketing.
            </p>
            <div className="blog-meta">
              <Link href="/blog-details">
                <a className="read-more-btn">
                  Continue Reading
                  <i className="bi bi-arrow-right" />
                </a>
              </Link>
              <ul className="share-list">
                <li>
                  <i className="bi bi-heart" />
                  420
                </li>
                <li>
                  <i className="bi bi-share" />
                  Share
                  <ul className="blog-social">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="bx bxl-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/">
                        <i className="bx bxl-pinterest" />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="blog-standard-single">
          <div className="blog-format">
            <span className="blog-date">August 08, 2022</span>
            <div className="blog-slider-wrap">
              <Swiper {...blogSlider} className="swiper blog-slider">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="assets/images/blog/blog-slider1.png"
                      alt="image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="assets/images/blog/blog-slider2.png"
                      alt="image"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img
                      src="assets/images/blog/blog-slider3.png"
                      alt="image"
                    />
                  </SwiperSlide>
                </div>
                <div className="slider-arrows arrows-style-2 sibling-3 text-center d-flex flex-row justify-content-between align-items-center w-100">
                  <div
                    className="blog1-prev swiper-prev-arrow"
                    tabIndex={0}
                    role="button"
                    aria-label="Previous slide"
                  >
                    <i className="bi bi-arrow-left" />
                  </div>
                  <div
                    className="blog1-next swiper-next-arrow"
                    tabIndex={0}
                    role="button"
                    aria-label="Next slide"
                  >
                    <i className="bi bi-arrow-right" />
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
          <div className="blog-content">
            <h3>
              <Link href="/blog-details">
                <a>Where to Eat Stay &amp; Play in Tulsa, Oklahoma</a>
              </Link>
            </h3>
            <div className="author-area">
              <p>
                By <a href="#">Andrew Tom -</a> Comments: 0{" "}
              </p>
            </div>
            <p>
              This is all good for beginners but when these blogs grow, most
              bloggers forgot about design and instead doubled down on SEO and
              marketing.
            </p>
            <div className="blog-meta">
              <Link href="/blog-details">
                <a className="read-more-btn">
                  Continue Reading
                  <i className="bi bi-arrow-right" />
                </a>
              </Link>
              <ul className="share-list">
                <li>
                  <i className="bi bi-heart" />
                  420
                </li>
                <li>
                  <i className="bi bi-share" />
                  Share
                  <ul className="blog-social">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="bx bxl-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/">
                        <i className="bx bxl-pinterest" />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="blog-standard-single">
          <div className="blog-format">
            <span className="blog-date">August 08, 2022</span>
            <div className="video-gallery-single position-relative">
              <div className="video-play sibling-4">
                <a
                  onClick={() => setOpen(true)}
                  style={{ cursor: "pointer" }}
                  className="popup-youtube video-icon"
                >
                  <i className="bx bx-play" />
                </a>
              </div>
              <img
                src="assets/images/blog/blog-standard-vdo.png"
                className="img-fluid"
                alt="image"
              />
            </div>
          </div>
          <div className="blog-content">
            <h3>
              <Link href="/blog-details">
                <a>One Writer Discovers the World on a Plate.</a>
              </Link>
            </h3>
            <div className="author-area">
              <p>
                By <a href="#">Anasa Anderson -</a> Comments: 0{" "}
              </p>
            </div>
            <p>
              This is all good for beginners but when these blogs grow, most
              bloggers forgot about design and instead doubled down on SEO and
              marketing.
            </p>
            <div className="blog-meta">
              <Link href="/blog-details">
                <a className="read-more-btn">
                  Continue Reading
                  <i className="bi bi-arrow-right" />
                </a>
              </Link>
              <ul className="share-list">
                <li>
                  <i className="bi bi-heart" />
                  420
                </li>
                <li>
                  <i className="bi bi-share" />
                  Share
                  <ul className="blog-social">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="bx bxl-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/">
                        <i className="bx bxl-pinterest" />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <React.Fragment>
            <ModalVideo
              channel="youtube"
              isOpen={isOpen}
              videoId="TboWOSW7qCI"
              onClose={() => setOpen(false)}
            />
          </React.Fragment>
        </div>
        <div className="blog-standard-single">
          <div className="blog-format">
            <span className="blog-date">August 08, 2022</span>
            <div className="blog-image">
              <img
                src="assets/images/blog/blog-standard2.png"
                className="img-fluid"
                alt="image"
              />
            </div>
          </div>
          <div className="blog-content">
            <h3>
              <Link href="/blog-details">
                <a>One Writer Discovers the World on a Plate.</a>
              </Link>
            </h3>
            <div className="author-area">
              <p>
                By <a href="#">David Watson -</a> Comments: 0{" "}
              </p>
            </div>
            <p>
              This is all good for beginners but when these blogs grow, most
              bloggers forgot about design and instead doubled down on SEO and
              marketing.
            </p>
            <div className="blog-meta">
              <Link href="/blog-details">
                <a className="read-more-btn">
                  Continue Reading
                  <i className="bi bi-arrow-right" />
                </a>
              </Link>
              <ul className="share-list">
                <li>
                  <i className="bi bi-heart" />
                  420
                </li>
                <li>
                  <i className="bi bi-share" />
                  Share
                  <ul className="blog-social">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="bx bxl-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/">
                        <i className="bx bxl-pinterest" />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogStandardRightBar;
