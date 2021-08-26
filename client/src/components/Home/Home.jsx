import Header from '../Header/Header';
import Blog from '../Blog/Blog';
// import Sidebar from '../Sidebar/Sidebar';
import {useState,useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import axios from 'axios';
import './home.css';

const Home = () => {
    const [posts,setPosts] = useState([]);
    const {search} = useLocation();
    const fetchPost = async () =>{
        try{
           const res = await axios.get("/post"+search);
           setPosts(res.data);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        fetchPost();
    }, [search]);

    return (
        <>
        <Header />
        <div className="blog-container">
           <Blog posts={posts}/>
           {/* <Sidebar/> */}
        </div>
        </>
    )
}

export default Home;