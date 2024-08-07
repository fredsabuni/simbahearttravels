import Link from 'next/link'
import React from 'react'

function AboutPageGuide() {
  return (
    <div className="guide-section pb-120">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xxl-6 col-xl-8 col-md-10 col-sm-12 text-center">
        <div className="section-title1">
          <span>Tour Guide’s</span>
          <h2>Meet Our Excellent Guide’s</h2>
          <img src="assets/images/icons/section-title-vector.svg" alt="image" />
        </div>
      </div>
    </div>
    <div className="row g-xl-5 g-4 justify-content-center">
      <div className="col-lg-4 col-lg-4 col-md-6 col-sm-10">
        <div className="tour-guide-single sibling-2">
          <div className="guide-image">
            <img src="assets/images/bg/guide1.png" className="img-fluid" alt="image" />
            <div className="social-area">
              <ul className="guide-social">
                <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                <li><a href="https://www.twitter.com/"><i className="bx bxl-twitter" /></a></li>
                <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li> 
                <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest" /></a></li> 
              </ul>
            </div>
          </div>
          <div className="guide-contnent">
            <h4><Link href="/tour-guide"><a>Savannah Nguyen</a></Link></h4>
            <p>Tour Guide</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-10">
        <div className="tour-guide-single sibling-2">
          <div className="guide-image">
            <img src="assets/images/bg/guide2.png" className="img-fluid" alt="image" />
            <div className="social-area">
              <ul className="guide-social">
                <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                <li><a href="https://www.twitter.com/"><i className="bx bxl-twitter" /></a></li>
                <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li> 
                <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest" /></a></li> 
              </ul>
            </div>
          </div>
          <div className="guide-contnent">
            <h4><Link href="/tour-guide"><a>Leslie Alexander</a></Link></h4>
            <p>Tour Guide</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-10">
        <div className="tour-guide-single sibling-2">
          <div className="guide-image">
            <img src="assets/images/bg/guide3.png" className="img-fluid" alt="image" />
            <div className="social-area">
              <ul className="guide-social">
                <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                <li><a href="https://www.twitter.com/"><i className="bx bxl-twitter" /></a></li>
                <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li> 
                <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest" /></a></li> 
              </ul>
            </div>
          </div>
          <div className="guide-contnent">
            <h4><Link href="/tour-guide"><a>Guy Hawkins</a></Link></h4>
            <p>Tour Guide</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default AboutPageGuide