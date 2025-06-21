// import './tictactoe.css';
import { useNavigate } from 'react-router';

const TicTacToe = () => {
  const navigate = useNavigate();

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="coming-soon-container">
      <div className="coming-soon-content">
        <h1 className="title">🚧 В разработке 🚧</h1>
        <p className="subtitle">
          Эта игра еще не готова, но скоро появится! Спасибо за терпение.
        </p>
        <div className="loader" />
      </div>
      <button className="back-button" onClick={goBack}>
          ← Назад
        </button>
    </div>
  );
};

export default TicTacToe;
