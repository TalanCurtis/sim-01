import React, { Component } from 'react';
import Header from '../components/Header/Header';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Bins extends Component {
    constructor() {
        super();
        this.state = {
            bins: []
        }
    }

    componentDidMount() {
        // console.log('shelf id: ', this.props.match.params.id*1)
        let id = this.props.match.params.id * 1
        axios.get('/api/shelf/' + id).then(res => {
            console.log(res.data)
            this.setState({ bins: res.data })
        })
    }

    render() {
        const bins = this.state.bins.map((x, i) => {
            return (
                <div key={i}>
                    <Link to={"/BinEdit/" + x.id}>
                        <button>{"Bin " + i}</button>
                    </Link>
                </div>
            )
        })
        return (
            <div className='Bins'>
                <Header />
                {bins}
            </div>
        )
    }
}

export default Bins;