import Link from 'next/link';
import React, { useState } from 'react';
import ModalVideo from "react-modal-video";
function Home1Video() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="video-section mt-120">
    <div className="container">
      <div className="row justify-content-center align-items-center g-4">
        <div className="col-lg-7 col-md-10">
          <div className="video-section-content">
            <span>Feel The Vibe</span><img src="assets/images/icons/fly-shape1.svg" alt="image" />
            <h2>Life Begins at The End of Your Comfort Zone.</h2>
            <p className="para">Lorem ipsum dolor sit amet, consectetur adi- piscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Exercitation ullam laboris nisi ut aliquip ex ea commodo consequat.</p>
            <Link href="/destination"><a  className="eg-btn btn--primary btn--lg">Discover More</a></Link>
          </div>
        </div>
        <div className="col-lg-5 col-md-10 d-flex justify-content-lg-end justify-content-center">
          <div className="video-wrapper">
            <div className="video-play">
              <a onClick={() => setOpen(true)} style={{cursor: 'pointer'}} className="popup-youtube video-icon"><i className="bx bx-play" /></a>
            </div>
            <span className="watch-video">Watch Now</span>
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
  </div>
  
  )
}

export default Home1Video