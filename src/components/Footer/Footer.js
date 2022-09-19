import React from "react";
import fb from "../../icons/fb.png";
import instagram from "../../icons/instagram.png";
import twitter from "../../icons/twitter.png";
import youtube from "../../icons/youtube.png";
import plain from "../../icons/plain.png";
import copyright from "../../icons/cpyright.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="full_footer">
      <div className="Footer">
        <div className="Logo">
          <div className="logo">
            <h1>Logo</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            </p>
            <br />
            <br />
          </div>

          <div className="links">
            <img src={fb} alt="fb" className="f_b" />
            <div />
            <img src={instagram} alt="instagram" className="ins_ta" />
            <div />
            <img src={twitter} alt="twitter" className="twi_ttr" />
            <div />
            <img src={youtube} alt="youtube" className="you_tube" />
          </div>
        </div>
        <div className="quickLinks">
          <h1>quick link</h1>
          <p>About</p>
          <p>Features</p>
          <p>Screenshot</p>
          <p>Blog</p>
        </div>
        <div className="newsLetter">
          <h1>news letter</h1>
          <p>Subscribe our newsletter to get our latest update & news</p>
          <div className="input">
            <input type="text" placeholder="Your email address" />
            <button>
              <img src={plain} alt="plain" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <br />
        <br />
        <hr />
        <div className="copyright">
          <img src={copyright} alt="copyright" />
          <p className="copy">Copyright 2021 .Ojjomedia. All Right Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
