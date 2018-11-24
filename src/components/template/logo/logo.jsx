import React from 'react';
import './logo.css';
import logo from '../../../assets/img/comida-mexicana-light-150x150.jpg';

export default props => 
    <div className="logo">
        <a href='/' className="logo">
        <img src={logo} alt="logo"/>
        </a>
    </div>

