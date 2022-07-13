import React from 'react';

import { BiMoon } from 'react-icons/bi';

interface HandleTheme {
  handleTheme(e: React.MouseEvent<HTMLDivElement>): void;
}

const Navbar: React.FC<HandleTheme> = ({ handleTheme }) => {
  return (
    <div className="px-5 py-5 navbar shadow-md lg:px-20 lg:py-10">
      <h1 className="text-md navbar-start md:text-2xl font-bold">
        Where in the world ?
      </h1>
      <span
        className="navbar-end text-md hover:text-slate-700 hover:cursor-pointer ease-in-out duration-200"
        onClick={handleTheme}
      >
        <BiMoon className="mx-2" />
        Light Mode
      </span>
    </div>
  );
};

export default Navbar;
