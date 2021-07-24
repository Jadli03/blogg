import './register.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';

const styleErr = {
    color:'red',
    marginTop:'10px',
    backgroundColor:'white',
    fontSize:'1rem',
    fontWeight: 'bold'
}

const Register = () => {
    const [input,setInput] = useState({
        username: "",
        email: "",
        password: "",
    })
    const [err,setErr] = useState(false);
    const [msg, setMsg] = useState("");

    const {username,email,password} = input;
    const inputChange = (e) => {
        const {name,value} = e.target;
        setInput((previous)=>{
           return{
           ...previous,
            [name] : value
           }
        })
    }
    const registerUser = async (e) => {
        e.preventDefault();
        setErr(false);
        try{
            const res = await axios.post("/auth/register", {
            username,
            email,
            password
        })
        if(res.data)
        {
            window.location.replace("/login");
        }
    }catch(e){
        setErr(true)
        setMsg(e.response.data.error)
    }
    }
    return (
        <div className="register">
            <span className="register-heading">Sign up</span>
            <form onSubmit={registerUser} className="register-form" action="">
             <label> Username </label>
                <input
                 type="text"
                 className="register-input"
                 placeholder="Username"
                 name="username"
                 value={username}
                 onChange={inputChange}
                 />
                <label> Email </label>
                <input
                 type="email"
                 className="register-input"
                 placeholder="Email"
                 name="email"
                 value={email}
                 onChange={inputChange}
                 />
                 <label> Password</label>
                <input
                 type="password"
                 className="register-input"
                 placeholder="Password"
                 name="password"
                 value={password}
                 onChange={inputChange}
                />
                 <button type="submit" className="register-submit-btn">
                     Sign up
                 </button>
            </form>
            <button className="login-btn">
                 <NavLink style={{textDecoration:'none',color:'white'}}exact to="login">Login</NavLink>
                 </button>
                {
                    err &&
                    <span style={styleErr}>{msg}</span>
                }
        </div>
    )
}

export default Register;
