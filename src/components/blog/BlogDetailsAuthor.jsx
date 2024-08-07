import React from 'react'

function BlogDetailsAuthor() {
  return (
    <div className="blog-details-author">
    <div className="author-image">
      <img
        src="assets/images/blog/blog-author.png"
        className="img-fluid"
        alt="image"
      />
    </div>
    <div className="author-content">
      <h5>Victor Thornton</h5>
      <p>
        Orem ipsum dolor sit &amp;, sdt consectetu adipiscing elit.
        Aenean commodo ligula eget dolor. Cum socis Theme sed
        natoque ut penatibus Etiam ultricies nisi vel augue.
      </p>
      <ul className="blog-author-social d-flex justify-content-lg-start justify-content-center flex-row align-items-center gap-4">
        <li>
          <a href="https://www.facebook.com/">
            <i className="bx bxl-facebook" />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/">
            <i className="bx bxl-twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/">
            <i className="bx bxl-instagram" />
          </a>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default BlogDetailsAuthor