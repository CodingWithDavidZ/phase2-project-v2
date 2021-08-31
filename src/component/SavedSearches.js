import React, { useState, useEffect } from 'react';

function SavedSearches() {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/saved')
      .then((response) => response.json())
      .then((data) => setSaved(data));
  }, []);

  const existingSaved = saved.slice(1, 51).map((data) => {
    return (
      <p id={data.id} key={data.id}>
        {' '}
        <a target='_blank' rel='noopener noreferrer' href={data.url}>
          <img src={data.picture} alt={data.id} width='100' height='100' />
        </a>
        <button className='btn btn-link' id={data.id} onClick={handleClick}>
          Remove
        </button>
      </p>
    );
  });

  function handleClick(e) {
    const buttonID = e.target.id;
    fetch(`http://localhost:3000/saved/${buttonID}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return <div>{existingSaved}</div>;
}

export default SavedSearches;
