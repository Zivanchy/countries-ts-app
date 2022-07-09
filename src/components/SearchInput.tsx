import React from 'react';

import { AiOutlineSearch } from 'react-icons/Ai';

const SearchInput: React.FC = () => {
  return (
    <form className="p-1 form-control flex flex-row items-center bg-slate-800 w-96 rounded-md shadow-md">
      <AiOutlineSearch className="text-3xl mx-5" />
      <input
        type="text"
        placeholder="Search for a country..."
        className="input w-96 bg-slate-800 text-l focus:outline-none"
      />
    </form>
  );
};

export default SearchInput;
