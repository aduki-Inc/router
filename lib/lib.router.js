class LibRouter {
	constructor() {
		this.routes = [];
		// this._loadInitialRoute();
	}

	_checkExistingRoute(path) {
		return !!this.routes.find(route => route.path === path);
	}

	addRoute(path, callback) {
		// Check data types
		if (typeof path !== 'string') {
			throw new TypeError('Pathname must be of type string.');
		}

		if (typeof callback !== 'function') {
			throw new TypeError('Callback must be of type function.');
		}

    if (this._checkExistingRoute(path)) {
			throw new Error(`Callback for path '${path}' already exists.`);
		}

		// Add callback for the path
		this.routes.push({ path, callback });
  }
	
	_getCurrentURL() {
		return window.location.pathname;
		// return '/'
	}

	_matchUrlToRoute(url) {
		return this.routes.find(route => route.path === url);
	}
	
	_loadInitialRoute() {
		const pathname = window.location.pathname;
		
		this.loadRoute(pathname);
	}
	
	loadRoute(url) {
		const matchedRoute = this._matchUrlToRoute(url);
		console.log(`Matched Route: ${matchedRoute}`);
		if (!matchedRoute) {
			throw new Error('Route not found');
		}
		
		matchedRoute.callback();
	}
	
	navigateTo(path) {
		// window.history.pushState({}, '', path);
		this.loadRoute(path);
	}

	// navigateTo(event, data) {
  //   if (this.callbacks[event]) {
  //     this.callbacks[event].forEach(callback => {
  //       callback(data);
  //     });
  //   }
  // }
}

const router = new LibRouter()
module.exports = { router }