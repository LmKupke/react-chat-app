import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App'
import './styles.scss'

const title = 'My Minimal React Webpack Babel tssup';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

// module.hot.accept();
