import Axios from 'axios';
import React, { Component, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getError } from '../utils';

function SignUpForm() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('fvv');
    try {
      const { data } = await Axios.post('/users/signup', {
        name,
        email,
        password,
      });

      alert(data);
      //navigate(redirect || '/');
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <div className="formCenter">
      <form className="formFields">
        <div className="formField">
          <label className="formFieldLabel" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="formFieldInput"
            placeholder="Enter your full name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="formField">
          <label className="formFieldCheckboxLabel">
            <input
              className="formFieldCheckbox"
              type="checkbox"
              name="hasAgreed"
            />{' '}
            I agree all statements in{' '}
            <a href="null" className="formFieldTermsLink">
              terms of service
            </a>
          </label>
        </div>

        <div className="formField">
          <button className="formFieldButton" onClick={handleSubmit}>
            Sign Up
          </button>{' '}
          <Link to="/sign-in" className="formFieldLink">
            I'm already member
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
