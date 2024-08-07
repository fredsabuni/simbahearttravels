import React, { useState } from 'react';
import CountUp from 'react-countup';
import ModalVideo from "react-modal-video";
function Home5Counter() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="counter-section5 pt-120 pb-120">
    <div className="video-wrapper sibling-3 ">
      <div className="video-play sibling-3">
        <a onClick={() => setOpen(true)} style={{cursor: 'pointer'}} className="popup-youtube video-icon"><i className="bx bx-play" /></a>
      </div>
      <span className="watch-video">Play Video</span>
    </div>
    <img src="assets/images/bg/simba-counter-bg.jpg" className="counter5-bg" alt="image" />
    <div className="container-sm container-fluid">
      <div className="row g-4 d-flex justify-content-center">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <div className="counter-single sibling-3 text-center d-flex flex-column hover-border1">
            <div className="counter-icon"><img src="assets/images/icons/safari.svg" className="img-fluid" alt="image" /></div>
            <div className="coundown d-flex flex-column">
              <div className="d-flex flex-row justify-content-center align-items-center">
                <h3 className="odometer" data-odometer-final={110}><CountUp end={110} duration ={5} /></h3><i className="bi bi-plus" />
              </div>
              <p>Safari Adventures</p>
            </div>
          </div>
        </div>
        {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
          <div className="counter-single sibling-3 text-center d-flex flex-column hover-border1">
            <div className="counter-icon"><img src="assets/images/icons/safari.svg" alt="imagte" /></div>
            <div className="coundown d-flex flex-column">
              <div className="d-flex flex-row justify-content-center align-items-center">
                <h3 className="odometer" data-odometer-final={20}><CountUp end={100} duration ={5} /></h3><i className="bi bi-plus" />
              </div>
              <p>Stunning Places</p>
            </div>
          </div>
        </div> */}
        {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
          <div className="counter-single sibling-3 text-center d-flex flex-column hover-border1">
            <div className="counter-icon"><img src="assets/images/icons/medal.svg" alt="image" /></div>
            <div className="coundown d-flex flex-column">
              <div className="d-flex flex-row justify-content-center align-items-center">
                <h3 className="odometer" data-odometer-final={10}><CountUp end={400} duration ={5} /></h3><i className="bi bi-plus" />
              </div>
              <p>Satisfied Customer</p>
            </div>
          </div>
        </div> */}
        {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
          <div className="counter-single sibling-3 text-center d-flex flex-column hover-border1">
            <div className="counter-icon"><img src="assets/images/icons/visitor.svg" alt="image" /></div>
            <div className="coundown d-flex flex-column">
              <div className="d-flex flex-row justify-content-center align-items-center">
                <h3 className="odometer" data-odometer-final={3000}><CountUp end={3000} duration ={5} /></h3><i className="bi bi-plus" />
              </div>
              <p>Travel Guides</p>
            </div>
          </div>
        </div> */}
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

export default Home5Counter