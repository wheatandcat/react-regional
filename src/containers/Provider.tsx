import * as React from "react";
import { Gql } from "../gql";

const Context = React.createContext({
  fetchData: async (gql: Gql, variables: any) => {}
});

const { Provider } = Context;

interface Props {
  children: () => React.ReactNode;
  uri: string;
  headers?: object;
}

export default class Connected extends React.Component<Props, void> {
  static defaultprops = { headers: {} };

  fetchData = async (gql: Gql, variables: any): Promise<any> => {
    const response = await fetch(this.props.uri, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...this.props.headers
      },
      body: JSON.stringify({
        query: gql.query,
        variables: variables
      })
    });

    return response;
  };

  render() {
    return (
      <Provider value={{ fetchData: this.fetchData }}>
        {this.props.children}
      </Provider>
    );
  }
}

export const Consumer = Context.Consumer;
