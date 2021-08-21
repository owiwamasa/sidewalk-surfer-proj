import { useState } from 'react'
import { useDispatch } from 'react-redux';
import {setErrors} from '../../store/errors'
import CreateMediaForm from "./CreateMediaPost";
import { Modal } from '../../context/Modal'

function CreateMediaModal() {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()

    return (
        <>
            <button id='create-spot-btn' onClick={() => setShowModal(true)}>Create Media</button>
            {showModal && (
                <Modal onClose={() => {
                    setShowModal(false)
                    dispatch(setErrors([]))
                    }}>
                    <CreateMediaForm setShowModal={setShowModal}/>
                </Modal>
            )}
        </>

    )
}

export default CreateMediaModal
