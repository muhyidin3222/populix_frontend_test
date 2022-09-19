import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import * as serviceWorker from './serviceWorker';
// import 'react-app-polyfill/ie11';
// import 'react-app-polyfill/stable';

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
