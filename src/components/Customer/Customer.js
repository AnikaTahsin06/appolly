import React from "react";
import Rectangle14 from "../../images/Rectangle 14.png";
import "./Customer.css";

const Customer = () => {
  return (
    <div className="customer">
      <div className="customer_back">
        <img src={Rectangle14} alt="Rectangle 14" />
      </div>
      <div className="customer_items">
        <div className="customer_items1">
          <h1>Our Happy Customers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customer;
