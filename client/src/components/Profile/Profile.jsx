import { useContext, useState } from 'react';
import axios from "axios";
// import Sidebar from '../Sidebar/Sidebar';
import './profile.css';
import { Context } from '../../useReducer/Context';


const msgStyle = {
    color:'green',
    marginTop:'10px',
    backgroundColor:'white',
    fontSize:'1rem',
    fontWeight: 'bold'
}

const Profile = () => {
    const publicFolder = "http://localhost:5000/images/";
    const {user,dispatch} = useContext(Context);
    const [file,setFile]  = useState("");
    const [username,setUsername]  = useState(user.username);
    const [email,setEmail]  = useState(user.email);
    const [password,setPassword]  = useState("");
    const [msg,setMsg]  = useState(false);

 
    const logoutUser = () => {
        dispatch({type: "LOGOUT"});
    }

    const update = async (e) => {
        e.preventDefault();
        const updateUser = {
            userId: user._id,
            username,
            email,
            password
        };
        if(file){
            const fileData = new FormData();
            const fileName = Date.now()+file.name;
            fileData.append("name",fileName);
            fileData.append("file",file);
            updateUser.pic = fileName;
            try{
                await axios.post('/upload',fileData);
            }catch(err){
                console.log(err);
            }
        }

        try{
             await axios.put("/user/"+user._id,updateUser);
                setMsg(true);
            }catch(err)
        {
            console.log(err);
        }
    }

    return (
        <div className="profile">
            <div className="profile-wrapper">
                <div className="profile-main">
                    <span className="profile-update">Update Profile</span>
                    <button className="profile-delete" onClick={logoutUser} style={{cursor: 'pointer'}}> Logout</button>
                </div>
                <form onSubmit={update} className="update-profile-form">
                <span style={msgStyle}>for now only password and profile image can be changed!!</span>
                <label> Profile Image</label>
                <div className="update-profile-image">
                <img src={file ? URL.createObjectURL(file) : publicFolder + user.pic}
                 alt="" />
                 <label htmlFor="image-file">
                 <i className="fas fa-camera profile-image-icon"></i>
                 </label>
                  <input 
                  id ="image-file" 
                  type="file" 
                  onChange={(e)=>setFile(e.target.files[0])}
                  style={{display:"none"}}
                  />
                </div>
                <label>Username</label>

                <input 
                type="text" 
                placeholder={user.username}
                disabled 
                />

                <label>Email</label>
                <input
                type="email"
                 placeholder={user.email}
                 onChange={e=>setEmail(e.target.value)}
                 disabled
                 />

                <label>Password</label>
                <input 
                type="password" 
                onChange={e=>setPassword(e.target.value)}
                placeholder="Enter New Password !!"
                />
                <button 
                type="submit"
                className="update-submit">
                    Update
                </button>

                {
                    msg &&
                    <span style={msgStyle}>Profile has been updated</span>
                }
                </form>
            </div>
            {/* <Sidebar /> */}
        </div>
    )
}
export default Profile;