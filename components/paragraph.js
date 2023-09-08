const paragraphTemplate = document.createElement('template');

paragraphTemplate.innerHTML = `
  <style>
    ::slotted(p),
    p,
    slot {
      color: green;
    }

    :host {
      background-color: pink;
    }

    a {
      color: red;
    }
  </style>
  <div part="pcontent">
    <slot name="paragraph-content">Default paragraph content with <a href="#">a link</a>.</slot>
  </div>
`;

class Paragraph extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(paragraphTemplate.content.cloneNode(true));
  }
}

customElements.define('component-paragraph', Paragraph);
