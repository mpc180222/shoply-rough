import React from 'react';
import logo from './logo.svg';
import './App.css';
import RoutesMaster from './RoutesMaster';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <RoutesMaster></RoutesMaster>
    </div>
  );
}

export default App;
