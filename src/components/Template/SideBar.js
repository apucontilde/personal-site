import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="Francisco Casco en una pose pensativa e imponente" />
      </Link>
      <header>
        <h2>Francisco Casco</h2>
        <h4>Cantante | Actor | Showcaster | Presentador | Estrímer </h4>
        <p>
          <a href="mailto:cascoosu@gmail.com">cascoosu@gmail.com</a>
        </p>
      </header>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Francisco Casco <Link to="/">franciscocasco.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
