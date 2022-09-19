import React, { useState } from "react";
import email from "../../icons/email.png";
import phone from "../../icons/phone.png";
import fb from "../../icons/fb.png";
import instagram from "../../icons/instagram.png";
import twitter from "../../icons/twitter.png";
import youtube from "../../icons/youtube.png";
import logo from "../../images/Logo.png";
import headMobile from "../../images/mobile.png";
import toppng from "../../images/toppng.png";
import pngItem from "../../images/PngItem.png";
import menuItem from "../../icons/menu-line.png";
import removeItem from "../../icons/Remove.png";
import "./Header.css";

const Header = () => {
  const [expandable, setExpandable] = useState(false);
  return (
    <header className="bg">
      <section className="section-1">
        <div className="sec-1-common">
          <img
            src={email}
            alt="info@youremail.com"
            style={{ width: "13px", height: "10.5px", marginTop: "4px" }}
          />{" "}
          <span>info@youremail.com</span>
          <img
            src={phone}
            alt="(480) 555-0103"
            style={{ width: "13px", height: "10.5px", marginTop: "4px" }}
          />{" "}
          <span>(480) 555-0103</span>
        </div>
        <div className="sec-1-common">
          <img
            src={fb}
            alt="facebook.com"
            style={{ width: "13px", height: "10.5px", marginTop: "4px" }}
          />
          <img
            src={instagram}
            alt="instagram.com"
            style={{ width: "13px", height: "10.5px", marginTop: "4px" }}
          />
          <img
            src={twitter}
            alt="twitter.com"
            style={{ width: "13px", height: "10.5px", marginTop: "4px" }}
          />
          <img
            src={youtube}
            alt="youtube.com"
            style={{ width: "15px", height: "13.5px", marginTop: "4px" }}
          />
        </div>
      </section>
      <section className="section-2">
        <div className="sec-2-div">
          <span href="/" className="s_0">
            <img
              src={menuItem}
              alt="menu-item"
              onClick={() => setExpandable(!expandable)}
            />
          </span>
          <a href="/" className="s_1">
            HOME
          </a>
          <a href="/" className="s_2">
            ABOUT
          </a>
          <a href="/" className="s_3">
            FEATURES
          </a>
          <div className="mainlogo">
            <span>
              <img src={logo} alt="Logo" className="mainlogoimg" />
            </span>
          </div>
          <a href="/" className="s_4">
            SCREESHOT
          </a>
          <a href="/" className="s_5">
            BLOG
          </a>
          <button className="butn">DOWNLOAD</button>
        </div>
      </section>
      {expandable && (
        <div className="mobile-nav">
          <span
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <img
              src={removeItem}
              alt="remove"
              onClick={() => setExpandable(!expandable)}
            ></img>
          </span>
          <span style={{ marginTop: "-20px" }}>HOME</span>
          <span>ABOUT</span>
          <span>FEATURE</span>
          <span>SCREENSHOT</span>
          <span>BLOG</span>
        </div>
      )}
      <section className="section-3">
        <div className="sec-3-div">
          <div className="shadowDiv"></div>

          <div className="card">
            <div className="card-div">
              <div className="card-div-one">
                <h1>A Great App Makes Your Life Better</h1>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="card_div_two">
                <h2>Download App Now</h2>

                <img src={toppng} alt="top png" className="toppng" />
                <img src={pngItem} alt="pngItem" className="pngitem" />
              </div>
            </div>
          </div>

          <div className="hdMobile">
            <img src={headMobile} alt="headMobile" />
          </div>
        </div>
      </section>
    </header>
    // <div>
    // <section style={{ display: "flex", justifyContent: "space-between" }}>
    //     <div style={{ display: "flex", gap: "20px" }}>
    //       <span>phone</span>
    //       <span>email</span>
    //     </div>
    //     <div style={{ display: "flex", gap: "20px" }}>
    //       <span>a</span>
    //       <span>b</span>
    //       <span>c</span>
    //       <span>d</span>
    //     </div>
    //   </section>
    //   <img src={background} alt="" style={{ width: "100%", height: "650px" }} />
    // </div>
  );
};

export default Header;
