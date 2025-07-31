import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import CollegePage from './components/CollegePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/college" element={<CollegePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;