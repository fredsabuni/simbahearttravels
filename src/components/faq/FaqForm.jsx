import React from 'react'

function FaqForm() {
  return (
    <>
    
    <div>
  <div className="section-title1">
    <span>Your Question</span>
    <h2>Still Have A Question!</h2>
    <img src="assets/images/icons/section-title-vector.svg" alt="image" />
  </div>
  <div className="contact-from-wrapper">
    <form>
      <div className="row">
        <div className="col-lg-6">
          <div className="form-inner">
            <input type="text" placeholder="Your Name:" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-inner">
            <input type="text" placeholder="Your Phone Number:" />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-inner">
            <input type="text" placeholder="Type Your Subject:" />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-inner">
            <textarea name="message" rows={5} placeholder="Write Your Question" defaultValue={""} />
          </div>
        </div>
        <div className="col-lg-12">
          <button type="submit" className="eg-btn btn--primary btn--lg submit-btn">Send Now</button>
        </div>
      </div>
    </form>
  </div>
</div>

    </>
  )
}

export default FaqForm