import React, { useState } from "react";
import "./UserDetails.css";
import { IoIosAddCircle } from "react-icons/io";
const UserDetails = (props) => {
  //console.log(props.user.img);

  const { name, img, email, phone, address, bio } = props.user;

  const [friend, setFriend] = useState([]);
  const handleAddFriend = (user) => {
    console.log("Friend Added");
    const newFriend = [...friend, user];
    setFriend(newFriend);
  };
  return (
    <div className="user-details-container">
      <img src={img} alt="" />
      <h3>Name: {name}</h3>
      <p>Bio-{bio}</p>
      <p>Email:{email}</p>
      <p>Phone:{phone}</p>
      <p>Address:{address}</p>

      <button className="add-btn" onClick={() => handleAddFriend()}>
        Add
        <IoIosAddCircle />
      </button>
    </div>
  );
};

export default UserDetails;
