import Link from 'next/link'
import React from 'react'

function Home3Blog() {
  return (
    <div className="blog-section pb-120">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6 text-center">
        <div className="section-title3">
          <span>News and Articles</span>
          <h2>Stay Update with Travel Tips!</h2>
        </div>
      </div>
    </div>
    <div className="row g-4 justify-content-center">
      <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-10">
        <div className="blog-single3">
          <div className="image">
            <img src="assets/images/blog/blog31.png" className="img-fluid" alt="image" />
            <span className="blog-date"><i className="bi bi-calendar-check" />25 Sep 2022</span>
          </div>
          <div className="content">
            <span className="category">Holiday, Place</span>
            <h4><Link href="/blog-details">The Social art of Zaha Hadid Arch iteeture’s Engaging.</Link></h4>
            <Link href="/blog-details"><a className="read-more-btn sibling-2">Continue Reading<i className="bi bi-arrow-right" /></a></Link>
          </div>
        </div>
      </div>
      <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-10">
        <div className="blog-single3">
          <div className="image">
            <img src="assets/images/blog/blog32.png" className="img-fluid" alt="image" />
            <span className="blog-date"><i className="bi bi-calendar-check" />25 Sep 2022</span>
          </div>
          <div className="content">
            <span className="category">Holiday, Place</span>
            <h4><Link href="/blog-details"><a>A True Horseman’s Tale Living For a Year on Countryside</a></Link></h4>
            <Link href="/blog-details"><a className="read-more-btn sibling-2">Continue Reading<i className="bi bi-arrow-right" /></a></Link>
          </div>
        </div>
      </div>
      <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-10">
        <div className="blog-single3">
          <div className="image">
            <img src="assets/images/blog/blog33.png" className="img-fluid" alt="image" />
            <span className="blog-date"><i className="bi bi-calendar-check" />25 Sep 2022</span>
          </div>
          <div className="content">
            <span className="category">Holiday, Place</span>
            <h4><Link href="/blog-details"><a>Safety Measures for trekking in waterafal minimum</a></Link></h4>
            <Link href="/blog-details"><a className="read-more-btn sibling-2">Continue Reading<i className="bi bi-arrow-right" /></a></Link>
          </div>
        </div>
      </div>
      <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-10">
        <div className="blog-single3">
          <div className="image">
            <img src="assets/images/blog/blog34.png" className="img-fluid" alt="image" />
            <span className="blog-date"><i className="bi bi-calendar-check" />25 Sep 2022</span>
          </div>
          <div className="content">
            <span className="category">Holiday, Place</span>
            <h4><Link href="/blog-details"><a>Day out on the he de re, getting hotter and hotter.</a></Link></h4>
            <Link href="/blog-details"><a className="read-more-btn sibling-2">Continue Reading<i className="bi bi-arrow-right" /></a></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Home3Blog