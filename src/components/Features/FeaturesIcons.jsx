import React from "react";
import Photo from "../../assets/images/Features/features-3.png";

function FeaturesIcons({ Data }) {
  return (
    <>
      <div className="col-md-4 text-center">
        <img src={Photo} className="img-fluid p-4" alt="" />
      </div>
      <div className="col-md-8">
        <div className="row align-self-center gy-4">
          {Data.map((item,index) => (
            <div className="col-md-6 icon-box" key={index}>
              <i className={item.icon}></i>
              <div className="icon-box-content">
                <h4>{item.title} </h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FeaturesIcons;
