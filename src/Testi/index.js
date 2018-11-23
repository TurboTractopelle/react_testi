import React, { Component } from "react";

class Testi extends Component {
  render() {
    const { data } = this.props;
    return <div>&lt;p&gt;{data.citation}&lt;p&gt;</div>;
  }
}

export default Testi;
