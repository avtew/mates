import React from 'react'
import classes from './MateList.module.css'
import Preloader from '../../common/preloader/Preloader';

let MateList = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  if (props.id === props.profile.userId) {
    return (
      <div className={classes.mateList}>
        <div className={classes.title}>
          Mates
          <span className={`${classes.icon} ${classes.search}`}></span>
        </div>
        <div className={classes.container}>
          <div className={classes.mate}>
          </div>
          <div className={classes.mate}>
          </div>
          <div className={classes.mate}>
          </div>
          <div className={classes.mate}>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.mate}>
          </div>
          <div className={classes.mate}>
          </div>
          <div className={classes.mate}>
          </div>
          <div className={classes.mate}>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.mate}>
          </div>
          <div className={classes.mate}>
          </div>
          <div className={classes.mate}>
          </div>
          <div className={classes.mate}>
          </div>
        </div>
      </div>
    )
  }
}

export default MateList;