import './page.css'
import {useContext, useEffect,useState} from 'react';
import {useLocation,NavLink} from 'react-router-dom';
import axios from 'axios';
import { Context } from '../../useReducer/Context';

const Page = () => {
    const publicFolder = "http://localhost:5000/images/";
    const {user} = useContext(Context);
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const [title, setUpdateTitle] = useState("");
    const [body, setUpdateBody] = useState("");

    const [uMode, setMode] = useState(false);


    const fetchUserPost = async () => {
        try {
            const res = await axios.get("/post/"+path);
            setPost(res.data)
           setUpdateTitle(res.data.title);
           setUpdateBody(res.data.body);
        }catch(err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchUserPost();
    }, [path])

    const delPost = async () => {
        try{
            await axios.delete("/post/"+path,{data : {username: user.username}})
            window.location.replace("/");
        }catch(err) {
        }
    }
    const updatePost = async () => {
        try{
            await axios.put(`/post/${post._id}`,{
                username: user.username,
                title,
                body
            })
           setMode(false);
        }catch(err) {
        }
    }
   return(
    <div className="single-page">
        <div className="page-wrapper">
            {
                post.postImg &&
                <img
                src={publicFolder + post.postImg}
                 alt=""
                 className="page-img"
                 />
            }
            {
                uMode ? <input type="text" className="umode-title" onChange={(e)=>setUpdateTitle(e.target.value)} value={title} autoFocus/> :
                (
                    <h3 class="page-title">
                    {title}
                </h3>
                )
            }
             {post.username === user?.username && (
             <div className="page-edit-option">
             <i onClick={()=>setMode(true)} className="far fa-edit single-page-icon"></i>

             <i onClick={delPost} className="far fa-trash-alt single-page-icon"></i>
             </div>
             )}
            <div className="single-page-data">
                <span className="page-author">
                    Author: <b>
                        <NavLink to={`/?user=${post.username}`}className="links">
                        {post.username}
                        </NavLink>
                        </b>
                </span>
                <span className="single-posted">{new Date(post.createdAt).toDateString()}</span>
                </div>
                {
                    uMode ? <textarea className="umode-body" onChange={(e)=>setUpdateBody(e.target.value)} value={body} />:
                    (
                    <p class="page-content">
                        {body}
                     </p>
                    )
                }
               {uMode &&
               (
               <button onClick={updatePost} className="update-blog">
                    update
                </button>
               )}

        </div>
    </div>
    )
}

export default Page;