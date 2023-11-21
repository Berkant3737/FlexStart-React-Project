import React from "react";
import FooterBottomContent from "./FooterBottomContent";
import FooterContact from "./FooterContact";
import FooterInfo from "./FooterInfo";
import Footerlinks from "./Footerlinks";

function FooterContent() {
  return (
    <>
      <FooterInfo />
      <Footerlinks/>
      <FooterContact/>
    </>
  );
}

export default FooterContent;
