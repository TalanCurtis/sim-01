import React, { Component } from 'react';
import axios  from 'axios';

class CreateBin extends Component {
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

    test(){
        console.log('props: ',this.props)
    }

    handleCreate(){
        let randomNum = Math.floor(Math.random() * Math.floor(200));
        console.log(randomNum)
        let body= {
            bin: 'Bin '+ this.props.bin_slot,
            shelf_id:this.props.shelf_id,
            name: this.state.input.name,
            price: this.state.input.price,
            image:'https://robohash.org/'+ randomNum
        }
        console.log('props:', this.props)
        console.log('Body:', body)
        axios.post('/api/bin/', body).then(res=>{
            console.log('res', res.data)
            let shelfBody = {
                id: res.data[0].shelf_id,
                bin: res.data[0].bin,
                field: 'bin_'+res.data[0].bin.split(' ').pop()*1
            }
            console.log('shelfBody', shelfBody)
            axios.put('/api/addToShelf/', shelfBody).then(
                console.log('done done')
            )
        })
    }

    render() {

        return (
            <div className="EditBin">
                <img src="https://robohash.org/1" alt="" height="100px" width="100px" />
                <div>
                    <h1>Name: {this.state.input.name} </h1>
                    <input title="name" type="text" onChange={(e) => (this.handleOnChange(e.target.title, e.target.value))} />
                </div>
                <div>
                    <h1>Price: {this.state.input.price}</h1>
                    <input title="price" type="number" min='0.00' onChange={(e) => (this.handleOnChange(e.target.title, e.target.value * 1))} />
                </div>
                <div>
                    <button>Cancel</button>
                    <button onClick={()=>{this.handleCreate()}}>Create</button>
                    <button onClick={() => this.test()}>props</button>
                </div>
            </div>
        )
    }
}

export default CreateBin;