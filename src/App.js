import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World from Alex <span role="img" aria-label="thumbs-up">👍</span>
        </p>
        <p>
          Here we have a WIP as I step into the world of React. Come back soon to see my progress!
        </p>
      </header>

      <Footer/>
    </div>
  );
}

export default App;
