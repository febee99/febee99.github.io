import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Main from '../layouts/Main';

import CheatsheetCell from '../components/Cheatsheets/CheatsheetCell';
import cheatsheets from '../data/cheatsheets';

const Cheatsheets = () => (
  <Main>
    <Helmet title="Cheatsheets" />
    <article className="post" id="cheatsheets">
      <header>
        <div className="title">
          <h2><Link to="/cheatsheets">Cheatsheets</Link></h2>
        </div>
      </header>

      {cheatsheets.map((cheatsheet) => (
        <CheatsheetCell
          cheatsheets={cheatsheet}
          key={cheatsheet.title}
        />
      ))}
    </article>
  </Main>
);

export default Cheatsheets;
