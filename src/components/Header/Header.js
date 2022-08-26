import React from "react";
import background from "../../images/Background Image.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="bg">
      <section style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: "20px" }}>
          <span>phone</span>
          <span>email</span>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <span>a</span>
          <span>b</span>
          <span>c</span>
          <span>d</span>
        </div>
      </section>
      <section></section>
      <section></section>
    </header>
    // <div>
    //   <img src={background} alt="" style={{ width: "100%", height: "650px" }} />
    // </div>
  );
};

export default Header;
