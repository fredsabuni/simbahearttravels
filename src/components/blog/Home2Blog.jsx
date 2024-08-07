import Link from 'next/link'
import React from 'react'

function Home2Blog() {
  return (
    <div className="blog-section pt-120 pb-120 overflow-hidden">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6 text-center">
        <div className="section-title2 text-center d-flex flex-column justify-content-center">
          <svg width={2} height={40} viewBox="0 0 2 40" xmlns="http://www.w3.org/2000/svg">
            <rect width={2} height={40} rx={1} />
          </svg>
          <span>Blog and News</span>
          <h2>Our Latest Travel Stories</h2>
        </div>
      </div>
    </div>
    <div className="row g-4 justify-content-center">
      <div className="col-lg-4 col-md-6 col-sm-10">
        <div className="blog-single2">
          <div className="image">
            <img src="assets/images/blog/blog21.png" className="img-fluid" alt="image" />
            <span className="blog-category">Travel / Style</span>
          </div>
          <div className="content">
            <h5><Link href="/blog-details"><a>The Social Art of Zaha Hadid, Architecture’s Engaging Presence</a></Link></h5>
            <div className="blog-date">
              <i className="bi bi-calendar-check" /><span>February 8, 2022</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-10">
        <div className="blog-single2">
          <div className="image">
            <img src="assets/images/blog/blog22.png" className="img-fluid" alt="image" />
            <span className="blog-category">City Travel</span>
          </div>
          <div className="content">
            <h5><Link href="/blog-details"><a>Li River, China’s Orignial Postcard Landcaspe</a></Link></h5>
            <div className="blog-date">
              <i className="bi bi-calendar-check" /><span>February 10, 2022</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-10">
        <div className="blog-single2">
          <div className="image">
            <img src="assets/images/blog/blog23.png" className="img-fluid" alt="image" />
            <span className="blog-category">Travel / Style</span>
          </div>
          <div className="content">
            <h5><Link href="/blog-details"><a>Jungles In Paris Vermont’s Rugged, Retro Ski Mountain</a></Link></h5>
            <div className="blog-date">
              <i className="bi bi-calendar-check" /><span>March 12, 2022</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Home2Blog