import React from 'react';
import ProductList from '../components/ProductList';

const Clothing = () => {
  const products = [
    { id: 6, name: 'T-shirt', price: 20 },
    { id: 7, name: 'Pants', price: 30 },
    { id: 8, name: 'Shoes', price: 50 },
    { id: 9, name: 'Jacket', price: 80 },
    { id: 10, name: 'Hat', price: 15 }
  ];

  return (
    <>
      <h2>Clothing Department</h2>
      <ProductList products={products} />
    </>
  );
};

export default Clothing;
