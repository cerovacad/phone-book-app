import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'


const NotFound = () => (
    <div className="center" >
        <div className="main">
        <Nav/>
        <h1>Sorry 404</h1>
        <Link to="/" className="waves-effect waves-light btn-large red lighten-2">Go home</Link>
        </div>
        <Footer/>    
    </div>
);

export default NotFound;