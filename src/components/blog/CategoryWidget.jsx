import Link from 'next/link'
import React from 'react'

function CategoryWidget() {
  return (
    <div className="blog-widget">
    <h4 className="blog-widget-title">Travel Categories</h4>
    <div className="tour-category">
      <ul className="tour-category-list">
        <li><Link href="#"><a>Adventure (03)</a></Link></li>
        <li><Link href="#"><a>Travel Vaction (04)</a></Link></li>
        <li><Link href="#"><a>Popular Tour’s (08)</a></Link></li>
        <li><Link href="#"><a>Couple Tour (05)</a></Link></li>
        <li><Link href="#"><a>Family Adventure (07)</a></Link></li>
      </ul>
    </div>
  </div>
  )
}

export default CategoryWidget