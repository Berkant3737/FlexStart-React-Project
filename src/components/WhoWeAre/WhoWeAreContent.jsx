import React from "react";
import Button from "../Button";
import Photo from "../../assets/images/WhoWeAre/about.jpg";

function WhoWeAreContent() {
  return (
    <>
      <div className="col-lg-6 d-flex flex-column justify-content-start">
        <div className="content">
          <h3>Who We Are</h3>
          <h2>
            Expedita voluptas omnis cupiditate totam eveniet nobis sint iste.
            Dolores est repellat corrupti reprehenderit.
          </h2>
          <p>
            Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et.
            Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam
            nam ipsum tenetur suscipit voluptatum nam et est corrupti.
          </p>
          <Button
            MainClass="text-center text-md-start"
            LinkClass="btn-read-more d-inline-block ms-0 d-inline-flex align-items-center justify-content-center"
            TextClass="text-white"
            Text="Read More"
            Icon="bi bi-arrow-right"
          />
        </div>
      </div>
      <div className="col-lg-6 d-flex align-items-center">
        <img src={Photo} className="img-fluid" alt="" />
      </div>
    </>
  );
}

export default WhoWeAreContent;
