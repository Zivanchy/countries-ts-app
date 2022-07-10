import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import CountriesGrid from './components/CountriesGrid';
import CountryPage from './components/CountryPage';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<CountriesGrid />} />
          <Route path="/country/:code" element={<CountryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
