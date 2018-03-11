import React, { Component } from 'react';
import '../BinAdd/BinAdd.css';
import Header from '../Header/Header';
import axios from 'axios';

class BinAdd extends Component {
    constructor() {
        super();
        this.state = {
            input: {
                name: "",
                price: 0,
            },
            bin: {},
        }
    }

    componentDidMount() {
        let randomNum = Math.floor(Math.random() * Math.floor(200));
        this.setState({
            bin: {
                image: 'https://robohash.org/' + randomNum,
                bin_id: this.props.match.params.bin_id,
                shelf_id: this.props.match.params.id,
            }
        })
    }

    handleOnChange(title, value) {
        let input = Object.assign({}, this.state.input, { [title]: value })
        this.setState({
            input: input
        })
    }

    handleAdd() {
        console.log('handle add')
        let body = Object.assign({}, this.state.bin, this.state.input)
        console.log(body)
        axios.post('/api/bin/'+this.props.match.params.bin_id, body).then(res=>{
            console.log('Added: ', res.data[0])
            this.props.history.goBack()
        })
    }

    test() {
        console.log('props: ', this.props)
        console.log('state: ', this.state)
    }

    render() {
        let requiredInputs = !!this.state.input.name && !!this.state.input.price
        return (
            <div className="BinAdd">
                <Header title={'Shelf ' + this.props.match.params.id} subTitle={'Bin ' + this.props.match.params.bin_id} />
                <div>
                    <img src={this.state.bin.image} alt="" height="200px" width="200px" />
                </div>
                <div>
                    <h1>Name </h1>
                    <input title="name" value={this.state.input.name} type="text" onChange={(e) => (this.handleOnChange(e.target.title, e.target.value))} />
                </div>
                <div>
                    <h1>Price </h1>
                    <input title="price" value={this.state.input.price} type="number" min='0.00' onChange={(e) => (this.handleOnChange(e.target.title, e.target.value * 1))} />
                </div>
                <div>
                    <button disabled={!requiredInputs} onClick={() => this.handleAdd()}>Add to Inventory</button>
                    <button onClick={() => this.test()}>props</button>
                </div>
            </div>
        )
    }
}

export default BinAdd