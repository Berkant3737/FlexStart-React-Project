import React from "react";
import SectionHeader from "../../components/SectionHeader";
import TestimonialsContent from "../../components/Testimonials/TestimonialsContent";

const TestimonialsData = [
  {
    description:
      "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugia irure amet legam anim culpa.",
    name: "Sarra Wilsson",
    job: "Designer",
    image: "/images/Testimonials/testimonials-1.jpg",
  },
  {
    description:
      "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
    name: "Jena Karlis",
    job: "Store Owner",
    image: "/images/Testimonials/testimonials-2.jpg",
  },
  {
    description:
      "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
    name: "Matt Brandon",
    job: "Freelancer",
    image: "/images/Testimonials/testimonials-3.jpg",
  },
  {
    description:
      "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
    name: "John Larson",
    job: "Entrepreneur",
    image: "/images/Testimonials/testimonials-4.jpg",
  },
  {
    description:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et.Maecen aliquam, risus at semper.",
    name: "Saul Goodman",
    job: "Ceo &amp; Founder",
    image: "/images/Testimonials/testimonials-5.jpg",
  },
];

function Testimonials() {
  return (
    <>
      <section className="Testimonials">
        <div className="container">
          <SectionHeader
            Title="TESTIMONIALS"
            Text="What they are saying about us"
          />
          <TestimonialsContent Data={TestimonialsData} />
        </div>
      </section>
    </>
  );
}

export default Testimonials;
