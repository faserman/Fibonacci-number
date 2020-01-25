import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "mobx-react";
import mainStore from "./stores/mainStore";

const stores = {
  mainStore,
}

ReactDOM.render((
  <Provider {...stores}>
    <App />
  </Provider>)
, document.getElementById('root'));
