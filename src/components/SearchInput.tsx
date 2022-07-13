import React from 'react';

import { AiOutlineSearch } from 'react-icons/Ai';

interface Input {
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const SearchInput: React.FC<Input> = ({ handleChange }) => {
  return (
    <form className="form-control p-1 mb-5 w-11/12 flex flex-row items-center bg-slate-800 rounded-md shadow-md lg:w-96 lg:mb-0">
      <AiOutlineSearch className="text-3xl mx-5" />
      <input
        type="text"
        placeholder="Search for a country..."
        className="input w-full bg-slate-800 text-l focus:outline-none lg:w-96"
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchInput;
