import friends from './friends.json';
import './FriendList.css';

function setColor(isOnline) {
  if(isOnline===false){
    return "red"
  }else{
    return "green"
  }
};

function FriendList() {
   return (
    <ul class="friend-list">
    {    friends.map(item =>(
        <li class="item-friend">
        <span class="status"
        style={{ backgroundColor: setColor(item.isOnline) }}>{item.isOnline}</span>
        <img class="avatar-friend" src={item.avatar} alt="" width="48" />
        <p class="name-friend">{item.name}</p>
      </li>
    ))}
  </ul>
   );
};
export default FriendList;