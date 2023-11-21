import React from "react";
import BannerContent from "../../components/Banner/BannerContent";
import Button from "../../components/Button";
function Banner() {
  return (
    <section className="Banner d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <BannerContent/>
        </div>
      </div>
    </section>
  );
}

export default Banner;
