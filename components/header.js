const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    nav {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color:  #0a0a23;
    }

    ul {
      padding: 0;
    }
    
    ul li {
      list-style: none;
      display: inline;
    }
    
    a {
      font-weight: 700;
      margin: 0 25px;
      color: #fff;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
    }
  </style>
  <header>
    <nav>
      <ul>
        <li><a href="about.html">Home</a></li>
        <li><a href="about/">About</a></li>
        <li><a href="contact.html">Building Controls</a></li>
        <li><a href="work.html">Inspections</a></li>
        <li><a href="work.html">Applications</a></li>
        <li><a href="work.html">Fees and Charges</a></li>
        <li><a href="work.html">Demolitions</a></li>
        <li><a href="work.html">Other Services</a></li>
        <li><a href="work.html">FAQs</a></li>
        <li><a href="work.html">Contact us</a></li>
        <li><a href="work.html">Accessibility</a></li>
      </ul>
    </nav>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);
