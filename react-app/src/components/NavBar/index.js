import React, {useState, useEffect} from 'react';
import { NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from '../login_modal'
import SignUpFormModal from '../signup_modal'
import CreateSpotModal from '../spot_modal'
import { fetchSpots } from '../../store/spots';
import { login } from '../../store/session';

import './NavBar.css'
// import SearchResults from '../SearchResults';

const NavBar = () => {
    const user = useSelector(state => state.session.user)
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const spots = useSelector((state) => state.spotReducer.spots);
    const searchSpots = spots.filter(spot => spot.name.toLowerCase().includes(search.toLowerCase()));

    useEffect(() => {
      dispatch(fetchSpots());
    }, [dispatch]);

    const onSubmit = (e) => {
        e.preventDefault()
    }

    const demoHandler = (e) => {
        e.preventDefault();
        dispatch(login('Demo@email.com','Demo'));
    };

  return (
    <nav>
      <div className='nav-container'>
        <div className='nav-logo'>
            <NavLink to='/' exact={true} activeClassName='active'>
                <img src={'https://i.imgur.com/2y2FmRJ.png'} alt=""/>
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
                    {/* {search &&
                        <select>
                            {searchSpots.map(spot => (
                                <option key={spot.id} value={spot.id}>{spot.name}</option>
                            ))}
                        </select>
                    } */}
                </form>
        </div>
        { !user ?
        <div className='nav-nonuser'>
            <div>
                <button id='demo-btn' onClick={demoHandler}>Demo</button>
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
                            <img src={user.profilepic} alt=""/>
                        </div>
                    </div>
                </NavLink>
            </div>
        </div> }
      </div>
      {/* {search && <SearchResults search={search} setSearch={setSearch}/>} */}
    </nav>
  );
}

export default NavBar;
