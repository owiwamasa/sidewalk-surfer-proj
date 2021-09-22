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
  const [profilePic, setProfilePic] = useState(null);
  const [imageLoading, setImageLoading] = useState(false)
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  
  const onSignUp = async (e) => {
    e.preventDefault();

      // const data = await dispatch(signUp(username, email, password, profilepic));
      if (password !== repeatPassword) {
        setErrors(['Passwords do not match']);
        return
      }
      if (password === repeatPassword) {
        
        const formData = new FormData();
        formData.append("username", username);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("profilePic", (!profilePic ? 'https://i.imgur.com/2y2FmRJ.png' : profilePic));
        // formData.append("profilepic", profilepic);
        // console.log('comp 1', formData)
        setImageLoading(true)



        const data = await dispatch(signUp(formData));
        if (data){
          setErrors(data)
          setImageLoading(false)
        } else {
          setImageLoading(false)
        }

        // const data = await dispatch(signUp(username, email, password, (!profilepic ? 'https://i.imgur.com/2y2FmRJ.png' : profilepic)));
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

  // const formData = new FormData();
  // formData.append("username", username);
  // formData.append("email", email);
  // formData.append("password", password);
  // formData.append("profilepic", profilepic);

  // setImageLoading(true)

  // const success = await dispatch(addMedium(formData, user))

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
            type='file'
            accept='image/*'
            name='profilePic'
            onChange={(e) => setProfilePic(e.target.files[0])}
            // value={profilepic}
          ></input>
        </div>
        </div>
        <div className='form-submit-btn'>
          {(imageLoading)&& <p>Loading...</p>}
          <button className='form-btn' type='submit'>Sign Up</button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
