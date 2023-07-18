import React from 'react';
import classes from './Input.module.css';

export const Input = ({ input, meta, ...props }) => {
  const isError = meta.touched && meta.error;
  return (
    <div className={classes.container}>
      <input {...input} {...props} className={classes.input + ' ' + (isError ? classes.error : '')} />
      {isError ? <span className={classes.warn}></span> : <></>}
    </div>
  )
}