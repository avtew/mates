import React, { useState } from 'react'
import DetailsReduxForm from '../../common/forms/detailsForm/DetailsForm';
import Preloader from './../../common/preloader/Preloader';
import classes from './Details.module.css'

const Link = ({ title, value, className }) => {
  return (
    value &&
    <li className={classes.item}>
      <span className={`${classes.socialIcon} ${classes[className]}`} />
      <a href={value}>
        <span className={classes.link}>{title}</span>
      </a>
    </li>
  )
}

const Details = (props) => {
  let [editMode, setEditMode] = useState(false);

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
  }

  const onSubmit = (formData) => {
    const data =  {
      'fullName': props.profile.fullName,
      'lookingForAjobDescription': '-',
      'aboutMe': '-', 
      'contacts': formData.contacts
    };
    console.log(data);
    props.updateProfile(data);
    setEditMode(false);
  }

  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className={classes.details}>
      <div className={classes.title}>
        Contacts
        {props.profile.userId === props.id && editMode === false
          ? <span className={`${'icon'} ${'pencil'}`} onClick={activateEditMode}></span>
          : <span className={`${'icon'} ${'cancel'}`} onClick={deactivateEditMode}></span>
        }
      </div>
      {editMode === false
        ? <ul className={classes.list}>
          <Link title={'Website'} value={props.profile.website} className={'web'} />
          <Link title={'GitHub'} value={props.profile.contacts.github} className={'github'} />
          <Link title={'Facebook'} value={props.profile.contacts.facebook} className={'facebook'} />
          <Link title={'Instagram'} value={props.profile.contacts.instagram} className={'instagram'} />
          <Link title={'Twitter'} value={props.profile.contacts.twitter} className={'twitter'} />
          <Link title={'YouTube'} value={props.profile.contacts.youtube} className={'youtube'} />
        </ul>
        : <DetailsReduxForm onSubmit={onSubmit}/>
      }
    </div>
  )
}

export default Details;