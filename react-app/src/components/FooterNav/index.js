import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './FooterNav.css'

const FooterNav = () => {
  return (
    <>
      <div className='footer-container'>
        <div className='footer-links-container'>
              <div className='footer-title'>Development Team</div>
          <div className='profile-images-small'>
            <div className='footer-box'>
              <div className='footer-div'>
                <div className="footer-name">Conner Underhill</div>
                  <div className="footer-links">
                    <a href="mailto:cunderhillosx@gmail.com" target="_blank" rel="noreferrer">
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
                  </div>
                </div>

              <div className='footer-div'>
                <div className="footer-name">David Huang</div>
                  <div className="footer-links">
                    <a href="mailto:daveman@gmail.com" target="_blank" rel="noreferrer">
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
                  </div>
              </div>

              <div className='footer-div'>
                <div className="footer-name">John Wanis</div>
                  <div className="footer-links">
                    <a href="mailto:john.wanis@yahoo.com" target="_blank" rel="noreferrer">
                      <i class="far fa-envelope" />
                    </a>
                    &nbsp;
                    <a href="https://www.linkedin.com/in/john-wanis-764957138/" target="_blank" rel="noreferrer">
                      <i class="fab fa-github" />
                    </a>
                    &nbsp;
                    <a href="https://github.com/Jomix-13" target="_blank" rel="noreferrer">
                      <i class="fab fa-linkedin" />
                    </a>
                  </div>
              </div>

              <div className='footer-div'>
                <div className="footer-name">Owen Iwamasa</div>
                  <div className="footer-links">
                    <a href="mailto:owiwamasa@gmail.com" target="_blank" rel="noreferrer">
                      <i class="far fa-envelope" />
                    </a>
                    &nbsp;
                    <a href="https://www.linkedin.com/in/owen-iwamasa-6ab3a9166/" target="_blank" rel="noreferrer">
                      <i class="fab fa-github" />
                    </a>
                    &nbsp;
                    <a href="https://github.com/owiwamasa" target="_blank" rel="noreferrer">
                      <i class="fab fa-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterNav;
