import React from "react";
import { Router } from "@reach/router";
import User from "./components/pages/User/Page";
import Users from "./components/pages/Users/Connected";

export default () => (
  <Router>
    <Users path="/" default />
    <Users path="users" />
    <User path="users/:id" />
  </Router>
);
