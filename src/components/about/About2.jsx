import Link from "next/link";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
function About2() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="intro-sectoin position-relative">
      <div className="video-wrapper sibling-2 ">
        <div className="video-play sibling-2">
          <a onClick={() => setOpen(true)} style={{cursor: 'pointer'}}
            className="popup-youtube video-icon"
          >
            <i className="bx bx-play" />
          </a>
        </div>
        <span className="watch-video">Play Video</span>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="intro-content">
              <span>Welcome Astrip</span>
              <h2>We Help You Planning Your Journey!</h2>
              <p>
                This is Photoshop&apos;s version of Lorem Ipsum. Proin gravida
                nibh vel velit auctor aliquet. Aenean sollicitudin, loreendum
                auctor nisi elit consequat ipsum, nec sagittis sem nibh id elit.
                vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
                Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
                mauris vitae erat consequat auctor eu in elit.
              </p>
              <Link
                href="/about"
                
              >
                <a className="eg-btn btn-primary2-outline sibling-2 btn--lg">Learn More</a>
              </Link>
            </div>
          </div>
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
  );
}

export default About2;
