import React, { Fragment } from 'react';
import './App.css';
import Headers from './components/layout/headers'
import Meals from './components/meals/Meals';

function App() {
  return (
    <Fragment>
      <Headers />
      <main>
        <Meals />
      </main>
    </Fragment>

  );
}

export default App;
