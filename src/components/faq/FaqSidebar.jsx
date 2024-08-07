import Link from 'next/link'
import React from 'react'

function FaqSidebar() {
  return (
    <div className="sidebar-widget">
  <div className="newsletter-area mb-30">
    <div className="banner-form-box">
      <h3>Join Newsletter</h3>
      <p>If you have questions, do not hesitate to ask!</p>
      <form className="newsletter-form">
        <div className="form-inner">
          <input type="text" placeholder="Your Name" />
        </div>
        <div className="form-inner">
          <input type="email" placeholder="Your E-mail" />
        </div>
        <button className="eg-btn btn--primary btn--lg w-100">Join Us</button>
      </form>
    </div>
  </div>
  <div className="sidebar-offer">
    <div className="offer-badge">
      <img src="assets/images/icons/offer-badge.svg" alt="image" />
    </div>
    <div className="offer-content">
      <div className="review-area">
        <ul className="star-list">
          <li><i className="bi bi-star-fill" /></li>
          <li><i className="bi bi-star-fill" /></li>
          <li><i className="bi bi-star-fill" /></li>
          <li><i className="bi bi-star-fill" /></li>
          <li><i className="bi bi-star-half" /></li>
        </ul>
        <span>(10 Review)</span>
      </div>
      <h4><Link href="/tour-package-details"><a>Aegean Adventure Cruise</a></Link></h4>
      <div className="price">
        <span>03 days / from $2500</span>
      </div>
    </div>
    <img src="assets/images/bg/sidebar-offer.png" className="img-fluid" alt="image" />
  </div>
</div>

  )
}

export default FaqSidebar