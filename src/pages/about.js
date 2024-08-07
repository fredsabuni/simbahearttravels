import React from "react";
import AboutFeature from "../components/about/AboutFeature";
import Breadcrumb from "../components/common/Breadcrumb";
import Home1Counter from "../components/countdown/Home1Counter";
import AboutPageGuide from "../components/guide/AboutPageGuide";
import Layout from "../components/layout/Layout";
import Home1Testimonial from "../components/testimonial/Home1Testimonial";
import Home4WhyChooseUs from "../components/whyChooseUs/Home4WhyChooseUs";

function AboutPage() {
  return (
    <Layout>
      <Breadcrumb
        pageTitle="Welcome to Astrip"
        pageDetails="We Are Best Tour & Travel Agency In The World."
      />
      <AboutFeature />
      <AboutPageGuide />
      <Home1Counter />
      <Home1Testimonial />
      <Home4WhyChooseUs padding="pt-120" />
    </Layout>
  );
}

export default AboutPage;
