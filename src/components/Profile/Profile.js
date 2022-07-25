import React from "react";
import { User } from "../../svg/svg";
import "./Profile.css";

function Profile({ name }) {
  return (
    <div className="profile-wrapper">
      <User />
      <div className="name-wrapper">
        <p>Hello, {name}</p>
        <p>Last login: Thu Mar 2014</p>
      </div>
    </div>
  );
}

export default Profile;
