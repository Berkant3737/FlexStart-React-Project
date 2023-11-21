import React from "react";

function Portfolio({ Data }) {
  return (
    <>
      {Data.map((item, index) => (
        <div
          className={`col-lg-4 col-md-6 portfolio-item ${item.filter}`}
          key={index}
          style={{ position: 'relative', left: '10px', top: '0px' }}

        >
          <div className="portfolio-wrap">
            <img src={item.image} className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
              <div className="portfolio-links">
                <a
                  href="./images/Portfolio/portfolio-1.jpg"
                  data-gallery="portfolioGallery"
                  className="portfokio-lightbox"
                  title={item.LinksTitle}
                >
                  <i className="bi bi-plus"></i>
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i className="bi bi-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Portfolio;
