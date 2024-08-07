import Link from 'next/link'
import React from 'react'

function Home2Feature() {
  return (
    <div className="feature-section mb-120">
  <div className="container-xl container-lg-fluid container">
    <div className="row align-items-center">
      <div className="col-lg-6 d-lg-block d-none">
        <div className="feature-image">
          <img src="assets/images/bg/feature-img.png" className="img-fluid" alt="image" />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="feature-content">
          <span>Why We Are Awesome!</span>
          <h2>We are Professional Planners For your Vacations</h2>
          <p className="para">Lorem ipsum dolor sit amet, consectetur adi- piscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <ul className="feature-list">
            <li>Best Rate Gurantee</li>
            <li>Diverse Destinations</li>
            <li>Various Adventures</li>
            <li>Free Fast Booking</li>
            <li>Complete Guide Line</li>
          </ul>
          <Link href="/destination"><a className="eg-btn btn--primary2 btn--lg">Explorer Now</a></Link>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Home2Feature