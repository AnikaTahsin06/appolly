import React from "react";
import blogImage_1 from "../../images/blogImage_1.png";
import blogImage_2 from "../../images/blogImage_2.png";
import blogImage_3 from "../../images/blogImage_3.png";
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
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="card-link">
                Card link
              </a>
            </div>
          </div>
          <div className="BlogCard1">
            <img src={blogImage_2} alt="blog1" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="card-link">
                Card link
              </a>
            </div>
          </div>
          <div className="BlogCard1">
            <img src={blogImage_3} alt="blog1" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="card-link">
                Card link
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Blog;
