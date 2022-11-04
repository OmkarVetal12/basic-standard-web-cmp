const template = document.createElement('template');
template.innerHTML = `
<style>
table, th, td {
  border:1px solid black;

}
</style>
  <table>
  <tr>
    <th>Header1</th>
    <th>Header2</th>
    <th>Header3</th>
    <th>Header4</th>
    <th>Header5</th>
  </tr>
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
</table>`;

class myButton extends HTMLElement {
  constructor() {
    super();
    this.count = 0;
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('app-button', myButton);
