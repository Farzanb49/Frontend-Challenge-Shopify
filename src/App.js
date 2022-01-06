import React from 'react';
import Feed from './Feed';
import RefreshButton from './RefreshButton';
import './App.css';



function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <div></div>
        <h1>
          Spacestagram
        </h1>
        <RefreshButton />
        </header>
        <Feed />
    </div>
  );
}

export default App;
