import { useState } from "react";
import EditMediaForm from "./EditMediaPost";
import { Modal } from "../../context/Modal";

function EditMediaModal({ media }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id="edit-media-btn" onClick={() => setShowModal(true)}>
        Edit
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
