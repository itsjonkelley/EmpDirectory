import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
// import About from './containers/about';
import Navbar from './components/Navbar';
import Table from './components/Table';


function App() {
  return (
    <Router>
      <Navbar />
      <Table />
      

    </Router>
  );
}

export default App;
