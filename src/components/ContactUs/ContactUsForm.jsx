import React from "react";
import Button from "../Button";
import Input from "../Input";

function ContactUsForm() {
  return (
    <>
      <div className="col-md-6">
        <Input Type={"text"} Name={"name"} PlaceHolder={"Your Name"} />
      </div>
      <div className="col-md-6">
        <Input Type={"email"} Name={"email"} PlaceHolder={"Your Email"} />
      </div>
      <div className="col-md-12">
        <Input Type={"text"} Name={"subject"} PlaceHolder={"Subject"} />
      </div>
      <div class="col-md-12">
        <textarea
          class="form-control"
          name="message"
          rows="6"
          placeholder="Message"
          required=""
        ></textarea>
      </div>
      <Button
        MainClass={"text-center"}
        Text={"Send message"}
        LinkClass={"btn-submit"}
      />
    </>
  );
}

export default ContactUsForm;
