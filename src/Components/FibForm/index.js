import React from 'react';
import mainStore from "../../stores/mainStore";
import { observer } from "mobx-react";
import './index.css';

const FibForm = observer(props => {

  const { method, bindData } = mainStore;

  return(
    <div className='form'>
        <input 
          type='text'
          placeholder='введите порядковый номер'
          onChange = { e => bindData(e.target.value) }
        />
        <button onClick={ method }>Получить число</button>
    </div>
  );
});

export default FibForm;