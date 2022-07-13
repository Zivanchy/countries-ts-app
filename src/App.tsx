import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import CountriesGrid from './components/CountriesGrid';
import CountryPage from './components/CountryPage';

const App: React.FC = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);

  const handleTheme = (e: React.MouseEvent<HTMLDivElement>) => {
    setDarkTheme(!darkTheme);
  };
  return (
    <div data-theme={darkTheme ? 'night' : 'cmyk'} className="min-h-screen">
      <BrowserRouter>
        <Navbar handleTheme={handleTheme} />
        <Routes>
          <Route path="/" element={<CountriesGrid theme={darkTheme} />} />
          <Route path="/country/:code" element={<CountryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
