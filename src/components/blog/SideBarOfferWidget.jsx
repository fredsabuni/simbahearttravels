import Link from 'next/link'
import React from 'react'

function SideBarOfferWidget() {
  return (
    <div className="blog-widget">
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

export default SideBarOfferWidget