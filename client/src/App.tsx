import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <HashRouter basename='/' >
      <Route path="/" render={() => <Navbar />} />
      <Route exact path="/" render={() => <Home />} />
    </HashRouter>
  );
}

export default App;
