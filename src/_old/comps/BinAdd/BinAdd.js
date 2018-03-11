import React, { Component } from 'react';
import Header from '../Header/Header';
import axios from 'axios'

class BinAdd extends Component {
    constructor() {
        super();
        this.state = {
            bin: {
                bin_id: '',
                image: null,
                name: '',
                price: null,
                shelf_id: null,
            },
            inputName: '',
            inputPrice: 0,
            buttonToggle: true
        }
    }

    componentDidMount() {
        axios.get('/api/bin/' + this.props.match.params.bin_id).then(res => {
            console.log(res.data)
            let randomNum = Math.floor(Math.random() * Math.floor(200));
            res.data[0].image = 'https://robohash.org/' + randomNum
            this.setState({ bin: res.data[0] })
            console.log('state', this.state)
        })
    }

    handleOnChange(title, value) {

        this.setState({
            [title]: value
        })
    }

    handleBinAdd() {
        let body = Object.assign({}, this.state.bin, {name: this.state.inputName, price: this.state.inputPrice})
        console.log(body)
        axios.post('/api/bin/'+ body.bin_id, body).then(res=>{
            this.props.history.goBack()
        })
    }

    render() {
        console.log('props', this.props)
        let toggle = !!this.state.inputPrice && !!this.state.inputName
        console.log(toggle)

        return (
            <div className='BinAdd'>
                <Header
                    title={'Shelf ' + this.props.match.params.id}
                    subTitle={"Add to Bin " + this.props.match.params.bin_id}
                />
                <div>
                    <img src={this.state.bin.image} alt="" height='200px' width='200px' />
                </div>
                <div>
                    <h1>Name:{this.state.bin.name}</h1>
                    <input title="inputName" type="text" placeholder='Name' onChange={(e) => this.handleOnChange(e.target.title, e.target.value)} />
                </div>
                <div>
                    <h1>Price:{this.state.bin.price}</h1>
                    <input title="inputPrice" type="number" min="0" placeholder='Price' onChange={(e) => this.handleOnChange(e.target.title, e.target.value * 1)} />
                </div>
                <div>
                    <button disabled={!toggle} onClick={()=>this.handleBinAdd()}> Add to Inventory</button>
                </div>
            </div>
        )
    }

}

export default BinAdd;