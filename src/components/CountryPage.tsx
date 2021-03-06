import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { TCountryPage } from '../models/Country';

import { getSingleCountry } from '../functions/getSingleCountry';

import { BsArrowLeft } from 'react-icons/bs';

const CountryPage: React.FC = () => {
  const [country, setCountry] = useState<TCountryPage | null>(null);

  const { code } = useParams();

  const fetchData = async () => {
    const data = await getSingleCountry(code);
    setCountry(data[0]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!country) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="mx-auto w-fit overflow-x-hidden">
      <Link to="/" className="btn my-20">
        <BsArrowLeft className="mr-3 text-2xl" />
        Back
      </Link>
      <div className="flex flex-col xl:flex-row gap-10">
        <img
          src={country.flags.png}
          alt="country flag"
          className="min-w-[320px] h-[150px] lg:w-[560px] lg:h-[400px] object-contain"
        />
        <div className="ml-10">
          <h3 className="text-3xl  font-bold mb-7">{country.name.official}</h3>

          <div className="flex flex-col gap-y-10 justify-between items-start lg:flex-row lg:gap-y-0">
            <div>
              <div className="mb-5 w-72">
                <span className="font-bold mr-2">Native name:</span>
                {country.altSpellings && country.altSpellings.length > 1
                  ? country.altSpellings[1]
                  : 'N/A'}
              </div>
              <div className="mb-5 w-72">
                <span className="font-bold mr-2">Population:</span>
                {country.population.toLocaleString('en-US')}
              </div>
              <div className="mb-5 w-72">
                <span className="font-bold mr-2">Region:</span>
                {country.region}
              </div>
              <div className="mb-5 w-72">
                <span className="font-bold mr-2">Subregion:</span>
                {country.subregion}
              </div>
              <div className="mb-5 w-72">
                <span className="font-bold mr-2">Capital:</span>
                {country.capital}
              </div>
            </div>

            <div>
              <div className="mb-5 w-72">
                <span className="font-bold mr-2">Top level domain:</span>
                {country.tld}
              </div>
              <div className="mb-5 w-72">
                <span className="font-bold mr-2">Currencies:</span>
                {country.currencies
                  ? Object.values(country.currencies)
                      .map((curr) => curr.name)
                      .join(', ')
                  : 'N/A'}
              </div>
              <div className="mb-5 w-72">
                <span className="font-bold mr-2">Languages:</span>
                {country.languages
                  ? Object.values(country.languages).join(', ')
                  : 'N/A'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
