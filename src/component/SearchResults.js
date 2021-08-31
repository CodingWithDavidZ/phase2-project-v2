import React from 'react';
import Avatar from './Avatar';

function SearchResults({ searchData, setSaved, saved }) {
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

  function handleSave() {
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
    fetch('http://localhost:3000/saved')
      .then((response) => response.json())
      .then((data) => setSaved(data));
  }

  return (
    <div className='grid-container'>
      <Avatar
        className='grid-item-1'
        id='primaryAvatar'
        searchData={searchData}
      />
      <ul className='grid-item-2' id='list'>
        {list}
        <button className='grid-item-3' id='saveButton' onClick={handleSave}>
          Save
        </button>
      </ul>
    </div>
  );
}

export default SearchResults;
