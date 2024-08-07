import Link from 'next/link'
import React from 'react'

function TrandingPostWidget() {
  return (
    <div className="blog-widget">
    <h4 className="blog-widget-title">Trending Stories</h4>
    <div className="trending-post">
      <ul className="trending-post-list">
        <li>
          <div className="trending-post-single">
            <div className="package-image">
              <img src="assets/images/blog/trend-post1.png" alt="image" />
            </div>
            <div className="post-content">
              <h6><Link href="/blog-details"><a>The Most Underrated Europea Cities, According..</a></Link></h6>
              <span className="post-date">September 8, 2022</span>
            </div>
          </div>
        </li>
        <li>
          <div className="trending-post-single">
            <div className="package-image">
              <img src="assets/images/blog/trend-post2.png" alt="image" />
            </div>
            <div className="post-content">
              <h6><Link href="/blog-details"><a>The 25 Most Beautiful Beaches in Europe, From Turkey.</a></Link></h6>
              <span className="post-date">January 20, 2022</span>
            </div>
          </div>
        </li>
        <li>
          <div className="trending-post-single">
            <div className="package-image">
              <img src="assets/images/blog/trend-post3.png" alt="image" />
            </div>
            <div className="post-content">
              <h6><Link href="/blog-details"><a>A Global Food of the World’s Best Restaurants.</a></Link></h6>
              <span className="post-date">February 20, 2022</span>
            </div>
          </div>
        </li>
        <li>
          <div className="trending-post-single">
            <div className="package-image">
              <img src="assets/images/blog/trend-post4.png" alt="image" />
            </div>
            <div className="post-content">
              <h6><Link href="/blog-details"><a>Hawaii Travel Restrictions Are Lifting  to Know..</a></Link></h6>
              <span className="post-date">October 08, 2022</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default TrandingPostWidget