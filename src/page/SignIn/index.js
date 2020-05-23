import React, { useState } from "react";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import { signInRequest } from "../../redux/modules/auth/actions";

// import { Container } from './styles';

// const schema = Yup.object().shape({
//   cpfOuMo: Yup.string()
//     .min(10, "Para MO 10 numeros")
//     .required("MO ou CPF são obrigatórios")
//     .max(11, "Maximo 11 para CPF"),
// });

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest({ email, password }));
  }

  return (
    <>
      {/* <Form onSubmit={handleSubmit} schema={schema}> */}
      <Form onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          placeholder="Email"
          // value={newValor}
          // onChange={(e) => setNewValor(e.target.value)}
        />
        <br />
        <br />
        <Input
          name="password"
          type="password"
          placeholder="Senha"
          // value={newValor}
          // onChange={(e) => setNewValor(e.target.value)}
        />
        <br /> <br />
        <button type="submit">{loading ? "Carregando..." : "Acessar"}</button>
      </Form>
    </>
  );
}
