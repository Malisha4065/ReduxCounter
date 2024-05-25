import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const incident = 'Incident';
  const count = useSelector((state) => state.count);

  return (
    <main>
      <h1>Days Since Last {incident}</h1>
      <p>{count}</p>
      <section>
        <button>Increment</button>
        <button>Reset</button>
        <button>Decrement</button>
      </section>
    </main>
  );
}

export default App;
