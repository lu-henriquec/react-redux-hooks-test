import React from 'react';
import Step from './Step';

import { useSelector, useDispatch } from 'react-redux';

import * as DadosActions from '../store/actions/dados';

const Sexo = () => {
  const dispatch = useDispatch();
  const { dados } = useSelector(state => state);
  return (
    <div>
        <label htmlFor="M" className={`input ${dados.sexo === 'M' ? 'ativo' : ''}`}>
            <input
                name='sexo'
                value='M'
                type='radio'
                id='M'
                defaultChecked={dados.sexo === 'M' ? true : false}
                onChange={(e) => dispatch(DadosActions.handleContextData({ sexo: e.target.value}))}
            />
            Masculino
        </label>
        <label htmlFor="F" className={`input ${dados.sexo === 'F' ? 'ativo' : ''}`}>
            <input
                name='sexo'
                value='F'
                type='radio'
                id='F'
                defaultChecked={dados.sexo === 'F' ? true : false}
                onChange={(e) => dispatch(DadosActions.handleContextData({ sexo: e.target.value}))}
            />
            Feminino
        </label>
        <p>Sexo: {dados.sexo}</p>

        <hr/>
        <Step />
    </div>
  );
};

export default Sexo;
