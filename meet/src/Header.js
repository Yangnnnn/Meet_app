import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
const Header = () => {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon fontSize='large' className='header__icon' />
      </IconButton>

      <img
        className='header__logo'
        src='http://static1.squarespace.com/static/53d40e07e4b01ef34f3946af/t/5aa599d1e2c4832555f660e1/1612814463408/?format=1500w'
      ></img>
      <IconButton>
        <ForumIcon fontSize='large' className='header__icon' />
      </IconButton>
    </div>
  );
};

export default Header;
