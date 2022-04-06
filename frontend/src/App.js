import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  NavLink,
  Routes,
  BrowserRouter,
} from 'react-router-dom';
import SignUpForm from './Screens/SignUpForm';
import SignInForm from './Screens/SignInForm';
import Profile from './Screens/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="appAside"></div>
        <div className="appForm">
          <div className="pageSwitcher">
            <NavLink
              to="/sign-in"
              activeClassName="pageSwitcherItem-active"
              className="pageSwitcherItem"
            >
              Sign In
            </NavLink>
            <NavLink
              exact
              to="/sign-up"
              activeClassName="pageSwitcherItem-active"
              className="pageSwitcherItem"
            >
              Sign Up
            </NavLink>
          </div>

          <div className="formTitle">
            <NavLink
              to="/sign-in"
              activeClassName="formTitleLink-active"
              className="formTitleLink"
            >
              Sign In
            </NavLink>{' '}
            or{' '}
            <NavLink
              exact
              to="/sign-up"
              activeClassName="formTitleLink-active"
              className="formTitleLink"
            >
              Sign Up
            </NavLink>
          </div>

          <Routes>
            <Route path="/sign-up" element={<SignUpForm />} />
            <Route path="/sign-in" element={<SignInForm />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
// <div className="d-flex flex-column site-container">

export default App;
