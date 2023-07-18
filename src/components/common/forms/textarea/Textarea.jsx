import React from 'react';
import classes from './Textarea.module.css';

export const Textarea = ({ input, meta, ...props }) => {
  return (
    <div>
      <textarea {...input} {...props} className={classes.textarea} />
      {meta.error ? <></> : <button className={`${classes.button} ${classes.send}`}>Publish</button>}
    </div>
  )
}