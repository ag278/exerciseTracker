import { NavLink } from 'react-router-dom';

function SignPage() {
  return (
    <div>
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
      </div>
    </div>
  );
}

export default SignPage;
