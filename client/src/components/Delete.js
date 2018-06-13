import React, { Component } from 'react';
import DeleteModalUI from './MaterialUI-Models/DeleteModalUI';

class Delete extends Component {
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
            <i className="material-icons controls" onClick={this.handleOpen}>delete</i>
            <DeleteModalUI 
                handleDelete={this.props.handleDelete}
                handleClose={this.handleClose}
                contact={this.props.contact}
                open={this.state.open}/> 
            </div>               
        );
    }
}

export default Delete;