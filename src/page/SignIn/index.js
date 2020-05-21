import React, { useState } from "react";

// import { Container } from './styles';

export default function SignIn() {
  const [valor, setValor] = useState([]);
  const [newValor, setNewValor] = useState("");

  //função que verifica se a quantidade de numeros é menor que 10 ou maior que 11
  function handleAdd() {
    if (newValor.length < 10 || newValor.length > 11) {
      alert("Erro, apenas MO ou CPF");
      return;
    }

    setValor([...valor, newValor]);
    console.log(newValor);
    setNewValor("");
  }

  return (
    <>
      <ul>
        {valor.map((v) => (
          <li key={v}>
            {v.length === 10
              ? (v = "MO")
              : v.length === 11
              ? (v = "CPF")
              : (v = "Não tem")}
          </li>
        ))}
      </ul>
      {/* <form> */}
      <input
        type="text"
        name="cpfOuMo"
        placeholder="CPF/MO"
        value={newValor}
        onChange={(e) => setNewValor(e.target.value)}
      />
      <br /> <br />
      <button type="submit" onClick={handleAdd}>
        Acessar
      </button>
      {/* </form> */}
    </>
  );
}
