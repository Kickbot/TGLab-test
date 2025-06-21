import './choice-buttons.css';

const ChoiceButtons = ({
  choices,
  isPlaying,
  playGame,
  hoveredButton,
  setHoveredButton
}) => (
  <div className="buttons-grid">
    {choices.map((choice) => (
      <button
        key={choice.name}
        onClick={() => playGame(choice)}
        disabled={isPlaying}
        onMouseEnter={() => setHoveredButton(choice.name)}
        onMouseLeave={() => setHoveredButton(null)}
        className={`choice-button ${hoveredButton === choice.name && !isPlaying ? 'hover' : ''} ${isPlaying ? 'disabled' : ''}`}
      >
        <span className="button-emoji">{choice.emoji}</span>
        {choice.label}
      </button>
    ))}
  </div>
);

export default ChoiceButtons;
