import React from 'react';

import Navbar from './components/Navbar';
import CountriesGrid from './components/CountriesGrid';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="mx-20 my-20">
        <CountriesGrid />
      </div>
    </>
  );
};

export default App;
