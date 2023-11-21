import React, { useEffect } from "react";
import Isotope from "isotope-layout";

import SectionHeader from "../../components/SectionHeader";
import PortfolioContent from "../../components/Portfolio/PortfolioContent";

const PortfolioData = [
  {
    image: "/images/Portfolio/portfolio-1.jpg",
    title: "App 1",
    text: "APP",
    filter: "filter-app",
    LinksTitle: "App 1",
  },
  {
    image: "/images/Portfolio/portfolio-2.jpg",
    title: "Web 3",
    text: "WEB",
    filter: "filter-web",
    LinksTitle: "Web 3",
  },
  {
    image: "/images/Portfolio/portfolio-3.jpg",
    title: "App 2",
    text: "APP",
    filter: "filter-app",
    LinksTitle: "App 2",
  },
  {
    image: "/images/Portfolio/portfolio-4.jpg",
    title: "Card 2",
    text: "CARD",
    filter: "filter-card",
    LinksTitle: "Card 2",
  },
  {
    image: "/images/Portfolio/portfolio-5.jpg",
    title: "Web 2",
    text: "WEB",
    filter: "filter-web",
    LinksTitle: "Web 2",
  },
  {
    image: "/images/Portfolio/portfolio-6.jpg",
    title: "App 3",
    text: "APP",
    filter: "filter-app",
    LinksTitle: "App 3",
  },
  {
    image: "/images/Portfolio/portfolio-7.jpg",
    title: "Card 1",
    text: "CARD",
    filter: "filter-card",
    LinksTitle: "Card 1",
  },
  {
    image: "/images/Portfolio/portfolio-8.jpg",
    title: "Card 3",
    text: "CARD",
    filter: "filter-card",
    LinksTitle: "Card 3",
  },
  {
    image: "/images/Portfolio/portfolio-9.jpg",
    title: "Web 3",
    text: "WEB",
    filter: "filter-web",
    LinksTitle: "Web 3",
  },
];

function Portfolio() {
  useEffect(() => {
    const iso = new Isotope(".portfolio-container", {
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });

    const portfolioFilters = document.querySelectorAll("#portfolio-flters li");

    portfolioFilters.forEach((filter) => {
      filter.addEventListener("click", (e) => {
        e.preventDefault();
        portfolioFilters.forEach((el) => el.classList.remove("filter-active"));
        e.target.classList.add("filter-active");

        iso.arrange({
          filter: e.target.getAttribute("data-filter"),
        });
      });
    });
    return () => {
      iso.destroy();
    };
  }, []);
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <SectionHeader Title="PORTFOLIO" Text="Check our latest work" />

        <div
          className="row"
        >
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div
          className="row gy-4 portfolio-container aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <PortfolioContent Data={PortfolioData} />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
