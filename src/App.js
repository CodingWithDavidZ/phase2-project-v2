import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './component/Header';
import Search from './component/Search';
import SearchResults from './component/SearchResults';

function App() {
  const [searchData, setSearchData] = useState([]);
  console.log(searchData);

  return (
    <Router>
      <Header />
      <Search setSearchData={setSearchData} />
      <SearchResults searchData={searchData} />
    </Router>
  );
}

export default App;
