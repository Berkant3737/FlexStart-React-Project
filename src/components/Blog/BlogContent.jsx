import React from "react";

function BlogContent({ Data }) {
  return (
    <>
      {Data.map((item, index) => (
        <div class="col-12 col-md-4">
          <div class="card-post w-100">
            <div class="card-img">
              <img
                src={item.image}
                class="img-fluid post-image"
                alt="Post-Image"
              />
            </div>
            <div class="post-body">
              <span class="post-date">{item.history} </span>
              <a href="#">
                <h5 class="post-title">{item.title}</h5>
              </a>
              <a href={item.link} class="post-btn">
                <span>Read More</span>
                <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default BlogContent;
