import React from "react";
import { Router } from "@reach/router";
import User from "./components/pages/User/Connected";
import Users from "./components/pages/Users/Connected";
import CreateUser from "./components/pages/CreateUser/Connected";

export default () => (
  <Router>
    <Users path="/" default />
    <Users path="users" />
    <User path="users/:userId" />
    <CreateUser path="users/new" />
  </Router>
);
