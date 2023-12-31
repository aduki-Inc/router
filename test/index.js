const Router = require('../index')

const routes = [
	{ path: '/', callback: () => console.log('Home page') },
	{ path: '/about', callback: () => console.log('About page') },
];

const router = new Router(routes);
router.navigateTo('/about');

// window.addEventListener('popstate', () => {
// 	router._loadInitialRoute();
// });