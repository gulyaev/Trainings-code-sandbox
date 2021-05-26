import React, { useState } from "react";
import "./styles.css";

function computeInitialCounter() {
  console.log("Some calculations...");
  return Math.trunc(Math.random() * 20);
}

export default function App() {
  //const [counter, setCounter] = useState(0);
  const [counter, setCounter] = useState(() => {
    return computeInitialCounter();
  });

  const [state, setState] = useState({
    title: "счетчик",
    date: Date.now()
  });

  function increment() {
    //setCounter(counter + 1);
    //setCounter(counter + 1);
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
    setCounter((prev) => prev + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  function updateTitle() {
    setState((prev) => {
      return {
        ...prev,
        title: "Новое название"
      };
    });
  }

  return (
    <div className="App">
      <h1>Счетчик: {counter}</h1>
      <button onClick={increment}>Прибавить</button>
      <button onClick={decrement}>Убавить</button>
      <button onClick={updateTitle}>Изменить название</button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
