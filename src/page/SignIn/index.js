import React, { useState } from "react";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

// import { Container } from './styles';

const schema = Yup.object().shape({
  cpfOuMo: Yup.string()
    .min(10, "Para MO 10 numeros")
    .required("MO ou CPF são obrigatórios")
    .max(11, "Maximo 11 para CPF"),
});

export default function SignIn() {
  // const [valor, setValor] = useState([]);
  // const [newValor, setNewValor] = useState("");

  // //função que verifica se a quantidade de numeros é menor que 10 ou maior que 11
  // function handleAdd() {
  //   if (newValor.length < 10 || newValor.length > 11) {
  //     alert("Erro, apenas MO ou CPF");
  //     return;
  //   }

  //   setValor([...valor, newValor]);
  //   console.log(newValor);
  //   setNewValor("");
  // }

  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      {/* <ul>
        {valor.map((v) => (
          <li key={v}>
            {v.length === 10
              ? (v = "MO")
              : v.length === 11
              ? (v = "CPF")
              : (v = "Não tem")}
          </li>
        ))}
      </ul> */}

      <Form onSubmit={handleSubmit} schema={schema}>
        <Input
          name="cpfOuMo"
          placeholder="CPF/MO"
          // value={newValor}
          // onChange={(e) => setNewValor(e.target.value)}
        />
        <br /> <br />
        <button type="submit">Acessar</button>
      </Form>
    </>
  );
}
