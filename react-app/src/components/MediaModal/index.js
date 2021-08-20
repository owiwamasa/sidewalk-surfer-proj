import { useState } from 'react'
import MediaPage from "./MediaPage";
import { Modal } from '../../context/Modal'

function MediaModal({media, comments}) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button id='mediaModal-btn' onClick={() => setShowModal(true)}>See All Comments....</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <MediaPage media={media} comments={comments}/>
                </Modal>
            )}
        </>

    )
}

export default MediaModal
