import './game-container.css';

const GameContainer = ({ children }) => (
  <div className="game-container">
    <div className="game-board">{children}</div>
  </div>
);
 
export default GameContainer;