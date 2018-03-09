import React, { Component } from 'react';
import Header from '../components/Header/Header';
import EditBin from '../components/EditBin/EditBin';
import axios from 'axios';

class Edit extends Component {
    constructor(){
        super();
        this.state={
            bin:{}
        }
        this.handleEditBin = this.handleEditBin.bind(this)
        this.handleDeleteBin = this.handleDeleteBin.bind(this)
    }
    componentDidMount(){
        console.log('hello', this.props.match.params.id*1)
        let id = this.props.match.params.id*1
        axios.get('/api/bin/'+ id).then(res=>{
            console.log('response ', res.data)
            this.setState({bin:res.data[0]})
            console.log('state:', this.state)
        })
    }

    handleEditBin(input){
        let body = Object.assign({}, this.state.bin, input)
        // console.log('Edit Bin: ', input, this.state.bin)
        console.log('body: ', body)
        axios.put('/api/bin/'+ body.id, body).then(res=>{
            console.log(res.data)
        })
    }
    handleDeleteBin(){
        console.log('delete', this.props)
        let id = this.props.match.params.id*1
        axios.delete('/api/bin/'+ id).then(res=>{
            console.log('deleted: ', res.data)
        })
        this.props.history.goBack()        
    }

    render(){
        return (
            <div className='Edit'>
                <Header />
                <EditBin bin={this.state.bin} handleEditBin={this.handleEditBin} handleDeleteBin={this.handleDeleteBin}/>
            </div>
        )
    }
}

export default Edit;