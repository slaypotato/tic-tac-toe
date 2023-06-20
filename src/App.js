import { useState } from 'react';
import Board from './components/board';

export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus] = useState('X');
  return( 
    <>
      <div className='status'>{status}</div>
      <Board 
        squares={squares} 
        setSquares={setSquares} 
        xIsNext={xIsNext} 
        setXIsNext={setXIsNext}
        status={status}
        setStatus={setStatus}
      />
    </>

  )
}