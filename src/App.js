import './App.css';
import UTDLogo from './img/UTDLogo.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import {evaluate, sqrt} from 'mathjs';

function App() {
  const [input, setInput] = useState('');

  const agregarInput = valor =>{
    setInput(input + valor);
  };

  const borrar = () => {
    setInput(input.slice(0, input.length - 1));
  };

  const calcularResultado = () => {
    if (input) {
      try {
        if (input.includes('√')) {
          const expr = input.replace('√', '');
          const resultado = sqrt(evaluate(expr));
          setInput(resultado.toString());
        } else {
          setInput(evaluate(input).toString());
        }
      } catch {
        setInput('');
        alert('⚠️ Error, No se pueden introducir dos operadores ⚠️');
      }
    } else {
      alert('⚠️ Por favor ingrese valores para realizar los cálculos ⚠️');
    }
  };

  return (
    <div className="App">


      <div className='Calculadora-Contenedor'>
        <div className='UTD-Logo-Contenedor'>
         <img src={UTDLogo} className='UTD-Logo' alt='Logo de UTD'/>
        </div>

        <Pantalla input={input}/>

        <div className='Fila'>
          <Boton Click = {agregarInput}>7</Boton>
          <Boton Click = {agregarInput}>8</Boton>
          <Boton Click = {agregarInput}>9</Boton>
          <Boton Click = {borrar}>DEL</Boton>
          <BotonClear Clear = { () => setInput('')}>AC</BotonClear>
        </div>

        <div className='Fila'>
          <Boton Click = {agregarInput}>4</Boton>
          <Boton Click = {agregarInput}>5</Boton>
          <Boton Click = {agregarInput}>6</Boton>
          <Boton Click = {agregarInput}>*</Boton>
          <Boton Click = {agregarInput}>/</Boton>
        </div>

        <div className='Fila'>
          <Boton Click = {agregarInput}>1</Boton>
          <Boton Click = {agregarInput}>2</Boton>
          <Boton Click = {agregarInput}>3</Boton>
          <Boton Click = {agregarInput}>+</Boton>
          <Boton Click = {agregarInput}>-</Boton>
        </div>

        <div className='Fila'>
          <Boton Click = {agregarInput}>0</Boton>
          <Boton Click = {agregarInput}>.</Boton>
          <Boton Click = {calcularResultado}>=</Boton>
          <Boton Click = { () => agregarInput('√')}>√</Boton>
          <Boton Click = {agregarInput}>^</Boton>
        </div>

      </div>
    </div>
  );
};

export default App;