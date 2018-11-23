import React, { Component } from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import Testi from "./Testi";

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Form />
        <Testi />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
