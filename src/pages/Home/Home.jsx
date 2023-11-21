import React from "react";
import Navbar from "../../containers/Navbar/Navbar";
import Banner from "../../containers/Banner/Banner";
import WhoWeAre from "../../containers/WhoWeAre/WhoWeAre";
import OurValues from "../../containers/OurValues/OurValues";
import Counts from "../../containers/Counts/Counts";
import Features from "../../containers/Features/Features";
import Services from "../../containers/Services/Services";
import Pricing from "../../containers/Pricing/Pricing";
import Faq from "../../containers/Faq/Faq";
import Portfolio from "../../containers/Portfolio/Portfolio";
import Testimonials from "../../containers/Testimonials/Testimonials";
import Team from "../../containers/Team/Team";
import OurClients from "../../containers/OurClients/OurClients";
import Blog from "../../containers/Blog/Blog";
import ContactUs from "../../containers/ContactUs/ContactUs";
import OurNewsletter from "../../containers/OurNewsletter/OurNewsletter";
import Footer from "../../containers/Footer/Footer";
function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <WhoWeAre />
      <OurValues />
      <Counts />
      <Features />
      <Services />
      <Pricing />
      <Faq />
      <Portfolio />
      <Testimonials/>
      <Team/>
      <OurClients/>
      <Blog/>
      <ContactUs/>
      <OurNewsletter/>
      <Footer/>
    </div>
  );
}

export default Home;
