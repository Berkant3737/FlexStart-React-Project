import React from "react";
import FooterBottomContent from "../../components/Footer/FooterBottomContent";
import FooterContent from "../../components/Footer/FooterContent";

function Footer() {
  return (
    <footer>
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <FooterContent />
          </div>
        </div>
      </div>
      <FooterBottomContent />
    </footer>
  );
}

export default Footer;
