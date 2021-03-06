import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './app/';
import './global.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
