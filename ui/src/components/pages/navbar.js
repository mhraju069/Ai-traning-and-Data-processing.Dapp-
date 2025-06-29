import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
        return (

        <>
            <nav className="navbar sticky-top px-5" data-aos="fade-up" style={{ background: 'white',borderBottom: '1px solid #e7e7e7', height: '80px' }}>
                <div className="container-fluid d-flex justify-content-between">
                    <a className="navbar-brand fs-2 fw-bold" href="/">Lab.Ai</a>
                    <Link to="/login" className="btn btn-outline-primary"  >Join Now</Link>
                </div>
            </nav>
        </>
    )
}
