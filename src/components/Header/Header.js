import React from "react";
import email from "../../icons/email.png";
import phone from "../../icons/phone.png";
import fb from "../../icons/fb.png";
import instagram from "../../icons/instagram.png";
import twitter from "../../icons/twitter.png";
import youtube from "../../icons/youtube.png";
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
          <span>PHONE</span>
          <span>ABOUT</span>
          <span>FEATURES</span>
          <span>APPOLLY</span>
          <span>SCREESHOT</span>
          <span>BLOG</span>
          <button>DOWNLOAD</button>
        </div>
      </section>
      <section className="section-3">
        <div className="sec-2-div">
          <div className="card">
            <title>Anika Tahsin</title>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur repudiandae vero ducimus voluptatibus deserunt nihil
              est quibusdam autem inventore quas! Sequi cupiditate quisquam
              vitae incidunt? Ea earum quisquam minima nihil?
            </p>
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
