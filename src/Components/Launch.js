import React from 'react';
import { useDispatch } from 'react-redux';

import * as StepActions from '../store/actions/step';

function Launch() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(StepActions.handleContextStep(1))}>Iniciar</button>
    </div>
  );
}

export default Launch;
