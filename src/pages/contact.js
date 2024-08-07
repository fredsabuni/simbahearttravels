import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import ContactForm from "../components/contact/ContactForm";
import InfoSection from "../components/contact/InfoSection";
import HubspotForm from "../components/contact/HubSpotForm"
import Layout from "../components/layout/Layout";

function Contact() {
  return (
    <Layout>
      <Breadcrumb
        pageTitle="Get in Touch"
        pageDetails="Let’s Have A Talk Together"
      />
      <InfoSection />
      <ContactForm />
      {/* <HubspotForm /> */}
    </Layout>
  );
}

export default Contact;
