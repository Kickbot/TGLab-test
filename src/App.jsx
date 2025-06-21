import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';

import routes from 'const/routes';

import LandingPage from '@pages/landing-page';
import RockPaperScissors from '@pages/rock-paper-scissors';
import TicTacToe from '@pages/tic-tac-toe';
import Snake from '@pages/snake';

const App = () => {
  useEffect(() => {
    // document.body.classList.remove('page');
    // document.body.classList.add('home');
  }, []);

  return (
    <Router>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path={routes.rps} element={<RockPaperScissors />} />
        <Route path={routes.ticTacToe} element={<TicTacToe />} />
        <Route path={routes.snake} element={<Snake />} />
      </Routes>
    </Router>
  );
};

export default App;
