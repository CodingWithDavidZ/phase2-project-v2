import React from 'react';

function Avatar({ searchData }) {
  const avatarWithLink = (
    <a target='_blank' rel='noopener noreferrer' href={searchData.html_url}>
      {' '}
      <img src={searchData.avatar_url} alt={searchData.html_url} />
    </a>
  );
  return <div id='searchAvatar'>{avatarWithLink}</div>;
}

export default Avatar;
