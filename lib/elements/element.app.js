class CaucoApp extends HTMLElement {
	constructor() {
		
		// We are not even going to touch this.
		super();
		
		// let's create our shadow root
		this.shadowObj = this.attachShadow({mode: 'open'});
		
		this.render();
	}
	
	render() {
		this.shadowObj.innerHTML = this.getTemplate();
	}
	
	connectedCallback() {
	
	}
	
	
	disconnectedCallback() {
		// console.log('We are inside disconnectedCallback');
		// adding event handler to the button
	}
	
	disableScroll() {
		// Get the current page scroll position
		let scrollTop = window.scrollY || document.documentElement.scrollTop;
		let scrollLeft = window.scrollX || document.documentElement.scrollLeft;
		document.body.classList.add("stop-scrolling");
		
		// if any scroll is attempted, set this to the previous value
		window.onscroll = function() {
			window.scrollTo(scrollLeft, scrollTop);
		};
	}
	
	enableScroll() {
		document.body.classList.remove("stop-scrolling");
		window.onscroll = function() {};
	}
	
	getTemplate() {
		// Show HTML Here
		return `
      <main class="home">
      
      </main>
      ${this.getStyles()}`;
	}
	
	
	getStyles() {
		return `
      <style>
        :host {
          margin: 0;
          padding: 0;
          box-sizing: border-box !important;
          width: 100%;
          /*height: 100%;*/
        }
      </style>
    `;
	}
}