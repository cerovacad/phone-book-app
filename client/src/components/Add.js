import React, { Component } from 'react';
import AddModalUI from './MaterialUI-Models/AddModalUI';

class Add extends Component {
    state = {
        open: false,
      }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <button 
                    className="waves-effect waves-light btn-large red lighten-2" 
                    onClick={this.handleOpen}
                >Add new
                </button>
                <AddModalUI 
                    handleAdd={this.props.handleAdd} 
                    handleClose={this.handleClose} 
                    open={this.state.open}
                /> 
            </div>               
        );
    }
}

export default Add;