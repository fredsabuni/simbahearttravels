import React from 'react'

function Home3Newslatter() {
  return (
    <div className="newsletter-section">
    <div className="container">
      <div className="newsletter-area row justify-content-center align-items-center">
        <div className="col-lg-5 d-flex justify-content-start">
          <div className="newsletter-title">
            <img src="assets/images/icons/newsletter-icon.svg" alt="image" /><h5>Join Our Weekly Newsletter</h5>
          </div>
        </div>
        <div className="col-lg-5 justify-content-center">
          <div className="newsletter-wrap">
            <form>
              <input type="text" placeholder="Email Address" />
            </form>
            <button type="submit">Join Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Home3Newslatter