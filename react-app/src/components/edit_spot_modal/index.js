import { useState } from 'react'
import { useDispatch } from 'react-redux';
import {setErrors} from '../../store/errors'
import EditSpotForm from "./EditSpotForm";
import { Modal } from '../../context/Modal'

function EditSpotModal() {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()

    return (
        <>
            <button id='create-spot-btn' onClick={() => setShowModal(true)}>Edit Spot</button>
            {showModal && (
                <Modal onClose={() => {
                    setShowModal(false)
                    dispatch(setErrors([]))
                    }}>
                    <EditSpotForm setShowModal={setShowModal}/>
                </Modal>
            )}
        </>

    )
}

export default EditSpotModal
