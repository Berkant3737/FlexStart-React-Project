import React from "react";
import Logo from "../../assets/images/logo.png";

function NavbarBrand() {
  return (
    <div>
      <a className="navbar-brand d-flex align-items-center p-0" href="index.html">
        <img src={Logo} alt="" />
        <span>FlexStart</span>
      </a>
    </div>
  );
}

export default NavbarBrand;