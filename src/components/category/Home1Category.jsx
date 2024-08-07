import Link from 'next/link'
import React from 'react'

function Home1Category() {
  return (
    <div className="category-section pt-120 pb-120">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-8 col-lg-10 col-md-12 text-center">
        <div className="section-title1">
          <span>Travel Category</span>
          <h2>Our Popular Tours Type</h2>
          <img src="assets/images/icons/section-title-vector.svg" className="img-fluid" alt="image" />
        </div>
      </div>
    </div>
    <div className="row row-cols-xl-6 row-cols-lg-4 row-cols-md-4 row-cols-sm-3 row-cols-2 justify-content-center g-xxl-5 g-4">
      <div className="col">
        <div className="category-single1">
          <div className="icon">
            <img src="assets/images/icons/adventure.svg" alt="image" />  
          </div>
          <div className="content">
            <h4><Link href="/tour-package"><a>Adventure</a></Link></h4>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="category-single1">
          <div className="icon">
            <img src="assets/images/icons/city-tour.svg" alt="image" />     
          </div>
          <div className="content">
            <h4><Link href="/tour-package">City Tour</Link></h4>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="category-single1">
          <div className="icon">
            <img src="assets/images/icons/sheep.svg" alt="image" />    
          </div>
          <div className="content">
            <h4><Link href="/tour-package"><a>Cruises Tour</a></Link></h4>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="category-single1">
          <div className="icon">
            <img src="assets/images/icons/wedding.svg" alt="image" />   
          </div>
          <div className="content">
            <h4><Link href="/tour-package"><a>Wedding</a></Link></h4>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="category-single1">
          <div className="icon">
            <img src="assets/images/icons/sea-tour.svg" alt="image" />    
          </div>
          <div className="content">
            <h4><Link href="/tour-package"><a>Sea Tour</a></Link></h4>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="category-single1">
          <div className="icon">
            <img src="assets/images/icons/travel.svg" alt="image" />   
          </div>
          <div className="content">
            <h4><Link href="/tour-package"><a>Travel</a></Link></h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Home1Category