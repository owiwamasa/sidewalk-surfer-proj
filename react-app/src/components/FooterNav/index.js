import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './FooterNav.css'

const FooterNav = () => {
  return (
    <>
      <div className='footer-container'>
        <div className='footer-links-container'>
          <div className='profile-images-small'>
            <div>
              <img src='https://i.imgur.com/7XFqUbN.jpg' alt='Conner' width="75" height="75" />
              &nbsp;
              <a href="mailto: cunderhillosx@gmail.com" target="_blank" rel="noreferrer">
                <i class="far fa-envelope" />
              </a>
              &nbsp;
              <a href="https://github.com/conneru" target="_blank" rel="noreferrer">
                <i class="fab fa-github" />
              </a>
              &nbsp;
              <a href="https://www.linkedin.com/in/conner-underhill-64b3921a2" target="_blank" rel="noreferrer">
                <i class="fab fa-linkedin" />
              </a>

              <img src='https://i.imgur.com/JKb72HY.jpg' width="75" height="75" alt='David' />
              &nbsp;
              <a href="mailto: daveman@gmail.com" target="_blank" rel="noreferrer">
                <i class="far fa-envelope" />
              </a>
              &nbsp;
              <a href="https://www.linkedin.com/in/david-h-374b30154/" target="_blank" rel="noreferrer">
                <i class="fab fa-github" />
              </a>
              &nbsp;
              <a href="https://github.com/deardaveed" target="_blank" rel="noreferrer">
                <i class="fab fa-linkedin" />
              </a>

              <img src='https://i.imgur.com/fY9zGrA.jpg' width="75" height="75" alt='John' />
              &nbsp;<a href="mailto: cunderhillosx@gmail.com" target="_blank" rel="noreferrer"></a><i class="far fa-envelope" />&nbsp;<i class="fab fa-github"></i>&nbsp;<i class="fab fa-linkedin" />

              <img src='https://i.imgur.com/4ZiRI4P.jpg' width="75" height="75" alt='Owen' />
              &nbsp;<a href="mailto: cunderhillosx@gmail.com" target="_blank" rel="noreferrer"></a><i class="far fa-envelope" />&nbsp;<i class="fab fa-github"></i>&nbsp;<i class="fab fa-linkedin" />
              </div>
          </div>
        </div>
      </div>
      <div className='footers-footer-container'>
        <div className='footer-data'>Developed by: Conner Underhill | David Huang | John Wanis | Owen Iwamasa</div>
        <div className='footer-data'>TEST ROW 2

        </div>
      </div>

    </>
  );
}

export default FooterNav;
