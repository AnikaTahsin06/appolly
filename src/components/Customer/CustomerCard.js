import React from "react";
import ProfileImage from "../../images/Profile Image.png";
import "./CustomerCard.css";

const CustomerCard = () => {
  return (
    <div className="customerCard">
      <div className="cardImg">
        <img src={ProfileImage} alt="Profile Img" />
      </div>
      <div className="cardDetails">
        <h1>Ann Lubin</h1>
        <h2>Co-Founder</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.
        </p>
      </div>
    </div>
  );
};

export default CustomerCard;
