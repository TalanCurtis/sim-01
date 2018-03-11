import React, { Component } from 'react';
import '../Header/Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <div className="Header">
                <Link to="/"><button>Home</button></Link>
                <h1>{this.props.title}</h1>
                <h1>{this.props.subTitle}</h1>
            </div>
        )
    }
}

export default Header
