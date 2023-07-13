import React from 'react';
import MateListContainer from './mateList/MateListContainer';
import classes from './Mates.module.css';

const Mates = (props) => {
  return (
    <div className={classes.mates}>
      <MateListContainer />
    </div>
  );
}

export default Mates;