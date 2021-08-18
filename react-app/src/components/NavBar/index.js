import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from '../login_modal'
import SignUpFormModal from '../signup_modal'
import CreateSpotModal from '../spot_modal'
import './NavBar.css'

const NavBar = () => {
    const user = useSelector(state => state.session.user)
    const [search, setSearch] = useState('')
    console.log(user)

    const onSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <nav>
      <div className='nav-container'>
        <div className='nav-logo'>
            <NavLink to='/' exact={true} activeClassName='active'>
                <img src={'https://i.imgur.com/2y2FmRJ.png'} />
            </NavLink>
        </div>
        <div className='nav-searchbar'>
                <form onSubmit={onSubmit}>
                    <input
                        className='nav-search-input'
                        type='text'
                        name='search'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search...'>
                    </input>
                </form>
        </div>
        { !user ?
        <div className='nav-nonuser'>
            <div>
                <button id='demo-btn'>Demo</button>
            </div>
            <div>
                <LoginFormModal/>
            </div>
            <div>
                <SignUpFormModal/>
            </div>
        </div> :
        <div className='nav-user'>
            <div>
                <CreateSpotModal/>
            </div>
            <div>
                <LogoutButton />
            </div>
            <div>
                <NavLink to={`/users/${user.id}`} exact={true} activeClassName='active'>
                    <div>
                        <div className='nav-profile-pic'>
                            <img src={user.profilepic}/>
                        </div>
                    </div>
                </NavLink>
            </div>
        </div> }


      </div>
    </nav>
  );
}

export default NavBar;
