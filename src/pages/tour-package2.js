import Link from 'next/link'
import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import Layout from '../components/layout/Layout'
import packagedata from "../data/offer.json"
function TourTackage2() {
  return (
 
    <Layout>
      <Breadcrumb pageDetails="Get The Best Plans For Your’s"pageTitle="Choose Your Tous" />
      <div className="tour-package-section pt-120 pb-120">
  <div className="container">
    <div className="row g-4">
      {
        packagedata.map((data)=>{
          const {   id,
            image,
            offerPercentage,
            rateing,
            title,
            regularPrice,
            offerPrice,} = data;
          return(
            <div key={id} className="col-lg-4 col-md-6 col-sm-12">
            <div className="deal-single1">
              <div className="deal-image">
                <span className="favourite">
                  <i className="bi bi-suit-heart-fill" />
                </span>
                <span className="discount-bagde">{offerPercentage}%</span>
                <img src={image} className="img-fluid" alt="image" />
              </div>
              <div className="deal-content">
                <div className="review-area">
                  <ul className="star-list">
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-half" /></li>
                  </ul>
                  <span>({rateing} Review)</span>
                </div>
                <h4><Link href="/tour-package-details"><a>{title}</a></Link></h4>
                <div className="price">
                  <span>From ${offerPrice}</span><del>/S{regularPrice}</del>
                </div>
                <Link href="/tour-package-details"><a className="eg-btn btn--primary-outline btn--md">Explorer Now</a></Link>
              </div>
            </div>
          </div>
          )
        })
      }
     
    
    </div>
    <div className="row justify-content-center">
      <div className="col-md-8">
        <nav className="pagination-wrap pt-50">
          <ul className="pagination d-flex justify-content-center gap-md-3 gap-2">
            <li className="page-item">
              <a className="page-link" href="#" tabIndex={-1}><i className="bi bi-arrow-left" /> PREV</a>
            </li>
            <li className="page-item"><a className="page-link" href="#">01</a></li>
            <li className="page-item active" aria-current="page">
              <a className="page-link" href="#">02</a>
            </li>
            <li className="page-item"><a className="page-link" href="#">03</a></li>
            <li className="page-item">
              <a className="page-link" href="#">NEXT <i className="bi bi-arrow-right" /></a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</div>

    </Layout>
  )
}

export default TourTackage2