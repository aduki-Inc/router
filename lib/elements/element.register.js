const { CustomAnchor } = require('./element.anchor')


const registerOtherComponents = () => {
	if (typeof customElements.get('cauco-a') === 'undefined') {
		customElements.define("cauco-a", CustomAnchor , { extends: "a" });
	}
	
}

module.exports = { registerOtherComponents };
