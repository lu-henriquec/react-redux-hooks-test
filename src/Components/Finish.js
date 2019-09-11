import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as StepActions from '../store/actions/step';
import * as DadosActions from '../store/actions/dados';

function Finish() {
  const { dados } = useSelector(state => state);
  const dispatch = useDispatch();
  function reset() {
    dispatch(DadosActions.cleanContextData());
    dispatch(StepActions.handleContextStep(0));
  }

  return (
    <div>
        <p>Nome: {dados.name}</p>
        <p>Sexo: {dados.sexo}</p>
        <hr/>
        <button onClick={() => reset(0)}>Reiniciar</button>
    </div>
  );
}

export default Finish;
