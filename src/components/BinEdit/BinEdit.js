import React, { Component } from 'react';
import '../BinEdit/BinEdit.css';
import Header from '../Header/Header';
import axios from 'axios';

class BinEdit extends Component {
    constructor() {
        super();
        this.state = {
            input: {
                name: "",
                price: 0.00
            },
            bin:{},
            inEdit: false
        }
    }

    componentDidMount(){
        axios.get('/api/bin/'+this.props.match.params.bin_id).then(res=>{
            this.setState({
                bin: res.data[0],
                input:{
                    name:res.data[0].name,
                    price:res.data[0].price
                }
            })
        })
    }

    handleOnChange(title, value) {
        let input= Object.assign({}, this.state.input, {[title]:value})
        this.setState({
            input: input
        })
    }

    handleEdit(){
        this.setState({inEdit: true})
    }
    handleDelete(){
        axios.delete('/api/bin/'+this.props.match.params.bin_id).then(res=>{
            this.props.history.goBack()
        })
    }
    handleSave(){
        this.setState({inEdit: false})
        let body = Object.assign({}, this.state.bin, this.state.input)
        axios.put('/api/bin/'+this.props.match.params.bin_id, body).then(res=>{
            this.props.history.goBack()
        })
    }

    render() {
        return (
            <div className="BinEdit">
                <Header title={'Shelf '+this.props.match.params.id} subTitle={'Bin '+this.props.match.params.bin_id}/>
                <div>
                    <img src={this.state.bin.image} alt="" height="200px" width="200px"/>
                </div>
                <div>
                    <h1>Name </h1>
                    <input disabled={!this.state.inEdit} title="name" value={this.state.input.name} type="text" onChange={(e) => (this.handleOnChange(e.target.title, e.target.value))} />
                </div>
                <div>
                    <h1>Price </h1>
                    <input disabled={!this.state.inEdit} title="price" value={this.state.input.price} type="number" min='0.00' onChange={(e) => (this.handleOnChange(e.target.title, e.target.value*1))} />
                </div>
                <div>
                    {this.state.inEdit?<button className="Save" onClick={()=>this.handleSave()}>Save</button>: <button onClick={()=>this.handleEdit()}>Edit</button>}
                    <button onClick={()=>this.handleDelete()}>Delete</button>
                </div>
            </div>
        )
    }
}

export default BinEdit