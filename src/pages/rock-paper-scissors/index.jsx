import './rps.css';
import { useState } from 'react';
import GameContainer from '@components/game-container';
import ScoreBoard from '@components/score-board';
import ResultDisplay from '@components/result-display';
import ThinkingDisplay from '@components/thinking-display';
import ChoiceDisplay from '@components/choice-display';
import ChoiceButtons from '@components/choice-buttons';
import ResetButton from '@components/reset-button';

const RockPaperScissors = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [showChoices, setShowChoices] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [hoveredReset, setHoveredReset] = useState(false);

  const choices = [
    { name: 'rock', emoji: '🗿', label: 'Камень' },
    { name: 'paper', emoji: '📄', label: 'Бумага' },
    { name: 'scissors', emoji: '✂️', label: 'Ножницы' },
  ];

  const getRandomChoice = () =>
    choices[Math.floor(Math.random() * choices.length)];

  const determineWinner = (player, computer) => {
    if (player.name === computer.name) return 'tie';
    const winConditions = {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper',
    };
    return winConditions[player.name] === computer.name ? 'player' : 'computer';
  };

  const playGame = (choice) => {
    if (isPlaying) return;
    setIsPlaying(true);
    setPlayerChoice(choice);
    setShowChoices(false);

    let counter = 0;
    const interval = setInterval(() => {
      setComputerChoice(choices[counter % 3]);
      counter++;
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      const compChoice = getRandomChoice();
      setComputerChoice(compChoice);

      const winner = determineWinner(choice, compChoice);
      if (winner === 'player') {
        setResult('Вы выиграли! 🎉');
        setPlayerScore((prev) => prev + 1);
      } else if (winner === 'computer') {
        setResult('Компьютер выиграл! 🤖');
        setComputerScore((prev) => prev + 1);
      } else {
        setResult('Ничья! 🤝');
      }

      setShowChoices(true);
      setIsPlaying(false);
    }, 1500);
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult('');
    setShowChoices(false);
    setPlayerScore(0);
    setComputerScore(0);
  };

  return (
    <GameContainer>
      <div className="title">
        <h1 className="title-text">Камень, Ножницы, Бумага</h1>
        <p className="subtitle">Выберите свой ход!</p>
      </div>

      <ScoreBoard playerScore={playerScore} computerScore={computerScore} />

      <div className="gameArea">
        {showChoices && (
          <ChoiceDisplay
            playerChoice={playerChoice}
            computerChoice={computerChoice}
          />
        )}

        <ResultDisplay result={result} />

        {isPlaying && <ThinkingDisplay emoji={computerChoice?.emoji} />}
      </div>

      <ChoiceButtons
        choices={choices}
        isPlaying={isPlaying}
        playGame={playGame}
        hoveredButton={hoveredButton}
        setHoveredButton={setHoveredButton}
      />

      <ResetButton
        resetGame={resetGame}
        hoveredReset={hoveredReset}
        setHoveredReset={setHoveredReset}
      />
    </GameContainer>
  );
};

export default RockPaperScissors;
