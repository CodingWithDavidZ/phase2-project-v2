import React from 'react';

function Avatar({ searchData }) {
  const avatarWithLink = (
    <div id='image'>
      <a target='_blank' rel='noopener noreferrer' href={searchData.html_url}>
        {' '}
        <img src={searchData.avatar_url} alt={searchData.html_url} />
      </a>
    </div>
  );
  return <div id='searchAvatar'>{avatarWithLink}</div>;
}

export default Avatar;
