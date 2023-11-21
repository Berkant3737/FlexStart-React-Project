import React from "react";
import HeroImg from "../../assets/images/Banner/hero-img.png";
import Button from "../Button";
function BannerContent() {
  return (
    <>
      <div className="col-lg-6 text-center text-md-start">
        <h1>We offer modern solutions for growing your business</h1>
        <h2>
          We are team of talented designers making websites with Bootstrap
        </h2>
        <Button
          MainClass=""
          LinkClass="banner-btn d-inline-block ms-0 d-inline-flex align-items-center justify-content-center"
          TextClass="text-white"
          Text="Get Started"
          Icon="bi bi-arrow-right"
        />
      </div>
      <div className="col-lg-6 banner-img d-flex justify-content-end">
        <img src={HeroImg} className="img-fluid" alt="Banner img" />
      </div>
    </>
  );
}

export default BannerContent;
