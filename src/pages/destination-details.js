import Link from 'next/link'
import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import DestinationLeft from '../components/destinationDetails/DestinationLeft'
import Layout from '../components/layout/Layout'

function DestinationDetails() {
  return (
    <Layout>
    <Breadcrumb pageDetails="The Beauty Of Paris" pageTitle="Destination Details" reviewCount={16} />
    <div className="destination-details-section pt-120 pb-120">
  <div className="container">
    <div className="row g-4 justify-content-center">
      <div className="col-lg-8">
        <div className="destination-details">
         <DestinationLeft/>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-10">
        <div className="destination-sidebar">
          <div className="desti-sidebar-widget sidebar-search">
            <form>
              <div className="form-inner">
                <input type="text" placeholder="Search" />
                <button type="submit"><i className="bx bx-search" /></button>
              </div>
            </form>
          </div>
          <div className="desti-sidebar-widget tour-package">
            <h4 className="widget-title">Astrip Tour List</h4>
            <ul className="tour-package-list">
              <li>
                <div className="sidebar-package-single">
                  <div className="package-image">
                    <img src="assets/images/bg/sidebar-pkg1.png" alt="image" />
                  </div>
                  <div className="package-content">
                    <h5><Link href="/tour-package-details"><a>The city of taj mahal, India.</a></Link></h5>
                    <span><i className="bi bi-clock" /> 02 Days 01 Nights</span>
                    <p className="package-price">From $200</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="sidebar-package-single">
                  <div className="package-image">
                    <img src="assets/images/bg/sidebar-pkg2.png" alt="image" />
                  </div>
                  <div className="package-content">
                    <h5><Link href="/tour-package-details"><a>Pramids Of Giza, Egypt.</a></Link></h5>
                    <span><i className="bi bi-clock" /> 02 Days 01 Nights</span>
                    <p className="package-price">From $220</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="sidebar-package-single">
                  <div className="package-image">
                    <img src="assets/images/bg/sidebar-pkg3.png" alt="image" />
                  </div>
                  <div className="package-content">
                    <h5><Link href="/tour-package-details"><a>The Colosseum, Rome.</a></Link></h5>
                    <span><i className="bi bi-clock" /> 02 Days 01 Nights</span>
                    <p className="package-price">From $250</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="desti-sidebar-widget tour-category">
            <h4 className="widget-title">Travel Categories</h4>
            <ul className="tour-category-list">
              <li><Link href="#"><a>Adventure (03)</a></Link></li>
              <li><Link href="#"><a>Travel Vaction (04)</a></Link></li>
              <li><Link href="#"><a>Popular Tour’s (08)</a></Link></li>
              <li><Link href="#"><a>Couple Tour (05)</a></Link></li>
              <li><Link href="#"><a>Family Adventure (07)</a></Link></li>
            </ul>
          </div>
          <div className="desti-sidebar-widget sidebar-social-area">
            <h4 className="widget-title">Follow us Astrip</h4>
            <ul className="sidebar-social-list">
              <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
              <li><a href="https://www.twitter.com/"><i className="bx bxl-twitter" /></a></li>
              <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li> 
              <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest" /></a></li> 
            </ul>
          </div>
          <div className="desti-sidebar-widget sidebar-widget">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </Layout>
  )
}

export default DestinationDetails