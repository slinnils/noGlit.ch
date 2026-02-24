import { useState } from "react";

export default function ComputedValuesProblem() {
  const [price, setPrice] = useState(10);
  const [amount, setAmount] = useState(2);


  function handlePriceChange(event) {
    const newPrice = +event.target.value;

    setPrice(newPrice);
  }

  function handleAmountChange(event) {
    const newAmount = +event.target.value;

    setAmount(newAmount);
  }
  
  const total = price * amount;

  return (
    <section className="card">
      <h2>Fix Unnecessary State</h2>

      <div className="flex flex-col gp-3">
        <label>Price:</label>
        <input type="number" value={price} onChange={handlePriceChange} />
      </div>

      <div className="flex flex-col gp-3 my-5">
        <lable>Amount:</lable>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>

      <p>Total: {total} CHF</p>
    </section>
  );
}
