import './landing.css';
import { Link } from 'react-router';
import routes from 'const/routes';

const LandingPage = () => {

  const games = [
    { id: 'rps', name: 'Камень, ножницы, бумага', emoji: '✊✌️✋', path: routes.rps },
    { id: 'ticTacToe', name: 'Крестики-нолики', emoji: '❌⭕', path: routes.ticTacToe },
    { id: 'snake', name: 'Змейка', emoji: '🐍', path: routes.snake },
  ];

  return (
    <div className="container">
      <h1 className="title">Выберите игру</h1>
      <div className="games-list">
        {games.map(game => (
          <Link
            key={game.id}
            to={game.path}
            className="game-card"
          >
            <div className="emoji">{game.emoji}</div>
            <h2 className="game-name">{game.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
