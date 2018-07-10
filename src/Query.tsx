import * as React from "react";
import { Consumer } from "./containers/Provider";
import { Gql } from "./gql";

interface State {
  loading: boolean;
  error: any;
  data: any;
}

interface Props {
  children: (data: any) => React.ReactNode;
  query: Gql;
  variables: any;
  fetchData: (gql: Gql, variables: any) => Promise<any>;
}

class Query extends React.Component<Props, State> {
  state = {
    loading: true,
    error: false,
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

  fetchData = async (): Promise<any> => {
    this.setState({
      loading: true,
      error: false
    });

    let response;

    try {
      response = await this.props.fetchData(
        this.props.query,
        this.props.variables
      );
    } catch (error) {
      return this.setState({ loading: false, error: error });
    }

    const responseData = await response.json();

    if (responseData.errors) {
      return this.setState({
        loading: false,
        error: responseData.errors[0]
      });
    }

    this.setState({
      loading: false,
      error: false,
      data: responseData.data
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
