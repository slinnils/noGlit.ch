import { useState } from "react";

import Modal from "./Modal";
export default function ModalApp() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function onCloseModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <div>
        <Modal open={modalIsOpen} onClose={onCloseModal} />
        <button
          className=" text-stone-400 text-5xl"
          onClick={() => setModalIsOpen(true)}
        >
          show Modal
        </button>
      </div>
    </>
  );
}
