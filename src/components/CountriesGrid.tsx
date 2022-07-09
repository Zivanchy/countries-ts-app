import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Country } from '../models/Country';

import { getCountries } from '../functions/getCountries';

import CountryCard from './CountryCard';

const CountriesGrid: React.FC = () => {
  const [countries, setCountries] = useState<Country[] | null>(null);

  const fetchData = async () => {
    const data = await getCountries();
    setCountries(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!countries) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="mt-10 flex flex-wrap gap-5 justify-between">
      {countries.map((country: Country, index) => (
        <CountryCard
          key={index}
          name={country.name.official}
          capital={country.capital}
          population={country.population}
          img={country.flags.png}
          region={country.region}
        />
      ))}
    </div>
  );
};

export default CountriesGrid;
