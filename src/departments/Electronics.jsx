import React from 'react';
import ProductList from '../components/ProductList';

const Electronics = () => {
  const products = [
    { id: 3, name: 'TV', price: 1000 },
    { id: 4, name: 'Laptop', price: 500 },
    { id: 5, name: 'Phone', price: 400 }
  ];

  return (
    <>
      <h2>Electronics Department</h2>
      <ProductList products={products} />
    </>
  );
};

export default Electronics;
