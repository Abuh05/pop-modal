import React, { useState } from "react";
import "./App.css";
import { Modal } from "./modal";


export default function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  return (
    <div className="App">
      <h1>Popup Modal</h1>
      <button onClick={openModal}>Open Modal</button>
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
    </div>
  );
}