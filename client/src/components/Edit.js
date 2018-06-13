import React, { Component } from 'react';
import EditModalUI from './MaterialUI-Models/EditModalUI';

class Edit extends Component {
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
                <i className="material-icons controls" onClick={this.handleOpen}>edit</i>
                <EditModalUI 
                    handleClose={this.handleClose}
                    handleUpdate={this.props.handleUpdate}
                    contact={this.props.contact}
                    open={this.state.open}
                /> 
            </div>               
        );
    }
}

export default Edit;