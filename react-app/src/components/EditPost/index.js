import { useState } from "react";
import { useDispatch } from 'react-redux';
import {setErrors} from '../../store/errors'
import EditMediaForm from "./EditMediaPost";
import { Modal } from "../../context/Modal";

function EditMediaModal({ media }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <button id="edit-media-btn" onClick={() => setShowModal(true)}>
        Edit
      </button>
      {showModal && (
        <Modal onClose={() => {
          setShowModal(false)
          dispatch(setErrors([]))
          }}>
          <EditMediaForm setShowModal={setShowModal} media={media} />
        </Modal>
      )}
    </>
  );
}

export default EditMediaModal;
