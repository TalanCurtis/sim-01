import React, { Component } from 'react';
import Header from '../components/Header/Header';
import CreateBin from '../components/CreateBin/CreateBin';

class Create extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        console.log(this.props)
        return (
            <div className="Edit">
                <Header />
                <CreateBin />
            </div>
        )
    }
}

export default Create;