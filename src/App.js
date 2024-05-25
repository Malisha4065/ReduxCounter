import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, set, decrement } from './state/actions';

function App() {
  const incident = 'Incident';
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <main>
      <h1>Days Since Last {incident}</h1>
      <p>{count}</p>
      <section>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(set(0))}>Reset</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </section>
    </main>
  );
}

export default App;
