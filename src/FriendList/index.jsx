import { Component } from "react";
import PropTypes from "prop-types";
import './FriendList.css';

class FriendList extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  setColor(isOnline) {
    if(isOnline===false){
      return "red"
    }else{
      return "green"
    }
  };

  render() {
    const {data} = this.props;
    return (
      <ul class="friend-list">
      {    data.map(item =>(
          <li class="item-friend">
          <span class="status"
          style={{ backgroundColor: this.setColor(item.isOnline) }}>{item.isOnline}</span>
          <img class="avatar-friend" src={item.avatar} alt="" width="48" />
          <p class="name-friend">{item.name}</p>
        </li>
      ))}
    </ul>
     );
  }


}

export default FriendList;