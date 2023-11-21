import React from "react";
import FeaturePhoto from "../../assets/images/Features/features-2.png"

function FeaturesTabs() {
  return (
    <>
      <div className="col-lg-6">
        <h3>
          Neque officiis dolore maiores et exercitationem quae est seda lidera
          pat claero
        </h3>
        <div className="tab-content">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                className="nav-link active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                SAEPE FUGA
              </button>
              <button
                className="nav-link"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                VOLUPTATES
              </button>
              <button
                className="nav-link"
                id="nav-contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-contact"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                CORRUPTI
              </button>
            </div>
          </nav>
          <div className="tab-content mt-3" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
              tabindex="0"
            >
              <p>
                Consequuntur inventore voluptates consequatur aut vel et. Eos
                doloribus expedita. Sapiente atque consequatur minima nihil quae
                aspernatur quo suscipit voluptatem.
              </p>
              <div className="d-flex align-items-center mb-2">
                <i className="bi bi-check2"></i>
                <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
              </div>
              <p>
                Laborum omnis voluptates voluptas qui sit aliquam blanditiis.
                Sapiente minima commodi dolorum non eveniet magni quaerat nemo
                et.
              </p>
              <div className="d-flex align-items-center mb-2">
                <i className="bi bi-check2"></i>
                <h4>Incidunt non veritatis illum ea ut nisi</h4>
              </div>
              <p>
                Non quod totam minus repellendus autem sint velit. Rerum debitis
                facere soluta tenetur. Iure molestiae assumenda sunt qui
                inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia
                et perferendis.
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
              tabindex="0"
            >
              <p>
                Consequuntur inventore voluptates consequatur aut vel et. Eos
                doloribus expedita. Sapiente atque consequatur minima nihil quae
                aspernatur quo suscipit voluptatem.
              </p>
              <div className="d-flex align-items-center mb-2">
                <i className="bi bi-check2"></i>
                <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
              </div>
              <p>
                Laborum omnis voluptates voluptas qui sit aliquam blanditiis.
                Sapiente minima commodi dolorum non eveniet magni quaerat nemo
                et.
              </p>
              <div className="d-flex align-items-center mb-2">
                <i className="bi bi-check2"></i>
                <h4>Incidunt non veritatis illum ea ut nisi</h4>
              </div>
              <p>
                Non quod totam minus repellendus autem sint velit. Rerum debitis
                facere soluta tenetur. Iure molestiae assumenda sunt qui
                inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia
                et perferendis.
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
              tabindex="0"
            >
              <p>
                Consequuntur inventore voluptates consequatur aut vel et. Eos
                doloribus expedita. Sapiente atque consequatur minima nihil quae
                aspernatur quo suscipit voluptatem.
              </p>
              <div className="d-flex align-items-center mb-2">
                <i className="bi bi-check2"></i>
                <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
              </div>
              <p>
                Laborum omnis voluptates voluptas qui sit aliquam blanditiis.
                Sapiente minima commodi dolorum non eveniet magni quaerat nemo
                et.
              </p>
              <div className="d-flex align-items-center mb-2">
                <i className="bi bi-check2"></i>
                <h4>Incidunt non veritatis illum ea ut nisi</h4>
              </div>
              <p>
                Non quod totam minus repellendus autem sint velit. Rerum debitis
                facere soluta tenetur. Iure molestiae assumenda sunt qui
                inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia
                et perferendis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <img src={FeaturePhoto} className="img-fluid" alt="" />
      </div>
    </>
  );
}

export default FeaturesTabs;
