import React from "react";
import email from "../../icons/email.png";
import phone from "../../icons/phone.png";
import fb from "../../icons/fb.png";
import instagram from "../../icons/instagram.png";
import twitter from "../../icons/twitter.png";
import youtube from "../../icons/youtube.png";
import headMobile from "../../images/mobile.png";
import toppng from "../../images/toppng.png";
import pngItem from "../../images/PngItem.png";
import "./Header.css";

const Header = () => {
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
          <span>HOME</span>
          <span>ABOUT</span>
          <span>FEATURES</span>
          <div>
            <span>APPOLLY</span>
          </div>
          <span>SCREESHOT</span>
          <span>BLOG</span>
          <button>DOWNLOAD</button>
        </div>
      </section>
      <section className="section-3">
        <div className="sec-3-div">
          <div className="card">
            <div className="card_div">
              <div className="card_div_one">
                <h1>A Great App Makes Your Life Better</h1>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="card_div_two">
                <h2>Download App Now</h2>

                <img src={toppng} alt="top png" />
                <img src={pngItem} alt="pngItem" />
              </div>
            </div>
            <div className="shadowDiv"></div>
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
