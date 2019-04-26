import { LitElement, html, css } from 'lit-element';
import './book';
import './table-of-contents';

class MyApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      toc: { type: Array },
    };
  }

  constructor() {
    super();
    this.apiUrl = './book.json';
    fetch(this.apiUrl)
      .then(data => data.json())
      .then(json => {
        this.title = json.title;
        this.contributors = json.contributors;
        this.toc = json.toc;
      });
  }

  static get styles() {
    return [
      css`
        :host {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-size: calc(10px + 2vmin);
          color: #1a2b42;
        }

        header {
          margin: auto;
        }
        a {
          color: #217ff9;
        }

        .panel {
          background: white;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
        }
      `,
    ];
  }

  render() {
    return html`
      <style>
        .toc li {
          padding: 10px;
          display: block;
        }

        .toc {
          background: white;
        }

        .panel {
        }
      </style>
      <my-book title="${this.title}" contributors="${this.contributors}"></my-book>
      <my-toc .toc="${this.toc}"></my-toc>
    `;
  }
}

customElements.define('my-app', MyApp);
