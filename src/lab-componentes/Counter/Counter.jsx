import { useState } from "react";
import CounterSection from "./CounterSection.jsx";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function handleIncrement() {
    setCounter((prev) => prev + 1);
  }

  function handleDecrement() {
    setCounter((prev) => prev - 1);
  }

  return (
    <div>
      <CounterSection
        value={counter}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
}
