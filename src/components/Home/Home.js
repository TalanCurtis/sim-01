import React, { Component } from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
// import axios from 'axios';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            shelves: ['A', 'B', 'C', 'D']
        }
    }

    render() {
        const shelves = this.state.shelves.map((x, i) => {
            return (
                <div key={i}>
                    <Link to={"/Shelf/"+ x}>
                        <button>{"Shelf "+x}</button>
                    </Link>
                </div>
            )
        })
        return (
            <div className='Home'>
                <Header />
                {shelves}
            </div>
        )
    }

}

export default Home;