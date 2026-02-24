import { useState } from "react";

export default function IntersectingStateProblem() {
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing((prevState) => !prevState);
  }

  return (
    <>
      
      <section className="text-stone-300 flex flex-col">
        <button className="my-5" onClick={handleClick}>
          {isEditing ? "Edit" : "Save"}
        </button>

        <p>Editing mode: {isEditing ? "OFF" : "ON"}</p>
      </section>
    </>
  );
}
