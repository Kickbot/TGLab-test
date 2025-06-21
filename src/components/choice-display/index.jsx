import './choice-display.css';

const ChoiceDisplay = ({ playerChoice, computerChoice }) => (
  <div className="choices-display">
    <div className="choice-item">
      <div className="choice-emoji">{playerChoice?.emoji}</div>
      <div className="choice-label">{playerChoice?.label}</div>
      <div className="choice-subtext">Ваш выбор</div>
    </div>
    <div className="vsText">VS</div>
    <div className="choice-item">
      <div className="choice-emoji">{computerChoice?.emoji}</div>
      <div className="choice-label">{computerChoice?.label}</div>
      <div className="choice-subtext">Компьютер</div>
    </div>
  </div>
);

export default ChoiceDisplay;