import React from "react";
import SingleUser from "../SingleUser/SingleUser";
import { usersData } from "../../data";
import "./ListUsers.css";

function ListUsers({ children }) {
  return (
    <div className="usersColumn-wrapper">
      <div className="children-wrapper">{children}</div>
      <div className="singleUser-wrapper user-heading">
        <span>ID</span>
        <span>Username</span>
        <span>Profit$</span>
        <span>Comission$</span>
        <span>View</span>
      </div>
      <div>
        {usersData.map((user, i) => (
          <SingleUser user={user} key={i} />
        ))}
      </div>
    </div>
  );
}

export default ListUsers;
