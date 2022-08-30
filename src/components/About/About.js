import React from "react";
import aboutImage from "../../images/aboutImage.png";
import tik from "../../icons/tik.png";
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
          <div className="aboutCard">
            <div className="tik">
              <img src={tik} alt="tik" />
            </div>
            <div className="aboutCardDetails">
              <h2>Creative design</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
              </p>
            </div>
          </div>
          <div className="aboutCard">
            <div className="tik">
              <img src={tik} alt="tik" />
            </div>
            <div className="aboutCardDetails">
              <h2>easy to use</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
              </p>
            </div>
          </div>
          <div className="aboutCard">
            <div className="tik">
              <img src={tik} alt="tik" />
            </div>
            <div className="aboutCardDetails">
              <h2>Best user experince</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
