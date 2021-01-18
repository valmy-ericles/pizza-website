import React from 'react';

import { GlogalStyle } from './globalStyles';
import { BrowserRouter as Router } from 'react-router-dom';

import { data as productData } from './components/Products/data';

import Hero from './components/Hero';
import Products from './components/Products';

function App() {
  return (
    <Router>
      <GlogalStyle/>
      <Hero/>
      <Products heading={"Choose your favorite"} data={productData}/>
    </Router>
  );
}

export default App;
