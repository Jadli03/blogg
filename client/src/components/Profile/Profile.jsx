import Sidebar from '../Sidebar/Sidebar';
import './profile.css';

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile-wrapper">
                <div className="profile-main">
                    <span className="profile-update">Update Profile</span>
                    <span className="profile-delete">Delete Account</span>
                </div>
                <form className="update-profile-form">
                <label> Profile Image</label>
                <div className="update-profile-image">
                <img src="https://daman.co.id/daman.co.id/wp-content/uploads/2019/10/Robert-Downey-Jr-Glasses-1-1024x1024.jpg"
                 alt="" />
                 <label htmlFor="image-file">
                 <i className="fas fa-camera profile-image-icon"></i>
                 </label>
                  <input id ="image-file" type="file" style={{display:'none'}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Username"/>
                <label>Email</label>
                <input type="email" placeholder="Email"/>
                <label>Password</label>
                <input type="password" placeholder="Password"/>
                <button className="update-submit">
                    Update
                </button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
export default Profile;