import React from "react";
import { useDispatch } from "react-redux";

// import { Container } from './styles';
import { signOut } from "../../store/modules/auth/actions";

export default function Dashboard() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <>
      <h1>Dashboard</h1>
      <button type="button" onClick={handleSignOut}>
        Sair
      </button>
    </>
  );
}
