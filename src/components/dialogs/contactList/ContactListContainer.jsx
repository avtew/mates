import { connect } from 'react-redux';
import ContactList from './ContactList';

let mapStateToProps = (state) => {
  return {
    contacts: state.dialogs.contacts
  }
}

let mapDispatchToProps = (dispatch) => {
  return {

  }
}

const ContactListContainer = connect (mapStateToProps, mapDispatchToProps) (ContactList);

export default ContactListContainer;