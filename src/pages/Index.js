import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main description="Sitio Web personal de Francisco Casco, cantante, actor, showcaster, presentador y estrímer">
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Sobre mí</Link>
          </h2>
          <p>
            Sit consectetur tempor aliqua culpa aliqua mollit consectetur
            veniam. Nisi anim eu elit dolore laborum nostrud. Reprehenderit
            commodo nostrud sunt elit aliquip consectetur. Laborum do veniam
            exercitation quis cillum laborum exercitation tempor irure.
          </p>
          <p>
            Sit consectetur tempor aliqua culpa aliqua mollit consectetur
            veniam. Nisi anim eu elit dolore laborum nostrud. Reprehenderit
            commodo nostrud sunt elit aliquip consectetur. Laborum do veniam
            exercitation quis cillum laborum exercitation tempor irure.
          </p>
        </div>
      </header>
      <p>
        {' '}
        Bienvenide a mi sitio.

      </p>
      <p>
        {' '}
        Aquí podés conocer más acerca de mis {' '}
        <Link to="/proyectos">proyectos</Link>, y mi información de {' '}
        <Link to="/contacto">contacto</Link>.
      </p>
    </article>
  </Main>
);

export default Index;
