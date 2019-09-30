import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

const Header = ({ name }) => <div className={styles.header}>{name}</div>;

Header.defaultProps = {
  name: '',
};

Header.propTypes = {
  name: PropTypes.string,
};

export default Header;
