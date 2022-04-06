import React, { Component, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { toast } from 'react-toastify';

import {
  FacebookLoginButton,
  InstagramLoginButton,
} from 'react-social-login-buttons';
import { getError } from '../utils';

function SignInForm() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post('/users/signin', {
        email,
        password,
      });
      navigate(redirect || '/');
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <div className="formCenter">
      <form className="formFields">
        <div className="formField">
          <label className="formFieldLabel" htmlFor="email">
            E-Mail Address
          </label>
          <input
            type="email"
            id="email"
            className="formFieldInput"
            placeholder="Enter your email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="formField">
          <label className="formFieldLabel" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="formFieldInput"
            placeholder="Enter your password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="formField">
          <button className="formFieldButton" onClick={handleSubmit}>
            Sign In
          </button>{' '}
          <Link to="/" className="formFieldLink">
            Create an account
          </Link>
        </div>

        <div className="socialMediaButtons">
          <div className="facebookButton">
            <FacebookLoginButton onClick={() => alert('Hello')} />
          </div>

          <div className="instagramButton">
            <InstagramLoginButton onClick={() => alert('Hello')} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
