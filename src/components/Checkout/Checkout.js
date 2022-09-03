import React from "react";
import gravity from "../../images/Gravity.png";
import "./Checkout.css";

const Checkout = () => {
  return (
    <section>
      <section></section>
      <section className="checkout-section-2">
        <div className="wholediv">
          <div className="subdiv1">
            <div>
              <h1>DOWNLOAD APP NOW</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                natus laborum. Natus quibusdam neque inventore distinctio?
                Exercitationem voluptatibus, inventore, amet vitae esse totam
                accusamus consequuntur, porro eaque corporis saepe tempore.
              </p>
            </div>
            <div>
              <h2>Anika</h2>
            </div>
            <div>
              <h2>Anika</h2>
            </div>
            <div></div>
            <div></div>
          </div>
          <div className="subdiv2">
            <img src={gravity} alt="Gravity" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Checkout;
