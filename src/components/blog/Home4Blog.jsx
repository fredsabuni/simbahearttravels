import Link from 'next/link'
import React from 'react'

function Home4Blog() {
  return (
    <div className="blog-section pb-120">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6 text-center">
        <div className="section-title4 sibling3">
          <span>Recent Stories</span>
          <h2>Read Travel Stories</h2>
          <img src="assets/images/icons/section-title-vector.svg" alt="image" />
        </div>
      </div>
    </div>
    <div className="row justify-content-center g-4">
      <div className="col-lg-5 col-md-10">
        <div className="blog-single2 sibling-3">
          <div className="image">
            <img src="assets/images/blog/blog41.png" className="img-fluid" alt="image" />
          </div>
          <div className="content">
            <div className="blog-date">
              <i className="bi bi-calendar-check" /><span>January 8, 2022</span>
            </div>
            <h5><Link href="/blog-details"><a>Why Do People Travel ? Reasons People Travel in 2022</a></Link></h5>
            <Link href="/blog-details"><a  className="read-more-btn">Continue Reading<i className="bi bi-arrow-right" /></a></Link>
          </div>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="row g-4 justify-content-center">
          <div className="col-md-6 col-sm-6">
            <div className="blog-single2 sibling-4">
              <div className="image">
                <img src="assets/images/blog/blog42.png" className="img-fluid" alt="image" />
                <div className="blog-date">
                  <i className="bi bi-calendar-check" /><span>January 8, 2022</span>
                </div>
              </div>
              <div className="content">
                <span className="tour-category">Hiking, Tour</span>
                <h5><Link href="/blog-details"><a>10 Tips for best winter hik- ing experience.</a></Link></h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="blog-single2 sibling-4">
              <div className="image">
                <img src="assets/images/blog/blog43.png" className="img-fluid" alt="image" />
                <div className="blog-date">
                  <i className="bi bi-calendar-check" /><span>January 8, 2022</span>
                </div>
              </div>
              <div className="content">
                <span className="tour-category">Camping, Travels</span>
                <h5><Link href="/blog-details"><a>How to select perfect quali ty camping tent.</a></Link></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Home4Blog