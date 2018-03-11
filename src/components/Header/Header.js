import React from 'react';
import '../Header/Header.css';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className="Header">
            <div>
                <Link to="/"><button>Home</button></Link>
            </div>
            <div>
                <h1>{props.title}</h1>
            </div>
            <div>
                <h1>{props.subTitle}</h1>
            </div>
        </div>
    )
}

export default Header