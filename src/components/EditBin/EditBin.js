import React, { Component } from 'react';
import '../EditBin/EditBin.css';
import { Link } from 'react-router-dom';

class EditBin extends Component {
    constructor() {
        super();
        this.state = {
            input: {
                name: "",
                price: 0.00
            }
        }
    }

    componentDidMount(){
        console.log('props', this.props)
    }

    handleOnChange(title, value) {
        let input= Object.assign({}, this.state.input, {[title]:value})
        this.setState({
            input: input
        })
    }

    // handleEdit(){
    //     console.log('handle edit')
    // }
    // handleDelete(){
    //     console.log('handle delete')
    // }

    test(){
        console.log('props: ',this.props)
    }

    render() {
        return (
            <div className="EditBin">
                <img src="https://robohash.org/1" alt="" height="100px" width="100px" />
                <div>
                    <h1>Name</h1>
                    <input title="name" type="text" onChange={(e) => (this.handleOnChange(e.target.title, e.target.value))} />
                </div>
                <div>
                    <h1>Price</h1>
                    <input title="price" type="number" min='0.00' onChange={(e) => (this.handleOnChange(e.target.title, e.target.value*1))} />
                </div>
                <div>
                    <button onClick={()=>this.props.handleEditBin(this.state.input)}>Edit</button>
                    <button onClick={this.props.handleDeleteBin}>Delete</button>
                    <button onClick={()=>this.test()}>props</button>
                </div>
            </div>
        )
    }
}

export default EditBin