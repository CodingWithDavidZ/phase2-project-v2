import React, { useState, useEffect } from 'react';

function SavedSearches({ saved, setSaved }) {
  useEffect(() => {
    fetch('http://localhost:3000/saved')
      .then((response) => response.json())
      .then((data) => setSaved(data));
  }, []);

  const existingSaved = saved.slice(1, 51).map((data) => {
    return (
      <div className='saved-user'>
        <p className='main_grid' id={data.id} key={data.id}>
          {' '}
          <a
            className='grid-image'
            target='_blank'
            rel='noopener noreferrer'
            href={data.url}
          >
            <img src={data.picture} alt={data.id} width='100' height='100' />
          </a>
          <br></br>
          <button
            className='removeButton'
            id={data.id}
            onClick={() => handleClick(data.id)}
          >
            Remove
          </button>
        </p>
      </div>
    );
  });

  function handleClick(id) {
    const filterChange = saved.filter((element) => {
      return element.id != id;
    });
    fetch(`http://localhost:3000/saved/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setSaved(filterChange);
    console.log(saved);
  }

  return <div className='grid-container-3'>{existingSaved}</div>;
}

export default SavedSearches;
