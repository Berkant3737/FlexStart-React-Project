import React from "react";
import OurValuesContent from "../../../src/components/OurValues/OurValuesContent";
import SectionHeader from "../../components/SectionHeader";

const OurValuesData = [
  {
    title: "Ad cupiditate sed est odio",
    text: "Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.",
    image: "/images/OurValues/values-1.png",
  },
  {
    title: "Voluptatem voluptatum alias",
    text: "Repudiandae amet nihil natus in distinctio suscipit id. Doloremque ducimus ea sit non.",
    image: "/images/OurValues/values-2.png",
  },
  {
    title: "Fugit cupiditate alias nobis.",
    text: "Quam rem vitae est autem molestias explicabo debitis sint. Vero aliquid quidem commodi.",
    image: "/images/OurValues/values-3.png",
  },
];

function OurValues() {
  return (
    <div>
      <section className="Our-Values">
        <div className="container">
          <SectionHeader
            Title="OUR VALUES"
            Text="Odit est perspiciatis laborum et dicta"
          />
          <div className="row">
            <OurValuesContent Data={OurValuesData} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurValues;
