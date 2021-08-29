import React from 'react';

function Avatar({ searchData }) {
  const avatarWithLink = (
    <a target='_blank' href={searchData.html_url}>
      {' '}
      <img src={searchData.avatar_url} />
    </a>
  );
  return <div id='searchAvatar'>{avatarWithLink}</div>;
}

export default Avatar;
