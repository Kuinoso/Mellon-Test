import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <HashRouter basename='/' >
      <Route path="/" render={() => <Navbar />} />
    </HashRouter>
  );
}

export default App;
