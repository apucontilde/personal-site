import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Main from '../layouts/Main';

const Index = () => {
  const { t } = useTranslation();
  return (
    <Main description="Sitio Web personal de Francisco Casco, cantante, actor, showcaster, presentador y estrímer">
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>
              <Link to="/">  {t('welcome')}</Link>
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
          Aquí podés conocer más acerca de mis {' '}
          <Link to="/projects">projects</Link>, y mi información de {' '}
          <Link to="/contact">contact</Link>.
        </p>
      </article>
    </Main>
  );
};

export default Index;
