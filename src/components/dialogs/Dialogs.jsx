import React from 'react';
import ContactList from './contactList/ContactList';
import Chat from './chat/Chat';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <ContactList contacts={props.dialogsState.contacts} />
      <Chat chat={props.dialogsState.chat} dispatch={props.dispatch} />
    </div>
  );
}

export default Dialogs;