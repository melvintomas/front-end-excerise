import { LitElement, html, css } from 'lit-element';

class Book extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      contributors: { type: String },
    };
  }

  static get styles() {
    return [
      css`
        .book-cover-img {
          border-radius: 5px;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="panel" style="padding:20px; display:flex; width: 800px">
        <img class="book-cover-img" src="https://d1re4mvb3lawey.cloudfront.net/pg1017/cover.jpg" />
        <div style="padding:5px">
          <h1>${this.title}</h1>
          <h2>${this.contributors}</h2>
        </div>
      </div>
    `;
  }
}

customElements.define('my-book', Book);
