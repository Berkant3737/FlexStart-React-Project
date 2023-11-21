import React from "react";

function ContactUsCard({ Data }) {
  return (
    <>
      {Data.map((item, index) => (
        <div class="col-12 col-md-6" key={index}>
          <div class="contact-info-box">
            <div class="icon">
              <i class={item.icon}></i>
            </div>
            <h1>{item.title} </h1>
            <p>{item.text}</p>
            <p>{item.text2}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default ContactUsCard;
