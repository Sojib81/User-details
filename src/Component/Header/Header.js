import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav>
        <a href="/userlist">UserList</a>
        <a href="/friendslist">FriendList</a>
        <a href="/profile">Profile</a>
      </nav>
    </div>
  );
};

export default Header;
