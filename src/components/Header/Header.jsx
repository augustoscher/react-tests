import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

const Header = ({ name }) => <div className={styles.header}>{name}</div>;

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
