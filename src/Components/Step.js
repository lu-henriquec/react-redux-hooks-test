import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as StepActions from '../store/actions/step';

const Step = () => {
  const dispatch = useDispatch();
  const { step } = useSelector(state => state);
  return (
    <div>
        <button onClick={() => dispatch(StepActions.handleContextStep(step-1))}>Prev Step</button>
        {step}
        <button onClick={() => dispatch(StepActions.handleContextStep(step+1))}>Next Step</button>
    </div>
  );
};

export default Step;
