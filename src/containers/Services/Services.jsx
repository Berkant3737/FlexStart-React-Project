import React from "react";
import SectionHeader from "../../components/SectionHeader";
import ServicesContent from "../../components/Services/ServicesContent";

const ServicesData = [
  {
    color: "blue",
    icon: "ri-discuss-line icon",
    title: "Nesciunt Mete",
    text: " Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
  },
  {
    color: "orange",
    icon: "ri-discuss-line icon",
    title: "Eosle Commodi",
    text: " Ut autem aut autem non a. Sint sint sit facilis nam iusto sint.Libero corrupti neque eum hic non ut nesciunt dolorem.",
  },
  {
    color: "green",
    icon: "ri-discuss-line icon",
    title: "Ledo Markt",
    text: "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
  },
  {
    color: "red",
    icon: "ri-discuss-line icon",
    title: "Asperiores Commodi",
    text: "Non et temporibus minus omnis sed dolor esse consequatur.Cupiditate sed error ea fuga sit provident adipisci neque.",
  },
  {
    color: "purple",
    icon: "ri-discuss-line icon",
    title: "Velit Doloremque.",
    text: "Cumque et suscipit saepe. Est maiores autem enim facilis ut autipsam corporis aut. Sed animi at autem alias eius labore.",
  },
  {
    color: "pink",
    icon: "ri-discuss-line icon",
    title: "Dolori Architecto",
    text: "Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.",
  },
];

function Services() {
  return (
    <section className="Services">
      <div className="container">
        <SectionHeader
          Title="SERVICES"
          Text="Veritatis et dolores facere numquam et praesentium"
        />
        <div className="row gy-4">
          <ServicesContent Data={ServicesData} />
        </div>
      </div>
    </section>
  );
}
export default Services;
