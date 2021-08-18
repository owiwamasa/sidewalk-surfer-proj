import { useState } from 'react'
import MediaPage from "./MediaPage";
import { Modal } from '../../context/Modal'

function MediaModal({media, comments}) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button onClick={() => setShowModal(true)}>Comments...</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <MediaPage media={media} comments={comments}/>
                </Modal>
            )}
        </>

    )
}

export default MediaModal
