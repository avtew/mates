import React from 'react';
import classes from './Aside.module.css';

const Aside = () => {
  return (
    <aside className={classes.aside}>
      <a href='#'>Лента</a>
      <a href='#'>Сообщения</a>
      <a href='#'>Mой профиль</a>
      <a href='#'>Настройки</a>
    </aside>
  );
}

export default Aside;