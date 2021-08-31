import React, { useState } from 'react';

function Search({
  setSearchData,
  setVisibility,
  setSavedVisibility,
  savedVisibility,
}) {
  //   this should work but doesn't
  //   const originalName = searchUser.split(' ').join('');
  const [user, setUser] = useState('');
  const handleChange = (e) => {
    setUser(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const originalName = user.split(' ').join('');
    fetch('https://api.github.com/users/' + originalName)
      .then((response) => response.json())
      .then((data) => setSearchData(data))
      .then(() => setUser(''));
  }

  function handleClick(e) {
    setVisibility(true);
  }

  function handleShowSaved(e) {
    setSavedVisibility(!savedVisibility);
  }

  return (
    <>
      <form id='searchForm' autoComplete='off' onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            id='search'
            placeholder='Search Username'
            required
            onChange={handleChange}
            value={user}
          />
          <br></br>
          <button id='searchButton' onClick={handleClick}>
            Search User
          </button>
        </div>
      </form>
      <button id='display saved' onClick={handleShowSaved}>
        Toggle My Saved
      </button>
    </>
  );
}

export default Search;
