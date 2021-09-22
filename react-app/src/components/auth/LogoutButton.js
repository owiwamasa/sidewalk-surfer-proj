import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { logout } from '../../store/session';

const LogoutButton = ({setShowMenu}) => {
  const history = useHistory();
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
    history.push('/');
  };

  return <button id='logout-btn' onClick={() => {
    onLogout()
    // setShowMenu(false)
  }}>Logout</button>;
};

export default LogoutButton;
