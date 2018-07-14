import React from "react";
import { RegionalProvider } from "../../../dist/index";

const headers = () => {
  const token = window.localStorage.getItem("id_token");

  if (!token) {
    return {};
  }

  return { Authorization: `Bearer ${token}` };
};

export default props => (
  <RegionalProvider uri="http://localhost:4466/" headers={headers()}>
    {props.children}
  </RegionalProvider>
);
