import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {setErrors} from '../../store/errors'
import { Modal } from '../../context/Modal';
import SignUpForm from './SignUpForm';

function SignUpFormModal() {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    return (
        <>
            <button id='signup-btn' onClick={() => setShowModal(true)}>Sign Up</button>
            {showModal && (
                <Modal onClose={() => {
                    setShowModal(false)
                    dispatch(setErrors([]))
                    }}>
                    <SignUpForm />
                </Modal>
            )}
        </>
    );
}

export default SignUpFormModal;
