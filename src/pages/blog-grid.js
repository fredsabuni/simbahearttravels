import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";
import blogdata from "../data/blog.json";
function BlogGridPage() {
  return (
    <Layout>
      <Breadcrumb
        pageTitle="Blog & News"
        pageDetails="Get Know Travel Experience"
      />
      <div className="blog-grid-section pt-120 pb-120">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {blogdata.map((data) => {
              const { id, image, date, category, blogtitle } = data;
              return (
                <div key={id} className="col-lg-4 col-md-6 col-sm-10">
                  <div className="blog-single2 sibling-5">
                    <div className="image">
                      <img src={image} className="img-fluid" alt="image" />
                      <span className="blog-category">{category}</span>
                    </div>
                    <div className="content">
                      <h5>
                        <Link href="/blog-details">
                          <a>{blogtitle}</a>
                        </Link>
                      </h5>
                      <div className="blog-date">
                        <i className="bi bi-calendar-check" />
                        <span>{date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <nav className="pagination-wrap pt-50">
                <ul className="pagination d-flex justify-content-center gap-md-3 gap-2">
                  <li className="page-item">
                    <a className="page-link" href="#" tabIndex={-1}>
                      <i className="bi bi-arrow-left" /> PREV
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      01
                    </a>
                  </li>
                  <li className="page-item active" aria-current="page">
                    <a className="page-link" href="#">
                      02
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      03
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      NEXT <i className="bi bi-arrow-right" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogGridPage;
