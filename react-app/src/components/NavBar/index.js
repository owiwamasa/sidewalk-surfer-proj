import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux';
import LogoutButton from '../auth/LogoutButton';

const NavBar = () => {
    const user = useSelector(state => state.session.user)

  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to={`/users/${user.id}`} exact={true} activeClassName='active'>
            {`${user.username}'s Page`}
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
