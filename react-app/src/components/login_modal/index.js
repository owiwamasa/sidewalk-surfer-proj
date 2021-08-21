import { useState } from 'react'
import { useDispatch } from 'react-redux';
import {setErrors} from '../../store/errors'
import LoginForm from "./LoginForm";
import { Modal } from '../../context/Modal'

function LoginFormModal() {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()

    return (
        <>
            <button id='login-btn' onClick={() => setShowModal(true)}>Log In</button>
            {showModal && (
                <Modal onClose={() => {
                    setShowModal(false)
                    dispatch(setErrors([]))
                    }}>
                    <LoginForm />
                </Modal>
            )}
        </>

    )
}

export default LoginFormModal
