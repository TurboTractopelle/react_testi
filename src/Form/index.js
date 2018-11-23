import React, { Component } from "react";

class Form extends Component {
  state = { citation: "", person: "", ref: "", volume: "", year: 2018 };

  handleChange = name => e => {
    let value = e.target.value;
    this.props.handleInput(name, value);
  };

  render() {
    const { year } = this.state;
    return (
      <form>
        <textarea name="citation" onChange={this.handleChange("citation")} />
        <textarea name="person" />
        <textarea name="ref" />
        <select>
          <option>BIO Web of Conferences</option>
          <option>E3S Web of Conferences</option>
          <option>EPJ Web of Conferences</option>
          <option>ITM Web of Conferences</option>
          <option>MATEC Web of Conferences</option>
          <option>SHS Web of Conferences</option>
        </select>
        <input placeholder="volume" />
        <input placeholder="année" value={year} />
      </form>
    );
  }
}

export default Form;
