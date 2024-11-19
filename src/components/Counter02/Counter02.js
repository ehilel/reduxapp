'use client';
import { useDispatch } from 'react-redux';
import { increment, decrement, reset } from '@/store/store';

export default function Counter02() {
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}