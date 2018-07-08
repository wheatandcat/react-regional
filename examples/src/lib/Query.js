import React, { Component } from "react";

export default class Connected extends Component {
  render() {
    const { children } = this.props;

    return children();
  }
}
