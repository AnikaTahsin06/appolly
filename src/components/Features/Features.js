import React from "react";
import app_feat_back from "../../images/app_feat_back.png";
import App from "../../images/App.png";
import chat from "../../icons/chat.png";
import tele from "../../icons/male-telemarketer.png";
import unlimiter from "../../icons/unlimiter.png";
import ui from "../../icons/ui.png";
import iso from "../../icons/iso.png";
import eye from "../../icons/eye-scanner.png";
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
            <h1>App features</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
              Ullamcorper risus tempor, ac nunc libero urna, feugiat.
            </p>
          </div>
          <div className="app_feat_items2 items-align">
            <img src={chat} alt="chat" />
            <h2>Full free chat</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="app_feat_items3  items3_common">
            <div className="items3_left common">
              <div className="left common-top">
                <img src={unlimiter} alt="unlimiter" />
                <h2>Unlimiter Features</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="left common-bottom">
                <img src={ui} alt="unlimiter" />
                <h2>awsome ui design</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="items3_img">
              <img src={App} alt="App" />
            </div>
            <div className="items3_right common">
              <div className="right common-top">
                <img src={iso} alt="iso" className="right-top" />
                <h2>iso & androind version</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="right common-bottom">
                <img src={eye} alt="eye" className="right-bottom" />
                <h2>retina ready greaphics</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
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
