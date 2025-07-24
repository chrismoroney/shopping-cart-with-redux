import React, { useState } from 'react';
import Navbar from './Navbar';
import Fruits from './departments/Fruits';
import Electronics from './departments/Electronics';
import Clothing from './departments/Clothing';
import Cart from './components/Cart';

const App = () => {
  const [department, setDepartment] = useState('fruits');

  const renderDepartment = () => {
    switch (department) {
      case 'fruits':
        return <Fruits />;
      case 'electronics':
        return <Electronics />;
      case 'clothing':
        return <Clothing />;
      default:
        return <Fruits />;
    }
  };

  return (
    <>
      <h1>Shopping Cart</h1>
      <Navbar onSelectDepartment={setDepartment} />
      {renderDepartment()}
      <Cart />
    </>
  );
};

export default App;
