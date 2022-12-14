import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import Rectangle14 from "../../images/Rectangle 14.png";
import "./Customer.css";
import CustomerCard from "./CustomerCard";

const Customer = () => {
  const [slideNo, setSlideNo] = useState(0);
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
  ].map((slide, index) => {
    return { ...slide, onClick: () => setSlideNo(index) };
  });
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
          <div className="carousel">
            <Carousel
              slides={slides}
              goToSlide={slideNo}
              offsetRadius={2}
              showNavigation={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
