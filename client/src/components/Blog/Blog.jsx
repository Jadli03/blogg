import React from 'react'
import BlogCard from '../BlogCard/BlogCard'
import './blog.css'
 const Blog = ({posts}) => {
    return (
        <div className="blog">
           {
               posts.map(item=>{
                   return(
                  <BlogCard post={item}/>
                   )
               })

           }
        </div>
    )
}

export default Blog;
