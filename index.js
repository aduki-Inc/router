class Router {
	constructor(routes) {
		this.routes = routes;
		this._loadInitialRoute();
	}
	
	_getCurrentURL() {
		// return window.location.pathname;
		return '/home'
	}
	
	_matchUrlToRoute(url) {
		return this.routes.find(route => route.path === url);
	}
	
	_loadInitialRoute() {
		// const pathname = window.location.pathname.split('/');
		const pathname = '/about'
		
		// const pathSegs = pathname.length > 1 ? pathname.slice(1) : '';
		// console.log(pathSegs)
		
		this.loadRoute(pathname);
	}
	
	loadRoute(url) {
		const matchedRoute = this._matchUrlToRoute(url);
		if (!matchedRoute) {
			throw new Error('Route not found');
		}
		
		matchedRoute.callback();
	}
	
	navigateTo(path) {
		// window.history.pushState({}, '', path);
		this.loadRoute(path);
	}
}

module.exports = Router