import { useState } from 'react'
import CreateSpotForm from "./CreateSpotForm";
import { Modal } from '../../context/Modal'

function CreateSpotModal() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button id='create-spot-btn' onClick={() => setShowModal(true)}>Create Spot</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateSpotForm />
                </Modal>
            )}
        </>

    )
}

export default CreateSpotModal
