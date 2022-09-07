import React from "react";
import Rectangle from "../../images/Rectangle.png";
import "./Team.css";

const Team = () => {
  return (
    <section>
      <section>
        <div className="app_perfectly">
          <div className="app_perfectly_back">
            <img src={Rectangle} alt="Rectangle" />
          </div>
          <div className="app_perfectly_items">
            <div>
              <h1>how to use the app perfectly</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                Ullamcorper risus tempor, ac nunc libero urna, feugiat.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section></section>
    </section>
  );
};

export default Team;
