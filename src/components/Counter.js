import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';
import { couterActions } from '../store/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(couterActions.increment());
  }

  const decrementHandler = () => {
    dispatch(couterActions.decrement());
  }

  const increaseHandler = () => {
    dispatch(couterActions.increase(5));
  }

  const decreaseHandler = () => {
    dispatch(couterActions.decrease(5));
  }

  const toggleCounterHandler = () => {
    dispatch(couterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={increaseHandler}>Increase By 5</button>
        <button onClick={decreaseHandler}>Decrease By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
