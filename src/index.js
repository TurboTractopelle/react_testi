import React, { Component } from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import Testi from "./Testi";

class App extends Component {
  state = {
    data: { citation: "", person: "", ref: "", volume: "", year: 2018 }
  };

  handleInput = (name, value) => {
    this.setState(prevState => ({
      ...prevState,
      data: { ...prevState["data"], [name]: value }
    }));
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <Form handleInput={this.handleInput} />
        <Testi data={data} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
