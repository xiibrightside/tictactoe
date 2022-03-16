import React from 'react';
import Board from './components/Board';
import './Styles/root.scss';

function App() {
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <Board />
    </div>
  );
}

export default App;
