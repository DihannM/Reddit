import React from 'react';
import Header from './features/Header/Header.js';
import Home from './features/Home/Home.js';
import './App.css';
import Subreddits from './features/Subreddits/Subreddits.js';

function App() {
  return (
    <>
      <Header/>
      <div className="root">
        <main>
          <Home />
        </main>
        <aside>
          <Subreddits />
        </aside>
      </div>
    </>
  );
}

export default App;
