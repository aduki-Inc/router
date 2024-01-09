const { router } = require('../lib.router')

class CustomAnchor extends HTMLAnchorElement {
  constructor() {

    // We are not even going to touch this.
    super();

    // let's create our shadow root
    // this.shadowObj = this.attachShadow({mode: 'open'});

    // Get the elements href value
    this._url = this.getAttribute('href')

    // this.render();
  }

  // render() {
  //   this.innerHTML = this.getTemplate();
  // }

  connectedCallback() {
    // console.log('We are inside connectedCallback');
	  
	  this.navigate()
  }

	navigate() {
		this.addEventListener('click', ev => {
			ev.preventDefault()
			ev.stopPropagation()
			
			if (this._url === 'null') {
				throw new Error(`href attribute have no value or not present for ${this}`)
			}
			
			router.navigateTo(this._url)
		})
		
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

module.exports = { CustomAnchor }