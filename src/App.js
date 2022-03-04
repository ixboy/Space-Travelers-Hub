import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { HashRouter, Route, Routes } from 'react-router-dom';

import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import Profile from './components/Profile';
import Rockets from './components/Rockets';

function App() {
  return (
    <div>
      <HashRouter basename="/">
        <Header />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
