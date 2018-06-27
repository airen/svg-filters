// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import { observe } from './components/Game';

const rootEl = document.getElementById('root');

observe(knightPosition =>
  ReactDOM.render(
    <Board knightPosition={knightPosition} />,
    rootEl
  )
);
