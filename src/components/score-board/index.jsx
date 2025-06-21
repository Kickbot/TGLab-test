import './score-board.css';

const ScoreBoard = ({ playerScore, computerScore }) => (
  <div className="score-board">
    <div className="score-item">
      <div className="score-number">{playerScore}</div>
      <div className="score-label">Вы</div>
    </div>
    <div className="vs-text">VS</div>
    <div className="score-item">
      <div className="score-number">{computerScore}</div>
      <div className="score-label">Компьютер</div>
    </div>
  </div>
);

export default ScoreBoard;