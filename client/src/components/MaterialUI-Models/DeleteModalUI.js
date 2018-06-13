import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class ModalRaw extends React.Component {

  render() {
    const { classes } = this.props;

    return (
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.open}
          onClose={this.props.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <h4>Are you sure you want to delete contact?</h4>
            <p>{this.props.contact.first_name + ' ' + this.props.contact.last_name}</p>
            <p>{this.props.contact.phone}</p>
            <button 
              onClick={() => { this.props.handleDelete(this.props.contact.id) }} 
              className="btn waves-effect waves-light red modal-close" 
              type="submit" 
              name="action"
            >
                Delete
            </button>
            <button 
              className="btn waves-effect waves-light green modal-close" 
              onClick={this.props.handleClose} 
              type="submit" 
              name="action"
            >
                Cancel
            </button>
          </div>
        </Modal>
    );
  }
}

ModalRaw.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const ModalRawWrapped = withStyles(styles)(ModalRaw);

export default ModalRawWrapped;
