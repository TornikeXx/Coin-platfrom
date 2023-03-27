import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import InfoCards from './components/InfoCards';
import CostumerCards from './components/CostumerCards';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      < Navbar />
      < Home />
      < InfoCards />
      <CostumerCards />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
