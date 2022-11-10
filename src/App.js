import React from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";


export default class MyCounter extends React.Component {
  
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    
  }

  render() {
    const styles = `
    table, th, td {
      border:1px solid black;
    
    }`;
    return (
      
      <table>
            <style>{styles}</style>
            <thead>
      <tr>
        <th>Header1</th>
        <th>Header2</th>
        <th>Header3</th>
        <th>Header4</th>
        <th>Header5</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Row1</td>
        <td>Row2</td>
        <td>Row3</td>
        <td>Row4</td>
        <td>Row5</td>
      </tr>
      <tr>
        <td>Row1</td>
        <td>Row2</td>
        <td>Row3</td>
        <td>Row4</td>
        <td>Row5</td>
      </tr>
      </tbody>
    </table>
    
    );
  }
}

customElements.define(
  "my-counter",
  reactToWebComponent(MyCounter, React, ReactDOM)
);
