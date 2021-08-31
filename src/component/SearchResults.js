import React from 'react';
import Avatar from './Avatar';

function SearchResults({ searchData }) {
  const creation = `Created: ${searchData.created_at}`;
  const creationDateWithoutTime = creation.split('T')[0];
  const lastUpdate = `Last update: ${searchData.updated_at}`;
  const lastUpdateWithoutTime = lastUpdate.split('T')[0];

  const infoArray = [
    `Name: ${searchData.name}`,
    `Location: ${searchData.location}`,
    `Email: ${searchData.email}`,
    `Twitter: ${searchData.twitter_username}`,
    `Created: ${creationDateWithoutTime}`,
    `Last Updated: ${lastUpdateWithoutTime}`,
    `Public Repos: ${searchData.public_repos}`,
    `Seeking Employment: ${searchData.hireable}`,
  ];

  const list = infoArray.map((element) => <li>{element}</li>);

  function handleClick() {
    fetch('http://localhost:3000/saved', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        url: searchData.html_url,
        picture: searchData.avatar_url,
      }),
    });
  }

  return (
    <div>
      <Avatar id='primaryAvatar' searchData={searchData} />
      <span id='infoList' key={searchData.id}>
        {list}
      </span>
      <button id='saveButton' onClick={handleClick}>
        Save
      </button>
    </div>
  );
}

export default SearchResults;
