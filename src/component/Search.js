import React, { useEffect } from 'react';

function Search({ setSearchData }) {
  //   this should work but doesn't
  //   const originalName = searchUser.split(' ').join('');

  const handleChange = (e) => {
    setSearchData(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
  }

  useEffect(() => {
    const originalName = document
      .getElementById('search')
      .value.split(' ')
      .join('');
    fetch('https://api.github.com/users/' + originalName)
      .then((response) => response.json())
      .then((data) => setSearchData(data));
  }, []);

  return (
    <form id='searchForm' autoComplete='off' onSubmit={handleSubmit}>
      <div className='form-group'>
        <input
          type='text'
          className='form-control'
          id='search'
          placeholder='Search Username'
          required
          onChange={handleChange}
        />
        <br></br>
        <button id='searchButton'>Search User</button>
      </div>
    </form>
  );
}

export default Search;
