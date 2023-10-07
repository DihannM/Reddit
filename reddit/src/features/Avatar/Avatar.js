import React from 'react';
import './Avatar.css';

const Avatar = (props) => {
  return (
    <img
      src="/assets/images/astronaut.png"
      alt="avatar"
      className={`avatar-profile-image ${props.className}`}
    />
  );
};

export default Avatar;