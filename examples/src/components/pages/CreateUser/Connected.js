import React, { Component } from "react";
import { Redirect } from "@reach/router";
import { Mutation, gql } from "../../../../../dist/index";
import Page from "./Page";

var query = gql`
  mutation CreateUser($name: String!) {
    createUser(data: { name: $name }) {
      id
    }
  }
`;

export default class Connected extends Component {
  state = {
    input: {
      name: ""
    },
    create: false
  };

  onInput = event => {
    this.setState({
      input: {
        ...this.state.input,
        [event.target.name]: event.target.value
      }
    });
  };

  render() {
    return (
      <Mutation query={query} variables={{ ...this.state.input }}>
        {(onMutation, result) => {
          if (result.loading) {
            return null;
          }

          if (result.data.createUser) {
            return (
              <Redirect to={`/users/${result.data.createUser.id}`} noThrow />
            );
          }

          return (
            <Page
              {...this.props}
              onMutation={onMutation}
              onInput={this.onInput}
            />
          );
        }}
      </Mutation>
    );
  }
}
