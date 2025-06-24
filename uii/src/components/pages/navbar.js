import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav className="navbar sticky-top px-5" data-aos="fade-up" style={{ background: 'white',borderBottom: '1px solid #e7e7e7', height: '80px' }}>
                <div className="container-fluid d-flex justify-content-between">
                    <a className="navbar-brand fs-2 fw-bold" href="/">Lab.Ai</a>
                    <button className="btn btn-outline-primary" >Connent Wallet</button>  
                </div>
            </nav>
        </>
    )
}
