import React from 'react';
import { useSelector } from 'react-redux';

import Name from './Name';
import Sexo from './Sexo';
import Launch from './Launch';
import Finish from './Finish';

const Child = () => {
  const { step } = useSelector( state => state);
  switch (step) {
    case 1:
      return <Name />;
    case 2:
      return <Sexo />;
    case 3:
      return <Finish />;
    default:
      return <Launch />;
  }
};

export default Child;
