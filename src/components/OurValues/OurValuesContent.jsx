import React from "react";
import Card from "../Card";
function OurValuesContent({ Data }) {
  return (
    <>
      {Data.map((item,index) => {
        return (
          <div className="col-lg-4 mb-4 mb-md-0" key={index}>
            <Card
              Image={item.image}
              Title={item.title}
              Text={item.text}
              MainClass="text-center"
              BodyClass={"p-0"}
            />
          </div>
        );
      })}
    </>
  );
}

export default OurValuesContent;
