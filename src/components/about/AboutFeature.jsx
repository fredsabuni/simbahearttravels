import Link from 'next/link'
import React from 'react'

function AboutFeature() {
  return (
    <div className="feature-section2 pt-120 pb-120">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6 ps-lg-5">
        <div className="about3-title text-start">
          <p>Agency elementum sesue the aucan vestibulum aliquam justo in sapien rutin volutpat. Donec in quis the pellentesque veliten.</p>
          <p>You can choose any country with good tourism. Agency elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Donec id velit ac arcu posuere blane.</p>
          <p>This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin</p>
        </div>
        <ul className="feature3-list sibling-2">
          <li>Price of additional materials or parts (if needed)</li>
          <li>Transportation cost for carrying new materials/parts</li>
        </ul>
        <Link href="/tour-package"><a  className="eg-btn btn--primary-outline sibling-2 btn--lg">Find tours</a></Link>
      </div>
      <div className="col-lg-6">
        <div className="feature-image-group d-flex flex-row justify-content-center gap-5">
          <div className="feature3-icon">
            <img src="assets/images/icons/feature3-icon.svg" alt="" />
          </div>
          <div className="feature-image">
            <img src="assets/images/bg/feature3.png" className="img-fluid" alt="image" />
          </div>
          <div className="feature-image translate-y">
            <img src="assets/images/bg/feature4.png" className="img-fluid" alt="image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default AboutFeature