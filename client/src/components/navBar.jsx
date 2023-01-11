import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate=useNavigate()

  return (
    <nav className="navbar navbar-expand-lg bg-dark " data-bs-theme="dark">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/comments">Comments</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/register">Sign-up</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/login">Login</a>
        </li>
        <li className="nav-item">
          <button className="bg-danger m-1" 
          onClick={()=>{localStorage.removeItem('token');
          navigate('/register')}}
          >logout</button>
        </li>
      </ul>
    </div>
</nav>
  )
}
