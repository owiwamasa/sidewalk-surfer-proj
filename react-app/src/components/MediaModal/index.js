import { useState } from 'react'
import { useDispatch } from 'react-redux';
import {setErrors} from '../../store/errors'
import MediaPage from "./MediaPage";
import { Modal } from '../../context/Modal'

function MediaModal({media, comments}) {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()

    return (
        <>
            <button className='mediaModal-btn' onClick={() => setShowModal(true)}>See All Comments....</button>
            {showModal && (
                <Modal onClose={() => {
                    setShowModal(false)
                    dispatch(setErrors([]))
                    }}>
                    <MediaPage media={media} comments={comments}/>
                </Modal>
            )}
        </>

    )
}

export default MediaModal
