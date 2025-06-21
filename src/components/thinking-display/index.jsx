import './thinking-display.css';

const ThinkingDisplay = ({ emoji }) => (
  <div className="thinking-display">
    <div className="thinking-emoji">{emoji || '❓'}</div>
    <div className="thinking-text">Компьютер думает...</div>
  </div>
);

export default ThinkingDisplay;