require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _typeof2 = __webpack_require__(1);
  
  var _typeof3 = _interopRequireDefault(_typeof2);
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _toConsumableArray2 = __webpack_require__(3);
  
  var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
  
  var _extends2 = __webpack_require__(4);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _set = __webpack_require__(5);
  
  var _set2 = _interopRequireDefault(_set);
  
  var _asyncToGenerator2 = __webpack_require__(6);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _jsxFileName = 'E:\\gehmi-frontend-interview-master\\src\\server.js'; // eslint-disable-line import/no-unresolved
  
  __webpack_require__(7);
  
  var _path = __webpack_require__(8);
  
  var _path2 = _interopRequireDefault(_path);
  
  var _express = __webpack_require__(9);
  
  var _express2 = _interopRequireDefault(_express);
  
  var _cookieParser = __webpack_require__(10);
  
  var _cookieParser2 = _interopRequireDefault(_cookieParser);
  
  var _bodyParser = __webpack_require__(11);
  
  var _bodyParser2 = _interopRequireDefault(_bodyParser);
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _server = __webpack_require__(13);
  
  var _server2 = _interopRequireDefault(_server);
  
  var _universalRouter = __webpack_require__(14);
  
  var _universalRouter2 = _interopRequireDefault(_universalRouter);
  
  var _prettyError = __webpack_require__(15);
  
  var _prettyError2 = _interopRequireDefault(_prettyError);
  
  var _morgan = __webpack_require__(16);
  
  var _morgan2 = _interopRequireDefault(_morgan);
  
  var _cors = __webpack_require__(17);
  
  var _cors2 = _interopRequireDefault(_cors);
  
  var _App = __webpack_require__(18);
  
  var _App2 = _interopRequireDefault(_App);
  
  var _Html = __webpack_require__(24);
  
  var _Html2 = _interopRequireDefault(_Html);
  
  var _ErrorPage = __webpack_require__(27);
  
  var _ErrorPage2 = __webpack_require__(29);
  
  var _ErrorPage3 = _interopRequireDefault(_ErrorPage2);
  
  var _assets = __webpack_require__(36);
  
  var _assets2 = _interopRequireDefault(_assets);
  
  var _routes = __webpack_require__(37);
  
  var _routes2 = _interopRequireDefault(_routes);
  
  var _config = __webpack_require__(26);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  global.Promise = __webpack_require__(66);
  
  var app = (0, _express2.default)();
  
  // Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
  // user agent is not known.
  // -----------------------------------------------------------------------------
  global.navigator = global.navigator || {};
  global.navigator.userAgent = global.navigator.userAgent || 'all';
  
  //
  // Register Node.js middleware
  // -----------------------------------------------------------------------------
  app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));
  app.use((0, _cookieParser2.default)());
  app.use(_bodyParser2.default.urlencoded({ extended: true }));
  app.use(_bodyParser2.default.json());
  app.use((0, _morgan2.default)('dev')); // TODO: production setting
  
  // HTTP access control (CORS)
  app.options('*', (0, _cors2.default)()); // pre-flight across-the-board
  app.use((0, _cors2.default)());
  
  //
  // Register server-side rendering middleware
  // -----------------------------------------------------------------------------
  app.get('*', function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req, res, next) {
      var _ret;
  
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              return _context2.delegateYield(_regenerator2.default.mark(function _callee() {
                var css, context, route, data, html;
                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        css = new _set2.default();
  
                        // Global (context) variables that can be easily accessed from any React component
                        // https://facebook.github.io/react/docs/context.html
  
                        context = {
                          // Enables critical path CSS rendering
                          // https://github.com/kriasoft/isomorphic-style-loader
                          insertCss: function insertCss() {
                            for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
                              styles[_key] = arguments[_key];
                            }
  
                            // eslint-disable-next-line no-underscore-dangle
                            styles.forEach(function (style) {
                              return css.add(style._getCss());
                            });
                          }
                        };
                        _context.next = 4;
                        return _universalRouter2.default.resolve(_routes2.default, (0, _extends3.default)({}, context, {
                          path: req.path,
                          query: req.query
                        }));
  
                      case 4:
                        route = _context.sent;
  
                        if (!route.redirect) {
                          _context.next = 8;
                          break;
                        }
  
                        res.redirect(route.status || 302, route.redirect);
                        return _context.abrupt('return', {
                          v: void 0
                        });
  
                      case 8:
                        data = (0, _extends3.default)({}, route);
  
                        data.children = _server2.default.renderToString(_react2.default.createElement(
                          _App2.default,
                          { context: context, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 74
                            },
                            __self: undefined
                          },
                          route.component
                        ));
                        data.style = [].concat((0, _toConsumableArray3.default)(css)).join('');
                        data.script = _assets2.default.main.js;
                        // data.state = context.store.getState();
                        data.chunk = _assets2.default[route.chunk] && _assets2.default[route.chunk].js;
                        html = _server2.default.renderToStaticMarkup(_react2.default.createElement(_Html2.default, (0, _extends3.default)({}, data, {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 79
                          },
                          __self: undefined
                        })));
  
  
                        res.status(route.status || 200);
                        res.send('<!doctype html>' + html);
  
                      case 16:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, undefined);
              })(), 't0', 2);
  
            case 2:
              _ret = _context2.t0;
  
              if (!((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object")) {
                _context2.next = 5;
                break;
              }
  
              return _context2.abrupt('return', _ret.v);
  
            case 5:
              _context2.next = 10;
              break;
  
            case 7:
              _context2.prev = 7;
              _context2.t1 = _context2['catch'](0);
  
              next(_context2.t1);
  
            case 10:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 7]]);
    }));
  
    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());
  
  //
  // Error handling
  // -----------------------------------------------------------------------------
  var pe = new _prettyError2.default();
  pe.skipNodeFiles();
  pe.skipPackage('express');
  
  app.use(function (err, req, res, next) {
    // eslint-disable-line no-unused-vars
    console.log(pe.render(err)); // eslint-disable-line no-console
    var html = _server2.default.renderToStaticMarkup(_react2.default.createElement(
      _Html2.default,
      {
        title: 'Internal Server Error',
        description: err.message,
        style: _ErrorPage3.default._getCss() // eslint-disable-line no-underscore-dangle
        , __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: undefined
      },
      _server2.default.renderToString(_react2.default.createElement(_ErrorPage.ErrorPageWithoutStyle, { error: err, __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: undefined
      }))
    ));
    res.status(err.status || 500);
    res.send('<!doctype html>' + html);
  });
  
  //
  // Launch the server
  /* eslint-enable no-console */
  app.listen(_config.port, function () {
    console.log('The server is running at http://localhost:' + _config.port + '/');
  });

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/typeof");

/***/ },
/* 2 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/regenerator");

/***/ },
/* 3 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ },
/* 4 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/extends");

/***/ },
/* 5 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/set");

/***/ },
/* 6 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ },
/* 7 */
/***/ function(module, exports) {

  module.exports = require("babel-polyfill");

/***/ },
/* 8 */
/***/ function(module, exports) {

  module.exports = require("path");

/***/ },
/* 9 */
/***/ function(module, exports) {

  module.exports = require("express");

/***/ },
/* 10 */
/***/ function(module, exports) {

  module.exports = require("cookie-parser");

/***/ },
/* 11 */
/***/ function(module, exports) {

  module.exports = require("body-parser");

/***/ },
/* 12 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 13 */
/***/ function(module, exports) {

  module.exports = require("react-dom/server");

/***/ },
/* 14 */
/***/ function(module, exports) {

  module.exports = require("universal-router");

/***/ },
/* 15 */
/***/ function(module, exports) {

  module.exports = require("pretty-error");

/***/ },
/* 16 */
/***/ function(module, exports) {

  module.exports = require("morgan");

/***/ },
/* 17 */
/***/ function(module, exports) {

  module.exports = require("cors");

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(19);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(20);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(21);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(22);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(23);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _class, _temp;
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var ContextType = {
    // Enables critical path CSS rendering
    // https://github.com/kriasoft/isomorphic-style-loader
    insertCss: _react.PropTypes.func.isRequired
  };
  
  /**
   * The top-level React component setting context (global) variables
   * that can be accessed from all the child components.
   *
   * https://facebook.github.io/react/docs/context.html
   *
   * Usage example:
   *
   *   const context = {
   *     history: createBrowserHistory(),
   *     store: createStore(),
   *   };
   *
   *   ReactDOM.render(
   *     <App context={context}>
   *       <Layout>
   *         <LandingPage />
   *       </Layout>
   *     </App>,
   *     container,
   *   );
   */
  var App = (_temp = _class = function (_React$PureComponent) {
    (0, _inherits3.default)(App, _React$PureComponent);
  
    function App() {
      (0, _classCallCheck3.default)(this, App);
      return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(App, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return this.props.context;
      }
    }, {
      key: 'render',
      value: function render() {
        // NOTE: If you need to add or modify header, footer etc. of the app,
        // please do that inside the Layout component.
        return _react.Children.only(this.props.children);
      }
    }]);
    return App;
  }(_react2.default.PureComponent), _class.propTypes = {
    context: _react.PropTypes.shape(ContextType).isRequired,
    children: _react.PropTypes.element.isRequired
  }, _class.childContextTypes = ContextType, _temp);
  exports.default = App;

/***/ },
/* 19 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ },
/* 20 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ },
/* 21 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/createClass");

/***/ },
/* 22 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ },
/* 23 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/inherits");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(19);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(20);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(21);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(22);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(23);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _class,
      _temp,
      _jsxFileName = 'E:\\gehmi-frontend-interview-master\\src\\components\\Html.js';
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _serializeJavascript = __webpack_require__(25);
  
  var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);
  
  var _config = __webpack_require__(26);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Html = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(Html, _React$Component);
  
    function Html() {
      (0, _classCallCheck3.default)(this, Html);
      return (0, _possibleConstructorReturn3.default)(this, (Html.__proto__ || (0, _getPrototypeOf2.default)(Html)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Html, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            title = _props.title,
            description = _props.description,
            style = _props.style,
            script = _props.script,
            chunk = _props.chunk,
            state = _props.state,
            children = _props.children;
  
        return _react2.default.createElement(
          'html',
          { className: 'no-js', lang: 'en', __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            },
            __self: this
          },
          _react2.default.createElement(
            'head',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              },
              __self: this
            },
            _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              },
              __self: this
            }),
            _react2.default.createElement('meta', { httpEquiv: 'x-ua-compatible', content: 'ie=edge', __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              },
              __self: this
            }),
            _react2.default.createElement(
              'title',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 23
                },
                __self: this
              },
              title
            ),
            _react2.default.createElement('meta', { name: 'description', content: description, __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              },
              __self: this
            }),
            _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              },
              __self: this
            }),
            _react2.default.createElement('link', { rel: 'apple-touch-icon', href: 'apple-touch-icon.png', __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            }),
            _react2.default.createElement('link', { rel: 'stylesheet', href: '/css/bootstrap.min.css', __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              },
              __self: this
            }),
            _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Open+Sans', rel: 'stylesheet', __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              },
              __self: this
            }),
            _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Lato', rel: 'stylesheet', __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              },
              __self: this
            }),
            _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css', __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              },
              __self: this
            }),
            _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css', __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              },
              __self: this
            }),
            style && _react2.default.createElement('style', { id: 'css', dangerouslySetInnerHTML: { __html: style }, __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              },
              __self: this
            })
          ),
          _react2.default.createElement(
            'body',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              },
              __self: this
            },
            _react2.default.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: children }, __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              },
              __self: this
            }),
            state && _react2.default.createElement('script', {
              dangerouslySetInnerHTML: { __html: 'window.APP_STATE=' + (0, _serializeJavascript2.default)(state, { isJSON: true }) },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              },
              __self: this
            }),
            script && _react2.default.createElement('script', { src: script, __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              },
              __self: this
            }),
            chunk && _react2.default.createElement('script', { src: chunk, __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              },
              __self: this
            }),
            _config.analytics.google.trackingId && _react2.default.createElement('script', {
              dangerouslySetInnerHTML: { __html: 'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' + ('ga(\'create\',\'' + _config.analytics.google.trackingId + '\',\'auto\');ga(\'send\',\'pageview\')') },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              },
              __self: this
            }),
            _config.analytics.google.trackingId && _react2.default.createElement('script', { src: 'https://www.google-analytics.com/analytics.js', async: true, defer: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Html;
  }(_react2.default.Component), _class.propTypes = {
    title: _react.PropTypes.string.isRequired,
    description: _react.PropTypes.string.isRequired,
    style: _react.PropTypes.string,
    script: _react.PropTypes.string,
    chunk: _react.PropTypes.string,
    state: _react.PropTypes.object,
    children: _react.PropTypes.string
  }, _temp);
  exports.default = Html;

/***/ },
/* 25 */
/***/ function(module, exports) {

  module.exports = require("serialize-javascript");

/***/ },
/* 26 */
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /* eslint-disable max-len */
  
  var port = exports.port = process.env.PORT || 3000;
  var host = exports.host = process.env.WEBSITE_HOSTNAME || 'localhost:' + port;
  
  var databaseUrl = exports.databaseUrl = process.env.MONGODB_URI || 'mongodb://admin:admin@ds141128.mlab.com:41128/gehmi-test';
  
  var analytics = exports.analytics = {
  
    // https://analytics.google.com/
    google: {
      trackingId: process.env.GOOGLE_TRACKING_ID }
  
  };
  
  var auth = exports.auth = {
  
    jwt: { secret: process.env.JWT_SECRET || 'gehmi' },
  
    // https://developers.facebook.com/
    facebook: {
      id: process.env.FACEBOOK_APP_ID || '1862445dsa51745631',
      secret: process.env.FACEBOOK_APP_SECRET || 'a970ae3240ab4sb9b8aae0f9f0661c6fc'
    },
  
    // https://cloud.google.com/console/project
    google: {
      id: process.env.GOOGLE_CLIENT_ID || '251410730550-ahcg0ou5mgfhl8sdhlui1urru7jn5s12km.apps.googleusercontent.com',
      secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd'
    },
  
    // https://apps.twitter.com/
    twitter: {
      key: process.env.TWITTER_CONSUMER_KEY || 'accessedasd',
      secret: process.env.TWITTER_CONSUMER_SECRET || 'KTZ6cxoKnasdEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ'
    }
  
  };

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ErrorPageWithoutStyle = undefined;
  
  var _getPrototypeOf = __webpack_require__(19);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(20);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(21);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(22);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(23);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _class,
      _temp,
      _jsxFileName = 'E:\\gehmi-frontend-interview-master\\src\\routes\\error\\ErrorPage.js';
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(28);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _ErrorPage = __webpack_require__(29);
  
  var _ErrorPage2 = _interopRequireDefault(_ErrorPage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var ErrorPage = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(ErrorPage, _React$Component);
  
    function ErrorPage() {
      (0, _classCallCheck3.default)(this, ErrorPage);
      return (0, _possibleConstructorReturn3.default)(this, (ErrorPage.__proto__ || (0, _getPrototypeOf2.default)(ErrorPage)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(ErrorPage, [{
      key: 'render',
      value: function render() {
        if (true) {
          var error = this.props.error;
  
          return _react2.default.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              },
              __self: this
            },
            _react2.default.createElement(
              'h1',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 15
                },
                __self: this
              },
              error.name
            ),
            _react2.default.createElement(
              'p',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 16
                },
                __self: this
              },
              error.message
            ),
            _react2.default.createElement(
              'pre',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17
                },
                __self: this
              },
              error.stack
            )
          );
        }
  
        return _react2.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          _react2.default.createElement(
            'h1',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              },
              __self: this
            },
            'Error'
          ),
          _react2.default.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              },
              __self: this
            },
            'Sorry, a critical error occurred on this page.'
          )
        );
      }
    }]);
    return ErrorPage;
  }(_react2.default.Component), _class.propTypes = {
    error: _react.PropTypes.object.isRequired
  }, _temp);
  exports.ErrorPageWithoutStyle = ErrorPage;
  exports.default = (0, _withStyles2.default)(_ErrorPage2.default)(ErrorPage);

/***/ },
/* 28 */
/***/ function(module, exports) {

  module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(30);
      var insertCss = __webpack_require__(32);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./ErrorPage.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./ErrorPage.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(31)();
  // imports
  
  
  // module
  exports.push([module.id, "* {\n  line-height: 1.2;\n  margin: 0;\n}\n\nhtml {\n  color: #888;\n  display: table;\n  font-family: sans-serif;\n  height: 100%;\n  text-align: center;\n  width: 100%;\n}\n\nbody {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 2em;\n}\n\nh1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\npre {\n  text-align: left;\n  margin-top: 32px;\n  margin-top: 2rem;\n}\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n}\n", "", {"version":3,"sources":["/./routes/error/ErrorPage.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,UAAU;CACX;;AAED;EACE,YAAY;EACZ,eAAe;EACf,wBAAwB;EACxB,aAAa;EACb,mBAAmB;EACnB,YAAY;CACb;;AAED;EACE,oBAAoB;EACpB,uBAAuB;EACvB,aAAa;CACd;;AAED;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;CAClB;;AAED;EACE,eAAe;EACf,aAAa;CACd;;AAED;EACE,iBAAiB;EACjB,iBAAiB;EAAjB,iBAAiB;CAClB;;AAED;EACE;;IAEE,WAAW;GACZ;;EAED;IACE,iBAAiB;IACjB,kBAAkB;GACnB;CACF","file":"ErrorPage.css","sourcesContent":["* {\n  line-height: 1.2;\n  margin: 0;\n}\n\nhtml {\n  color: #888;\n  display: table;\n  font-family: sans-serif;\n  height: 100%;\n  text-align: center;\n  width: 100%;\n}\n\nbody {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 2em;\n}\n\nh1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\npre {\n  text-align: left;\n  margin-top: 2rem;\n}\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports


/***/ },
/* 31 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];
  
  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};
  
  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _stringify = __webpack_require__(33);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _slicedToArray2 = __webpack_require__(34);
  
  var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
  
  var _getIterator2 = __webpack_require__(35);
  
  var _getIterator3 = _interopRequireDefault(_getIterator2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * Isomorphic CSS style loader for Webpack
   *
   * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var prefix = 's';
  var inserted = {};
  
  // Base64 encoding and decoding - The "Unicode Problem"
  // https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
  function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
      return String.fromCharCode('0x' + p1);
    }));
  }
  
  /**
   * Remove style/link elements for specified node IDs
   * if they are no longer referenced by UI components.
   */
  function removeCss(ids) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;
  
    try {
      for (var _iterator = (0, _getIterator3.default)(ids), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var id = _step.value;
  
        if (--inserted[id] <= 0) {
          var elem = document.getElementById(prefix + id);
          if (elem) {
            elem.parentNode.removeChild(elem);
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
  
  /**
   * Example:
   *   // Insert CSS styles object generated by `css-loader` into DOM
   *   var removeCss = insertCss([[1, 'body { color: red; }']]);
   *
   *   // Remove it from the DOM
   *   removeCss();
   */
  function insertCss(styles) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$replace = _ref.replace,
        replace = _ref$replace === undefined ? false : _ref$replace,
        _ref$prepend = _ref.prepend,
        prepend = _ref$prepend === undefined ? false : _ref$prepend;
  
    var ids = [];
    for (var i = 0; i < styles.length; i++) {
      var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),
          moduleId = _styles$i[0],
          css = _styles$i[1],
          media = _styles$i[2],
          sourceMap = _styles$i[3];
  
      var id = moduleId + '-' + i;
  
      ids.push(id);
  
      if (inserted[id]) {
        if (!replace) {
          inserted[id]++;
          continue;
        }
      }
  
      inserted[id] = 1;
  
      var elem = document.getElementById(prefix + id);
      var create = false;
  
      if (!elem) {
        create = true;
  
        elem = document.createElement('style');
        elem.setAttribute('type', 'text/css');
        elem.id = prefix + id;
  
        if (media) {
          elem.setAttribute('media', media);
        }
      }
  
      var cssText = css;
      if (sourceMap && btoa) {
        // skip IE9 and below, see http://caniuse.com/atob-btoa
        cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
        cssText += '\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';
      }
  
      if ('textContent' in elem) {
        elem.textContent = cssText;
      } else {
        elem.styleSheet.cssText = cssText;
      }
  
      if (create) {
        if (prepend) {
          document.head.insertBefore(elem, document.head.childNodes[0]);
        } else {
          document.head.appendChild(elem);
        }
      }
    }
  
    return removeCss.bind(null, ids);
  }
  
  module.exports = insertCss;

/***/ },
/* 33 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/json/stringify");

/***/ },
/* 34 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ },
/* 35 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/get-iterator");

/***/ },
/* 36 */
/***/ function(module, exports) {

  module.exports = require("./assets");

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(6);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /* eslint-disable global-require */
  // The top-level (parent) route
  exports.default = {
  
    path: '/',
  
    // Keep in mind, routes are evaluated in order
    children: [__webpack_require__(38).default,
  
    // Wildcard routes, e.g. { path: '*', ... } (must go last)
    __webpack_require__(62).default],
  
    action: function action(_ref) {
      var _this = this;
  
      var next = _ref.next;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var route;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return next();
  
              case 2:
                route = _context.sent;
  
                route.title = '' + (route.title || 'GEHMI - Interview Questions');
                route.description = route.description || '';
  
                return _context.abrupt('return', route);
  
              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = 'E:\\gehmi-frontend-interview-master\\src\\routes\\home\\index.js';
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Home = __webpack_require__(39);
  
  var _Home2 = _interopRequireDefault(_Home);
  
  var _Layout = __webpack_require__(44);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/',
  
    action: function action() {
      return {
        title: 'GEHMI - Bake goods just for you',
        component: _react2.default.createElement(
          _Layout2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: this
          },
          _react2.default.createElement(_Home2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: this
          })
        )
      };
    }
  };

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _getPrototypeOf = __webpack_require__(19);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(20);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(21);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(22);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(23);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _jsxFileName = 'E:\\gehmi-frontend-interview-master\\src\\routes\\home\\Home.js';
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactDom = __webpack_require__(40);
  
  var _reactBootstrap = __webpack_require__(41);
  
  var _withStyles = __webpack_require__(28);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Home = __webpack_require__(42);
  
  var _Home2 = _interopRequireDefault(_Home);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /* Example for using css modules
  // 1. import dependencies
  import withStyles from 'isomorphic-style-loader/lib/withStyles';
  import s from './Home.css';
  
   <div className={s.root}>css modules</div>
   <div className={cx(s.root,s.highlight)}>css modules</div>
  
  // wrap with higher order component when export
  export default withStyles(s)(Home);
  */
  
  /* Exmaple for using inline styling
    <div style={{textAlign:'center'}}>
      css module
    <div>
  
    <div style={Object.assign({
      styles.common,
      {textAlign:'center'}
    })}>
      inline styling
    <div>
  */
  
  var Home = function (_React$Component) {
      (0, _inherits3.default)(Home, _React$Component);
  
      function Home() {
          (0, _classCallCheck3.default)(this, Home);
          return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
      }
  
      (0, _createClass3.default)(Home, [{
          key: 'render',
          value: function render() {
  
              return _react2.default.createElement(
                  _reactBootstrap.Grid,
                  { bsClass: true, style: { paddingTop: 150, paddingBottom: 150 }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 39
                      },
                      __self: this
                  },
                  _react2.default.createElement(
                      'h2',
                      {
                          __source: {
                              fileName: _jsxFileName,
                              lineNumber: 40
                          },
                          __self: this
                      },
                      _react2.default.createElement(
                          'div',
                          { style: { textAlign: 'center' }, __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 40
                              },
                              __self: this
                          },
                          'Welcome to GEHMI'
                      )
                  ),
                  _react2.default.createElement(
                      _reactBootstrap.Row,
                      {
                          __source: {
                              fileName: _jsxFileName,
                              lineNumber: 44
                          },
                          __self: this
                      },
                      _react2.default.createElement(
                          _reactBootstrap.Col,
                          { lg: 6, sm: 12, xs: 12, __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 45
                              },
                              __self: this
                          },
                          _react2.default.createElement(
                              'div',
                              { className: _Home2.default.r1, style: { backgroundColor: '#337ab7' }, __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 45
                                  },
                                  __self: this
                              },
                              'Row1.Col1'
                          )
                      ),
                      _react2.default.createElement(
                          _reactBootstrap.Col,
                          { lg: 6, sm: 12, xs: 12, __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 48
                              },
                              __self: this
                          },
                          _react2.default.createElement(
                              'div',
                              { className: _Home2.default.r1, style: { backgroundColor: '#337ab7' }, __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 48
                                  },
                                  __self: this
                              },
                              'Row1.Col2'
                          )
                      )
                  ),
                  _react2.default.createElement(
                      _reactBootstrap.Row,
                      {
                          __source: {
                              fileName: _jsxFileName,
                              lineNumber: 52
                          },
                          __self: this
                      },
                      _react2.default.createElement(
                          _reactBootstrap.Col,
                          { lg: 12, sm: 12, xs: 12, __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 53
                              },
                              __self: this
                          },
                          _react2.default.createElement(
                              'div',
                              { className: _Home2.default.r2, style: { backgroundColor: '#f0ad4e' }, __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 53
                                  },
                                  __self: this
                              },
                              'Row2.Col1'
                          )
                      )
                  ),
                  _react2.default.createElement(
                      _reactBootstrap.Row,
                      {
                          __source: {
                              fileName: _jsxFileName,
                              lineNumber: 57
                          },
                          __self: this
                      },
                      _react2.default.createElement(
                          _reactBootstrap.Col,
                          { lg: 4, sm: 12, xs: 12, __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 58
                              },
                              __self: this
                          },
                          _react2.default.createElement(
                              'div',
                              { className: _Home2.default.r3, style: { backgroundColor: '#5cb85c' }, __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 58
                                  },
                                  __self: this
                              },
                              'Row3.Col1'
                          )
                      ),
                      _react2.default.createElement(
                          _reactBootstrap.Col,
                          { lg: 4, sm: 12, xs: 12, __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 60
                              },
                              __self: this
                          },
                          _react2.default.createElement(
                              'div',
                              { className: _Home2.default.r3, style: { backgroundColor: '#5cb85c' }, __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 60
                                  },
                                  __self: this
                              },
                              'Row3.Col2'
                          )
                      ),
                      _react2.default.createElement(
                          _reactBootstrap.Col,
                          { lg: 4, sm: 12, xs: 12, __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 62
                              },
                              __self: this
                          },
                          _react2.default.createElement(
                              'div',
                              { className: _Home2.default.r3, style: { backgroundColor: '#5cb85c' }, __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 62
                                  },
                                  __self: this
                              },
                              'Row3.Col3'
                          )
                      )
                  ),
                  _react2.default.createElement(
                      _reactBootstrap.Row,
                      {
                          __source: {
                              fileName: _jsxFileName,
                              lineNumber: 66
                          },
                          __self: this
                      },
                      _react2.default.createElement(
                          _reactBootstrap.Col,
                          { lg: 3, sm: 6, xs: 12, __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 67
                              },
                              __self: this
                          },
                          _react2.default.createElement(
                              'div',
                              { className: _Home2.default.r4, style: { backgroundColor: '#d9534f' }, __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 67
                                  },
                                  __self: this
                              },
                              'Row4.Col1'
                          )
                      ),
                      _react2.default.createElement(
                          _reactBootstrap.Col,
                          { lg: 3, sm: 6, xs: 12, __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 69
                              },
                              __self: this
                          },
                          _react2.default.createElement(
                              'div',
                              { className: _Home2.default.r4, style: { backgroundColor: '#d9534f' }, __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 69
                                  },
                                  __self: this
                              },
                              'Row4.Col2'
                          )
                      ),
                      _react2.default.createElement(
                          _reactBootstrap.Col,
                          { lg: 3, sm: 6, xs: 12, __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 71
                              },
                              __self: this
                          },
                          _react2.default.createElement(
                              'div',
                              { className: _Home2.default.r4, style: { backgroundColor: '#d9534f' }, __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 71
                                  },
                                  __self: this
                              },
                              'Row4.Col3'
                          )
                      ),
                      _react2.default.createElement(
                          _reactBootstrap.Col,
                          { lg: 3, sm: 6, xs: 12, __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 73
                              },
                              __self: this
                          },
                          _react2.default.createElement(
                              'div',
                              { className: _Home2.default.r4, style: { backgroundColor: '#d9534f' }, __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 73
                                  },
                                  __self: this
                              },
                              'Row4.Col4'
                          )
                      )
                  )
              );
          }
      }]);
      return Home;
  }(_react2.default.Component);
  
  exports.default = (0, _withStyles2.default)(_Home2.default)(Home);
  //export default Home;

/***/ },
/* 40 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ },
/* 41 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap");

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(43);
      var insertCss = __webpack_require__(32);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./Home.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./Home.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(31)();
  // imports
  
  
  // module
  exports.push([module.id, ":root {\n/*\n   * Typography\n   * ======================================================================== */\n/*\n   * Layout\n   * ======================================================================== */\n/*\n   * Color\n   * ======================================================================== */\n/*\n   * Media queries breakpoints\n   * ======================================================================== */\n/* Extra small screen / phone */\n/* Small screen / tablet */\n/* Medium screen / desktop */\n/* Large screen / wide desktop */}\n@media only screen and (max-width: 768px) {\n/*for mobile phones*/\n/*first row css*/\n.Home-r1-16eR3 {\n    text-align: center;\n    padding-bottom: 20px;\n    padding-top: 20px;\n    margin-bottom: 5px;\n    margin-top: 5px;\n}\n/*second row css*/\n.Home-r2-122rn {\n    text-align: center;\n    padding-bottom: 50px;\n    padding-top: 50px;\n    margin-bottom: 5px;\n    margin-top: 5px;\n}\n\n/*third row css*/\n.Home-r3-2dype {\n    text-align: center;\n    padding-bottom: 20px;\n    padding-top: 20px;\n    margin-bottom: 5px;\n    margin-top: 5px;\n}\n\n/*fourth row css*/\n.Home-r4-3RiX- {\n    text-align: center;\n    padding-bottom: 20px;\n    padding-top: 20px;\n    margin-bottom: 5px;\n    margin-top: 5px;\n\n}}\n\n\n@media only screen and (min-width: 1200px) {\n    /*for desktop*/\n    .Home-r1-16eR3 {\n        text-align: center;\n        padding-bottom: 40px;\n        padding-top: 40px;\n        margin-bottom: 15px;\n        margin-top: 15px;\n    }\n\n    .Home-r2-122rn {\n        text-align: center;\n        padding-bottom: 100px;\n        padding-top: 100px;\n        margin-bottom: 15px;\n        margin-top: 15px;\n    }\n\n    .Home-r3-2dype {\n        text-align: center;\n        padding-bottom: 100px;\n        padding-top: 100px;\n        margin-bottom: 15px;\n        margin-top: 15px;\n    }\n\n    .Home-r4-3RiX- {\n        text-align: center;\n        padding-bottom: 60px;\n        padding-top: 60px;\n        margin-bottom: 15px;\n        margin-top: 15px;\n    }\n}\n\n\n@media only screen and (min-width: 769px) and (max-width: 1199px) {\n\n    /*for tablets*/\n    .Home-r1-16eR3 {\n        text-align: center;\n        padding-bottom: 20px;\n        padding-top: 20px;\n        margin-bottom: 5px;\n        margin-top: 5px;\n    }\n\n    .Home-r2-122rn {\n        text-align: center;\n        padding-bottom: 75px;\n        padding-top: 75px;\n        margin-bottom: 5px;\n        margin-top: 5px;\n    }\n\n    .Home-r3-2dype {\n        text-align: center;\n        padding-bottom: 20px;\n        padding-top: 20px;\n        margin-bottom: 5px;\n        margin-top: 5px;\n    }\n\n    .Home-r4-3RiX- {\n        text-align: center;\n        padding-bottom: 30px;\n        padding-top: 30px;\n        margin-bottom: 5px;\n        margin-top: 5px;\n    }\n}", "", {"version":3,"sources":["/./components/variables.css","/./routes/home/Home.css"],"names":[],"mappings":"AAAA;AACE;;gFAE8E;AAI9E;;gFAE8E;AAK9E;;gFAE8E;AAM9E;;gFAE8E;AAErD,gCAAgC;AAChC,2BAA2B;AAC3B,6BAA6B;AAC7B,iCAAiC,CAC3D;AC7BD;AACA,qBAAqB;AACrB,iBAAiB;AACjB;IACI,mBAAmB;IACnB,qBAAqB;IACrB,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;CACnB;AACD,kBAAkB;AAClB;IACI,mBAAmB;IACnB,qBAAqB;IACrB,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;CACnB;;AAED,iBAAiB;AACjB;IACI,mBAAmB;IACnB,qBAAqB;IACrB,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;CACnB;;AAED,kBAAkB;AAClB;IACI,mBAAmB;IACnB,qBAAqB;IACrB,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;;CAEnB,CAAC;;;AAGF;IACI,eAAe;IACf;QACI,mBAAmB;QACnB,qBAAqB;QACrB,kBAAkB;QAClB,oBAAoB;QACpB,iBAAiB;KACpB;;IAED;QACI,mBAAmB;QACnB,sBAAsB;QACtB,mBAAmB;QACnB,oBAAoB;QACpB,iBAAiB;KACpB;;IAED;QACI,mBAAmB;QACnB,sBAAsB;QACtB,mBAAmB;QACnB,oBAAoB;QACpB,iBAAiB;KACpB;;IAED;QACI,mBAAmB;QACnB,qBAAqB;QACrB,kBAAkB;QAClB,oBAAoB;QACpB,iBAAiB;KACpB;CACJ;;;AAGD;;IAEI,eAAe;IACf;QACI,mBAAmB;QACnB,qBAAqB;QACrB,kBAAkB;QAClB,mBAAmB;QACnB,gBAAgB;KACnB;;IAED;QACI,mBAAmB;QACnB,qBAAqB;QACrB,kBAAkB;QAClB,mBAAmB;QACnB,gBAAgB;KACnB;;IAED;QACI,mBAAmB;QACnB,qBAAqB;QACrB,kBAAkB;QAClB,mBAAmB;QACnB,gBAAgB;KACnB;;IAED;QACI,mBAAmB;QACnB,qBAAqB;QACrB,kBAAkB;QAClB,mBAAmB;QACnB,gBAAgB;KACnB;CACJ","file":"Home.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Lato', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n  --space-text-1: 2px;\n\n  /*\n   * Color\n   * ======================================================================== */\n  --main-color : #FC3A35;\n  --main-light-color : #EA5C5C;\n  --main-background-color: #3E3E3E;\n  --main-light-background-color: #F4F4F4;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../../components/variables.css';\n@media only screen and (max-width: 768px) {\n/*for mobile phones*/\n/*first row css*/\n.r1 {\n    text-align: center;\n    padding-bottom: 20px;\n    padding-top: 20px;\n    margin-bottom: 5px;\n    margin-top: 5px;\n}\n/*second row css*/\n.r2 {\n    text-align: center;\n    padding-bottom: 50px;\n    padding-top: 50px;\n    margin-bottom: 5px;\n    margin-top: 5px;\n}\n\n/*third row css*/\n.r3 {\n    text-align: center;\n    padding-bottom: 20px;\n    padding-top: 20px;\n    margin-bottom: 5px;\n    margin-top: 5px;\n}\n\n/*fourth row css*/\n.r4 {\n    text-align: center;\n    padding-bottom: 20px;\n    padding-top: 20px;\n    margin-bottom: 5px;\n    margin-top: 5px;\n\n}}\n\n\n@media only screen and (min-width: 1200px) {\n    /*for desktop*/\n    .r1 {\n        text-align: center;\n        padding-bottom: 40px;\n        padding-top: 40px;\n        margin-bottom: 15px;\n        margin-top: 15px;\n    }\n\n    .r2 {\n        text-align: center;\n        padding-bottom: 100px;\n        padding-top: 100px;\n        margin-bottom: 15px;\n        margin-top: 15px;\n    }\n\n    .r3 {\n        text-align: center;\n        padding-bottom: 100px;\n        padding-top: 100px;\n        margin-bottom: 15px;\n        margin-top: 15px;\n    }\n\n    .r4 {\n        text-align: center;\n        padding-bottom: 60px;\n        padding-top: 60px;\n        margin-bottom: 15px;\n        margin-top: 15px;\n    }\n}\n\n\n@media only screen and (min-width: 769px) and (max-width: 1199px) {\n\n    /*for tablets*/\n    .r1 {\n        text-align: center;\n        padding-bottom: 20px;\n        padding-top: 20px;\n        margin-bottom: 5px;\n        margin-top: 5px;\n    }\n\n    .r2 {\n        text-align: center;\n        padding-bottom: 75px;\n        padding-top: 75px;\n        margin-bottom: 5px;\n        margin-top: 5px;\n    }\n\n    .r3 {\n        text-align: center;\n        padding-bottom: 20px;\n        padding-top: 20px;\n        margin-bottom: 5px;\n        margin-top: 5px;\n    }\n\n    .r4 {\n        text-align: center;\n        padding-bottom: 30px;\n        padding-top: 30px;\n        margin-bottom: 5px;\n        margin-top: 5px;\n    }\n}"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"r1": "Home-r1-16eR3",
  	"r2": "Home-r2-122rn",
  	"r3": "Home-r3-2dype",
  	"r4": "Home-r4-3RiX-"
  };

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(19);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(20);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(21);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(22);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(23);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _class,
      _temp,
      _jsxFileName = 'E:\\gehmi-frontend-interview-master\\src\\components\\Generic\\Layout\\Layout.js';
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(28);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Layout = __webpack_require__(45);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Header = __webpack_require__(47);
  
  var _Header2 = _interopRequireDefault(_Header);
  
  var _Footer = __webpack_require__(59);
  
  var _Footer2 = _interopRequireDefault(_Footer);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Layout = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(Layout, _React$Component);
  
    function Layout() {
      (0, _classCallCheck3.default)(this, Layout);
      return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Layout, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            },
            __self: this
          },
          _react2.default.createElement(_Header2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            },
            __self: this
          }),
          this.props.children,
          _react2.default.createElement(_Footer2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            },
            __self: this
          })
        );
      }
    }]);
    return Layout;
  }(_react2.default.Component), _class.propTypes = {
    children: _react.PropTypes.node.isRequired
  }, _temp);
  exports.default = (0, _withStyles2.default)(_Layout2.default)(Layout);

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(46);
      var insertCss = __webpack_require__(32);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../../node_modules/postcss-loader/index.js?pack=default!./Layout.css", function() {
          content = require("!!./../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../../node_modules/postcss-loader/index.js?pack=default!./Layout.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(31)();
  // imports
  
  
  // module
  exports.push([module.id, "/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\n/* Document\n   ========================================================================== */\n\nhtml {\n  font-family: sans-serif;\n\n  /* 1 */\n  line-height: 1.15;\n\n  /* 2 */\n  -ms-text-size-adjust: 100%;\n\n  /* 3 */\n  -webkit-text-size-adjust: 100%;\n\n  /* 3 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain {\n\n  /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box;\n\n  /* 1 */\n  height: 0;\n\n  /* 1 */\n  overflow: visible;\n\n  /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace;\n\n  /* 1 */\n  font-size: 1em;\n\n  /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent;\n\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n\n  /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none;\n\n  /* 1 */\n  text-decoration: underline;\n\n  /* 2 */\n  text-decoration: underline dotted;\n\n  /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n\n  /* 1 */\n  font-size: 1em;\n\n  /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n\n  /* 1 */\n  font-size: 100%;\n\n  /* 1 */\n  line-height: 1.15;\n\n  /* 1 */\n  margin: 0;\n\n  /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput {\n\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect {\n\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n\n  /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box;\n\n  /* 1 */\n  color: inherit;\n\n  /* 2 */\n  display: table;\n\n  /* 1 */\n  max-width: 100%;\n\n  /* 1 */\n  padding: 0;\n\n  /* 3 */\n  white-space: normal;\n\n  /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block;\n\n  /* 1 */\n  vertical-align: baseline;\n\n  /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n\n  /* 1 */\n  padding: 0;\n\n  /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n\n  /* 1 */\n  outline-offset: -2px;\n\n  /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n\n  /* 1 */\n  font: inherit;\n\n  /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n\n:root {\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Color\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  /* Extra small screen / phone */\n\n  /* Small screen / tablet */\n\n  /* Medium screen / desktop */\n\n  /* Large screen / wide desktop */\n}\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: 'Lato', sans-serif;\n  line-height: 1.375; /* ~22px */\n}\n\n/*\n * link\n */\n a, a:hover, a:visited, a:active, a:focus{\n   text-decoration: none;\n   display: inline-block;\n   outline: 0;\n }\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n.browserupgrade {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: none;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n", "", {"version":3,"sources":["/../node_modules/normalize.css/normalize.css","/./components/variables.css","/./components/Generic/Layout/Layout.css"],"names":[],"mappings":"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","file":"Layout.css","sourcesContent":["/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\n/* Document\n   ========================================================================== */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n",":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Lato', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n  --space-text-1: 2px;\n\n  /*\n   * Color\n   * ======================================================================== */\n  --main-color : #FC3A35;\n  --main-light-color : #EA5C5C;\n  --main-background-color: #3E3E3E;\n  --main-light-background-color: #F4F4F4;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../../../node_modules/normalize.css/normalize.css';\n\n@import '../../variables.css';\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: var(--font-family-base);\n  line-height: 1.375; /* ~22px */\n}\n\n/*\n * link\n */\n a, a:hover, a:visited, a:active, a:focus{\n   text-decoration: none;\n   display: inline-block;\n   outline: 0;\n }\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n:global(.browserupgrade) {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: none;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(19);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(20);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(21);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(22);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(23);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _jsxFileName = 'E:\\gehmi-frontend-interview-master\\src\\components\\Generic\\Header\\Header.js';
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(28);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Header = __webpack_require__(48);
  
  var _Header2 = _interopRequireDefault(_Header);
  
  var _Link = __webpack_require__(50);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _Navigation = __webpack_require__(54);
  
  var _Navigation2 = _interopRequireDefault(_Navigation);
  
  var _logoSmall = __webpack_require__(58);
  
  var _logoSmall2 = _interopRequireDefault(_logoSmall);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Header = function (_React$Component) {
    (0, _inherits3.default)(Header, _React$Component);
  
    function Header() {
      (0, _classCallCheck3.default)(this, Header);
      return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Header, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(_Navigation2.default, { className: _Header2.default.nav, __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        });
      }
    }]);
    return Header;
  }(_react2.default.Component);
  
  exports.default = (0, _withStyles2.default)(_Header2.default)(Header);

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(49);
      var insertCss = __webpack_require__(32);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../../node_modules/postcss-loader/index.js?pack=default!./Header.css", function() {
          content = require("!!./../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../../node_modules/postcss-loader/index.js?pack=default!./Header.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(31)();
  // imports
  
  
  // module
  exports.push([module.id, ":root {\n    /*\n   * Typography\n   * ======================================================================== */\n    /*\n   * Layout\n   * ======================================================================== */\n    /*\n   * Color\n   * ======================================================================== */\n    /*\n   * Media queries breakpoints\n   * ======================================================================== */\n    /* Extra small screen / phone */\n    /* Small screen / tablet */\n    /* Medium screen / desktop */\n    /* Large screen / wide desktop */\n}\n", "", {"version":3,"sources":["/./components/variables.css"],"names":[],"mappings":"AAAA;IACE;;gFAE8E;IAI9E;;gFAE8E;IAK9E;;gFAE8E;IAM9E;;gFAE8E;IAErD,gCAAgC;IAChC,2BAA2B;IAC3B,6BAA6B;IAC7B,iCAAiC;CAC3D","file":"Header.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Lato', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n  --space-text-1: 2px;\n\n  /*\n   * Color\n   * ======================================================================== */\n  --main-color : #FC3A35;\n  --main-light-color : #EA5C5C;\n  --main-background-color: #3E3E3E;\n  --main-light-background-color: #F4F4F4;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends2 = __webpack_require__(4);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _objectWithoutProperties2 = __webpack_require__(51);
  
  var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
  
  var _getPrototypeOf = __webpack_require__(19);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(20);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(21);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(22);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(23);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _class,
      _temp2,
      _jsxFileName = 'E:\\gehmi-frontend-interview-master\\src\\components\\Generic\\Link\\Link.js';
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _history = __webpack_require__(52);
  
  var _history2 = _interopRequireDefault(_history);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function isLeftClickEvent(event) {
    return event.button === 0;
  }
  
  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }
  
  var Link = (_temp2 = _class = function (_React$Component) {
    (0, _inherits3.default)(Link, _React$Component);
  
    function Link() {
      var _ref;
  
      var _temp, _this, _ret;
  
      (0, _classCallCheck3.default)(this, Link);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Link.__proto__ || (0, _getPrototypeOf2.default)(Link)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
        if (_this.props.onClick) {
          _this.props.onClick(event);
        }
  
        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }
  
        if (event.defaultPrevented === true) {
          return;
        }
  
        event.preventDefault();
        _history2.default.push(_this.props.to);
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
  
    (0, _createClass3.default)(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            to = _props.to,
            children = _props.children,
            props = (0, _objectWithoutProperties3.default)(_props, ['to', 'children']);
  
        return _react2.default.createElement(
          'a',
          (0, _extends3.default)({ href: to }, props, { onClick: this.handleClick, __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          }),
          children
        );
      }
    }]);
    return Link;
  }(_react2.default.Component), _class.propTypes = {
    to: _react.PropTypes.string.isRequired,
    children: _react.PropTypes.node,
    onClick: _react.PropTypes.func
  }, _temp2);
  exports.default = Link;

/***/ },
/* 51 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _createBrowserHistory = __webpack_require__(53);
  
  var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // Navigation manager, e.g. history.push('/home')
  // https://github.com/mjackson/history
  exports.default = (false) && (0, _createBrowserHistory2.default)();

/***/ },
/* 53 */
/***/ function(module, exports) {

  module.exports = require("history/createBrowserHistory");

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(19);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(20);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(21);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(22);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(23);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _jsxFileName = 'E:\\gehmi-frontend-interview-master\\src\\components\\Generic\\Navigation\\Navigation.js',
      _class,
      _temp2;
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(55);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _withStyles = __webpack_require__(28);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _reactBootstrap = __webpack_require__(41);
  
  var _Navigation = __webpack_require__(56);
  
  var _Navigation2 = _interopRequireDefault(_Navigation);
  
  var _Link = __webpack_require__(50);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _history = __webpack_require__(52);
  
  var _history2 = _interopRequireDefault(_history);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // onSelect is passed down by dropdown menu
  var NavMenuItem = function NavMenuItem(_ref) {
    var item = _ref.item,
        divider = _ref.divider,
        onSelect = _ref.onSelect;
    return _react2.default.createElement(
      'div',
      { style: { textAlign: 'center' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: undefined
      },
      _react2.default.createElement(
        _reactBootstrap.MenuItem,
        { eventKey: item, onSelect: onSelect, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: undefined
        },
        _react2.default.createElement(
          'div',
          { className: _Navigation2.default.navItemText, __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            },
            __self: undefined
          },
          item
        )
      ),
      divider && _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: undefined
      })
    );
  };
  
  var NavLabelItem = function NavLabelItem(_ref2) {
    var item = _ref2.item,
        eventHandler = _ref2.eventHandler,
        divider = _ref2.divider;
    return _react2.default.createElement(
      _reactBootstrap.NavItem,
      { eventKey: item, onSelect: eventHandler, __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: undefined
      },
      _react2.default.createElement(
        'div',
        { className: _Navigation2.default.navItemText, __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: undefined
        },
        item
      )
    );
  };
  
  var Navigation = (_temp2 = _class = function (_React$Component) {
    (0, _inherits3.default)(Navigation, _React$Component);
  
    function Navigation() {
      var _ref3;
  
      var _temp, _this, _ret;
  
      (0, _classCallCheck3.default)(this, Navigation);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref3 = Navigation.__proto__ || (0, _getPrototypeOf2.default)(Navigation)).call.apply(_ref3, [this].concat(args))), _this), _this.handleNavAction = function (selectedKey) {
        switch (selectedKey) {
          default:
            _history2.default.push('/');
            break;
        }
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
  
    (0, _createClass3.default)(Navigation, [{
      key: 'render',
      value: function render() {
        var user = this.props.user;
  
        return _react2.default.createElement(
          _reactBootstrap.Navbar,
          { className: _Navigation2.default.nav, fluid: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          },
          _react2.default.createElement(
            _reactBootstrap.Navbar.Header,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              },
              __self: this
            },
            _react2.default.createElement(
              _reactBootstrap.Navbar.Brand,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 44
                },
                __self: this
              },
              _react2.default.createElement(
                _Link2.default,
                { to: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'div',
                  { className: _Navigation2.default.brandText, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 46
                    },
                    __self: this
                  },
                  'GEHMI'
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Navbar.Toggle,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 49
                },
                __self: this
              },
              _react2.default.createElement(
                'div',
                { className: 'sr-only', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                  },
                  __self: this
                },
                'Toggle Navigation'
              ),
              _react2.default.createElement('div', { className: (0, _classnames2.default)('icon-bar', _Navigation2.default.mainColorBackground), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 51
                },
                __self: this
              }),
              _react2.default.createElement('div', { className: (0, _classnames2.default)('icon-bar', _Navigation2.default.mainColorBackground), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 52
                },
                __self: this
              }),
              _react2.default.createElement('div', { className: (0, _classnames2.default)('icon-bar', _Navigation2.default.mainColorBackground), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 53
                },
                __self: this
              })
            )
          ),
          _react2.default.createElement(_reactBootstrap.Navbar.Collapse, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          })
        );
      }
    }]);
    return Navigation;
  }(_react2.default.Component), _class.propTypes = {
    className: _react.PropTypes.string
  }, _temp2);
  exports.default = (0, _withStyles2.default)(_Navigation2.default)(Navigation);

/***/ },
/* 55 */
/***/ function(module, exports) {

  module.exports = require("classnames");

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(57);
      var insertCss = __webpack_require__(32);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../../node_modules/postcss-loader/index.js?pack=default!./Navigation.css", function() {
          content = require("!!./../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../../node_modules/postcss-loader/index.js?pack=default!./Navigation.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(31)();
  // imports
  
  
  // module
  exports.push([module.id, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Color\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n.Navigation-nav-YZxw9 {\n  background-color: #F1EAE4;\n  border-radius: 0px;\n  margin: 0;\n  padding: 0;\n}\n.Navigation-navItemText-10H0v {\n  font-family: 'Lato', sans-serif;\n  letter-spacing: 1px;\n  font-size: 12px;\n  padding: 0;\n  margin: 0;\n  color: #777;\n}\n.Navigation-navItemText-10H0v:hover {\n  color: #444\n}\n\n.Navigation-brandText-1N_9o {\n  color: #EA5C5C;\n  font-family: 'Lato', sans-serif;\n  letter-spacing: 1.22px;\n  margin: 0;\n  font-size: 22;\n}\n.Navigation-brandText-1N_9o:hover {\n  color: #FC3A35;\n}\n\n.Navigation-mainColorBackground-vrwCS: {\n  background-color: #FC3A35;\n}\n", "", {"version":3,"sources":["/./components/variables.css","/./components/Generic/Navigation/Navigation.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;EAI9E;;gFAE8E;EAK9E;;gFAE8E;EAM9E;;gFAE8E;EAErD,gCAAgC;EAChC,2BAA2B;EAC3B,6BAA6B;EAC7B,iCAAiC;CAC3D;AC7BD;EACE,0BAA0B;EAC1B,mBAAmB;EACnB,UAAU;EACV,WAAW;CACZ;AACD;EACE,gCAAqC;EACrC,oBAAoB;EACpB,gBAAgB;EAChB,WAAW;EACX,UAAU;EACV,YAAY;CACb;AACD;EACE,WAAW;CACZ;;AAED;EACE,eAA+B;EAC/B,gCAAqC;EACrC,uBAAuB;EACvB,UAAU;EACV,cAAc;CACf;AACD;EACE,eAAyB;CAC1B;;AAED;EACE,0BAA0B;CAC3B","file":"Navigation.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Lato', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n  --space-text-1: 2px;\n\n  /*\n   * Color\n   * ======================================================================== */\n  --main-color : #FC3A35;\n  --main-light-color : #EA5C5C;\n  --main-background-color: #3E3E3E;\n  --main-light-background-color: #F4F4F4;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../../variables.css';\n.nav {\n  background-color: #F1EAE4;\n  border-radius: 0px;\n  margin: 0;\n  padding: 0;\n}\n.navItemText {\n  font-family: var(--font-family-base);\n  letter-spacing: 1px;\n  font-size: 12px;\n  padding: 0;\n  margin: 0;\n  color: #777;\n}\n.navItemText:hover {\n  color: #444\n}\n\n.brandText {\n  color: var(--main-light-color);\n  font-family: var(--font-family-base);\n  letter-spacing: 1.22px;\n  margin: 0;\n  font-size: 22;\n}\n.brandText:hover {\n  color: var(--main-color);\n}\n\n.mainColorBackground: {\n  background-color: #FC3A35;\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"nav": "Navigation-nav-YZxw9",
  	"navItemText": "Navigation-navItemText-10H0v",
  	"brandText": "Navigation-brandText-1N_9o",
  	"mainColorBackground": "Navigation-mainColorBackground-vrwCS"
  };

/***/ },
/* 58 */
/***/ function(module, exports) {

  module.exports = "data:image/png;base64,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"

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(19);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(20);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(21);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(22);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(23);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _jsxFileName = 'E:\\gehmi-frontend-interview-master\\src\\components\\Generic\\Footer\\Footer.js';
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(28);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Footer = __webpack_require__(60);
  
  var _Footer2 = _interopRequireDefault(_Footer);
  
  var _classnames = __webpack_require__(55);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _Link = __webpack_require__(50);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _reactBootstrap = __webpack_require__(41);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var FooterLink = function FooterLink(props) {
    return _react2.default.createElement(
      'div',
      { className: _Footer2.default.linkContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: undefined
      },
      _react2.default.createElement(
        _Link2.default,
        { to: props.to, className: _Footer2.default.link, __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: undefined
        },
        props.text
      )
    );
  };
  
  var Footer = function (_React$Component) {
    (0, _inherits3.default)(Footer, _React$Component);
  
    function Footer() {
      (0, _classCallCheck3.default)(this, Footer);
      return (0, _possibleConstructorReturn3.default)(this, (Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Footer, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'footer',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            },
            __self: this
          },
          _react2.default.createElement(
            _reactBootstrap.Grid,
            { fluid: true, className: _Footer2.default.root, __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              },
              __self: this
            },
            _react2.default.createElement(
              _reactBootstrap.Row,
              { className: _Footer2.default.flexRow, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 21
                },
                __self: this
              },
              _react2.default.createElement(
                _reactBootstrap.Col,
                { sm: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'h2',
                  { className: _Footer2.default.brandText, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 23
                    },
                    __self: this
                  },
                  'GEHMI'
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { sm: 8, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  },
                  __self: this
                },
                _react2.default.createElement(
                  _reactBootstrap.Row,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 27
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 4, className: _Footer2.default.subContainer, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                      },
                      __self: this
                    },
                    _react2.default.createElement(FooterLink, { to: '#', text: 'ABOUT US', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                      },
                      __self: this
                    }),
                    _react2.default.createElement(FooterLink, { to: '#', text: 'CONTACT', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 30
                      },
                      __self: this
                    })
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 4, className: _Footer2.default.subContainer, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 33
                      },
                      __self: this
                    },
                    _react2.default.createElement(FooterLink, { to: '#', text: 'CONNECTION', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 34
                      },
                      __self: this
                    }),
                    _react2.default.createElement(FooterLink, { to: '#', text: 'FAQ', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 35
                      },
                      __self: this
                    })
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 4, className: _Footer2.default.subContainer, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 38
                      },
                      __self: this
                    },
                    _react2.default.createElement(FooterLink, { to: '#', text: 'RECRUTEMENT', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39
                      },
                      __self: this
                    }),
                    _react2.default.createElement(FooterLink, { to: '#', text: 'FOLLOW US', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                      },
                      __self: this
                    })
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Row,
              {
                style: {
                  textAlign: 'center',
                  marginTop: 20,
                  marginBottom: 30
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                },
                __self: this
              },
              _react2.default.createElement(
                'p',
                { className: _Footer2.default.copyRightText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                  },
                  __self: this
                },
                '\xA9 2016 GEHMI. All Rights Reserved'
              )
            )
          )
        );
      }
    }]);
    return Footer;
  }(_react2.default.Component);
  
  exports.default = (0, _withStyles2.default)(_Footer2.default)(Footer);

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(61);
      var insertCss = __webpack_require__(32);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../../node_modules/postcss-loader/index.js?pack=default!./Footer.css", function() {
          content = require("!!./../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../../node_modules/postcss-loader/index.js?pack=default!./Footer.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(31)();
  // imports
  
  
  // module
  exports.push([module.id, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Color\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n.Footer-root-3xkUk {\n  background: #3E3E3E;\n  padding-top: 20;\n}\n\n.Footer-flexRow-1Gfm7 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 0;\n  padding: 50px 0px 0px;\n  text-align: left;\n}\n\n.Footer-subContainer-XkkoY{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.Footer-brandText-YPLnR {\n  color: #FC3A35;\n  text-align: center;\n}\n\n.Footer-copyRightText-bkoZb {\n  letter-spacing: 2px;\n  color: white;\n  font-size: 0.7em;\n  padding: 0;\n  margin: 10px;\n}\n\n.Footer-linkContainer-28v-C{\n  padding: 3%;\n}\n\n.Footer-link-3lIu_, .Footer-link-3lIu_:active, .Footer-link-3lIu_:visited, .Footer-link-3lIu_:focus {\n  font-size: 1.1em;\n  color: rgba(255, 255, 255, 0.6);\n  letter-spacing: 2px;\n}\n\n.Footer-link-3lIu_:hover {\n  color: rgba(255, 255, 255, 1);\n}\n", "", {"version":3,"sources":["/./components/variables.css","/./components/Generic/Footer/Footer.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;EAI9E;;gFAE8E;EAK9E;;gFAE8E;EAM9E;;gFAE8E;EAErD,gCAAgC;EAChC,2BAA2B;EAC3B,6BAA6B;EAC7B,iCAAiC;CAC3D;AC7BD;EACE,oBAAyC;EACzC,gBAAgB;CACjB;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,0BAAoB;MAApB,uBAAoB;UAApB,oBAAoB;EACpB,UAAU;EACV,sBAAsB;EACtB,iBAAiB;CAClB;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,6BAAuB;EAAvB,8BAAuB;MAAvB,2BAAuB;UAAvB,uBAAuB;EACvB,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;CACzB;;AAED;EACE,eAAyB;EACzB,mBAAmB;CACpB;;AAED;EACE,oBAAoB;EACpB,aAAa;EACb,iBAAiB;EACjB,WAAW;EACX,aAAa;CACd;;AAED;EACE,YAAY;CACb;;AAED;EACE,iBAAiB;EACjB,gCAAgC;EAChC,oBAAoB;CACrB;;AAED;EACE,8BAA8B;CAC/B","file":"Footer.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Lato', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n  --space-text-1: 2px;\n\n  /*\n   * Color\n   * ======================================================================== */\n  --main-color : #FC3A35;\n  --main-light-color : #EA5C5C;\n  --main-background-color: #3E3E3E;\n  --main-light-background-color: #F4F4F4;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../../variables.css';\n.root {\n  background: var(--main-background-color);\n  padding-top: 20;\n}\n\n.flexRow {\n  display: flex;\n  align-items: center;\n  margin: 0;\n  padding: 50px 0px 0px;\n  text-align: left;\n}\n\n.subContainer{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.brandText {\n  color: var(--main-color);\n  text-align: center;\n}\n\n.copyRightText {\n  letter-spacing: 2px;\n  color: white;\n  font-size: 0.7em;\n  padding: 0;\n  margin: 10px;\n}\n\n.linkContainer{\n  padding: 3%;\n}\n\n.link, .link:active, .link:visited, .link:focus {\n  font-size: 1.1em;\n  color: rgba(255, 255, 255, 0.6);\n  letter-spacing: 2px;\n}\n\n.link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Footer-root-3xkUk",
  	"flexRow": "Footer-flexRow-1Gfm7",
  	"subContainer": "Footer-subContainer-XkkoY",
  	"brandText": "Footer-brandText-YPLnR",
  	"copyRightText": "Footer-copyRightText-bkoZb",
  	"linkContainer": "Footer-linkContainer-28v-C",
  	"link": "Footer-link-3lIu_"
  };

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = 'E:\\gehmi-frontend-interview-master\\src\\routes\\notFound\\index.js';
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Layout = __webpack_require__(44);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _NotFound = __webpack_require__(63);
  
  var _NotFound2 = _interopRequireDefault(_NotFound);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Page Not Found';
  
  exports.default = {
  
    path: '*',
  
    action: function action() {
      return {
        title: title,
        component: _react2.default.createElement(
          _Layout2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            },
            __self: this
          },
          _react2.default.createElement(_NotFound2.default, { title: title, __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            },
            __self: this
          })
        ),
        status: 404
      };
    }
  };

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(19);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(20);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(21);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(22);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(23);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _class,
      _temp,
      _jsxFileName = 'E:\\gehmi-frontend-interview-master\\src\\routes\\notFound\\NotFound.js';
  
  var _react = __webpack_require__(12);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(28);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _NotFound = __webpack_require__(64);
  
  var _NotFound2 = _interopRequireDefault(_NotFound);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var NotFound = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(NotFound, _React$Component);
  
    function NotFound() {
      (0, _classCallCheck3.default)(this, NotFound);
      return (0, _possibleConstructorReturn3.default)(this, (NotFound.__proto__ || (0, _getPrototypeOf2.default)(NotFound)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(NotFound, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _NotFound2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _NotFound2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              },
              __self: this
            },
            _react2.default.createElement(
              'h1',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                },
                __self: this
              },
              this.props.title
            ),
            _react2.default.createElement(
              'p',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 15
                },
                __self: this
              },
              'Sorry, the page you were trying to view does not exist.'
            )
          )
        );
      }
    }]);
    return NotFound;
  }(_react2.default.Component), _class.propTypes = {
    title: _react.PropTypes.string.isRequired
  }, _temp);
  exports.default = (0, _withStyles2.default)(_NotFound2.default)(NotFound);

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(65);
      var insertCss = __webpack_require__(32);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./NotFound.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./NotFound.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(31)();
  // imports
  
  
  // module
  exports.push([module.id, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Color\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.NotFound-root-3G9OW {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.NotFound-container-LOS0u {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/./components/variables.css","/./routes/notFound/NotFound.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;EAI9E;;gFAE8E;EAK9E;;gFAE8E;EAM9E;;gFAE8E;EAErD,gCAAgC;EAChC,2BAA2B;EAC3B,6BAA6B;EAC7B,iCAAiC;CAC3D;;AC5BD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC","file":"NotFound.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Lato', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n  --space-text-1: 2px;\n\n  /*\n   * Color\n   * ======================================================================== */\n  --main-color : #FC3A35;\n  --main-light-color : #EA5C5C;\n  --main-background-color: #3E3E3E;\n  --main-light-background-color: #F4F4F4;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "NotFound-root-3G9OW",
  	"container": "NotFound-container-LOS0u"
  };

/***/ },
/* 66 */
/***/ function(module, exports) {

  module.exports = require("bluebird");

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map