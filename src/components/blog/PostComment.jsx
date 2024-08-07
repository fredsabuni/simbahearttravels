import React from 'react'

function PostComment() {
  return (
    <div className="comment-form-area">
    <h3 className="blog-details-subtitle">Post a Comment :</h3>
    <div className="blog-comment-form">
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
                <textarea name="message" rows={5} placeholder="Type Your Message..." defaultValue={""} />
              </div>
            </div>
            <div className="col-lg-12">
              <button type="submit" className="eg-btn btn--primary btn--lg submit-btn">Post Comment</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default PostComment