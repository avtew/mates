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
        <span className={`${classes.icon} ${classes.pencil}`}></span>
      </div>
      <ul className={classes.list}>
        <li className={classes.item}>
          <span className={`${classes.socialIcon} ${classes.github}`} />
          {props.profile.contacts.github
          ? <a href={props.profile.contacts.github}>
              <span className={classes.link}>{props.profile.contacts.github}</span>
            </a>
          : <span><i>(not added)</i></span> }
        </li>
        <li className={classes.item}>
          <span className={`${classes.socialIcon} ${classes.facebook}`} />
          {props.profile.contacts.facebook
          ? <a href={props.profile.contacts.facebook}>
              <span className={classes.link}>{props.profile.contacts.facebook}</span>
            </a>
          : <span><i>(not added)</i></span> }
        </li>
        <li className={classes.item}>
          <span className={`${classes.socialIcon} ${classes.instagram}`} />
          {props.profile.contacts.instagram
          ? <a href={props.profile.contacts.instagram}>
              <span className={classes.link}>{props.profile.contacts.instagram}</span>
            </a>
          : <span><i>(not added)</i></span> }
        </li>
        <li className={classes.item}>
          <span className={`${classes.socialIcon} ${classes.twitter}`} />
          {props.profile.contacts.twitter
          ? <a href={props.profile.contacts.twitter}>
              <span className={classes.link}>{props.profile.contacts.twitter}</span>
            </a>
          : <span><i>(not added)</i></span> }
        </li>
      </ul >
    </div >
  )
}

export default Details;