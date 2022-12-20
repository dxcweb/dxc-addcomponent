import React, { Component } from "react";
import { render } from "react-dom";

import addComponent from "../../src";

console.log(7771, addComponent);
export default class Demo extends Component {
  onClick = () => {
    addComponent((remove) => {
      return <div onClick={remove}>aaaaaa</div>;
    });
  };
  render() {
    return (
      <div>
        <h1 onClick={this.onClick}>点击</h1>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
