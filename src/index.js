import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorker';
import configureStore from './store';
import App from './components/App/App';
import './index.css';
import 'antd/dist/antd.css';

ReactDOM.render(
  <Provider store={configureStore({})}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister();
