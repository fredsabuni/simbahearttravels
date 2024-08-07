import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
function Gallery() {
  const [isOpen, setOpen] = useState(false);
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  return (
    <div className="destination-section pt-120 pb-120">
      <div className="container text-center">
        <div
          className="nav d-inline-flex flex-row justify-content-center nav-pills"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            className="nav-link active nav-btn-style  mb-20"
            id="v-pills-information-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-information"
            type="button"
            role="tab"
            aria-controls="v-pills-information"
            aria-selected="true"
          >
            <i className="bi bi-card-image" /> Image Gallery
          </button>
          <button
            className="nav-link nav-btn-style mb-20"
            id="v-pills-plan-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-plan"
            type="button"
            role="tab"
            aria-controls="v-pills-plan"
            aria-selected="true"
          >
            <i className="bi bi-play-btn" /> Video Gallery
          </button>
        </div>
        <div className="tab-content mt-40" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-information"
            role="tabpanel"
            aria-labelledby="v-pills-information-tab"
          >
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="image-gallery-single position-relative">
                  <div className="image-view">
                    <a className="video-icon image-open">
                      <i
                        className="bi bi-binoculars"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          setOpenimg({ openingState: true, openingIndex: 0 })
                        }
                      />
                    </a>
                  </div>
                  <img
                    src="assets/images/gallery/gallery-img1.png"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
                <div className="image-gallery-single position-relative">
                  <div className="image-view">
                    <a className="video-icon image-open">
                      <i
                        className="bi bi-binoculars"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          setOpenimg({ openingState: true, openingIndex: 3 })
                        }
                      />
                    </a>
                  </div>
                  <img
                    src="assets/images/gallery/gallery-img4.png"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
                <div className="image-gallery-single position-relative">
                  <div className="image-view">
                    <a className="video-icon image-open">
                      <i
                        className="bi bi-binoculars"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          setOpenimg({ openingState: true, openingIndex: 6 })
                        }
                      />
                    </a>
                  </div>
                  <img
                    src="assets/images/gallery/gallery-img7.png"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
                <div className="image-gallery-single position-relative">
                  <div className="image-view">
                    <a className="video-icon image-open">
                      <i
                        className="bi bi-binoculars"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          setOpenimg({ openingState: true, openingIndex: 0 })
                        }
                      />
                    </a>
                  </div>
                  <img
                    src="assets/images/gallery/gallery-img10.png"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="image-gallery-single position-relative">
                  <div className="image-view">
                    <a className="video-icon image-open">
                      <i
                        className="bi bi-binoculars"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          setOpenimg({ openingState: true, openingIndex: 1 })
                        }
                      />
                    </a>
                  </div>
                  <img
                    src="assets/images/gallery/gallery-img2.png"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
                <div className="image-gallery-single position-relative">
                  <div className="image-view">
                    <a className="video-icon image-open">
                      <i
                        className="bi bi-binoculars"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          setOpenimg({ openingState: true, openingIndex: 4 })
                        }
                      />
                    </a>
                  </div>
                  <img
                    src="assets/images/gallery/gallery-img5.png"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
                <div className="image-gallery-single position-relative">
                  <div className="image-view">
                    <a className="video-icon image-open">
                      <i
                        className="bi bi-binoculars"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          setOpenimg({ openingState: true, openingIndex: 7 })
                        }
                      />
                    </a>
                  </div>
                  <img
                    src="assets/images/gallery/gallery-img8.png"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
                <div className="image-gallery-single position-relative">
                  <div className="image-view">
                    <a className="video-icon image-open">
                      <i
                        className="bi bi-binoculars"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          setOpenimg({ openingState: true, openingIndex: 10 })
                        }
                      />
                    </a>
                  </div>
                  <img
                    src="assets/images/gallery/gallery-img11.png"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="image-gallery-single position-relative">
                  <div className="image-view">
                    <a className="video-icon image-open">
                      <i
                        className="bi bi-binoculars"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          setOpenimg({ openingState: true, openingIndex: 2 })
                        }
                      />
                    </a>
                  </div>
                  <img
                    src="assets/images/gallery/gallery-img3.png"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
                <div className="image-gallery-single position-relative">
                  <div className="image-view">
                    <a className="video-icon image-open">
                      <i
                        className="bi bi-binoculars"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          setOpenimg({ openingState: true, openingIndex: 5 })
                        }
                      />
                    </a>
                  </div>
                  <img
                    src="assets/images/gallery/gallery-img6.png"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
                <div className="image-gallery-single position-relative">
                  <div className="image-view">
                    <a className="video-icon image-open">
                      <i
                        className="bi bi-binoculars"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          setOpenimg({ openingState: true, openingIndex: 8 })
                        }
                      />
                    </a>
                  </div>
                  <img
                    src="assets/images/gallery/gallery-img9.png"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
                <div className="image-gallery-single position-relative">
                  <div className="image-view">
                    <a className="video-icon image-open">
                      <i
                        className="bi bi-binoculars"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          setOpenimg({ openingState: true, openingIndex: 11 })
                        }
                      />
                    </a>
                  </div>
                  <img
                    src="assets/images/gallery/gallery-img12.png"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-plan"
            role="tabpanel"
            aria-labelledby="v-pills-plan-tab"
          >
            <div className="row justify-content-center g-4">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="video-gallery-single position-relative">
                  <div className="video-play sibling-4">
                    <div
                      onClick={() => setOpen(true)}
                      style={{ cursor: "pointer" }}
                      className="popup-youtube video-icon"
                    >
                      <i className="bx bx-play" />
                    </div>
                  </div>
                  <img
                    src="assets/images/gallery/video-gallery1.png"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
                <div className="video-gallery-single position-relative">
                  <div className="video-play sibling-4">
                    <div
                      onClick={() => setOpen(true)}
                      style={{ cursor: "pointer" }}
                      className="popup-youtube video-icon"
                    >
                      <i className="bx bx-play" />
                    </div>
                  </div>
                  <img
                    src="assets/images/gallery/video-gallery2.png"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="video-gallery-single position-relative">
                  <div className="video-play sibling-4">
                    <div
                      onClick={() => setOpen(true)}
                      style={{ cursor: "pointer" }}
                      className="popup-youtube video-icon"
                    >
                      <i className="bx bx-play" />
                    </div>
                  </div>
                  <img
                    src="assets/images/gallery/video-gallery3.png"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
                <div className="video-gallery-single position-relative">
                  <div className="video-play sibling-4">
                    <div
                      onClick={() => setOpen(true)}
                      style={{ cursor: "pointer" }}
                      className="popup-youtube video-icon"
                    >
                      <i className="bx bx-play" />
                    </div>
                  </div>
                  <img
                    src="assets/images/gallery/video-gallery4.png"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
                <div className="video-gallery-single position-relative">
                  <div className="video-play sibling-4">
                    <div
                      onClick={() => setOpen(true)}
                      style={{ cursor: "pointer" }}
                      className="popup-youtube video-icon"
                    >
                      <i className="bx bx-play" />
                    </div>
                  </div>
                  <img
                    src="assets/images/gallery/video-gallery5.png"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="video-gallery-single position-relative">
                  <div className="video-play sibling-4">
                    <div
                      onClick={() => setOpen(true)}
                      style={{ cursor: "pointer" }}
                      className="popup-youtube video-icon"
                    >
                      <i className="bx bx-play" />
                    </div>
                  </div>
                  <img
                    src="assets/images/gallery/video-gallery6.png"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
                <div className="video-gallery-single position-relative">
                  <div className="video-play sibling-4">
                    <div
                      onClick={() => setOpen(true)}
                      style={{ cursor: "pointer" }}
                      className="popup-youtube video-icon"
                    >
                      <i className="bx bx-play" />
                    </div>
                  </div>
                  <img
                    src="assets/images/gallery/video-gallery7.png"
                    className="img-fluid"
                    alt="image"
                  />
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
          </div>
        </div>
      </div>
      <Lightbox
        className="img-fluid"
        open={isOpenimg.openingState}
        plugins={[Fullscreen]}
        index={isOpenimg.openingIndex}
        close={() => setOpenimg(false)}
        styles={{
          container: {
            backgroundColor: "rgba(0, 0, 0, .9)",
            cursor: "pointer",
          },
        }}
        slides={[
          { src: "assets/images/gallery/big-gallery-image1.png" },
          { src: "assets/images/gallery/big-gallery-image2.png" },
          { src: "assets/images/gallery/big-gallery-image3.png" },
          { src: "assets/images/gallery/big-gallery-image4.png" },
          { src: "assets/images/gallery/big-gallery-image5.png" },
          { src: "assets/images/gallery/big-gallery-image6.png" },
          { src: "assets/images/gallery/big-gallery-image7.png" },
          { src: "assets/images/gallery/big-gallery-image8.png" },
          { src: "assets/images/gallery/big-gallery-image9.png" },
          { src: "assets/images/gallery/big-gallery-image10.png" },
          { src: "assets/images/gallery/big-gallery-image11.png" },
          { src: "assets/images/gallery/big-gallery-image12.png" },
        ]}
      />
    </div>
  );
}

export default Gallery;
