import { useState } from 'react'
import EditSpotForm from "./EditSpotForm";
import { Modal } from '../../context/Modal'

function EditSpotModal() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button id='create-spot-btn' onClick={() => setShowModal(true)}>Edit Spot</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditSpotForm setShowModal={setShowModal}/>
                </Modal>
            )}
        </>

    )
}

export default EditSpotModal
