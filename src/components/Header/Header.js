import React from 'react'
import {Breakpoint} from 'react-socks'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserCircle} from '@fortawesome/free-regular-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import './Header.scss'

const Header = () => {
  return (
    <>
    {/* mobile view */}
      <Breakpoint medium down>
        <div className='header header-mobile'>
          <FontAwesomeIcon icon={faBars} className='header-icon'/>
          <div className='company-name'>Encircle Arts</div>
          <FontAwesomeIcon icon={faUserCircle} className='header-icon'/>
        </div>
      </Breakpoint>

    {/* desktop view */}
      <Breakpoint large up>
        <div className='header header-desktop'>
          <div className='header-item-container'>
            <div className='header-item'>Art</div>
            <div className='header-item'>Music</div>
            <div className='header-item'>Journal</div>
          </div>
          <div className='company-name'>Encircle Arts</div>
          <div>
            <FontAwesomeIcon icon={faUserCircle} className='header-icon header-icon-desktop'/>
          </div>
        </div>
      </Breakpoint>
    </>
  );
}
 
export default Header;