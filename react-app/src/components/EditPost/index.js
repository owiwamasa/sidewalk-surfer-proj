import { useState } from "react";
import EditMediaForm from "./EditMediaPost";
import { Modal } from "../../context/Modal";

function EditMediaModal({ media }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id="create-spot-btn" onClick={() => setShowModal(true)}>
        Edit Media
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditMediaForm setShowModal={setShowModal} media={media} />
        </Modal>
      )}
    </>
  );
}

export default EditMediaModal;
