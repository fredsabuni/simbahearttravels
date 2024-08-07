import Link from 'next/link'
import React from 'react'

function Home4Destination() {
  return (
    <div className="destination-section4 overflow-hidden pt-120 pb-90">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6 text-center">
        <div className="section-title4 sibling3">
          <span>Destination</span>
          <h2>Our Popular Adventure Place</h2>
          <img src="assets/images/icons/section-title-vector.svg" alt="image" />
        </div>
      </div>
    </div>
    <div className="row justify-content-center g-5">
      <div className="col-lg-4 col-md-6 col-sm-10">
        <div className="destination-single4 ">
          <img src="assets/images/bg/destination41.png" className="img-fluid" alt="image" />
          <div className="desti-content">
            <h4><Link href="/destination-details"><a>Surfing</a></Link></h4>
            <i className="bx bx-time-five" /><span>06 Hours</span>
          </div>
        </div>
        <div className="destination-single4 ">
          <img src="assets/images/bg/destination42.png" className="img-fluid" alt="image" />
          <div className="desti-content">
            <h4><Link href="/destination-details"><a>Mountain Cycling</a></Link></h4>
            <i className="bx bx-time-five" /><span>03 Hours</span>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-10">
        <div className="destination-single4">
          <img src="assets/images/bg/destination43.png" className="img-fluid" alt="image" />
          <div className="desti-content">
            <h4><Link href="/destination-details"><a>Mountain Climbing</a></Link></h4>
            <i className="bx bx-time-five" /><span>05 Hours</span>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-10">
        <div className="destination-single4">
          <img src="assets/images/bg/destination44.png" className="img-fluid" alt="image" />
          <div className="desti-content">
            <h4><Link href="/destination-details"><a>Mountain Sundae Rock</a></Link></h4>
            <i className="bx bx-time-five" /><span>01 Hours</span>
          </div>
        </div>
        <div className="destination-single4 ">
          <img src="assets/images/bg/destination45.png" className="img-fluid" alt="image" />
          <div className="desti-content">
            <h4><Link href="/destination-details"><a>Skating</a></Link></h4>
            <i className="bx bx-time-five" /><span>02 Hours</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Home4Destination