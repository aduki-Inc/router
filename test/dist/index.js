(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ../index.js
  var require_router = __commonJS({
    "../index.js"(exports, module) {
      var Router2 = class {
        constructor(routes2) {
          this.routes = routes2;
          this._loadInitialRoute();
        }
        _getCurrentURL() {
          return window.location.pathname;
        }
        _matchUrlToRoute(url) {
          return this.routes.find((route) => route.path === url);
        }
        _loadInitialRoute() {
          const pathname = window.location.pathname.split("/");
          console.log(pathname);
          this.loadRoute(pathname);
        }
        loadRoute(url) {
          const matchedRoute = this._matchUrlToRoute(url);
          if (!matchedRoute) {
            throw new Error("Route not found");
          }
          matchedRoute.callback();
        }
        navigateTo(path) {
          this.loadRoute(path);
        }
      };
      module.exports = Router2;
    }
  });

  // js/index.js
  var import__ = __toESM(require_router());
  var routes = [
    { path: "/", callback: () => console.log("Home page") },
    { path: "/about", callback: () => console.log("About page") }
  ];
  var router = new import__.default(routes);
  router.navigateTo("/about");
})();
