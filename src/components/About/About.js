import React from "react";
import aboutImage from "../../images/aboutImage.png";
import "./About.css";

const About = () => {
  return (
    <section>
      <section className="sec-1">
        <h1>About our App</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          praesentium dignissimos recusandae dolore mollitia dolores! Laudantium
          quasi voluptatum facere, veniam dolorum repellendus. Totam quae sint
          unde ipsum quisquam veniam porro!
        </p>
      </section>
      <section className="sec-2">
        <div className="aboutImage">
          <img src={aboutImage} alt="about images" />
        </div>
        <div className="sec-2-card">
          <div className="cards">
            <div>
              <h1>aa</h1>
            </div>
            <div>
              <h2>Anika</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laboriosam, quibusdam quasi. Corrupti et alias ex asperiores
                praesentium maiores voluptates id odit rerum atque dolorem
                accusamus aspernatur, enim accusantium architecto ratione.
              </p>
            </div>
          </div>
          <div className="cards">
            <div>
              <h1>aa</h1>
            </div>
            <div>
              <h2>Anika</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laboriosam, quibusdam quasi. Corrupti et alias ex asperiores
                praesentium maiores voluptates id odit rerum atque dolorem
                accusamus aspernatur, enim accusantium architecto ratione.
              </p>
            </div>
          </div>
          <div className="cards">
            <div>
              <h1>aa</h1>
            </div>
            <div>
              <h2>Anika</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laboriosam, quibusdam quasi. Corrupti et alias ex asperiores
                praesentium maiores voluptates id odit rerum atque dolorem
                accusamus aspernatur, enim accusantium architecto ratione.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
