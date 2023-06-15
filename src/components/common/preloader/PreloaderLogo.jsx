import React from "react";
import preloader from '../../../assets/icons/preload-logo.gif'
import classes from './PreloaderLogo.module.css'

let PreloaderLogo = () => {
  return (
    <div className={classes.preloader}>
      <img className={classes.img} src={preloader} />
    </div>
  );
} 

export default PreloaderLogo;