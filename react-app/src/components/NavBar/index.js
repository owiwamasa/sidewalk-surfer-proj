import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LogoutButton from "../auth/LogoutButton";
import LoginFormModal from "../login_modal";
import SignUpFormModal from "../signup_modal";
import CreateSpotModal from "../spot_modal";
import { fetchSpots } from "../../store/spots";
import { getAllUsers } from "../../store/users";
import { login } from "../../store/session";

import "./NavBar.css";

const NavBar = () => {
  const user = useSelector((state) => state.session.user);
  const [search, setSearch] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const spots = useSelector((state) => state.spotReducer.spots);
  const users = useSelector((state) => state.usersReducer.users);
  const searchUsers = users.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );
  const searchSpots = spots.filter((spot) =>
    spot.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchSpots());
    dispatch(getAllUsers());
  }, [dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const demoHandler = (e) => {
    e.preventDefault();
    dispatch(login("Demo@email.com", "Demo"));
  };

  const toPage = (e) => {
    e.preventDefault();
    if (e.target.value.includes("Results")) {
      return;
    } else if (e.target.value.includes("user")) {
      setSearch("");
      const userId = e.target.value.slice(4);
      return history.push(`/users/${userId}`);
    } else {
      setSearch("");
      return history.push(`/spots/${e.target.value}`);
    }
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-logo">
          <NavLink to="/" exact={true} activeClassName="active">
            <img src={"https://i.imgur.com/2y2FmRJ.png"} alt="" />
          </NavLink>
        </div>
        <div className="nav-searchbar">
          <form onSubmit={onSubmit}>
            <input
              className="nav-search-input"
              type="text"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
            ></input>
            {search && (
              <select
                className="search-results"
                onChange={toPage}
                size={searchSpots.length + searchUsers.length + 2}
              >
                <option className="search-results-title">
                  Search Spots Results ({searchSpots.length})
                </option>
                {searchSpots.map((spot) => (
                  <option key={spot.id} value={spot.id}>
                    {spot.name}
                  </option>
                ))}
                <option className="search-results-title">
                  Search Users Results ({searchUsers.length})
                </option>
                {searchUsers.map((user) => (
                  <option key={user.id} value={"user" + user.id}>
                    {user.username}
                  </option>
                ))}
              </select>
            )}
          </form>
        </div>
        {!user ? (
          <div className="nav-nonuser">
            <div>
              <button id="demo-btn" onClick={(e) => demoHandler(e)}>
                Demo
              </button>
            </div>
            <div>
              <LoginFormModal />
            </div>
            <div>
              <SignUpFormModal />
            </div>
          </div>
        ) : (
          <div className="nav-user">
            <div>
              <CreateSpotModal setShowMenu={setShowMenu} />
            </div>
            <div>
              <LogoutButton setShowMenu={setShowMenu} />
            </div>
            <div>
              <NavLink
                to={`/users/${user.id}`}
                exact={true}
                activeClassName="active"
              >
                <div>
                  <div className="nav-profile-pic">
                    <img
                      src={user.profilepic}
                      alt=""
                      onError={(e) =>
                        (e.target.src =
                          "https://media.wired.com/photos/5a0201b14834c514857a7ed7/master/pass/1217-WI-APHIST-01.jpg")
                      }
                    />
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        )}
        {!user ? (
          <div className="small-nav-nonuser">
            <div className="nonuser-dropdown">
              <i onClick={() => setShowMenu(!showMenu)} class="fas fa-bars"></i>
              <div className="nonuser-dropdown-items">
                <div>
                  <button
                    id="demo-btn"
                    onClick={(e) => {
                      setShowMenu(false);
                      demoHandler(e);
                    }}
                  >
                    Demo
                  </button>
                </div>
                <div>
                  <LoginFormModal
                    setShowMenu={setShowMenu}
                    showMenu={showMenu}
                  />
                </div>
                <div>
                  <SignUpFormModal
                    setShowMenu={setShowMenu}
                    showMenu={showMenu}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="small-nav-user">
            <div className="user-dropdown">
              <i onClick={() => setShowMenu(!showMenu)} class="fas fa-bars"></i>
              <div className="dropdown-items">
                <div>
                  <NavLink
                    to={`/users/${user.id}`}
                    exact={true}
                    activeClassName="active"
                  >
                    <div onClick={() => setShowMenu(false)}>
                      <div className="nav-profile-pic">
                        <img src={user.profilepic} alt="" />
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div>
                  <CreateSpotModal
                    setShowMenu={setShowMenu}
                    showMenu={showMenu}
                  />
                </div>
                <div>
                  <LogoutButton setShowMenu={setShowMenu} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
