import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './FooterNav.css'

const FooterNav = () => {
  return (
    <>
      <div className='footer-container'>
        <div className='footer-links-container'>
         <div className='profile-images-small'>
            <img src='https://i.imgur.com/7XFqUbN.jpg' alt='Conner' width="75" height="75"></img>
            <img src='https://i.imgur.com/JKb72HY.jpg' width="75" height="75" alt='David'></img>
            <img src='https://i.imgur.com/fY9zGrA.jpg' width="75" height="75" alt='John'></img>
            <img src='https://i.imgur.com/4ZiRI4P.jpg' width="75" height="75" alt='Owen'></img>
          </div>
        </div>
      </div>
      <div className='footers-footer-container'>
        <div className='footer-data'>Developed by: Conner Underhill | David Huang | John Wanis | Owen Iwamasa  @App Academy 2021.</div>
        <div className='footer-data'>

        </div>
      </div>

    </>
  );
}

export default FooterNav;
