import { useContext, useState } from 'react';
import './createpost.css';
import axios from 'axios';
import { Context } from '../../useReducer/Context';

const CreatePost =() => {
    const [postInput,setPostInput] = useState({
        title: "",
        body: "",
    })
    const {title,body} = postInput;
    const [file,setFile]  = useState("");

    const postChange = (e) => {
        const {name,value} = e.target;

        setPostInput((pre)=>{
            return{
                ...pre,
            [name]:value
            }
        })
    }


    const {user} = useContext(Context)
    const publish = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title: postInput.title,
            body: postInput.body,
        };
        if(file){
            const fileData = new FormData();
            const fileName = Date.now()+file.name;
            fileData.append("name",fileName);
            fileData.append("file",file);
            newPost.postImg = fileName;
            try{
                await axios.post('/upload',fileData);
            }catch(err){
                console.log(err);
            }
        }

        try{
            const res = await axios.post("/post",newPost);
            window.location.replace("/userpost/" + res.data._id);
      }catch(err)
        {
            console.log(err);
        }
    }
    return (
        <div className="post-page">
                  {file && (
                    <img
                    src={URL.createObjectURL(file)}
                    alt=""
                    className="post-img"
                    />
                     )}

            <form className="post-form" onSubmit={publish}>
            <div className="post-form-group">
                <label htmlFor="post-file">
                <i className="far fa-image post-file-icon"></i>
                </label>
                <input
                type="file"
                id="post-file"
                onChange={(e)=>setFile(e.target.files[0])}
                style={{display:"none"}}
                />
                <textarea
                type="text"
                placeholder="Title"
                className="post-input post-title"
                name = "title"
                onChange={postChange}
                value = {title}
                autoFocus
                >
                </textarea>
                </div>
                <div className="post-form-group">
                    <textarea
                    placeholder="Write your content"
                    type="text"
                    className="post-input post-content"
                    name = "body"
                    onChange={postChange}
                    value = {body}
                    >

                    </textarea>
                </div>
                <button type="submit" className="post-submit">
                    Post
                </button>
            </form>
        </div>
    )
}

export default CreatePost;
