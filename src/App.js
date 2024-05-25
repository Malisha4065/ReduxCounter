import "./App.css";
import { SetCounter } from "./SetCounter";
import { useCounter } from "./state/use-counter";

function App() {
  const incident = "Incident";
  const { count, increment, decrement, set } = useCounter();

  return (
    <main>
      <h1>Days Since Last {incident}</h1>
      <p>{count}</p>
      <section>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => set(0)}>Reset</button>
        <button onClick={() => decrement()}>Decrement</button>
      </section>
      <br />
      <SetCounter />
    </main>
  );
}

export default App;
