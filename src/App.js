import React from 'react';


import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Main from './components/Layout/Main';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <Main/>
			<Footer/>
    </div>
  );
}

export default App;
