import React from "react";

function FeaturesContent({Data}) {
  return (
    <>
      {Data.map((item,index) =>(
        <div className="col-md-6" key={index}>
        <div className="feature-box d-flex align-items-center">
          <i className={item.icon}></i>
          <h3>{item.text}</h3>
        </div>
      </div>
      ))}
    </>
  );
}

export default FeaturesContent;
