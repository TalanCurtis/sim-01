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
        console.log('handle edit')
        this.setState({inEdit: true})
    }
    handleDelete(){
        console.log('handle delete')
        axios.delete('/api/bin/'+this.props.match.params.bin_id).then(res=>{
            console.log(res.data)
            this.props.history.goBack()
        })
    }
    handleSave(){
        console.log('handle save')
        this.setState({inEdit: false})
        let body = Object.assign({}, this.state.bin, this.state.input)
        console.log(body)
        axios.put('/api/bin/'+this.props.match.params.bin_id, body).then(res=>{
            console.log('saved: ', res.data[0])
            this.props.history.goBack()
        })
    }

    test(){
        console.log('props: ',this.props)
        console.log('state: ',this.state)
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
                    <button onClick={()=>this.test()}>props</button>
                </div>
            </div>
        )
    }
}

export default BinEdit