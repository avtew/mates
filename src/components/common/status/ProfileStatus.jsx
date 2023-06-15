import React from "react";
import classes from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    })
    this.props.updateStatus(this.state.status);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  render() {
    return (
      <div className={classes.status}>
        {this.state.editMode
          ? <input className={classes.input} onChange={this.onStatusChange} value={this.state.status} autofocus='true' />
          : <p className={classes.text}>{this.props.status}</p>
        }
        {this.state.editMode
          ? <span className={`${classes.icon} ${classes.save}`} onClick={this.deactivateEditMode}></span>
          : <span className={`${classes.icon} ${classes.pencil}`} onClick={this.activateEditMode}></span>
        }
      </div>
    );
  }
}

export default ProfileStatus;