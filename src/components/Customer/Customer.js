import React from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import Rectangle14 from "../../images/Rectangle 14.png";
import "./Customer.css";
import CustomerCard from "./CustomerCard";

const Customer = () => {
  const slides = [
    {
      key: uuidv4(),
      content: <CustomerCard />,
    },
    {
      key: uuidv4(),
      content: <CustomerCard />,
    },
    {
      key: uuidv4(),
      content: <CustomerCard />,
    },
  ];
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
        <div className="customer_items2">
          <div style={{ height: "300px", width: "70%", margin: "0 auto" }}>
            <Carousel
              slides={slides}
              goToSlide={0}
              offsetRadius={2}
              // showNavigation={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
