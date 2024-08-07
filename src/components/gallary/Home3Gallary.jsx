import Link from 'next/link'
import React from 'react'

function Home3Gallary() {
  return (
    <div className="gallery-layout">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6 text-center">
        <div className="section-title3">
          <span>Find Destinations</span>
          <h2>Explore Top Destinations</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="gallery-wrapper">
        <div className="box c">
          <div className="destination-single2">
            <img src="assets/images/bg/destination31.png" alt="image" />
            <div className="destination-content">
              <h4><Link href="/destination-details"><a>Plitvice Lakes, Croatia</a></Link></h4>
              <p><span>10</span> Tour’s Place</p>
            </div>
          </div>
        </div>
        <div className="box b">
          <div className="destination-single2">
            <img src="assets/images/bg/destination35.png" alt="image" />
            <div className="destination-content">
              <h4><Link href="/destination-details"><a>New York</a></Link></h4>
              <p><span>10</span> Tour’s Place</p>
            </div>
          </div>
        </div>
        <div className="box c">
          <div className="destination-single2">
            <img src="assets/images/bg/destination32.png" alt="image" />
            <div className="destination-content">
              <h4><Link href="/destination-details"><a>Indonesia</a></Link></h4>
              <p><span>10</span> Tour’s Place</p>
            </div>
          </div>
        </div>
        <div className="box d">
          <div className="destination-single2">
            <img src="assets/images/bg/destination36.png" alt="image" />
            <div className="destination-content">
              <h4><Link href="/destination-details"><a>China</a></Link></h4>
              <p><span>10</span> Tour’s Place</p>
            </div>
          </div>
        </div>
        <div className="box e">
          <div className="destination-single2">
            <img src="assets/images/bg/destination37.png" alt="image" />
            <div className="destination-content">
              <h4><Link href="/destination-details"><a>Egypt</a></Link></h4>
              <p><span>10</span> Tour’s Place</p>
            </div>
          </div>
        </div>
        <div className="box g">
          <div className="destination-single2">
            <img src="assets/images/bg/destination38.png" alt="image" />
            <div className="destination-content">
              <h4><Link href="/destination-details"><a>KualaLumpur</a></Link></h4>
              <p><span>10</span> Tour’s Place</p>
            </div>
          </div>
        </div>
        <div className="box f">
          <div className="destination-single2">
            <img src="assets/images/bg/destination33.png" alt="image" />
            <div className="destination-content">
              <h4><Link href="/destination-details"><a>Bangkok</a></Link></h4>
              <p><span>10</span> Tour’s Place</p>
            </div>
          </div>
        </div>
        <div className="box h">
          <div className="destination-single2">
            <img src="assets/images/bg/destination34.png" alt="image" />
            <div className="destination-content">
              <h4><Link href="/destination-details">France<a></a></Link></h4>
              <p><span>10</span> Tour’s Place</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Home3Gallary