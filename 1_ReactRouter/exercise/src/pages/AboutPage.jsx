// HomePage.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Router>
      <div>
        <h2>Welcome to the About Page</h2>
        <p>This is the main content of the about page.</p>
      </div>
    </Router>
  );
};

export default HomePage;
