import React from 'react';

import { Link } from 'react-router-dom';

export interface Country {
  name: string;
  capital: string;
  population: number;
  region: string;
  img: string;
  cca3: string;
}

const CountryCard: React.FC<Country> = ({
  name,
  capital,
  population,
  region,
  img,
  cca3,
}) => {
  return (
    <Link to={`/country/${cca3}`}>
      <div className="card card-normal card-bordered w-72 shadow-2xl ease-in-out duration-200 hover:scale-105 hover:cursor-pointer">
        <figure className="w-72 h-40 max-h-full object-cover">
          <img src={img} alt="Country flag" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            <span className="font-bold mr-2">Population:</span>
            {population.toLocaleString('en-US')}
          </p>
          <p>
            <span className="font-bold mr-2">Region:</span>
            {region}
          </p>
          <p>
            <span className="font-bold mr-2">Capital:</span>
            {capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
