import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  // Home,
  Clock,
  AnimalCrossingCountdown
} from './modules';

const basicReactAppHome = () => {
  return (
    <React.Fragment>
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
      {/* Basic unstyled header that links to different pages. We can add linked in and resume links here as well. */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/clock">Clock</Link>
        </li>
        <li>
          <Link to="/animalcrossingcountdown">AnimalCrossingCountdown</Link>
        </li>
      </ul>

      <hr />
      {/* This Switch is where you add in all your pages. I've added a few pages here
          You want to wrap the "page" in a route and add the route you want for that page.
          Then you can add to the header above the link to it.
      */}
      <Switch>
        <Route exact path="/">
          {/* When we want to us JS in the JSX return, we wrap it in curly brackets. Until we build out your Home page, let's keep the basic CRA home so it's not an empty page. */}
          {basicReactAppHome()}
        </Route>
        <Route path="/clock">
          <Clock />
        </Route>
        <Route path="/animalcrossingcountdown">
          <AnimalCrossingCountdown />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
