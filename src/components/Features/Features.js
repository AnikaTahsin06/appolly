import React from "react";
import app_feat_back from "../../images/app_feat_back.png";
import chat from "../../icons/chat.png";
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
          <div className="app_feat_items3 items-align">
            <div className="items3_left">
              <h1>hi</h1>
            </div>
            <div className="items3_img">
              <h1>hi</h1>
            </div>
            <div className="items3_right">
              <h1>hi</h1>
            </div>
          </div>
          <div className="app_feat_items4 items-align"></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
