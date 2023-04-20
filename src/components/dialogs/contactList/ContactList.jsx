import React from 'react';
import Contact from './contact/Contact';
import classes from './ContactList.module.css';

const ContactList = (props) => {
  let contacts = props.contacts.map(user => <Contact id={user.id} name={user.name} lastMsg={user.lastMsg} time={user.time} />);
  return (
    <div className={classes.contacts}>
      <div className={classes.title}>
        <span><span className={`${classes.icon} ${classes.chats}`}></span>Контакты</span>
        <span className={classes.contactsQnt}>{contacts.length}</span>
      </div>
      {contacts}
    </div>
  );
}

export default ContactList;