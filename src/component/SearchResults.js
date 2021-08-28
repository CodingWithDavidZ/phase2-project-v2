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
  infoArray.forEach(function (element) {
    listElement += '<li>' + element + '</li>';
  });
  let listElement = '';

  return;
  <div>
    <div id='info'>{listElement}</div>
  </div>;
}

export default SearchResults;
