import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import CreatePost from './components/CreatePost/CreatePost';
import BlogPage from './components/BlogPage/BlogPage';
import {Route,Switch} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

import './App.css';
import { useContext } from 'react';
import { Context } from './useReducer/Context';

const App = () => {
  const {user} = useContext(Context);

 return (
    <div className="App">
        <BrowserRouter>
        <Navbar />
        <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route  path='/login'>
        {user? <Home/> :<Login />}
        </Route>

        <Route  path='/register'>
       {user? <home /> : <Register />}
        </Route>

        <Route  path='/profile'>
       {user?<Profile />:<Login/>}
        </Route>

        <Route  path='/post'>
        {user?<CreatePost />:<Login/>}
        </Route>

        <Route  path='/userpost/:userId'>
        <BlogPage/>
        </Route>

       </Switch>
       </BrowserRouter>
    </div>
  );
}

export default App;
