import './result-display.css';

const ResultDisplay = ({ result }) => 
  result ? (
    <div className="result-display">
      <div className="result-text">{result}</div>
    </div>
  ) : null;

export default ResultDisplay;