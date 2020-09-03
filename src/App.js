import React from 'react';
import Header from './components/Header';
import logo from './public/logo.svg';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header className="App-header" >
        MAKE MEME GREAT
      </Header>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
