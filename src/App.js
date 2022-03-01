import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" />
          <Route path="/missions" />
          <Route path="/profile" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
