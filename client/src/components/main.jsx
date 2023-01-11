import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Comments from './comments';
import Register from './signUp';
import Login from './login';
import NavBar from './navBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Routes>
                <Route path="/comments" element={<Comments/>} />
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </div>
    );
}

export default Main;