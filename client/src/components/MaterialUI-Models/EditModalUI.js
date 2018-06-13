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
    firstName: null,
    lastName: null,
    phone: null,
    err: false
  }

  componentDidMount = () => {
    this.setState({ 
      firstName: this.props.contact.first_name,
      lastName: this.props.contact.last_name,
      phone: this.props.contact.phone
    })
  }

  onSubmit = (e) => {
    e.preventDefault()



    const firstName = e.target.firstName.value
    const lastName = e.target.lastName.value
    const phone = e.target.phone.value

    if(firstName.length > 2 && lastName.length > 2 && phone.length > 3){
      this.props.handleUpdate(e)
      this.props.handleClose()
      this.setState({ err: false })
    }else{
      this.setState({ err: 'Please enter valid input' })
    }

  }

  handleFirstChange = (e) => {
    this.setState({ firstName: e.target.value })
  }
  handleLastChange = (e) => {
    this.setState({ lastName: e.target.value })    
  }
  handlePhoneChange = (e) => {
    this.setState({ phone: e.target.value })
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

            <h4>Update contact</h4>

            {this.state.err && <span className="red-text text-dlighten-2">{this.state.err}</span>}

            <form className="col s12" onSubmit={this.onSubmit}>

              <div className="row">
                <div className="input-field col s12">
                  <input hidden name="id" value={this.props.contact.id}/>
                  <input 
                    id="firstName" 
                    name="firstName" 
                    value={this.state.firstName} 
                    onChange={this.handleFirstChange}
                    type="text" 
                    className="validate" 
                    required
                  />
                </div>
                <div className="input-field col s12">
                  <input 
                    id="lastName" 
                    name="lastName" 
                    value={this.state.lastName}
                    onChange={this.handleLastChange}
                    type="text"
                    className="validate" 
                    required
                  />
                </div>
                <div className="input-field col s12">
                  <input 
                    id="phone" 
                    name="phone" 
                    value={this.state.phone} 
                    onChange={this.handlePhoneChange}
                    type="number" 
                    className="validate" 
                    required
                  />
                </div>
              </div>
              
              <button 
                type="submit"
                className="btn waves-effect waves-light blue lighten-2"
              >Update
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
