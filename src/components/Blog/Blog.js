import React from "react";
import blogImage_1 from "../../images/blogImage_1.png";
import blogImage_2 from "../../images/blogImage_2.png";
import blogImage_3 from "../../images/blogImage_3.png";
import Email from "../../icons/Email Icon.png";
import Call from "../../icons/Call.png";
import "./Blog.css";

const Blog = () => {
  return (
    <section>
      <section className="sec_1">
        <h1>Our recent blog</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.
        </p>
      </section>
      <section className="sec_2">
        <div className="BlogCard">
          <div className="BlogCard1">
            <img src={blogImage_1} alt="blog1" />
            <div className="card-body">
              <h5 className="card-title">
                The Snap Pixel: How It Works and How to Install{" "}
              </h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              </p>
              <a href="/" className="card-link">
                Read more
              </a>
            </div>
          </div>
          <div className="BlogCard1">
            <img src={blogImage_2} alt="blog1" />
            <div className="card-body">
              <h5 className="card-title">
                Global Partner Solutions: A Partnership of Innovation
              </h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              </p>
              <a href="/" className="card-link">
                Read more
              </a>
            </div>
          </div>
          <div className="BlogCard1">
            <img src={blogImage_3} alt="blog1" />
            <div className="card-body">
              <h5 className="card-title">
                2021: An opportunity for Snapchatters to start fresh
              </h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              </p>
              <a href="/" className="card-link">
                Read more
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="sec_3">
        <div className="sec_3_div">
          <div className="two_sides">
            <img src={Email} alt="Email" />
            <span>info@youremail.com</span>
          </div>
          <div className="divide">
            <div />
          </div>
          <div className="two_sides">
            <img src={Call} alt="Call" />
            <span>+880 321 655 9985</span>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Blog;
