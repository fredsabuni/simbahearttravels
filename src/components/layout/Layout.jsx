import Head from "next/head";
import React from "react";
import InstagramFeed from "../common/InstagramFeed";
import ScrollProgrssBtn from "../common/ScrollProgrssBtn";
import Footer1 from "../footer/Footer1";
import Header5 from "../header/Header5";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Simba Hearts Travels</title>
        <meta name="description" content="SimbaHeartsTravels | Africa | Zanzibar | Tourism" />
        <link rel="icon" href="assets/images/icons/simba-white.png" />
      </Head>
      <ScrollProgrssBtn />
      <Header5 />
      {children}
      <InstagramFeed type="wildInstagram"/>
      <Footer1 />
    </>
  );
}

export default Layout;
