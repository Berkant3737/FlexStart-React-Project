import React from "react";
import FeaturesContent from "../../components/Features/FeaturesContent";
import FeaturesIcons from "../../components/Features/FeaturesIcons";
import FeaturesTabs from "../../components/Features/FeaturesTabs";
import FeaturesPhoto from "../../assets/images/Features/features.png";
import SectionHeader from "../../components/SectionHeader";
const FeaturesData = [
  {
    icon: "bi bi-check",
    text: "Eos aspernatur rem",
  },
  {
    icon: "bi bi-check",
    text: "Facilis neque ipsa",
  },
  {
    icon: "bi bi-check",
    text: "Volup amet voluptas",
  },
  {
    icon: "bi bi-check",
    text: "Rerum omnis sint",
  },
  {
    icon: "bi bi-check",
    text: "Alias possimus",
  },
  {
    icon: "bi bi-check",
    text: "Repellendus mollitia",
  },
];
const FeatureIconData = [
  {
    title: "Corporis voluptates sit",
    text: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
    icon: "ri-line-chart-line",
  },
  {
    title: "Labore consequatur",
    text: "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere",
    icon: "ri-brush-4-line",
  },
  {
    title: "Corporis voluptates sit",
    text: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
    icon: "ri-command-line",
  },
  {
    title: "Ullamco laboris nisi",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
    icon: "ri-stack-line",
  },
  {
    title: "Beatae veritatis",
    text: "Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta",
    icon: "ri-magic-line",
  },
  {
    title: "Explicabo consectetur",
    text: "Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore",
    icon: "ri-radar-line",
  },
];

function Features() {
  return (
    <section className="Features">
      <div className="container">
        <SectionHeader
          Title="FEATURES"
          Text="Laboriosam et omnis fuga quis dolor direda fara"
        />
        <div className="row">
          <div className="col-lg-6">
            <img src={FeaturesPhoto} className="img-fluid" />
          </div>
          <div className="col-lg-6 col-lg-6 mt-5 mt-lg-0 d-flex">
            <div className="row align-self-center gy-4">
              <FeaturesContent Data={FeaturesData} />
            </div>
          </div>
        </div>
        {/* Features Tabs */}
        <div className="row feature-tabs align-items-center">
          <FeaturesTabs />
        </div>
        {/* Features Tabs */}

        {/* Features Icons */}
        <div className="row feature-icons">
          <h3>Ratione mollitia eos ab laudantium rerum beatae quo</h3>
          <div className="row align-items-center">
            <FeaturesIcons Data={FeatureIconData} />
          </div>
        </div>
        {/* Features Icons */}
      </div>
    </section>
  );
}

export default Features;
