import React, { Component } from "react";
import ReactDom from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>This is a test</div>;
  }
}

const container = document.getElementById("app");
ReactDOM.render(<App />, container);
