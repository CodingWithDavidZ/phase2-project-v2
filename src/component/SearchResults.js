import React from 'react';

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

  return <div>{list}</div>;
}

export default SearchResults;
