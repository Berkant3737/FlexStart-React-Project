import React from "react";
import FaqContent from "../../components/Faq/FaqContent";
import SectionHeader from "../../components/SectionHeader";

const FaqData = [
  {
    DataOne: [
      {
        title: "Non consectetur a erat nam at lectus urna duis?",
        text: "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
      },
      {
        title:
          "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
        text: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
      },
      {
        title:
          "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?",
        text: "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis",
      },
    ],
    DataTwo: [
      {
        title: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
        text: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
      },
      {
        title:
          "Tempus quam pellentesque nec nam aliquam sem et tortor consequat?",
        text: "Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.",
      },
      {
        title: "Varius vel pharetra vel turpis nunc eget lorem dolor?",
        text: "Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.",
      },
    ],
  },
];

function Faq() {
  return (
    <section className="Faq">
      <div className="container">
        <SectionHeader Title="F.A.Q" Text="Frequently Asked Questions" />
        <div className="row">
          <FaqContent Data={FaqData[0]} />
        </div>
      </div>
    </section>
  );
}

export default Faq;
