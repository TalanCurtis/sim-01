import React, { Component } from 'react';

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
    
    render() {
        let randomNum = Math.floor(Math.random() * Math.floor(200));
        console.log(randomNum)
        return (
            <div className="EditBin">
                <img src="https://robohash.org/1" alt="" height="100px" width="100px" />
                <div>
                    <h1>Name: </h1>
                    <input title="name" type="text" onChange={(e) => (this.handleOnChange(e.target.title, e.target.value))} />
                </div>
                <div>
                    <h1>Price:</h1>
                    <input title="price" type="number" min='0.00' onChange={(e) => (this.handleOnChange(e.target.title, e.target.value * 1))} />
                </div>
                <div>
                    <button>Cancel</button>
                    <button>Create</button>
                    <button onClick={() => this.test()}>props</button>
                </div>
            </div>
        )
    }
}

export default CreateBin;