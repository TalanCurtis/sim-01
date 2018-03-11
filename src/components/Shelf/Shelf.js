import React, { Component } from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import axios from 'axios'

class Shelf extends Component {
    constructor() {
        super();
        this.state = {
            bins: []
        }
    }

    componentDidMount() {
        axios.get('/api/shelf/' + this.props.match.params.id).then(res => {
            this.setState({ bins: res.data })
        })
    }

    render() {
        // map over bins if null display add if  not null display bin name
        const bins = this.state.bins.map((x, i) => {
            if (x) {
                return (
                    <div key={i}>
                        <Link to={this.props.location.pathname + '/' + x.bin_id}>
                            <button className='bigButton'>{"Bin " + (i + 1)}</button>
                        </Link>
                    </div>
                )
            } else {
                return (
                    <div key={i}>
                        <Link to={this.props.location.pathname + '/add/'+ this.props.match.params.id+(i+1)}>
                            <button className='bigButton empty'>{"+ Add"}</button>
                        </Link>
                    </div>
                )
            }
        })
        return (
            <div className='Shelf'>
                <Header title={'Shelf ' + this.props.match.params.id} />
                {bins}
            </div>
        )
    }
}

export default Shelf;