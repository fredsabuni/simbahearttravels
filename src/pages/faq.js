import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import FaqForm from "../components/faq/FaqForm";
import FaqQuestion from "../components/faq/FaqQuestion";
import FaqSidebar from "../components/faq/FaqSidebar";
import Layout from "../components/layout/Layout";

function FaqPage() {
  return (
    <Layout>
      <Breadcrumb
        pageTitle="Questions & Answers"
        pageDetails="Frequently Asked Questions"
      />
      <div className="faq-section pt-120 pb-120">
        <div className="container">
          <div className="row g-5 justify-content-center">
            <div className="col-lg-8">
              <FaqQuestion />
              <FaqForm />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <FaqSidebar />
            </div>
          </div>
        </div>
      </div>  
    </Layout>
  );
}

export default FaqPage;
