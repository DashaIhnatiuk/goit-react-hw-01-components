import { Component } from "react";
import PropTypes from 'prop-types';
import "./Profile.css";

class Profile extends Component {
  static propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number)
  };


  render() {
    const {avatar, name, tag, location, stats} = this.props;
    return (
      <div class="profile">
        <div class="description">
          <img src={avatar} alt="Аватар пользователя" class="avatar" />
          <p class="name">{name}</p>
          <p class="tag">@{tag}</p>
          <p class="location">{location}</p>
        </div>

        <ul class="stats">
          <li class="stats-item">
            <span class="label">Followers</span>
            <span class="quantity"> {stats.followers}</span>
          </li>
          <li class="stats-item">
            <span class="label">Views</span>
            <span class="quantity"> {stats.views}</span>
          </li>
          <li class="stats-item">
            <span class="label">Likes</span>
            <span class="quantity"> {stats.likes}</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Profile;
