import { useState } from 'react'
import CreateMediaForm from "./CreateMediaPost";
import { Modal } from '../../context/Modal'

function CreateMediaModal() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button id='create-spot-btn' onClick={() => setShowModal(true)}>Create Media</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateMediaForm setShowModal={setShowModal}/>
                </Modal>
            )}
        </>

    )
}

export default CreateMediaModal
