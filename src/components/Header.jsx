import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="text-center bg-blue-500 p-4">
      <nav>
        <ul className="flex justify-around">
          <li className="text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white">
            <Link to="/about">About Us</Link>
          </li>
          <li className="text-white">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
