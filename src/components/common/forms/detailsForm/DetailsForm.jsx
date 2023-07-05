import React from "react";
import { Field, reduxForm } from "redux-form";
import classes from './DetailsForm.module.css'

class DetailsForm extends React.Component {
  render() {
    return (
      <form className={classes.form} onSubmit={this.props.handleSubmit}>
        <div className={classes.item}>
          <Field component={'input'} name={'contacts.website'} className={classes.input} placeholder={'Website ...'} ></Field>
          <span className={`${classes.socialIcon} ${classes.web}`}></span>
        </div>
        <div className={classes.item}>
          <Field component={'input'} name={'contacts.github'} className={classes.input} placeholder={'GitHub ...'} ></Field>
          <span className={`${classes.socialIcon} ${classes.github}`}></span>
        </div>
        <div className={classes.item}>
          <Field component={'input'} name={'contacts.facebook'} className={classes.input} placeholder={'Facebook ...'} ></Field>
          <span className={`${classes.socialIcon} ${classes.facebook}`}></span>
        </div>
        <div className={classes.item}>
          <Field component={'input'} name={'contacts.instagram'} className={classes.input} placeholder={'Instagram ...'} ></Field>
          <span className={`${classes.socialIcon} ${classes.instagram}`}></span>
        </div>
        <div className={classes.item}>
          <Field component={'input'} name={'contacts.twitter'} className={classes.input} placeholder={'Twitter ...'} ></Field>
          <span className={`${classes.socialIcon} ${classes.twitter}`}></span>
        </div>
        <div className={classes.item}>
          <Field component={'input'} name={'contacts.youtube'} className={classes.input} placeholder={'YouTube ...'} ></Field>
          <span className={`${classes.socialIcon} ${classes.youtube}`}></span>
        </div>
        <button className={`${classes.button} ${classes.save}`}>Save</button>
      </form>
    )
  }
}

const DetailsReduxForm = reduxForm({
  form: 'details',
  enableReinitialize: true,
})(DetailsForm);

export default DetailsReduxForm;