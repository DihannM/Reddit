import React from 'react';
import Header from './features/Header/Header.js';
import Home from './features/Home/Home.js';
import './App.css';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
