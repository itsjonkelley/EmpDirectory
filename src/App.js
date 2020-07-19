import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import About from './containers/about';


function App() {
  return (
    <Router>
      <Route exact path = "/" component={About} />
      <Route exact path = "/about" component={About} />
    </Router>
  );
}

export default App;
