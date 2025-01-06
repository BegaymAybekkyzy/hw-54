import './GameBoard.css';
import * as React from 'react';
interface Props {
  children: React.ReactNode;
}

const GameBoard: React.FC<Props> = ({children}) => {
  return (
    <div>
      <div className="game-board">
        {children}
      </div>
    </div>
  );
};

export default GameBoard;