import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators";
import { login } from './../../redux/authReduser';
import logo from '../../assets/icons/logo-large.png'
import loginImg from '../../assets/img/login-img.png'
import formImg from '../../assets/img/form-img.png'
import { Input } from "../common/forms/input/Input";
import classes from './Login.module.css';

const LoginForm = (props) => {
  return (
    <form className={classes.form} onSubmit={props.handleSubmit} >
      <img src={logo} className={classes.logo} alt='Logo' />
      <Field component={Input} name={'email'} validate={required} className={classes.input} placeholder='E-mail ...' ></Field>
      <Field component={Input} name={'password'} type={'password'} validate={required} className={classes.input} placeholder='Password ...'></Field>
      <div className={classes.checkbox}>
        <Field component={'input'} name={'rememberMe'} type='checkbox' className={classes.check}></Field>
        <label for='remember'>Remember Me</label>
      </div>
      <button className={`${classes.button} ${classes.log}`}>Log In</button>
      {props.error 
        ? <div className={classes.content}>
            {props.error}
          </div>
        : 
        <div className={classes.content}>
          You can log in using <br></br>
          the test account data:<br></br>
          <br></br>
          free@samuraijs.com<br></br>
          free
        </div>
      }
      <img src={formImg} className={classes.img} alt='By rawpixel.com on Freepik' />
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Navigate to={`/user/${props.userId}`} />
  }

  return (
    <div className={classes.container}>
      <div className={classes.titleBlock}>
        <h1 className={classes.title}>Welcome to Mates,<br></br>mate!</h1>
        <img src={loginImg} alt='By rawpixel.com on Freepik' />
      </div>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  userId: state.auth.userId
})

export default connect(mapStateToProps, {login})(Login);