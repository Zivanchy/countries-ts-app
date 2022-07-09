import React from 'react';

import Navbar from './components/Navbar';
import SearchInput from './components/SearchInput';
import Filter from './components/Filter';

import CountriesGrid from './components/CountriesGrid';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="mx-20 my-20">
        <div className="flex justify-between items-center">
          <SearchInput />
          <Filter />
        </div>
        <CountriesGrid />
      </div>
    </>
  );
};

export default App;
