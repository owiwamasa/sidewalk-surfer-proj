import { useState } from 'react'
import { useDispatch } from 'react-redux';
import {setErrors} from '../../store/errors'
import CreateSpotForm from "./CreateSpotForm";
import { Modal } from '../../context/Modal'

function CreateSpotModal() {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()

    return (
        <>
            <button id='create-spot-btn' onClick={() => setShowModal(true)}>Create Spot</button>
            {showModal && (
                <Modal onClose={() => {
                    setShowModal(false)
                    dispatch(setErrors([]))
                    }}>
                    <CreateSpotForm setShowModal={setShowModal}/>
                </Modal>
            )}
        </>

    )
}

export default CreateSpotModal
