import { useRef,useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { Context } from '../../useReducer/Context';
import axios from 'axios';
import './login.css'

const Login = () => {
    const emailRef = useRef();
    const passRef = useRef();

    const {dispatch,isLoading} = useContext(Context);

    const loginUser = async (e) => {
        e.preventDefault();
        dispatch({type:"LOGIN_STATE"});
        try{
            const res = await axios.post('/auth/login',{
                email: emailRef.current.value,
                password: passRef.current.value
            })
            dispatch({type:"LOGIN_SUCCESS",payload: res.data});

        }catch(err){
            dispatch({type: "LOGIN_FAIL"});
        }
    }
    return (
        <div className="login">
            <span className="login-heading">Login</span>
            <form onSubmit={loginUser} className="login-form" >
                <label> Email </label>
                <input
                 type="email"
                 className="login-input"
                 placeholder="Email"
                ref={emailRef}
                 />
                 <label> Password</label>
                <input
                 type="password"
                 className="login-input"
                 placeholder="Password"
                 ref={passRef}
                />
                 <button disabled={isLoading} type="submit" className="login-submit-btn">
                     Login
                 </button>
            </form>
            <button className="register-btn">
                     <NavLink style={{textDecoration:'none',color:'white'}} exact to="register">Sign up</NavLink>
                 </button>
        </div>
    )
}

export default Login;
