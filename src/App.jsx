import { useState, useEffect } from 'react';
import './App.scss';
import PRODUCTS from './data/data.json';
import FilterableProductTable from './FilterableProductTable';

function App() {
  return (
    <>
      <FilterableProductTable products={PRODUCTS} />
    </>
  );
}

export default App;
