import React from 'react';

const StatusMsg = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el !== null);

  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `Current player is ${current.isXNext ? 'X' : 'O'}`}
      {!winner && noMovesLeft && 'X and O Tied'}
    </h2>
  );
};

export default StatusMsg;
