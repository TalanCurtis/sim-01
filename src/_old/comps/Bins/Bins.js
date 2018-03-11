import React, { Component } from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import axios from 'axios'

class Bins extends Component {
    constructor() {
        super();
        this.state = {
            bins: [1, 2, 3, 4, 5]
        }
    }
    componentDidMount() {
        axios.get('/api/shelf/' + this.props.match.params.id).then(res => {
            // console.log(res.data)
            this.setState({ bins: res.data })
        })
    }

    render() {
        // console.log(this.props)
        const bins = this.state.bins.map((x, i) => {
            return (
                <div key={i}>
                    {x.name ?
                        <Link to={this.props.location.pathname + '/' + x.bin_id}>
                            <button>{"Bin " + (i + 1)}</button>
                        </Link>
                        :
                        <Link to={this.props.location.pathname + '/add/' + x.bin_id}>
                            <button>{"+ Add"}</button>
                        </Link>
                    }
                </div>
            )
        })
        return (
            <div className='Bins'>
                <Header title={'Shelf '+ this.props.match.params.id}/>
                {bins}
            </div>
        )
    }

}

export default Bins;