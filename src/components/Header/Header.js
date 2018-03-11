import React from 'react';
import '../Header/Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

function Header(props) {
    return (
        <div className="Header">
            <div>
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <div>
                {props.title === 'SHELFIE' ?
                    <h1>{props.title}</h1> :
                    <h1> <Link className='Link' to={'/Shelf/' + props.title.split(" ").pop()} style={{ textDecoration: 'none' }}>{props.title}</Link></h1>
                }
            </div>
            <div>
                <h1>{props.subTitle}</h1>
            </div>
        </div>
    )
}

export default Header