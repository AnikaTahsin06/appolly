import React from "react";
import r from "../../images/gous.png";
import s from "../../images/Group.png";
import blue_fb from "../../icons/blue_fb.png";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="team_member">
      <div className="img_position">
        <img src={s} alt="s" className="s" />
        <img src={r} alt="r" className="r" />
      </div>
      <div className="profile_intro">
        <h1>Jocelyn Septimus</h1>
        <h2>Website developer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae.
        </p>
      </div>
      <div className="social_icon">
        <img src={blue_fb} alt="blue_fb" />
        <div />
        <img src={blue_fb} alt="blue_fb" />
        <div />
        <img src={blue_fb} alt="blue_fb" />
        <div />
        <img src={blue_fb} alt="blue_fb" />
      </div>
    </div>
  );
};

export default Profile;
