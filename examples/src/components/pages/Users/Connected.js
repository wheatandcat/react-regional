import React, { Component } from "react";
import { Query, gql } from "../../../../../dist/index";
import Page from "./Page";

var query = gql`
  {
    users {
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
      <Query query={query}>
        {result => {
          console.log(result);

          if (result.loading) {
            return null;
          }

          return <Page {...this.props} users={result.data.users} />;
        }}
      </Query>
    );
  }
}
