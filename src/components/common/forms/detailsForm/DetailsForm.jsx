import React from "react";
import { Formik, Field } from "formik";
import classes from './DetailsForm.module.css'

const DetailsForm = (props) => {
  return (
    <Formik
      initialValues={
        {
          'fullName': props.profile.fullName,
          'lookingForAjobDescription': '-',
          'aboutMe': '-',
          'contacts': {
            'website': props.profile.contacts.website,
            'github': props.profile.contacts.github,
            'facebook': props.profile.contacts.facebook,
            'instagram': props.profile.contacts.instagram,
            'twitter': props.profile.contacts.twitter,
            'youtube': props.profile.contacts.youtube,
          }
        }
      }
      onSubmit={(values) => {
          props.updateProfile(values);
          props.setEditMode(false);
        }
      }
    >
      {props => (
        <form className={classes.form} onSubmit={props.handleSubmit}>
          <div className={classes.item}>
            <Field type='text' name='contacts.website' className={classes.input} placeholder='Website ...' ></Field>
            <span className={`${classes.socialIcon} ${classes.web}`}></span>
          </div>
          <div className={classes.item}>
            <Field type='text' name='contacts.github' className={classes.input} placeholder='GitHub ...' ></Field>
            <span className={`${classes.socialIcon} ${classes.github}`}></span>
          </div>
          <div className={classes.item}>
            <Field type='text' name='contacts.facebook' className={classes.input} placeholder='Facebook ...' ></Field>
            <span className={`${classes.socialIcon} ${classes.facebook}`}></span>
          </div>
          <div className={classes.item}>
            <Field type='text' name='contacts.instagram' className={classes.input} placeholder='Instagram ...' ></Field>
            <span className={`${classes.socialIcon} ${classes.instagram}`}></span>
          </div>
          <div className={classes.item}>
            <Field type='text' name='contacts.twitter' className={classes.input} placeholder='Twitter ...' ></Field>
            <span className={`${classes.socialIcon} ${classes.twitter}`}></span>
          </div>
          <div className={classes.item}>
            <Field type='text' name='contacts.youtube' className={classes.input} placeholder='YouTube ...' ></Field>
            <span className={`${classes.socialIcon} ${classes.youtube}`}></span>
          </div>
          <button type='submit' className={`${classes.button} ${classes.save}`}>Save</button>
        </form>
      )}
    </Formik>
  )
}

export default DetailsForm;