import React from 'react';
import { observer } from 'mobx-react';
import mainStore from "./stores/mainStore.js";
import FibForm from './Components/FibForm/index.js';
import Response from './Components/Response/index.js';
import './App.css';

const App = observer(props => {

  const { response } = mainStore;

  return (
      <div className="App">
        { response ? <Response /> : <FibForm /> }
      </div>
  );
});

export default App;