import React from 'react';

import gitIcon from '../assets/iconmonstr-github-rounded.svg';
import linkedinIcon from '../assets/iconmonstr-linkedin-rounded.svg';
import mailIcon from '../assets/iconmonstr-gmail-rounded.svg';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Icons">
        <a href="https://github.com/bplunk1520">
          <img src={gitIcon} alt="GitHub" className="Icon" />
        </a>
        <a href="mailto:benjaminplunket15@gmail.com">
          <img src={mailIcon} alt="Mail" className="Icon" />
        </a>
        <a href="https://www.linkedin.com/in/benjamin-plunkett-2a73189a/">
          <img src={linkedinIcon} alt="LinkedIn" className="Icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
