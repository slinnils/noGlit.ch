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
    <section className="text-[#D1F8EF] bg-[#3674B5] rounded-2xl p-5">
      <h2>Fix Unnecessary State</h2>

      <div className="flex flex-col gp-3">
        <label>Price:</label>
        <input className="bg-[#103358] py-2 px-5 rounded-2xl" type="number" value={price} onChange={handlePriceChange} />
      </div>

      <div className="flex flex-col gp-3 my-5">
        <lable>Amount:</lable>
        <input className="bg-[#103358] py-2 px-5 rounded-2xl" type="number" value={amount} onChange={handleAmountChange} />
      </div>

      <p>Total: {total} CHF</p>
    </section>
  );
}
