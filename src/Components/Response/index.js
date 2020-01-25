import React from 'react';
import { observer } from "mobx-react";
import mainStore from "../../stores/mainStore";
import './index.css';

const Response = observer(props => {

  const { response } = mainStore;

  return(
    <div className='response'>
      <p>{ response }</p>
    </div>
  );
});

export default Response;
