import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import LandingPage from './pages/landing-page';
import RockPaperScissors from './pages/rock-paper-scissors';

import './App.css';

const App = () => {
  useEffect(() => {
    document.body.classList.remove('page');
    document.body.classList.add('home');
  });

  return (
    <Router>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="rock-paper-scissors" element={<RockPaperScissors />} />
      </Routes>
    </Router>
  );
};

export default App;
