import Link from "next/link";
import React from "react";
import blogData from "../../data/blog.json";
function Home1Blog() {
  return (
    <div className="blog-section pt-120 pb-120 overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10 col-md-12 text-center">
            <div className="section-title1">
              <span>Blog &amp; News</span>
              <h2>Get to Know Travel Experiences</h2>
              <img
                src="assets/images/icons/section-title-vector.svg"
                alt="image"
              />
            </div>
          </div>
        </div>
        <div className="row g-5 justify-content-center">
          {blogData.slice(0, 3).map((data) => {
            const { id, blogtitle, date, category, image } = data;
            return (
              <div key={id} className="col-lg-4 col-md-6 col-sm-10">
                <div className="blog-single1">
                  <div className="image">
                    <img src={image} className="img-fluid" alt="image" />
                    <span className="blog-date">{date}</span>
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="/blog-details"><a>{blogtitle}</a></Link>
                    </h4>
                    <Link href="/blog-details">
                      <a className="read-more-btn">Continue Reading
                      <i className="bi bi-arrow-right" /></a>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home1Blog;
