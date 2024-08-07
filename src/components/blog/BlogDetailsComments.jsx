import React from "react";

function BlogDetailsComments() {
  return (
    <div className="blog-comment-area">
      <h3 className="blog-details-subtitle">02 Comment’s</h3>
      <div className="commetn-area">
        <ul className="comment-list">
          <li>
            <div className="comment-item">
              <div className="image">
                <img src="assets/images/blog/blog-comment1.png" alt="image" />
              </div>
              <div className="content">
                <div className="comment-meta">
                  <h5>Loretta Shelton -</h5>
                  <span>25 January, 2022</span>
                </div>
                <p>
                  Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean
                  sollicitudin, lorem quis bibendum auci elit consequat ipsutis
                  sem nibh id elituis sed odio sit amet nibh vulputate cursus a
                  sit amet mauris.Praesent explicari id eum.
                </p>
                <button className="reply">
                  Replay Comment
                  <i className="bi bi-reply" />
                </button>
              </div>
            </div>
            <ul className="comment-reply">
              <li>
                <div className="comment-item">
                  <div className="image">
                    <img
                      src="assets/images/blog/blog-comment2.png"
                      alt="image"
                    />
                  </div>
                  <div className="content">
                    <div className="comment-meta">
                      <h5>Davit Peter -</h5>
                      <span>25 January, 2022</span>
                    </div>
                    <p>
                      Usu vitae indoctum at. Vel iriure latine delicatissimi ad,
                      et mandamus moderatius signifer mque vel.
                    </p>
                    <button className="reply">
                      Replay Comment
                      <i className="bi bi-reply" />
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <div className="comment-item">
              <div className="image">
                <img src="assets/images/blog/blog-comment3.png" alt="image" />
              </div>
              <div className="content">
                <div className="comment-meta">
                  <h5>Darrell Steward -</h5>
                  <span>25 August, 2022</span>
                </div>
                <p>
                  Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean
                  sollicitudin, lorem quis bibendum auci elit consequat ipsutis
                  sem nibh id elituis sed odio sit amet nibh vulputate cursus a
                  sit amet mauris.Praesent explicari id eum.
                </p>
                <button className="reply">
                  Replay Comment
                  <i className="bi bi-reply" />
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BlogDetailsComments;
