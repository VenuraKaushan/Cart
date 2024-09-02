import React from 'react';
import logo from '../assets/image.svg';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <img src={logo} alt="Similater Logo" style={styles.logo} />
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
  },
  logo: {
    width: '400px',
    height: '70px',
  },
  title: {
    marginLeft: '15px',
  },
};

export default Header;
