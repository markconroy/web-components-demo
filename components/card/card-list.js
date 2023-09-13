class cardList extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "closed" });
    this.setAttribute("role", "list");
    const cardListTemplate = document.createElement("template");
    cardListTemplate.innerHTML = `
       <slot></slot>
    `;

    const style = document.createElement("style");
    style.textContent = `
      :host {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1rem;
        background-color: pink;
      }
    `;

    shadowRoot.appendChild(style);
    shadowRoot.appendChild(cardListTemplate.content.cloneNode(true));
  }
  connectedCallback() {}
}

customElements.define("component-card-list", cardList);
