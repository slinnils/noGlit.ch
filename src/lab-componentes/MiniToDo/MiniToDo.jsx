import { useState } from "react";

export default function MiniToDo() {
  const [tasks, setTasks] = useState([]);
  const [userInput, setUserInput] = useState("");

  function handleUserInput(e) {
    setUserInput(e.target.value);
  }

  function handleAddTask() {
    const text = userInput.trim();
    if (!text) return;

    const newId = crypto.randomUUID();
    setTasks((prev) => [...prev, { task: text, done: false, id: newId }]);
    setUserInput("");
  }

  function handleCheckbox(taskID) {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskID ? { ...t, done: !t.done } : t))
    );
  }

  function handleDelete(taskID) {
    setTasks((prev) => prev.filter((t) => t.id !== taskID));
  }

  return (
    <div className="flex flex-col gap-15">
      <div className="text-[#D1F8EF] bg-linear-to-bl from-[#0d2238] to-[#123458] rounded-2xl p-5">
        <h1>Mini To Do App</h1>

        <div className="flex gap-7 ml-5 mt-5">
          <div className="flex flex-col gap-3">
            <label>Enter Task</label>
            <input
              className="bg-[#103358] py-2 px-5 rounded-2xl"
              type="text"
              placeholder="enter something"
              onChange={handleUserInput}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleAddTask();
                }
              }}
              value={userInput}
            />
          </div>
          <button
            type="button"
            onClick={handleAddTask}
            className="h-[50%] self-end"
          >
            add
          </button>
        </div>
      </div>

      <div className="text-[#D1F8EF] bg-linear-to-bl from-[#0d2238] to-[#123458] rounded-2xl p-5">
        <h2>Tasks:</h2>
        <ul>
          {tasks.length === 0 ? (
            <li className="text-2xl w-120 py-3 px-5 mt-5 ml-5 rounded-2xl">No Tasks yet</li>
          ) : (
            tasks.map((task) => (
              <li
                key={task.id}
                className="flex items-baseline gap-3 text-stone-800 bg-[#C4DAD2] border w-120 py-3 px-5 mt-5 ml-5 rounded-2xl"
              >
                <input
                  checked={task.done}
                  type="checkbox"
                  onChange={() => handleCheckbox(task.id)}
                />
                <p className={task.done ? "line-through text-[#8080808e]" : ""}>
                  {task.task}
                </p>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="ml-auto h-1/2 bg-amber-900"
                >
                  delete
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
