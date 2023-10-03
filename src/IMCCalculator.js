import React, { useState } from 'react';

const IMCCalculator = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setIMC] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    if (altura && peso) {
      const alturaMetros = altura / 100;
      const imcCalculado = peso / (alturaMetros * alturaMetros);
      setIMC(imcCalculado.toFixed(2));

      if (imcCalculado < 18.5) {
        setClassificacao('Magreza');
      } else if (imcCalculado < 24.9) {
        setClassificacao('Normal');
      } else if (imcCalculado < 29.9) {
        setClassificacao('Sobrepeso');
      } else if (imcCalculado < 34.9) {
        setClassificacao('Obesidade Grau I');
      } else if (imcCalculado < 39.9) {
        setClassificacao('Obesidade Grau II');
      } else {
        setClassificacao('Obesidade Grau III');
      }
    }
  };

  return (
    <div>
      <h2>Calculadora IMC</h2>
      <div>
        <label>Altura (cm):</label>
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </div>
      <div>
        <label>Peso (kg):</label>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>
      <button onClick={calcularIMC}>Calcular</button>
      {imc && (
        <div>
          <p>Seu IMC é: {imc}</p>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
};

export default IMCCalculator;
