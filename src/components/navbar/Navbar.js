import React from 'react';

import styles from './Navbar.module.scss';

const Navbar = ({ windowSize, xOffset, handleLinkClick }) => {
  function setNavColor() {
    let pagesScrolled = -xOffset.current / windowSize.width;

    if ((pagesScrolled >= 1 && pagesScrolled < 2) || pagesScrolled >= 3) {
      return true;
    }

    return false;
  }

  return (
    <nav className={`${styles.nav} ${setNavColor() && styles.white_active}`}>
      <ul>
        <li id='name' onClick={handleLinkClick}>
          jon sundelöf.
        </li>
        <div>
          <li id='about' onClick={handleLinkClick}>
            about
          </li>
          <li id='work' onClick={handleLinkClick}>
            work
          </li>
          <li id='contact' onClick={handleLinkClick}>
            contact
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
