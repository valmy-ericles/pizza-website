import React from 'react';

import { GlogalStyle } from './globalStyles';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      <GlogalStyle/>
      <Hero/>
    </Router>
  );
}

export default App;
