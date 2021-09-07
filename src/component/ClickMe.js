import React, { useState } from 'react';

function ClickMe() {
  const [value, setValue] = useState('');
  const [increment, setIncrement] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const increase = increment + value.length;
    setIncrement(increase);
    setValue('');
  }
  console.log(increment);

  return (
    <form id='searchForm' autoComplete='off' onSubmit={handleSubmit}>
      <div className='form-group'>
        <input
          type='text'
          className='form-control'
          id='search'
          placeholder='Input'
          required
          onChange={handleChange}
          value={value}
        />
        <br></br>
        <button id='searchButton'>Click Me</button>
        <p>Increment:{increment}</p>
      </div>
    </form>
  );
}

export default ClickMe;
