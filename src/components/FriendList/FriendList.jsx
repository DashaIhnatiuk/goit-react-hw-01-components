import { Component } from "react";
import PropTypes from "prop-types";
import "./FriendList.css";

const FriendList = ({ data }) => {
  return (
    <ul class="friend-list">
      {data.map((item) => (
        <li class="item-friend">
          <span
            class="status"
            style={{ backgroundColor: setColor(item.isOnline) }}
          >
            {item.isOnline}
          </span>
          <img class="avatar-friend" src={item.avatar} alt="" width="48" />
          <p class="name-friend">{item.name}</p>
        </li>
      ))}
    </ul>
  );
};

function setColor(isOnline) {
  if (isOnline === false) {
    return "red";
  } else {
    return "green";
  }
}

FriendList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendList;
