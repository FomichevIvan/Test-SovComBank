import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import 'font-awesome/css/font-awesome.min.css'
import 'semantic-ui-css/semantic.min.css'

import App from './App';

import { store } from "./Redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>
  ,
  document.getElementById('root')
);


