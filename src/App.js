import React from 'react';
import './App.css';
import Routes from "./Routes";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="shoply"> 
      <Navbar />
      <div className="Routes">
        <Routes />
      </div>
    </div>
  );
}

export default App;
