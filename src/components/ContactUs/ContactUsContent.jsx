import React from "react";
import ContactUsCard from "./ContactUsCard";
import ContactUsForm from "./ContactUsForm";

function ContactUsContent(props) {
  const Data = props.Data;
  return (
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="row gy-4">
          <ContactUsCard Data={Data} />
        </div>
      </div>
      <div class="col-12 col-md-6">
        <form className="h-100">
          <div class="row gy-4 gy-lg-0 ConactUs-Form">
            <ContactUsForm />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUsContent;
