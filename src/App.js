import { useState } from 'react';
import Board from './components/board';

export default function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  return( 
    <>
      <div className='game'>
        <Board 
          xIsNext={xIsNext} 
          squares={currentSquares} 
          onPlay={handlePlay}
        />
      </div>
      <div className='game'>
        <div className='status'>Teste</div>
      </div>
    </>

  )
}