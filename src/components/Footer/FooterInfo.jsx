import React from "react";
import Logo from "../../assets/images/logo.png";

function FooterInfo() {
  return (
    <div class="col-lg-5 footer-info">
      <a href="index.html" class="logo d-flex align-items-center">
        <img src={Logo} class="me-2" alt="" />
        <span>FlexStart</span>
      </a>
      <p>
        Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada
        terra videa magna derita valies darta donna mare fermentum iaculis eu
        non diam phasellus.
      </p>
      <div class="social-links mt-3">
        <a href="#" class="twitter">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="#" class="facebook">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="#" class="instagram">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="#" class="linkedin">
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}

export default FooterInfo;
