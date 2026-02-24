import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";

export default function Modal({ open, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog
      ref={dialog}
      className="mx-auto my-auto p-0 border-none bg-transparent inset-0
    backdrop:bg-black/50 backdrop:backdrop-blur-sm"
    >
      <div className="flex flex-col gap-4 justify-center items-center bg-stone-200 text-stone-800 rounded-2xl shadow-2xl p-6 min-w-88 max-w-md animate-[scale-in_0.2s_ease-out]">
        <h1>Do you want to continue?</h1>
        <p>this Modal will close then.</p>
        <button
  className="px-4 py-2 rounded-lg text-stone-200 bg-stone-500 transition-colors cursor-pointer" onClick={onClose}>Okay!</button>
      </div>
    </dialog>,
    document.getElementById("modal-root")
  );
}