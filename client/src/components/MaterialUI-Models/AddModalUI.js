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

  state = {
    err: false
  }

  onSubmit = (e) => {
    e.preventDefault()

    const firstName = e.target.firstName.value
    const lastName = e.target.lastName.value
    const phone = e.target.phone.value

    if(firstName.length > 2 && lastName.length > 2 && phone.length > 3){
      this.props.handleAdd(e)
      this.props.handleClose()
      this.setState({ err: false })
    }else{
      this.setState({ err: 'Please enter valid input' })
    }

  }

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

            <h4>Add new contact</h4>

            {this.state.err && <span className="red-text text-dlighten-2">{this.state.err}</span>}

            <form className="col s12" onSubmit={this.onSubmit}>
            
              <div className="row">
                <div className="input-field col s12">
                <input id="firstName" name="firstName" type="text" className="validate" required/>
                <label htmlFor="firstName">First Name</label>
                <small><em className="grey-text lighten-2">(Minimum three chracters)</em></small>
                </div>
                <div className="input-field col s12">
                  <input id="lastName" name="lastName" type="text" className="validate" required/>
                  <label htmlFor="lastName">Last Name</label>
                  <small><em className="grey-text lighten-2">(Minimum three chracters)</em></small>
                </div>
                <div className="input-field col s12">
                  <input id="phone" name="phone" type="number" className="validate" required/>
                  <label htmlFor="phone">Phone</label>
                  <small><em className="grey-text lighten-2">(Minimum four digits)</em></small>
                </div>
              </div>

              <button 
                className="btn waves-effect waves-light blue lighten-2"
              >Add
              </button>
              <a 
                onClick={this.props.handleClose} 
                className="btn waves-effect waves-light green lighten-2" 
                >Cancel
              </a>

            </form>

          </div>
        </Modal>
    );
  }
}

ModalRaw.propTypes = {
  classes: PropTypes.object.isRequired,
};

const ModalRawWrapped = withStyles(styles)(ModalRaw);

export default ModalRawWrapped;
