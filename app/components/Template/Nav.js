import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>Phoebe Chan</h2>
        <p><a href="mailto:febee99@gmail.com">febee99@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Phoebe. 
        I am a Year 3 Computer Science student in <a href="https://www.comp.nus.edu.sg/programmes/ug/cs/"></a> National University of Singapore.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; Phoebe Chan <Link to="/">mldangelo.com</Link>.</p>
    </section>
  </section>
);

export default Nav;
