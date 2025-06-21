import './reset-button.css';

const ResetButton = ({ resetGame, hoveredReset, setHoveredReset }) => (
  <div className="reset-button-container">
    <button
      onClick={resetGame}
      onMouseEnter={() => setHoveredReset(true)}
      onMouseLeave={() => setHoveredReset(false)}
      className={`reset-button ${hoveredReset ? 'hover' : ''}`}
    >
      Новая игра
    </button>
  </div>
);

export default ResetButton;