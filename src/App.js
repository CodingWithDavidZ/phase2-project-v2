import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './component/Header';
import Search from './component/Search';
import SearchResults from './component/SearchResults';
import SavedSearches from './component/SavedSearches';

function App() {
  const [visibility, setVisibility] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [savedVisibility, setSavedVisibility] = useState(false);
  console.log(searchData);

  return (
    <Router>
      <Header />
      <Search
        setSearchData={setSearchData}
        setVisibility={setVisibility}
        setSavedVisibility={setSavedVisibility}
        savedVisibility={savedVisibility}
      />
      {visibility ? <SearchResults searchData={searchData} /> : null}
      {savedVisibility ? <SavedSearches /> : null}
    </Router>
  );
}

export default App;
