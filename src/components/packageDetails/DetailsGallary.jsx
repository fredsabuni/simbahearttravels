import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
function DetailsGallary() {
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  return (
    <div
      className="tab-pane fade"
      id="v-pills-gallery"
      role="tabpanel"
      aria-labelledby="v-pills-gallery-tab"
    >
      <div className="tour-gallery-wrap">
        <h3 className="tour-details-subtitle">Astrip Travel Gallery</h3>
        <div className="row g-4 justify-content-center">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-sm-4 col-6">
            <div className="tour-gallery">
              <img
                src="assets/images/gallery/tour-gallery1.png"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setOpenimg({ openingState: true, openingIndex: 0 })
                }
                className="img-fluid"
                alt="image"
              />
            </div>
            <div className="tour-gallery">
              <img
                src="assets/images/gallery/tour-gallery2.png"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setOpenimg({ openingState: true, openingIndex: 3 })
                }
                className="img-fluid"
                alt="image"
              />
            </div>
            <div className="tour-gallery">
              <img
                src="assets/images/gallery/tour-gallery3.png"
                className="img-fluid"
                alt="image"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setOpenimg({ openingState: true, openingIndex: 6 })
                }
              />
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-sm-4 col-6">
            <div className="tour-gallery">
              <img
                src="assets/images/gallery/tour-gallery4.png"
                className="img-fluid"
                alt="image"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setOpenimg({ openingState: true, openingIndex: 12 })
                }
              />
            </div>
            <div className="tour-gallery">
              <img
                src="assets/images/gallery/tour-gallery5.png"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setOpenimg({ openingState: true, openingIndex: 4 })
                }
                className="img-fluid"
                alt="image"
              />
            </div>
            <div className="tour-gallery">
              <img
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setOpenimg({ openingState: true, openingIndex: 7 })
                }
                src="assets/images/gallery/tour-gallery6.png"
                className="img-fluid"
                alt="image"
              />
            </div>
            <div className="tour-gallery">
              <img
                src="assets/images/gallery/tour-gallery7.png"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setOpenimg({ openingState: true, openingIndex: 10 })
                }
                className="img-fluid"
                alt="image"
              />
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-sm-4 col-6">
            <div className="tour-gallery">
              <img
                src="assets/images/gallery/tour-gallery8.png"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setOpenimg({ openingState: true, openingIndex: 8 })
                }
                className="img-fluid"
                alt="image"
              />
            </div>
            <div className="tour-gallery">
              <img
                src="assets/images/gallery/tour-gallery9.png"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setOpenimg({ openingState: true, openingIndex: 8 })
                }
                className="img-fluid"
                alt="image"
              />
            </div>
            <div className="tour-gallery">
              <img
                src="assets/images/gallery/tour-gallery10.png"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setOpenimg({ openingState: true, openingIndex: 5 })
                }
                className="img-fluid"
                alt="image"
              />
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
            { src: "assets/images/gallery/big-gallery-image13.png" },
            { src: "assets/images/gallery/big-gallery-image14.png" },
          ]}
        />
      </div>
    </div>
  );
}

export default DetailsGallary;
