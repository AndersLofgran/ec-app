import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserCircle} from '@fortawesome/free-regular-svg-icons'
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <FontAwesomeIcon icon={faUserCircle} className='profile-icon'/>
      <div className='header-item'>Home</div>
      <div className='header-item'>Art</div>
      <div className='header-item'>Music</div>
      <div className='header-item'>Journaling</div>
      <div className='header-item'>About</div>
    </div>
  );
}
 
export default Header;