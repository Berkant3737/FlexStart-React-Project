import React from "react";

const usefulLinks = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "About us",
    link: "#",
  },
  {
    title: "Services",
    link: "#",
  },
  {
    title: "Terms of service",
    link: "#",
  },
  {
    title: "Privacy policy",
    link: "#",
  },
];
const OurServicesLinks = [
  {
    title: "Web design",
    link: "#",
  },
  {
    title: "Web development",
    link: "#",
  },
  {
    title: "Product Management",
    link: "#",
  },
  {
    title: "Marketing",
    link: "#",
  },
  {
    title: "Graphic Design",
    link: "#",
  },
];

function Footerlinks() {
  return (
    <>
      <div class="col-6 col-lg-2 footer-links">
        <h2>USEFUL LINKS</h2>
        <ul class="p-0">
          {usefulLinks.map((item) => (
            <li>
              <i class="bi bi-chevron-right"></i>
              <a href={item.link}>
                <span>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div class="col-6 col-lg-2 footer-links">
        <h2>OUR SERVICES</h2>
        <ul class="p-0">
          {OurServicesLinks.map((item) => (
            <li>
              <i class="bi bi-chevron-right"></i>
              <a href={item.link}>
                <span>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Footerlinks;
