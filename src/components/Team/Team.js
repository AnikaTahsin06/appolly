import React from "react";
import Rectangle from "../../images/Rectangle.png";
import video from "../../images/Video.png";
import videoicon from "../../images/Vodeo Icon.png";
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
            <div className="app_perfectly_items1">
              <h1>how to use the app perfectly</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                Ullamcorper risus tempor, ac nunc libero urna, feugiat.
              </p>
            </div>
            <div className="app_perfectly_items2">
              <img src={video} alt="video" className="video" />
              <img src={videoicon} alt="videoicon" className="videoicon" />
            </div>
          </div>
        </div>
      </section>
      <section className="team">
        <div className="reative_team">
          <h1>Our reative team</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
        </div>
        <div className="profile">profile</div>
      </section>
    </section>
  );
};

export default Team;
