import React, { Component } from "react";
import { Query, gql } from "../../../../../dist/index";
import Page from "./Page";

var query = gql`
  query User($id: ID) {
    user(where: { id: $id }) {
      id
      name
    }
  }
`;

export default class Connected extends Component {
  state = {
    items: [],
    categories: []
  };

  render() {
    return (
      <Query query={query} variables={{ id: this.props.userId }}>
        {result => {
          if (result.loading) {
            return null;
          }

          return <Page {...this.props} user={result.data.user} />;
        }}
      </Query>
    );
  }
}
