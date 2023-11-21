import React from "react";

function Card({
  MainClass,
  Image,
  ImageClass,
  Title,
  TitleClass,
  Text,
  TextClass,
  ButtonText,
  ButtonClass,
  BodyClass,
}) {
  return (
    <div className={`card w-100 h-100 ${MainClass}`}>
      <img
        src={Image}
        className={`card-img-top img-fluid ${ImageClass}`}
        alt="..."
      />
      <div className={`card-body ${BodyClass}`}>
        <h5 className={`card-title ${TitleClass}`}>{Title}</h5>
        <p className={`card-text ${TextClass}`}>{Text}</p>
        {ButtonText && (
          <a href="#" className={`btn btn-primary ${ButtonClass}`}>
            {ButtonText}
          </a>
        )}
      </div>
    </div>
  );
}

export default Card;
