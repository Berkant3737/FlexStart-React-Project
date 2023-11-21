import React from "react";

function TeamContent({ data }) {
  return (
    <>
      <div class="col-md-3">
        <div class="card">
          <div class="card-img">
            <img src={data.image} class="card-img-top" alt="..." />
          </div>
          {data.socials.map((social, index) => (
            <div class="social" key={index}>
              {Object.keys(social).map((platform) => (
                <a key={platform} href={social[platform][0].links}>
                  <i className={social[platform][0].icon}></i>
                </a>
              ))}
            </div>
          ))}
          <div class="card-body text-center">
            <h5 class="card-title">{data.name} </h5>
            <span class="card-title-text">{data.description}</span>
            <p class="card-text">{data.text} </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default TeamContent;
