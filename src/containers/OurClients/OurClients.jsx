import React from "react";
import OurClientsContent from "../../components/OurClients/OurClientsContent";
import SectionHeader from "../../components/SectionHeader";

const OurClientsData = [
  {
    image: "/images/OurClients/client-1.png",
  },
  {
    image: "/images/OurClients/client-2.png",
  },
  {
    image: "/images/OurClients/client-3.png",
  },
  {
    image: "/images/OurClients/client-4.png",
  },
  {
    image: "/images/OurClients/client-5.png",
  },
  {
    image: "/images/OurClients/client-6.png",
  },
  {
    image: "/images/OurClients/client-7.png",
  },
  {
    image: "/images/OurClients/client-8.png",
  },
];

function OurClients() {
  return (
    <section class="Our-Clients position-relative">
      <div class="container">
        <SectionHeader
          Title={"OUR CLIENTS"}
          Text={"Temporibus omnis officia"}
        />
        <div class="row">
          <OurClientsContent Data={OurClientsData} />
        </div>
      </div>
    </section>
  );
}

export default OurClients;
