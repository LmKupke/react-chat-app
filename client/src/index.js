import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App'
import './styles.scss'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const title = 'My Minimal React Webpack Babel tssup';

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('app')
);

// module.hot.accept();
