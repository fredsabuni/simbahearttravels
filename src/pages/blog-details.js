import React from "react";
import BlogDetailsAuthor from "../components/blog/BlogDetailsAuthor";
import BlogDetailsComments from "../components/blog/BlogDetailsComments";
import BlogDetailsSingle from "../components/blog/BlogDetailsSingle";
import BlogShare from "../components/blog/BlogShare";
import BlogSocialLinks from "../components/blog/BlogSocialLinks";
import CategoryWidget from "../components/blog/CategoryWidget";
import PostComment from "../components/blog/PostComment";
import SearchWidget from "../components/blog/SearchWidget";
import SideBarOfferWidget from "../components/blog/SideBarOfferWidget";
import TrandingPostWidget from "../components/blog/TrandingPostWidget";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";

function BlogDetailsPage() {
  return (
    <Layout>
      <Breadcrumb
        pageTitle="Travel / Life Style"
        pageDetails="What To Know Before You Travel Plan A Trip."
      />
      <div className="blog-standard-section pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 pe-lg-3">
              <BlogDetailsSingle />
              <BlogShare />
              <BlogDetailsAuthor />
              <BlogDetailsComments />
              <PostComment />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="blog-sidebar ps-lg-4">
                <SearchWidget />
                <TrandingPostWidget />
                <CategoryWidget />
                <BlogSocialLinks />
                <SideBarOfferWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogDetailsPage;
