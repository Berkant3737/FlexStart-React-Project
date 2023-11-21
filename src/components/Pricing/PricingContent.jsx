import React from "react";

function PricingContent({ Data }) {
  return (
    <>
      {Data.map((item,index) => (
        <div className="col-lg-3 col-md-6" key={index}>
          <div className="box">
            {item.featured && <span className="featured">{item.featured}</span>}
            <h3 className={item.titleColor}>{item.title}</h3>
            <div className="price">
              <sup>$</sup>
              {item.price}
              <span> / mo</span>
            </div>
            <img src={item.image} className="img-fluid" alt="" />
            <ul>
              {item.list.map((listItem, index) => (
                <li className={listItem.class} key={index}>
                  {listItem.description}
                </li>
              ))}
            </ul>
            <a href={item.buttonLinks} className="btn-buy">
              Buy Now
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default PricingContent;
