import React from 'react';
import { useState } from 'react';
import  axios  from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register(){
    const [data, setData] = useState({});
    const navigator = useNavigate()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await axios.post('http://localhost:3002/api/users', data);
        localStorage.setItem('token', result.headers['x-auth-token']);
        navigator('/comments');
    };
    return (
        <div>
            <form className="m-3" onSubmit={(e)=>{handleSubmit(e)}}>
            <div className="mb-3" >
                <label className="form-label"> name: </label>
                <input type="text" className="form-control" id="name" placeholder="enter name" required={true} 
                onChange={(ev)=>setData({...data,name:ev.target.value})}/>
            </div>
            <div className="mb-3">
                <label className="form-label"> email: </label>
                <input type="email" className="form-control" id="email" placeholder="enter email" required={true} 
                onChange={(ev)=>setData({...data,email:ev.target.value})}/>
            </div>
            <div className="mb-3">
                <label className="form-label"> password: </label>
                <input type="password" className="form-control" id="password" placeholder="enter password" required={true} 
                onChange={(ev)=>setData({...data,password:ev.target.value})}/>
            </div>
            <button type='submit' className='btn btn-primary'>sign in</button>
            </form>
        </div>
    );
}

