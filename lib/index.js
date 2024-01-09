const { router } = require('./lib.router')
const { registerOtherComponents} = require("./elements/element.register");

const Cauco = {
	router: router,
	registerOtherComponents: registerOtherComponents,
}

module.exports = Cauco;