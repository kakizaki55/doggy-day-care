import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <NavLink to="/" className="link">
        Home
      </NavLink>
      <NavLink to="/admin" className="link">
        Admin
      </NavLink>
    </header>
  );
}
