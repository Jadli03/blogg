import './sidebar.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [lists,setList] = useState([]);
  const fetchCategory = async () => {
    const res =  await axios.get('/category');
    setList(res.data);
  }
  useEffect(()=>{
    fetchCategory();
  },[])
  return (
        <div className="sidebar">
      <div className="sidebar-container">
        <span className="sidebar-title">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebar-container">
        <span className="sidebar-title">CATEGORIES</span>
        <ul className="sidebar-items">
              {
                lists.map(cat => {
                 return(
                   <NavLink className="links" to={`/?catgory=${cat.name}`}>
                    <li className="sidebar-item">
                 {cat.name}
                  </li>
                  </NavLink>
                  )
                })
              }
        </ul>
      </div>
    </div>
    )
}
export default Sidebar;