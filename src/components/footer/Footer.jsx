import React from "react";
import classes from './Footer.module.css';

const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <span>Mates, 2023</span>
      <div className={classes.copy}>
        <span>Design by <a className={classes.link} href="https://github.com/avtew">avtew</a></span>
        <span>Images by <a className={classes.link} href="https://www.freepik.com/author/rawpixel">rawpixel</a></span>
      </div>
    </footer>
  )
}

export default Footer;