import Link from 'next/link'
import React from 'react'

function Home5Blog() {
  return (
    <div className="blog-section pt-120 pb-120 overflow-hidden">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-6 col-lg-8 col-md-12">
        <div className="section-title5 text-center">
          <img src="assets/images/icons/sec-title-vector3.svg" alt="image" />
          <span>Latest Blog!</span>
          <h2>Our Latest News <span>&amp; Articles!</span></h2>
          <p>Exclusive Deals, Central Locations! Search &amp; Book Cheap Hotels Online. Nexte Right Property for You.</p>
        </div>
      </div>
    </div>
    <div className="row gy-5 justify-content-center">
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10">
        <div className="blog-single2 sibling-2">
          <div className="image">
            <img src="assets/images/blog/blog52.png" className="img-fluid" alt="image" />
          </div>
          <div className="content">
            <div className="blog-date">
              <i className="bi bi-calendar-check" /><span>Augest 18, 2022</span>
            </div>
            <h5><Link href="/blog-details"><a>Scottish ‘Great Wood’ From A Real World Legendary.</a></Link></h5>
            <Link href="/blog-details"><a><i className="bi bi-arrow-right" /></a></Link>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10">
        <div className="blog-single2 sibling-2">
          <div className="image">
            <img src="assets/images/blog/blog51.png" className="img-fluid" alt="image" />
          </div>
          <div className="content">
            <div className="blog-date">
              <i className="bi bi-calendar-check" /><span>January 8, 2022</span>
            </div>
            <h5><Link href="/blog-details"><a>Amazing Underwater Photographers Everyone Around The World</a></Link></h5>
            <Link href="/blog-details"><a><i className="bi bi-arrow-right" /></a></Link>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10">
        <div className="blog-single2 sibling-2">
          <div className="image">
            <img src="assets/images/blog/blog53.png" className="img-fluid" alt="image" />
          </div>
          <div className="content">
            <div className="blog-date">
              <i className="bi bi-calendar-check" /><span>Augest 28, 2022</span>
            </div>
            <h5><Link href="/blog-details"><a>Scottish ‘Great Wood’ From A Real World Legendary.</a></Link></h5>
            <Link href="/blog-details"><a><i className="bi bi-arrow-right" /></a></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Home5Blog