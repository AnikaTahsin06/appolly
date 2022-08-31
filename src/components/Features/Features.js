import React from "react";
import app_feat_back from "../../images/app_feat_back.png";
import App from "../../images/App.png";
import chat from "../../icons/chat.png";
import tele from "../../icons/male-telemarketer.png";
import "./Features.css";

const Features = () => {
  return (
    <section>
      <div className="app_features">
        <div className="app_feat_back">
          <img src={app_feat_back} alt="app features background" />
        </div>
        <div className="app_feat_items">
          <div className="app_feat_items1 items-align">
            <h1>Features</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              odit, enim magnam reiciendis, ratione facilis ducimus praesentium
              dolorem explicabo ad minima tempora dignissimos fuga. Quas odit
              nemo velit! Quo, necessitatibus.
            </p>
          </div>
          <div className="app_feat_items2 items-align">
            <img src={chat} alt="chat" />
            <h2>Full free chat</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="app_feat_items3  items3_common">
            <div className="items3_left common">
              <h1>hi</h1>
              <h1>hi</h1>
            </div>
            <div className="items3_img">
              <img src={App} alt="App" />
            </div>
            <div className="items3_right common">
              <h1>hi</h1>
              <h1>hi</h1>
            </div>
          </div>
          <div className="app_feat_items4 items-align">
            <img src={tele} alt="tele" />
            <h2>24/7 support by real pepole</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
