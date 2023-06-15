import React from 'react'
import classes from './Cover.module.css'

let Cover = (props) => {
  return (
    <div className={classes.cover}>
      <img className={classes.img} src={require('../../../assets/img/cover.png')} alt='Cover' />
    </div>
  )
}

export default Cover;