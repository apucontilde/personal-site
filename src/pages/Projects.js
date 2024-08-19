import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main title="Proyectos" description="Informacion acerca de los proyectos de Francisco Casco">
    <article className="post" id="proyectos">
      <header>
        <div className="title">
          <h2>
            <Link to="/proyectos">Proyectos</Link>
          </h2>
          <p>Una seleccion de los proyectos en los que he sido parte: </p>
        </div>
      </header>
      {data.map((project) => (
        <Cell data={project} key={project.title} />
      ))}
    </article>
  </Main>
);

export default Projects;
