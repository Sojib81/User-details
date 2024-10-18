import React, { useState } from "react";
import "./User.css";
import personDetails from "./personDetails.json";
import UserDetails from "../UserDetails/UserDetails";

const User = () => {
  //console.log(personDetails.img);
  const [user, setUser] = useState(personDetails);

  return (
    <div className="container">
      <div className="user-container">
        <ul>
          {user.map((user) => (
            <UserDetails user={user}></UserDetails>
          ))}
        </ul>
      </div>
      <div className="user-details">
        <h2>Total Friends Request:{user.length}</h2>
      </div>
    </div>
  );
};

export default User;
