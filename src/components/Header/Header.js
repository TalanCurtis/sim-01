import React, { Component } from 'react';
import '../Header/Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <div className="Header">
                <Link to="/"><button>Home</button></Link>
                <h1>Title 1</h1>
                <h1>Title 2</h1>
            </div>
        )
    }
}

export default Header
