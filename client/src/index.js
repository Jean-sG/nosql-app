import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Form1 />, document.getElementById('form1'));
registerServiceWorker();

ReactDOM.render(<Form2 />, document.getElementById('form2'));
registerServiceWorker();

ReactDOM.render(<Form3 />, document.getElementById('form3'));
registerServiceWorker();

