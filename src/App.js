import React from 'react';

import { GlogalStyle } from './globalStyles';
import { BrowserRouter as Router } from 'react-router-dom';

import { data as productData } from './components/Products/data';
import { data2 as productData2 } from './components/Products/data';

import Hero from './components/Hero';
import Products from './components/Products';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlogalStyle/>
      <Hero/>
      <Products heading={"Choose your favorite"} data={productData}/>
      <Feature/>
      <Products heading={"Sweet Treats for you"} data={productData2}/>
      <Footer/>
    </Router>
  );
}

export default App;
