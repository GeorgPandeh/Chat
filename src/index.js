import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from './store';
import App from './components/App';
import { Provider } from 'react-redux'
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={configureStore({})}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister();
