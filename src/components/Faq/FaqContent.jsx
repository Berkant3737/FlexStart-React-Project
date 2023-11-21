import React from "react";

function FaqContent({ Data }) {
  const { DataOne, DataTwo } = Data;
  return (
    <>
      <div className="col-md-6">
        <div className="accordion accordion-flush" id="accordionFlushExample1">
          {DataOne.map((item, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed pb-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#flush-collapse-1-${index}`}
                  aria-expanded="false"
                  aria-controls={`flush-collapse-1-${index}`}
                >
                  <span>{item.title}</span>
                </button>
              </h2>
              <div
                id={`flush-collapse-1-${index}`}
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample1"
              >
                <div className="accordion-body">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-md-6">
        <div className="accordion accordion-flush" id="accordionFlushExample2">
          {DataTwo.map((item, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#flush-collapse-2-${index}`}
                  aria-expanded="false"
                  aria-controls={`flush-collapse-2-${index}`}
                >
                  <span>{item.title}</span>
                </button>
              </h2>
              <div
                id={`flush-collapse-2-${index}`}
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample2"
              >
                <div className="accordion-body">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FaqContent;
