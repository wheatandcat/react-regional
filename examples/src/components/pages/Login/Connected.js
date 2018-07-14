import React, { Component } from "react";
import { Redirect } from "@reach/router";
import Page from "./Page";
import Welcome from "./Welcome";

export default class Connected extends Component {
  state = {
    input: {
      name: "",
      password: ""
    },
    login: false
  };

  onInput = event => {
    this.setState({
      input: {
        ...this.state.input,
        [event.target.name]: event.target.value
      }
    });
  };

  onLogin = async () => {
    const { email, password } = await this.state.input;

    try {
      const response = await fetch("http://localhost:5000/login", {
        mode: "cors",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      if (!response.ok) {
        return;
      }

      const { token } = await response.json();

      window.localStorage.setItem("id_token", token);

      this.setState({ login: true });
    } catch (error) {
      console.log(error);
      return alert("Error!!");
    }
  };

  render() {
    if (this.state.login) {
      return <Welcome />;
    }

    return (
      <Page {...this.props} onInput={this.onInput} onLogin={this.onLogin} />
    );
  }
}
