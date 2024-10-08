import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
type Props = {}

function Navbar({}: Props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <Link className="navbar-brand" to="/">Категория</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><Link className="nav-link" to="shop-list">Shop</Link></li>
                        <li className="nav-item"><Link className="nav-link " to="login">Login</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="register">Register</Link></li> 
                    </ul>
                </div>
            </div>
    </nav>
  )
}

export default Navbar