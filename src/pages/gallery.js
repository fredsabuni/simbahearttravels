import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Gallary from "../components/gallary/Gallery";
import Layout from "../components/layout/Layout";

function GalleryPage() {
  return (
    <Layout>
      <Breadcrumb
        pageTitle="Our Gallery"
        pageDetails="Best Images And Video Gallery"
      />
      <Gallary />
    </Layout>
  );
}

export default GalleryPage;
