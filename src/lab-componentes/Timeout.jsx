import { useState, useEffect } from "react";

export default function Timeout() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("...loading");
  const [runId, setRunId] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setData("Data loaded!");
    }, 2000);
    setLoading(false);
    return () => clearTimeout(timerId);
  }, [runId]);

  return (
    <div className="flex flex-col gap-8 justify-center items-center text-2xl text-stone-400">
      <p>{loading ? "...loading" : data}</p>
      <button
        onClick={() => {
            setLoading(true)
            setData("...loading")
          setRunId((prev) => prev + 1);
        }}
      >
        reset
      </button>
    </div>
  );
}
