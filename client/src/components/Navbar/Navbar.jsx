import {NavLink} from 'react-router-dom';
import { useContext } from 'react';
import {Context} from '../../useReducer/Context';
import './navbar.css';
const Navbar = () => {
    const {user,dispatch} = useContext(Context);
    const logoutUser = () => {
        dispatch({type: "LOGOUT"});
    }
    return(
        <nav className = "navbar container">
        <div className="navbar-left">
        <h1>Blogg</h1>
        </div>
        <div className="navbar-center">
            <ul className="navbar-items">
                <li className="navbar-item">
                <NavLink
                exact
                className="links"
                activeClassName="active-class"
                to="/">
                    HOME
                </NavLink>
                </li>
                <li className="navbar-item">
                <NavLink
                exact
                className="links"
                activeClassName="active-class"
                to="/">
                    ABOUT
                </NavLink>
                </li>
                <li className="navbar-item">
                <NavLink
                exact
                className="links"
                activeClassName="active-class"
                to="/">
                   CONTACT
                </NavLink>
                </li>
                <li className="navbar-item">
                <NavLink
                exact
                className="links"
                activeClassName="active-class"
                to="/post">
                    CREATE
                </NavLink>
                </li>
                <li className="navbar-item"
                onClick={logoutUser}
                >
                    {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="navbar-right">
            {
                user ?(
                    <img
        className="navbar-profile-img"
         src={user.pic}
          alt="profile" />
                )
                :
                (
                <ul className="navbar-items">
               <li className="navbar-item">
                <NavLink
                exact
                className="links"
                style={{fontSize:'0.7rem'}}
                to="/login">
                   LOGIN
                </NavLink>
                </li>
                <li className="navbar-item">
                <NavLink
                exact
                className="links"
                style={{fontSize:'0.7rem'}}
                to="/register">
                   SIGN UP
                </NavLink>
                </li>
                </ul>
                )
            }

        <i className="fa fa-search navbar-search"></i>
        </div>
        </nav>
    )
}

export default Navbar;