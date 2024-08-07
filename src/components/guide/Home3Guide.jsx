import Link from 'next/link'
import React from 'react'

function Home3Guide() {
  return (
    <div className="tour-guide-section pt-120 pb-120">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6 text-center">
        <div className="section-title3">
          <span>Tour Guides</span>
          <h2>Meet Our Excellent Guide’s</h2>
        </div>
      </div>
    </div>
    <div className="row g-4 justify-content-center">
      <div className="col-lg-4 col-lg-4 col-md-6 col-sm-10">
        <div className="tour-guide-single">
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
        <div className="tour-guide-single">
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
            <h4><Link href="/tour-guide"><a>Kristin Watson</a></Link></h4>
            <p>Tour Guide</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-10">
        <div className="tour-guide-single">
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
            <h4><Link href="/tour-guide"><a>Watson Krick</a></Link></h4>
            <p>Tour Guide</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Home3Guide