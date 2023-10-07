import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom';
import './assets/index.scss';
import Welcome from './Ejercicios/Welcome';
import App from './App';

const root = document.getElementById('root');

ReactDOM.render(<Welcome className="welcome" name="John" age={25} />, root);

const appRoot = createRoot(root);
appRoot.render(<App />);

