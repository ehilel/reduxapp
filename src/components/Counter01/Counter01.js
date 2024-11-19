'use client';
import { useSelector } from 'react-redux';

export default function Counter01() {
  const count = useSelector((state) => state.counter.value);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>Counter: {count}</h1>
    </div>
  );
}
