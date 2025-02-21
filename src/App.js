import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import BookClubLoginSignup from './Components/BookClubLoginSignup';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<BookClubLoginSignup />} />

      </Routes>
    </Router>
  );
}

export default App;
