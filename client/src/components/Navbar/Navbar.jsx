import {NavLink} from 'react-router-dom';
import { useContext } from 'react';
import {Context} from '../../useReducer/Context';
import './navbar.css';


const Navbar = () => {
    const publicFolder = "http://localhost:5000/images/";
    const {user,dispatch} = useContext(Context);
    // const logoutUser = () => {
    //     dispatch({type: "LOGOUT"});
    // }
    return(
        <nav className = "navbar container">
        <div className="navbar-left">
        <NavLink to="/" className="logolink"> <h1>GG BLOG </h1></NavLink>
        </div>
        <div className="navbar-center">
            <ul className="navbar-items">
                {
                    user ?
                   (
                       <>
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
                to="/post">
                    CREATE
                </NavLink>
                </li>
                </>
                    )
                    :
                   ( <li></li>)
                }

                {/* <li className="navbar-item"
                onClick={logoutUser}
                >
                    {user && "LOGOUT"}
                </li> */}
            </ul>
        </div>
        <div className="navbar-right">
            
            {
                user ?(
         <NavLink to="/profile">
                    <img
        className="navbar-profile-img"
         src={publicFolder + user.pic}
          alt="profile" />
          </NavLink>
                )
                :
                (
                <ul className="navbar-items">
               <li className="navbar-item">
                <NavLink
                exact
                className="links"
                to="/login">
                   LOGIN
                </NavLink>
                </li>
                <li className="navbar-item">
                <NavLink
                exact
                className="links"
                to="/register">
                   SIGN UP
                </NavLink>
                </li>
                </ul>
                )
            }

        {/* <i className="fa fa-search navbar-search"></i> */}
        </div>
        </nav>
    )
}

export default Navbar;