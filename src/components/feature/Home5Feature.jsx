import Link from 'next/link'
import React from 'react'

function Home5Feature() {
  return (
    <div className="feature-section2 pb-120">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 order-lg-1 order-2">
          <div className="feature-image-group d-flex flex-row justify-content-center gap-5">
            <div className="feature-image">
              <img src="assets/images/bg/feature-img1.png" className="img-fluid" alt="image" />
            </div>
            <div className="feature-image translate-y">
              <img src="assets/images/bg/feature-img2.png" className="img-fluid" alt="image" />
            </div>
          </div>
        </div>
        <div className="col-lg-6 ps-lg-5 order-lg-2 order-1">
          <div className="about5-title text-start">
            <span>Why Choose Us</span>
            <h2>Why Should Choose <span>Our Zoo Visit?</span></h2>
            <p>The Wildlife conservation is long term commitment and journey that requires the cooperation of everyone in the community. We are very much evolved into practice of creating better place.</p>
          </div>
          <ul className="feature2-list">
            <li>Making this first true generator</li>
            <li>Many desktop publish packages</li>
            <li>If you are going to passage</li>
          </ul>
          <Link href="/contact"><a className="eg-btn btn--primary3-outline btn--lg">Contact Us</a></Link>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Home5Feature