import React from "react";
// import r from "../../images/jocelyn.png";
import s from "../../images/Group.png";
import black_fb from "../../icons/black_fb.png";
import black_insta from "../../icons/black_insta.png";
import black_twitter from "../../icons/black_witter.png";
import black_youtube from "../../icons/black_youtube.png";
import "./Profile.css";

const Profile = ({ pp, name, designation, details }) => {
  return (
    <div className="team_member">
      <div className="img_position">
        <img src={s} alt="s" className="s" />
        <img src={pp} alt="r" className="r" />
      </div>
      <div className="profile_intro">
        <h1>{name}</h1>
        <h2>{designation}</h2>
        <p>{details}</p>
      </div>
      <div className="social_icon">
        <img src={black_fb} alt="fb" className="f_b" />
        <div />
        <img src={black_insta} alt="instagram" className="ins_ta" />
        <div />
        <img src={black_twitter} alt="twitter" className="twi_ttr" />
        <div />
        <img src={black_youtube} alt="youtube" className="you_tube" />
      </div>
    </div>
  );
};

export default Profile;
