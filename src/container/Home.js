import React, { Component } from 'react';
import Header from '../components/Header/Header';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            list: [1, 2, 3, 4, 5]
        }
    }

    componentDidMount() {
        axios.get('/api/shelves/').then(res => {
            this.setState({ list: res.data })
        })
    }

    render() {
        const shelves = this.state.list.map((x, i) => {
            return (
                <div key={i}>
                    <Link to={"/Shelf/"+ x.id}>
                        <button>{x.name}</button>
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