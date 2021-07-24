import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Page from './Page';
import './blogpage.css';

const BlogPage = () =>{
    return (
        <div className="blog-page">
            <Page />
            <Sidebar />
        </div>
    )
}

export default BlogPage;
