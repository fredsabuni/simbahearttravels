import Link from 'next/link'
import React from 'react'

function Home2Tourplan() {
  return (
    <div className="tour-place-section pt-120 pb-120">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <div className="section-title2 text-center d-flex flex-column justify-content-center">
            <svg width={2} height={40} viewBox="0 0 2 40" xmlns="http://www.w3.org/2000/svg">
              <rect width={2} height={40} rx={1} />
            </svg>
            <span>Have a look</span>
            <h2>Find Your Desire Places</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="tour-card-wrapper">
        <div className="col-40">
          <div className="tour-card-alpha">
            <div className="image">
              <img src="assets/images/bg/tour1.png" className="img-fluid" alt="image" />
            </div>
            <div className="tour-badge ms-md-5 mx-auto">
              <h5><Link href="/destination-details"><a>Halland Canals</a></Link></h5>
              <p>04 Tours Place</p>
              <span />
            </div>
          </div>
        </div>
        <div className="col-60">
          <div className="tour-card-beta">
            <div className="image"> 
              <img src="assets/images/bg/tour2.png" className="img-fluid" alt="image" />
            </div>
            <div className="tour-badge sibling-2 mx-auto">
              <h5><Link href="/destination-details"><a>Grand Switzerland Canals.</a></Link></h5>
              <p>04 Tours Place</p>
              <span />
            </div>
          </div>
        </div>
        <div className="col-30">
          <div className="tour-card-gamma">
            <div className="image">
              <img src="assets/images/bg/tour3.png" className="img-fluid" alt="image" />
            </div>
            <div className="tour-badge mx-auto">
              <h5><Link href="/destination-details"><a>Toronto</a></Link></h5>
              <p>02 Tours Place</p>
              <span />
            </div>
          </div>
        </div>
        <div className="col-40">
          <div className="tour-card-delta">
            <div className="image">
              <img src="assets/images/bg/tour4.png" className="img-fluid" alt="image" />
            </div>
            <div className="tour-badge mx-auto">
              <h5><Link href="/destination-details"><a>Marbella</a></Link></h5>
              <p>05 Tours Place</p>
              <span />
            </div>
          </div>
        </div>
        <div className="col-30">
          <div className="tour-card-gamma">
            <div className="image">
              <img src="assets/images/bg/tour5.png" className="img-fluid" alt="image" />
            </div>
            <div className="tour-badge mx-auto">
              <h5><Link href="/destination-details"><a>Romantic Paris</a></Link></h5>
              <p>04 Tours Place</p>
              <span />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Home2Tourplan