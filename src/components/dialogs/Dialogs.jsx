import React from 'react';
import ContactListContainer from './contactList/ContactListContainer';
import ChatContainer from './chat/ChatContainer';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <ContactListContainer />
      <ChatContainer />
    </div>
  );
}

export default Dialogs;