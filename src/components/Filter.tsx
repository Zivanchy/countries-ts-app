import React, { useState } from 'react';

import { BiChevronDown } from 'react-icons/bi';

interface HandleClick {
  handleClick(e: React.MouseEvent<HTMLDivElement>): void;
  theme: boolean;
}

const Filter: React.FC<HandleClick> = ({ handleClick, theme }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      tabIndex={0}
      className="w-72 px-5 py-4 rounded-md  hover:cursor-pointer relative shadow-md"
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
        <div
          data-theme={theme}
          className="absolute left-0 top-[75px] w-72 font-medium rounded-md z-10"
        >
          <div
            onClick={handleClick}
            id="all"
            className="py-4 pl-5 rounded-t-md hover:bg-slate-500"
          >
            All
          </div>
          <div
            onClick={handleClick}
            id="africa"
            className="py-4 pl-5 hover:bg-slate-500"
          >
            Africa
          </div>
          <div
            onClick={handleClick}
            id="americas"
            className="py-4 pl-5 hover:bg-slate-500"
          >
            America
          </div>
          <div
            onClick={handleClick}
            id="asia"
            className="py-4 pl-5 hover:bg-slate-500"
          >
            Asia
          </div>
          <div
            onClick={handleClick}
            id="europe"
            className="py-4 pl-5 hover:bg-slate-500"
          >
            Europe
          </div>
          <div
            onClick={handleClick}
            id="oceania"
            className="py-4 pl-5 rounded-b-md hover:bg-slate-500"
          >
            Oceania
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
