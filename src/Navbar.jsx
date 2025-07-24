import React from 'react';

const Navbar = ({ onSelectDepartment }) => {
  return (
    <nav>
      <button onClick={() => onSelectDepartment('fruits')}>Fruits</button>
      <button onClick={() => onSelectDepartment('electronics')}>Electronics</button>
      <button onClick={() => onSelectDepartment('clothing')}>Clothing</button>
    </nav>
  );
};

export default Navbar;
