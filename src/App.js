import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Header from './component/Header';
import Search from './component/Search';
import SearchResults from './component/SearchResults';
import SavedSearches from './component/SavedSearches';
import About from './component/About';
import Contact from './component/Contact';
import ClickMe from './component/ClickMe';

function App() {
  const [visibility, setVisibility] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [savedVisibility, setSavedVisibility] = useState(false);
  const [saved, setSaved] = useState([]);
  console.log(searchData);

  return (
    <div className='main'>
      <Router>
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
        <Header />
        <Route exact path={'/contact'}>
          <Contact className='contact' />
        </Route>
        <Route exact path={'/clickme'}>
          <ClickMe />
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
          {visibility ? (
            <SearchResults
              searchData={searchData}
              saved={saved}
              setSaved={setSaved}
            />
          ) : null}
          {savedVisibility ? (
            <SavedSearches saved={saved} setSaved={setSaved} />
          ) : null}
        </Route>
      </Router>
    </div>
  );
}

export default App;
