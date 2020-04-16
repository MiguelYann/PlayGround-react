import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/GithubCards/ui/App';

/**
 * You case choose the component you want to display here, and import it
 */

function RootApp() {
  ReactDOM.render(<App appTitle="Github Profile" />, document.getElementById('root'));
}

RootApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
