import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './loginform.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='form-div'>
      <form onSubmit={onLogin}>
        <div className='form-content'>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className='form-all-inputs-container'>
          <div className='form-h3-container'>
              <h3 className='form-h3'>Login</h3>
          </div>
        <div className='form-input-container'>
          <label className='form-label' htmlFor='email'>Email</label>
          <input
            className='form-input'
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div className='form-input-container'>
          <label className='form-label' htmlFor='password'>Password</label>
          <input
            className='form-input'
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
        </div>
        </div>
          <div className='form-submit-btn'>
              <button className='form-btn' type='submit'>Login</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
