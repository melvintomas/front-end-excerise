import { LitElement, html, css } from 'lit-element';

class TOC extends LitElement {
  static get properties() {
    return {
      toc: { type: Array },
    };
  }

  constructor() {
    super();
    this.toc = [1, 2, 3];
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
      <ul class="toc">
        ${this.toc.map(
          i => html`
            <li>${i.title}</li>
          `,
        )}
      </ul>
    `;
  }
}

customElements.define('my-toc', TOC);
