import React from "react";
import "./SingleUser.css";

function SingleUser({ user }) {
  const { id, name, profit, view } = user;
  return (
    <div className="singleUser-wrapper">
      <span>{id}</span>
      <span>{name}</span>
      <span>{profit}</span>
      <span>{name}</span>
      <span>{view}</span>
    </div>
  );
}

export default SingleUser;
