class CustomAnchor extends HTMLAnchorElement {
  constructor() {

    // We are not even going to touch this.
    super();

    // lets create our shadow root
    this.shadowObj = this.attachShadow({mode: 'open'});

    // Get the elements href value
    this._url = this.getAttribute('href')

    this.render();
  }


  render() {
    this.shadowObj.innerHTML = this.getTemplate();
  }

  connectedCallback() {
    // console.log('We are inside connectedCallback');
  }

  getTemplate() {
    // Show HTML Here
    return 'nill'
  }

  getStyles() {
    return `
    <style>
      * {
        box-sizing: border-box !important;
      }
      
    </style>
    `
  }
}