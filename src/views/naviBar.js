import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {Axios} from "axios";
import {useLocation} from "react-router";
import "./NaviBar.css";

const NavBar = (props) => {
    const {state} = useLocation();
    const [username, setUsername] = useState(null);

    const [query, setQuery] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
    }, [state]);// get sign in or not

    function logout() {
        console.log("logout called react"); //log out
    }

    function search() {
        if (!query) {
            return;
        }
        navigate("/search/" + encodeURIComponent(query));
    }

    return (
        <div className="navi-bar">
            <a href="/">
                <button className="home-button">Home</button>
            </a>

            <div className="search-bar">
                <input
                    className="search"
                    placeholder="search..."
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="search-button" onClick={search}>
                    Search
                </button>
            </div>

            <div className="user-name">
                {username ? (
                    <div>
                        <div className="username-display">
                            <div className="username-text">{username}</div>
                        </div>
                        <span>
              <button className="logout-button" onClick={logout}>
                LogOut
              </button>
            </span>
                    </div>
                ) : (
                    <div>
            <span>
              <button
                  className="signup-button"
                  onClick={() => {
                      navigate("/register");
                  }}
              >
               Sign Up
              </button>
            </span>
                        <span>
              <button
                  className="login-button"
                  onClick={() => {
                      navigate("/login");
                  }}
              >
                Log In
              </button>
            </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBar;
