import React from "react";
// import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import AuthLayout from "../page/_layouts/auth";
import DefaultLayout from "../page/_layouts/default";

import { store } from "../redux";

export default function RouteWrapper({
  component: Component, //pega a propriedade do router index.js e tranforma em um component
  isPrivate, //pega a propriedade do router index.js e seta como false
  ...rest //traz o resto das propriedades
}) {
  const signed = store.getState().auth.signed; //informa se o usuário está logado ou nao default=false

  //se signed estiver logado e o isprived for true ele volta para o login
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  //se estiver logado e a rota nao for privada redireciona para o dashboard
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  //se está logado e está acessando um dashboard
  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

// RouteWrapper.prototype = {
//   isPrivate: PropTypes.bool,
//   component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
//     .isRequired,
// };

// RouteWrapper.defaultProps = {
//   isPrivate: false,
// };
