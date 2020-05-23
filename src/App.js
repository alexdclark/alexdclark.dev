import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  Header,
  Clock,
  AnimalCrossingCountdown,
  Contact,
  Footer
} from './modules';

// You basically want as little as possible styling here
// this is just your basic container pointing to all the components in your app
// those components will contain the styles

const basicReactAppHome = () => {
  return (
    <React.Fragment>
      <Header/>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello World from Alex <span role="img" aria-label="thumbs-up">👍</span>
          </p>
          <p>
            Here we have a WIP as I step into the world of React. Come back soon to see my progress!
          </p>
        </div>
      </div>
      <Footer/>
    </React.Fragment>
  );
}

function App() {
  return (
    <Router>
    <div>
      {/* This Switch is where you add in all your pages. I've added a few pages here
          You want to wrap the "page" in a route and add the route you want for that page.
          Then you can add to the header component with a link to it
          See modules/header/Header.jsx
      */}
      <Switch>
        <Route exact path="/">
          {/* When we want to us JS in the JSX return, we wrap it in curly brackets. Until we build out your Home page, let's keep the basic create react app home so it's not an empty page. */}
          {basicReactAppHome()}
        </Route>
        <Route path="/clock">
          <Clock />
        </Route>
        <Route path="/animalcrossingcountdown">
          <AnimalCrossingCountdown />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
