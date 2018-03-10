import React, { Component } from 'react';
import Header from '../components/Header/Header';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Bins extends Component {
    constructor() {
        super();
        this.state = {
            shelf: {},
            bins: []
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id * 1
        axios.get('/api/shelves/').then(res => {
            let bins = []
            for (let x in res.data) {
                if (res.data[x].id === id) {
                    console.log('res: ', res.data[x])
                    bins.push(
                        { name: 'Bin 1', id: res.data[x].bin_1 },
                        { name: 'Bin 2', id: res.data[x].bin_2 },
                        { name: 'Bin 3', id: res.data[x].bin_3 },
                        { name: 'Bin 4', id: res.data[x].bin_4 },
                        { name: 'Bin 5', id: res.data[x].bin_5 }
                    )
                    this.setState({ shelf: res.data[x], bins: bins })
                    console.log(this.state)
                }
            }
        })
    }

    render() {
        const bins = this.state.bins.map((x, i) => {
            return (
                <div key={i}>
                    {x.id ?
                        <Link to={"/BinEdit/" + x.id}><button>{x.name}</button> </Link>
                        :
                        <Link to={"/BinCreate/"+ this.state.shelf.id+'/'+x.name.split(' ').pop()*1}><button>+ add</button></Link>
                    }
                </div>
            )
        })
        return (
            <div className='Bins'>
                <Header />
                {bins}
                {/* <div className='BinsButtons'>
                    {this.state.shelf.bin_1 ? <button> Bin 1</button> : <button>+ add</button>}
                    {this.state.shelf.bin_2 ? <button> Bin 2</button> : <button>+ add</button>}
                    {this.state.shelf.bin_3 ? <button> Bin 3</button> : <button>+ add</button>}
                    {this.state.shelf.bin_4 ? <button> Bin 4</button> : <button>+ add</button>}
                    {this.state.shelf.bin_5 ? <button> Bin 5</button> : <button>+ add</button>}
                </div> */}
            </div>
        )
    }
}

export default Bins;