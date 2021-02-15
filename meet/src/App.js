import './App.css';
import React from 'react';
import Header from './Header';
import Cards from './Cards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className='app'>
      {/* Header
      TinderCards
      SwipeButtons */}
      <Header></Header>
      <Cards></Cards>
      <SwipeButtons />
    </div>
  );
}

export default App;
