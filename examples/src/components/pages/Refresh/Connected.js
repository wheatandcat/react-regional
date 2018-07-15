import React, { Component } from "react";
import { Mutation, gql } from "../../../../../dist/index";
import Users from "./Users/Connected";
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
      <div>
        <Mutation query={query} variables={{ ...this.state.input }} cache>
          {onMutation => {
            return (
              <Page
                {...this.props}
                onMutation={onMutation}
                onInput={this.onInput}
              />
            );
          }}
        </Mutation>
        <Users />
      </div>
    );
  }
}
