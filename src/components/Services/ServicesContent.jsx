import React from "react";

function ServicesContent({ Data }) {
  return (
    <>
      {Data.map((item,index) => (
        <div className="col-lg-4 col-md-6" key={index}>
          <div className={`services-box ${item.color}`}>
            <i className="ri-discuss-line icon"></i>
            <h3>{item.title} </h3>
            <p>{item.text}</p>
            <a href="#" className="read-more">
              <span>Read More</span>
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
export default ServicesContent;
