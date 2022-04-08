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
import CssBaseline from '@material-ui/core/CssBaseline';
import Main from './Main';

function App() {
  return (
    <BrowserRouter>
      <div>
        <CssBaseline />
        <Main />
        <Routes>
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="/sign-in" element={<SignInForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
// <div className="d-flex flex-column site-container">

export default App;
