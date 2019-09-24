import React from 'react';
import styles from './Header.module.scss';

const Header = ({ name }) => (
  <div className={styles.header}>
    {name}
  </div>
);

export default Header;
