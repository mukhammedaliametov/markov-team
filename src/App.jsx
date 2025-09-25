import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Category from './components/Category';
import Products from './components/Products';
import Work from './components/Work';
import Footer from './components/Footer';
import Question from './components/Question';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Category />
      <Products />
      <Work />
      <Question />
      <Footer />
    </div>
  );
};

export default App;