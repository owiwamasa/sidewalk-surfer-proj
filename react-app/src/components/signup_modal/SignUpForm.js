import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [profilepic, setProfilepic] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();

      const data = await dispatch(signUp(username, email, password, profilepic));
      if (data && (password !== repeatPassword)) {
        setErrors(data.concat(['Passwords do not match']));
      } else if (data) {
        setErrors(data)
      }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='form-div'>
      <form onSubmit={onSignUp}>
      <div className='form-content'>
        <div className='form-all-inputs-container'>
          <div className='form-h3-container'>
              <h3 className='form-h3'>Sign Up</h3>
          </div>
        <div className='form-error-div'>
          {errors.map((error, ind) => (
            <div className='form-error' key={ind}>{error}</div>
          ))}
        </div>
        <div className='form-input-container'>
          <label className='form-label'>User Name</label>
          <input
            className='form-input'
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div className='form-input-container'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='text'
            name='email'
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div className='form-input-container'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div className='form-input-container'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            // required={true}
          ></input>
        </div>
        <div className='form-input-container'>
          <label className='form-label'>Profile Picture URL</label>
          <input
            className='form-input'
            type='text'
            name='profilepic'
            onChange={(e) => setProfilepic(e.target.value)}
            value={profilepic}
          ></input>
        </div>
        </div>
        <div className='form-submit-btn'>
          <button className='form-btn' type='submit'>Sign Up</button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
