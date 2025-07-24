import React from 'react';
import ProductList from '../components/ProductList';

const Fruits = () => {
  const products = [
    { id: 1, name: 'Apple', price: 1 },
    { id: 2, name: 'Banana', price: 0.5 }
  ];

  return (
    <>
      <h2>Fruits Department</h2>
      <ProductList products={products} />
    </>
  );
};

export default Fruits;
