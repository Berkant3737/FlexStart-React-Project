import React from "react";

function CountsContent({ Data }) {
  return (
    <>
      {Data.map((item,index) => (
        <div className="col-lg-3 col-md-6" key={index}>
          <div className="counts-box">
            <i className={item.icon}></i>
            <div>
              <span>{item.number}</span>
              <p>{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CountsContent;
