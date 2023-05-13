import React from "react";
import preloader from '../../../assets/icons/preloader.gif'
import classes from './Preloader.module.css'

let Preloader = () => {
  return (
    <div className={classes.preloader}>
      <img className={classes.img} src={preloader} />
    </div>
  );
} 

export default Preloader;