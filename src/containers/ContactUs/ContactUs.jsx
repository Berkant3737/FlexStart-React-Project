import React from "react";
import ContactUsCard from "../../components/ContactUs/ContactUsCard";
import ContactUsContent from "../../components/ContactUs/ContactUsContent";
import ContactUsForm from "../../components/ContactUs/ContactUsForm";

const ContactUsCardData = [
  {
    icon: "bi bi-geo-alt",
    title: "Address",
    text: "A108 Adam Street,",
    text2: "New York, NY 535022",
  },
  {
    icon: "bi bi-telephone",
    title: "Call Us",
    text: "+1 5589 55488 55",
    text2: "+1 6678 254445 41",
  },
  {
    icon: "bi bi-envelope",
    title: "Email Us",
    text: "info@example.com",
    text2: "contact@example.com",
  },
  {
    icon: "bi bi-clock",
    title: "Open Hours",
    text: "Monday - Friday",
    text2: "9:00AM - 05:00PM",
  },
];

function ContactUs() {
  return (
    <section class="Contact-Us">
      <div class="container">
        <header class="section-header">
          <h2>CONTACT</h2>
          <p>Contact Us</p>
        </header>
        <ContactUsContent Data={ContactUsCardData} />
      </div>
    </section>
  );
}

export default ContactUs;
