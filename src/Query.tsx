import * as React from "react";
import { Consumer } from "./containers/Provider";
import { Gql } from "./gql";

interface State {
  loading: boolean;
  error?: any;
  data: any;
}

interface Props {
  children: (data: any) => React.ReactNode;
  query: Gql;
  variables: any;
  cache: boolean;
  fetchData: (gql: Gql, variables: any, cache: boolean) => Promise<any>;
}

class Query extends React.Component<Props, State> {
  static defaultProps = {
    cache: false
  };

  state = {
    loading: true,
    data: {}
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps: Props) {
    if (
      this.props.query.query !== prevProps.query.query ||
      JSON.stringify(this.props.variables) !==
        JSON.stringify(prevProps.variables)
    ) {
      this.fetchData();
    }
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: undefined
    });

    let response;

    try {
      response = await this.props.fetchData(
        this.props.query,
        this.props.variables,
        this.props.cache
      );
    } catch (error) {
      return this.setState({
        loading: false,
        error: error
      });
    }

    if (response.errors) {
      return this.setState({
        loading: false,
        error: response.errors[0]
      });
    }

    this.setState({
      loading: false,
      error: undefined,
      data: response.data
    });
  };

  render() {
    const { children } = this.props;

    return children(this.state);
  }
}

export default (props: any) => (
  <Consumer>
    {({ fetchData }) => <Query {...props} fetchData={fetchData} />}
  </Consumer>
);
