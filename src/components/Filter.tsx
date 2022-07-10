import React, { useState } from 'react';

import { BiChevronDown } from 'react-icons/bi';

interface HandleClick {
  handleClick(e: React.MouseEvent<HTMLDivElement>): void;
}

const Filter: React.FC<HandleClick> = ({ handleClick }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      tabIndex={0}
      className="bg-slate-800 w-72 px-5 py-4 rounded-md  hover:cursor-pointer relative shadow-md"
    >
      <span
        className="flex justify-between items-center"
        onClick={() => {
          setOpen(!open);
        }}
      >
        Filter by Region
        <BiChevronDown className="text-2xl" />
      </span>
      {open && (
        <div className="absolute left-0 top-[75px] w-72 font-medium text-slate-50 rounded-md z-10">
          <div
            onClick={handleClick}
            id="all"
            className="py-4 pl-5 bg-slate-800 rounded-t-md hover:bg-slate-500"
          >
            All
          </div>
          <div
            onClick={handleClick}
            id="africa"
            className="py-4 pl-5 bg-slate-800 hover:bg-slate-500"
          >
            Africa
          </div>
          <div
            onClick={handleClick}
            id="americas"
            className="py-4 pl-5 bg-slate-800 hover:bg-slate-500"
          >
            America
          </div>
          <div
            onClick={handleClick}
            id="asia"
            className="py-4 pl-5 bg-slate-800 hover:bg-slate-500"
          >
            Asia
          </div>
          <div
            onClick={handleClick}
            id="europe"
            className="py-4 pl-5 bg-slate-800 hover:bg-slate-500"
          >
            Europe
          </div>
          <div
            onClick={handleClick}
            id="oceania"
            className="py-4 pl-5 bg-slate-800 rounded-b-md hover:bg-slate-500"
          >
            Oceania
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
