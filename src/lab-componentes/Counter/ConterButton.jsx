export default function CounterButton({ onIncrement, onDecrement, value }) {
  const isZero = value < 1;

  return (
    <div className="flex justify-center gap-5 text-2xl text-stone-400">
      <button onClick={onIncrement}>+ 1</button>
      <button disabled={isZero} onClick={onDecrement}>
        - 1
      </button>
    </div>
  );
}
