// app.jsx
import React from 'react';
import Board from './component/Board';
import NavBar from './component/NavBar';
import Stopwatch from './component/Stopwatch';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Timer from './component/Timer';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </Router>
  );
};

export default App;
