import React from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import first from "../../images/1.png";
import second from "../../images/2.png";
import third from "../../images/3.png";
import fourth from "../../images/4.png";
import fifth from "../../images/5.png";
import gravity from "../../images/Gravity.png";
import toppng from "../../images/toppng.png";
import pngitem from "../../images/PngItem.png";
import Ellipse from "../../images/Ellipse 4.png";
import "./Checkout.css";

const Checkout = () => {
  const slides = [
    {
      key: uuidv4(),
      content: <img src={third} alt="1" />,
    },
    {
      key: uuidv4(),
      content: <img src={second} alt="2" />,
    },
    {
      key: uuidv4(),
      content: <img src={first} alt="3" />,
    },
    {
      key: uuidv4(),
      content: <img src={fourth} alt="4" />,
    },
    {
      key: uuidv4(),
      content: <img src={fifth} alt="5" />,
    },
  ];

  return (
    <section>
      <section className="checkout-section-1">
        <div className="first">
          <h1>Checkout Our App Interface Look</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
        </div>
        <div className="container">
          <div style={{ height: "450px", width: "50%", margin: "0 auto" }}>
            <Carousel
              slides={slides}
              goToSlide={0}
              offsetRadius={2}
              showNavigation={true}
            />
          </div>
        </div>
      </section>
      <section className="checkout-section-2">
        <div className="wholediv">
          <div className="subdiv1">
            <div className="sub1">
              <h1>DOWNLOAD APP NOW</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                natus laborum. Natus quibusdam neque inventore distinctio?
                Exercitationem voluptatibus, inventore, amet vitae esse totam
                accusamus consequuntur, porro eaque corporis saepe tempore.
              </p>
            </div>
            <div className="sub2">
              <img src={toppng} alt="toppng" />
              <img src={pngitem} alt="pngitem" />
            </div>
            <div className="sub3">
              <div className="bluediv">
                <h3>Anika</h3>
              </div>
              <div className="bluediv">
                <h3>Anika</h3>
              </div>
              <div className="bluediv">
                <h3>Anik</h3>
              </div>
            </div>
          </div>
          <div className="subdiv2">
            <img src={gravity} alt="Gravity" />
            <img src={Ellipse} alt="Ellipse" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Checkout;
