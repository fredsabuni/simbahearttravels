import React, { useState } from 'react';
import ModalVideo from "react-modal-video";
function Home3Video() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="video-section2 position-relative">
    <div className="video-wrapper sibling-4">
      <div className="video-play sibling-2">
        <a onClick={() => setOpen(true)} style={{cursor: 'pointer'}} className="popup-youtube video-icon"><i className="bx bx-play" /></a>
      </div>
      <span className="watch-video">Watch Now</span>
    </div>
    <div className="container">
      <div className="row justify-content-center align-items-center g-4">
        <div className="col-lg-12 col-md-10">
          <div className="video-section-content sibling-2">
            <h2>Explore Your Travel</h2>
            <p className="para">Your New Traveling Idea</p>
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
  
  )
}

export default Home3Video