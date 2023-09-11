// Create a class for the element
class Card extends HTMLElement {
  constructor() {
    super();

    this.setAttribute("role", "article");
    this.classList.add("card");
    let imageWrapper;

    // Image
    if (this.hasAttribute("data-image")) {
      const image = document.createElement("img");
      image.classList.add("card__image");
      image.src = this.getAttribute("data-image");
      if (this.hasAttribute("data-image-alt")) {
        image.alt = this.getAttribute("data-image-alt");
      }
      imageWrapper = document.createElement("div");
      imageWrapper.classList.add("card__image-wrapper");
      imageWrapper.appendChild(image);
      this.appendChild(imageWrapper);
    }

    // Title
    const title = document.createElement("h2");
    title.classList.add("card__title");
    title.textContent = this.getAttribute("data-title");

    // Description
    const description = document.createElement("div");
    description.classList.add("card__description");
    description.innerHTML = this.getAttribute("data-description");

    const contentContainer = document.createElement("div");
    contentContainer.classList.add("card__content");
    contentContainer.appendChild(title);
    contentContainer.appendChild(description);

    // Create some CSS to apply to the shadow dom
    const style = document.createElement("style");
    style.textContent = `
      :host {
        display: block;
        background: #eaeaea;
        border-radius: 10px;
        border: 1px solid black;
        max-width: 300px;
        color: #333;
      }

      .card__content {
        padding: 1rem;
      }

      .card__title {
        color: #333;
        margin-top: 0;
      }

      img {
        width: 100%;
        display: block;
        border-radius: 10px 10px 0 0;
      }

      a {
        color: ;
      }
    `;

    // Attach the created elements to the shadow dom
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(style);
    if (imageWrapper !== undefined) {
      shadowRoot.appendChild(imageWrapper);
    }
    shadowRoot.appendChild(contentContainer);
  }
}

// Define the new element
customElements.define("component-card", Card);
