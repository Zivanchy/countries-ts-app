import React from 'react';

import { BiMoon } from 'react-icons/bi';

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-slate-800 shadow-md px-20 py-10">
      <h1 className="navbar-start text-2xl font-bold text-slate-50">
        Where in the world ?
      </h1>
      <span className="navbar-end text-slate-50 text-md hover:text-slate-700 hover:cursor-pointer ease-in-out duration-200">
        <BiMoon className="mx-2" />
        Light Mode
      </span>
    </div>
  );
};

export default Navbar;
