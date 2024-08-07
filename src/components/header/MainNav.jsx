import Link from 'next/link';
import React, { useRef } from 'react';

function MainNav() {
  const navRef = useRef(null);
  const onRemoveClick = (e) => {
    navRef.current.classList.remove("show-menu");
  };
  return (
    <div className="main-nav">
    <div className="menu-close-btn" onClick={onRemoveClick}><i className="bi bi-x-lg" /></div>
    <div className="mobile-logo-area d-flex justify-content-lg-center justify-content-start align-items-center">
      <div className="header-logo">
        <Link href="/"><a><img alt="image" className="img-fluid" src="assets/images/icons/header4-logo.svg" /></a></Link>
      </div>
    </div>
    <ul className="menu-list">
      <li className="menu-item-has-children">
        <Link href="#"><a className="drop-down"><img src="assets/images/icons/home-icon.svg" alt="image" /> Home</a></Link><i className="bi bi-chevron-down dropdown-icon" />
        <ul className="sub-menu">
          <li><Link href="/"><a>Travel Agency 01</a></Link></li>
          <li><Link href="index-travel2"><a>Travel Agency 02</a></Link></li>
          <li><Link href="city-tour-index"><a>City Tour</a></Link></li>
          <li><Link href="index-adventure"><a>Adventure</a></Link></li>
          <li><Link href="index-wildlife"><a>Wild life</a></Link></li>
        </ul>
      </li>
      <li className="menu-item-has-children">
        <Link href="/destination"><a  className="drop-down"><img src="assets/images/icons/desitnation-icon.svg" alt="image" /> Destination</a></Link><i className="bi bi-chevron-down dropdown-icon" />
        <ul className="sub-menu">
          <li><Link href="/destination"><a>Destination</a></Link></li>
          <li><Link href="/destination-details"><a>Destination Details</a></Link></li>
        </ul>
      </li>
      <li className="menu-item-has-children">
        <Link href="/blog-grid"><a><img src="assets/images/icons/tour-icon.svg" alt="image" /> Tours</a></Link><i className="bi bi-chevron-down dropdown-icon" />
        <ul className="sub-menu">
          <li><Link href="/tour-package"><a>Tour Package 1</a></Link></li>
          <li><Link href="/tour-package2"><a>Tour Package 2</a></Link></li>
          <li><Link href="/tour-package-sidebar"><a>Package Sidebar</a></Link></li>
          <li><Link href="/tour-package-details"><a>Package Details</a></Link></li>
        </ul>
      </li>
      <li className="menu-item-has-children">
        <Link href="#"><a className="drop-down"><img src="assets/images/icons/pages.svg" alt="image" /> Pages</a></Link><i className="bi bi-chevron-down dropdown-icon" />
        <ul className="sub-menu">
          <li><Link href="/about"><a>About Us</a></Link></li>
          <li><Link href="/tour-guide"><a>Tour Guide</a></Link></li>
          <li><Link href="/gallery"><a>Gallery</a></Link></li>
          <li><Link href="/faq"><a>Faq</a></Link></li>
          <li><Link href="/error"><a>Error</a></Link></li>
          <li><Link href="/error"><a>Submenu</a></Link><i className="d-lg-flex d-none bi bi-chevron-right dropdown-icon" /><i className="d-lg-none d-flex bi bi-chevron-down dropdown-icon" />
            <ul className="sub-menu">
              <li><Link href="/about"><a>Children 1</a></Link></li>
              <li><Link href="/team"><a>Children 2</a></Link></li>
              <li><Link href="/faq"><a>Children 3</a></Link></li>
              <li><Link href="/error"><a>Children 4</a></Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="menu-item-has-children">
        <Link href="/blog-grid"><a><img src="assets/images/icons/blog-icon.svg" alt="image" /> Blog</a></Link><i className="bi bi-chevron-down dropdown-icon" />
        <ul className="sub-menu">
          <li><Link href="/blog-grid"><a>Blog Grid</a></Link></li>
          <li><Link href="/blog-standard"><a>Blog Standard</a></Link></li>
          <li><Link href="/blog-details"><a>Blog Details</a></Link></li>
        </ul>
      </li>
      <li><Link href="/contact"><a><img src="assets/images/icons/contact-icon.svg" alt="image" /> Contactus</a></Link></li>
    </ul>
    <Link href="/login"><a className="uesr-aera"><i className="bi bi-person-circle" /></a></Link>
  </div>
  )
}

export default MainNav