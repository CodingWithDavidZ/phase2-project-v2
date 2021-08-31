import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Header from './component/Header';
import Search from './component/Search';
import SearchResults from './component/SearchResults';
import SavedSearches from './component/SavedSearches';
import About from './component/About';
import Contact from './component/Contact';

function App() {
  const [visibility, setVisibility] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [savedVisibility, setSavedVisibility] = useState(false);
  console.log(searchData);

  return (
    <Router>
      <Route exact path='/'>
        <Redirect to='/home' />
      </Route>
      <Header />
      <Route exact path={'/contact'}>
        <Contact />
      </Route>
      <Route exact path={'/about'}>
        <About />
      </Route>

      <Route exact path={'/home'}>
        <Search
          setSearchData={setSearchData}
          setVisibility={setVisibility}
          setSavedVisibility={setSavedVisibility}
          savedVisibility={savedVisibility}
        />
        {visibility ? <SearchResults searchData={searchData} /> : null}
        {savedVisibility ? <SavedSearches /> : null}
      </Route>
    </Router>
  );
}

export default App;
