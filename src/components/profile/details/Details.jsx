import React from 'react'
import classes from './Details.module.css'
import Preloader from './../../common/preloader/Preloader';

let Details = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className={classes.details}>
      <div className={classes.title}>
        Contacts
        {props.profile.userId === props.id 
          ? <span className={`${classes.icon} ${classes.pencil}`}></span>
          : <></> }
      </div>
      <ul className={classes.list}>
        {props.profile.contacts.github &&
          <li className={classes.item}>
            <span className={`${classes.socialIcon} ${classes.github}`} />
            <a href={props.profile.contacts.github}>
              <span className={classes.link}>GitHub</span>
            </a>
          </li>
        }
        {props.profile.contacts.facebook &&
          <li className={classes.item}>
            <span className={`${classes.socialIcon} ${classes.facebook}`} />
            <a href={props.profile.contacts.facebook}>
              <span className={classes.link}>Facebook</span>
            </a>
          </li>
        }
        {props.profile.contacts.instagram &&
          <li className={classes.item}>
            <span className={`${classes.socialIcon} ${classes.instagram}`} />
            <a href={props.profile.contacts.instagram}>
              <span className={classes.link}>Instagram</span>
            </a>
          </li>
        }
        {props.profile.contacts.twitter &&
          <li className={classes.item}>
            <span className={`${classes.socialIcon} ${classes.twitter}`} />
            <a href={props.profile.contacts.twitter}>
              <span className={classes.link}>Twitter</span>
            </a>
          </li>
        }
      </ul >
    </div >
  )
}

export default Details;