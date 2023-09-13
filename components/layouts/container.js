class containerComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "closed" });
    // Width
    let width;
    const width_small = "600px";
    const width_medium = "800px";
    const width_large = "900px";


    if (this.hasAttribute("data-width")) {
      let widthValue = `width-${this.getAttribute("data-width")}`;
      console.log(widthValue);
      widthValue.toString() === 'width-small' ? width = width_small : width_large;
      widthValue.toString() === 'width-medium' ? width = width_medium : width_large;
      widthValue.toString() === 'width-large' ? width = width_large : width_large;
    } else {
      width = width_large;
    }

    const containerTemplate = document.createElement("template");
    containerTemplate.innerHTML = `
       <slot></slot>
    `;

    const style = document.createElement("style");
    style.textContent = `
      :host {
        display: block;
        background-color: gold;
        padding: 1rem;
        margin-left: auto;
        margin-right: auto;
        max-width: ${width};
      }
    `;

    shadowRoot.appendChild(style);
    shadowRoot.appendChild(containerTemplate.content.cloneNode(true));
  }

}

customElements.define("component-container", containerComponent);
