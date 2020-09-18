import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom'
import './Login.css'
import fbIcon from '../../images/Icon/fb.png'
import googleIcon from '../../images/Icon/google.png'
import BlackLogoHeader from '../BlackLogoHeader/BlackLogoHeader';
import "firebase/auth";
import { SelectPlaceContext } from '../../App';
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';

const Login = () => {
    const [selectedPlace, setSelectedPlace, loggedInUser, setLoggedInUser] = useContext(SelectPlaceContext); 
    const [newUser, setNewUser] = useState(true);
    const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });

  initializeLoginFramework();

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleLogin = () => {
    handleGoogleSignIn()
      .then(res => {
        handleResponse(res, true);
      })
  }

  const handleFbLogin = () => {
    handleFbSignIn()
      .then(res => {
        handleResponse(res, true);
      })

  }

  const signOut = () => {
    handleSignOut()
      .then(res => {
        handleResponse(res, false);
      })
  }

  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  }

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then(res => {
          handleResponse(res, true);
        })
    }

    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          handleResponse(res, true);
        })
    }
    e.preventDefault();
  }

    return (
        <div className='login-section mb-5'>
            <div className='container'>
                <BlackLogoHeader/>
                <div className='create-account-form d-flex justify-content-center mt-3'>
                    <div style={{ minWidth: '35%' }} className="card">
                        <div className="card-body">
                            {newUser ? <h5 className="card-title mb-4">Create an account</h5> : <h5 className="card-title mb-4">Login</h5>}
                            <div className='form-group'>
                                <form onSubmit={handleSubmit}>
                                    {newUser && <input className="form-control mb-4 login-input" onBlur={handleBlur} type="text" name="" placeholder="First Name" required />}
                                    {newUser && <input className="form-control mb-4 login-input" onBlur={handleBlur} type="text" name="" placeholder="Last Name" required />}
                                    <input className="form-control mb-4 login-input" type="text" onBlur={handleBlur} name="" placeholder="Username or Email" required />
                                    <input className="form-control mb-4 login-input" type="password" onBlur={handleBlur} name="password" placeholder="Password" required />
                                    {newUser && <input className="form-control mb-4 login-input" onBlur={handleBlur} type="password" name="password" placeholder="Confirm Password" required />}
                                    <button className="btn btn-warning btn-block mb-3">Create an account</button>
                                </form>
                            </div>
                            <p className='text-center mb-0'>Already have an account? <Link onClick={() =>setNewUser(!newUser)} className='text-warning'>Login</Link></p>
                        </div>
                    </div>
                </div>

                {/*  */}
                <div className='d-flex align-items-center justify-content-center mt-2'>
                    <div className='bottom-border'></div>
                    <span className='mx-2'>Or</span>
                    <div className='bottom-border'></div>
                </div>

                {/*  */}
                <div className='d-flex flex-column align-items-center justify-content-center'>
                        <button onClick={handleFbLogin} className='btn google-login d-flex align-items-center border rounded-pill mb-2'>
                            <img src={fbIcon} style={{ width: '30px', marginRight: '15px' }} alt="" />
                            <p className='m-0'>Continue With Facebook</p>
                        </button>
                        <button onClick={handleGoogleLogin} className='btn google-login d-flex align-items-center border rounded-pill'>
                            <img src={googleIcon} style={{ width: '30px', marginRight: '30px' }} alt="" />
                            <p className='m-0'>Continue With Google</p>
                        </button>
                </div>
            </div>
        </div>
    );
};

export default Login;