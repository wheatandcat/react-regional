import * as React from "react";
import { Gql } from "../gql";
import Cache from "../memoryCache";

const cacheClass = new Cache();

const Context = React.createContext({
  fetchData: async (gql: Gql, variables: any, cache: boolean) => {}
});

const { Provider } = Context;

interface Props {
  children: () => React.ReactNode;
  uri: string;
  headers?: object;
}

export default class Connected extends React.Component<Props, void> {
  static defaultprops = { headers: {} };

  getCacheKey = (query: string, variables: any) => {
    return `${query}||${JSON.stringify(variables)}`;
  };

  getCache = (key: string) => {
    const value = cacheClass.getCache(key);
    if (value) {
      return value;
    }

    return null;
  };

  fetchData = async (
    gql: Gql,
    variables: any,
    cache: boolean
  ): Promise<any> => {
    const key = this.getCacheKey(gql.key, variables);

    if (cache) {
      const cacheData = this.getCache(key);
      if (cacheData) {
        return cacheData;
      }
    }

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

    if (!response.ok) {
      return;
    }

    const responseData = await response.json();

    if (cache) {
      cacheClass.setCache(key, responseData);
    }

    return responseData;
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
