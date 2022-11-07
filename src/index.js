import React from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";

interface State {
  count: number;
}
interface Props {}

export default class MyCounter extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const styles = `.my-counter * {
      font-size: 200%;
    }

    .my-counter span {
      width: 4rem;
      display: inline-block;
      text-align: center;
    }

    .my-counter button {
      width: 64px;
      height: 64px;
      border: none;
      border-radius: 10px;
      background-color: seagreen;
      color: white;
    }`;

    return (
      <div className="my-counter">
        <table>
          <th>header</th>
        </table>
      </div>
    );
  }
}

customElements.define(
  "my-counter",
  reactToWebComponent(MyCounter, React, ReactDOM)
);
