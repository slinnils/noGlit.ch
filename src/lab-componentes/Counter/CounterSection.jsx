import CounterButton from "./ConterButton.jsx";

export default function CounterSection({ value, onIncrement, onDecrement }) {
  return (
    <section className="flex flex-col gap-6 items-center">
      <h1 className="text-2xl text-stone-200">Counter</h1>
      <CounterButton
        value={value}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
      />
      <p className="text-2xl text-stone-200">Value = {value}</p>
    </section>
  );
}
