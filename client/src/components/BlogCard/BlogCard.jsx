import React from 'react'
import {NavLink} from 'react-router-dom';
import './blogcard.css';
const BlogCard = ({post}) => {
    const publicFolder = "http://localhost:5000/images/";
    return (
        <NavLink
        className="links"
        to={`/userpost/${post._id}`}>
        <div className="blog-card">
            {
            post.postImg &&
            <img
            className="blog-img"
            src={publicFolder + post.postImg}
            />
            }
            {/* <img
            className="blog-img"
            src="https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg"
            /> */}
            <div className="blog-data">
                <div className="blog-categories">
                    {
                        post.category.map(cat =>{
                            return(
                               <span>{cat.name}</span>
                            )
                        })
                    }
                </div>

                <div className="blog-title">
                 { post.title}
                </div>
                <hr />
                <h6 className="blog-posted">{new Date(post.createdAt).toDateString()}</h6>
            </div>
            <p className="blog-main-data">
                {post.body}
            </p>
        </div>
        </NavLink>
    )
}

export default BlogCard;
