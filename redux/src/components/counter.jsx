import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementbyAmount} from '../features/counter/counterSlice';

function Counter() {
const [amount, setAmount] = React.useState(0);
  const count = useSelector((state) => state.counter.count); // get count from redux
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment()); // dispatch increment action
  };

  const handleDecrement = () => {
    dispatch(decrement()); // dispatch decrement action
  };

  const handleIncrementByAmount = () => {

    dispatch(incrementbyAmount(Number(amount)));
  }
  

  

  return (
    <div>
      <h2>Counter Component</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <h4>Multipler counter</h4>
        <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
        <button onClick={handleIncrementByAmount}>Increment by Amount</button>
      
    </div>
  );
}

export default Counter;
