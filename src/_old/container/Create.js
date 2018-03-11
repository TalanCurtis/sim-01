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
        console.log('create props',this.props)
        return (
            <div className="Edit">
                <Header />
                <CreateBin shelf_id={this.props.match.params.shelf_id*1}  bin_slot={this.props.match.params.bin_slot*1}/>
            </div>
        )
    }
}

export default Create;