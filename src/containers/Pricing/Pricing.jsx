import React from "react";
import PricingContent from "../../components/Pricing/PricingContent";
import SectionHeader from "../../components/SectionHeader";

const PricingData = [
  {
    title: "Free Plan",
    titleColor: "aqua",
    price: "0",
    image: "/images/Pricing/pricing-free.png",
    list: [
      {
        description: "Aida dere",
      },
      {
        description: "Nec feugiat nisl",
      },
      {
        description: "Nulla at volutpat dola",
      },
      {
        description: "Pharetra massa",
        class: "na",
      },
      {
        description: "Massa ultricies mi",
        class: "na",
      },
    ],
    buttonLinks: "#",
  },
  {
    featured: "featured",
    title: "Starter Plan",
    titleColor: "green",
    price: "19",
    image: "/images/Pricing/pricing-starter.png",
    list: [
      {
        description: "Aida dere",
      },
      {
        description: "Nec feugiat nisl",
      },
      {
        description: "Nulla at volutpat dola",
      },
      {
        description: "Pharetra massa",
      },
      {
        description: "Massa ultricies mi",
        class: "na",
      },
    ],
    buttonLinks: "#",
  },
  {
    title: "Business Plan",
    titleColor: "orange",
    price: "29",
    image: "/images/Pricing/pricing-business.png",
    list: [
      {
        description: "Aida dere",
      },
      {
        description: "Nec feugiat nisl",
      },
      {
        description: "Nulla at volutpat dola",
      },
      {
        description: "Pharetra massa",
      },
      {
        description: "Massa ultricies mi",
      },
    ],
    buttonLinks: "#",
  },
  {
    title: "Ultimate Plan",
    titleColor: "pink",
    price: "49",
    image: "/images/Pricing/pricing-ultimate.png",
    list: [
      {
        description: "Aida dere",
      },
      {
        description: "Nec feugiat nisl",
      },
      {
        description: "Nulla at volutpat dola",
      },
      {
        description: "Pharetra massa",
      },
      {
        description: "Massa ultricies mi",
      },
    ],
    buttonLinks: "#",
  },
];

function Pricing() {
  return (
    <section className="Pricing">
      <div className="container">
        <SectionHeader Title="PRICING" Text="Check our Pricing" />
        <div className="row gy-4">
          <PricingContent Data={PricingData} />
        </div>
      </div>
    </section>
  );
}

export default Pricing;
