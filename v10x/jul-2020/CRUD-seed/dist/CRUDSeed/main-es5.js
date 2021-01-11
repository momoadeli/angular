(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _routes_http_error_http_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./routes/http-error/http-error.component */
      "./src/app/routes/http-error/http-error.component.ts");
      /* harmony import */


      var _routes_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./routes/login/login.component */
      "./src/app/routes/login/login.component.ts");
      /* harmony import */


      var _routes_products_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./routes/products/product-list/product-list.component */
      "./src/app/routes/products/product-list/product-list.component.ts");

      var routes = [{
        path: '',
        component: _routes_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
      }, {
        path: 'http-error',
        component: _routes_http_error_http_error_component__WEBPACK_IMPORTED_MODULE_0__["HttpErrorComponent"]
      }, {
        path: 'product-list',
        component: _routes_products_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };
      /***/

    },

    /***/
    "./src/app/app.component.ngfactory.js":
    /*!********************************************!*\
      !*** ./src/app/app.component.ngfactory.js ***!
      \********************************************/

    /*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */

    /***/
    function srcAppAppComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function () {
        return RenderType_AppComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function () {
        return View_AppComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function () {
        return View_AppComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function () {
        return AppComponentNgFactory;
      });
      /* harmony import */


      var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component.scss.shim.ngstyle */
      "./src/app/app.component.scss.shim.ngstyle.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _shared_top_bar_top_bar_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared/top-bar/top-bar.component.ngfactory */
      "./src/app/shared/top-bar/top-bar.component.ngfactory.js");
      /* harmony import */


      var _shared_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared/top-bar/top-bar.component */
      "./src/app/shared/top-bar/top-bar.component.ts");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/fesm2015/store.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var _shared_app_http_loading_app_http_loading_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shared/app-http-loading/app-http-loading.component.ngfactory */
      "./src/app/shared/app-http-loading/app-http-loading.component.ngfactory.js");
      /* harmony import */


      var _shared_app_http_loading_app_http_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./shared/app-http-loading/app-http-loading.component */
      "./src/app/shared/app-http-loading/app-http-loading.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_AppComponent,
        data: {}
      });

      function View_AppComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "crud-seed-top-bar", [], null, null, null, _shared_top_bar_top_bar_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_TopBarComponent_0"], _shared_top_bar_top_bar_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_TopBarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_3__["TopBarComponent"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "crud-seed-loading", [], null, null, null, _shared_app_http_loading_app_http_loading_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_AppHttpLoadingComponent_0"], _shared_app_http_loading_app_http_loading_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_AppHttpLoadingComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _shared_app_http_loading_app_http_loading_component__WEBPACK_IMPORTED_MODULE_7__["AppHttpLoadingComponent"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_8__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);

          _ck(_v, 3, 0);

          _ck(_v, 6, 0);
        }, null);
      }

      function View_AppComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "crud-seed-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("crud-seed-root", _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "./src/app/app.component.scss.shim.ngstyle.js":
    /*!****************************************************!*\
      !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
      \****************************************************/

    /*! exports provided: styles */

    /***/
    function srcAppAppComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.toolbar[_ngcontent-%COMP%] {\n  height: 60px;\n  margin: -8px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n}\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 16px;\n}\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 32px auto;\n  padding: 0 16px;\n  max-width: 960px;\n  flex-direction: column;\n  align-items: center;\n}\nsvg.material-icons[_ngcontent-%COMP%] {\n  height: 24px;\n  width: auto;\n}\nsvg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 8px;\n}\n.card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #888;\n}\n.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid #eee;\n  background-color: #fafafa;\n  height: 40px;\n  width: 200px;\n  margin: 0 8px 16px;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  line-height: 24px;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 0;\n}\n.card.card-small[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 168px;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n  cursor: pointer;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #696767;\n}\n.card.highlight-card[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n  border: none;\n  width: auto;\n  min-width: 30%;\n  position: relative;\n}\n.card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 60px;\n}\nsvg#rocket[_ngcontent-%COMP%] {\n  width: 80px;\n  position: absolute;\n  left: -10px;\n  top: -24px;\n}\nsvg#rocket-smoke[_ngcontent-%COMP%] {\n  height: 100vh;\n  position: absolute;\n  top: 10px;\n  right: 180px;\n  z-index: -10;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n  color: #1976d2;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #125699;\n}\n.terminal[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80%;\n  max-width: 600px;\n  border-radius: 6px;\n  padding-top: 45px;\n  margin-top: 8px;\n  overflow: hidden;\n  background-color: #0f0f10;\n}\n.terminal[_ngcontent-%COMP%]::before {\n  content: \"\u2022\u2022\u2022\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  background: #3a3a3a;\n  color: #c2c3c4;\n  width: 100%;\n  font-size: 2rem;\n  line-height: 0;\n  padding: 14px 0;\n  text-indent: 4px;\n}\n.terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n  color: white;\n  padding: 0 1rem 1rem;\n  margin: 0;\n}\n.circle-link[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 40px;\n  margin: 8px;\n  background-color: white;\n  border: 1px solid #eeeeee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: 1s ease-out;\n}\n.circle-link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.25rem);\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n}\nfooter[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  line-height: 20px;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.github-star-badge[_ngcontent-%COMP%] {\n  color: #24292e;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  padding: 3px 10px;\n  border: 1px solid rgba(27, 31, 35, 0.2);\n  border-radius: 3px;\n  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n  margin-left: 4px;\n  font-weight: 600;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n}\n.github-star-badge[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  border-color: rgba(27, 31, 35, 0.35);\n  background-position: -0.5em;\n}\n.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  margin-right: 4px;\n}\nsvg#clouds[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -160px;\n  left: -230px;\n  z-index: -10;\n  width: 1920px;\n}\n\n@media screen and (max-width: 767px) {\n  .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    height: 16px;\n    margin: 8px 0;\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 72px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    right: 120px;\n    transform: rotate(-5deg);\n  }\n}\n@media screen and (max-width: 575px) {\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    display: none;\n    visibility: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLDBKQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QUFFSjtBQUNFOzs7Ozs7RUFNRSxhQUFBO0FBRUo7QUFDRTtFQUNFLFNBQUE7QUFFSjtBQUNFO0VBQ0UsT0FBQTtBQUVKO0FBQ0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRUo7QUFDRTtFQUNFLGNBQUE7QUFFSjtBQUNFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFFSjtBQUNFO0VBQ0UsWUFBQTtBQUVKO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBRUo7QUFDRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBRUo7QUFDRTtFQUNFLGlCQUFBO0FBRUo7QUFDRTtFQUNFLFVBQUE7QUFFSjtBQUNFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBRUo7QUFDRTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQUNFO0VBQ0UsZUFBQTtBQUVKO0FBQ0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUVKO0FBQ0U7RUFDRSxlQUFBO0FBRUo7QUFDRTtFQUNFLDJCQUFBO0VBQ0EsMENBQUE7QUFFSjtBQUNFO0VBQ0UsYUFBQTtBQUVKO0FBQ0U7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRUo7QUFDRTtFQUNFLGlCQUFBO0FBRUo7QUFDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBRUo7QUFDRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUVKO0FBQ0U7OztFQUdFLGNBQUE7RUFDQSxxQkFBQTtBQUVKO0FBQ0U7RUFDRSxjQUFBO0FBRUo7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBRUo7QUFDRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVKO0FBQ0U7RUFDRSx3RUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7QUFFSjtBQUNFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0VBQUE7RUFDQSx1QkFBQTtBQUVKO0FBQ0U7RUFDRSwrQkFBQTtFQUNBLDJDQUFBO0FBRUo7QUFDRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUVKO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQUNFO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnRUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwSUFBQTtBQUVKO0FBQ0U7RUFDRSxnRUFBQTtFQUNBLG9DQUFBO0VBQ0EsMkJBQUE7QUFFSjtBQUNFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUVKO0FBQ0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUVKO0FBQ0Usc0JBQUE7QUFDQTtFQUVFOztJQUVFLFdBQUE7RUFDSjs7RUFFRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VBQ0o7O0VBRUU7SUFDRSxpQkFBQTtFQUNKOztFQUVFO0lBQ0UsWUFBQTtJQUNBLHdCQUFBO0VBQ0o7QUFDRjtBQUVFO0VBQ0U7SUFDRSxhQUFBO0lBQ0Esa0JBQUE7RUFBSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB9XG5cbiAgaDEsXG4gIGgyLFxuICBoMyxcbiAgaDQsXG4gIGg1LFxuICBoNiB7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5zcGFjZXIge1xuICAgIGZsZXg6IDE7XG4gIH1cblxuICAudG9vbGJhciB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbjogLThweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4gIC50b29sYmFyIGltZyB7XG4gICAgbWFyZ2luOiAwIDE2cHg7XG4gIH1cblxuICAudG9vbGJhciAjdHdpdHRlci1sb2dvIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiAwIDE2cHg7XG4gIH1cblxuICAudG9vbGJhciAjdHdpdHRlci1sb2dvOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDMycHggYXV0bztcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgbWF4LXdpZHRoOiA5NjBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICBzdmcubWF0ZXJpYWwtaWNvbnMge1xuICAgIGhlaWdodDogMjRweDtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuXG4gIHN2Zy5tYXRlcmlhbC1pY29uczpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgfVxuXG4gIC5jYXJkIHN2Zy5tYXRlcmlhbC1pY29ucyBwYXRoIHtcbiAgICBmaWxsOiAjODg4O1xuICB9XG5cbiAgLmNhcmQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG5cbiAgLmNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW46IDAgOHB4IDE2cHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgfVxuXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cblxuICAuY2FyZC5jYXJkLXNtYWxsIHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IDE2OHB4O1xuICB9XG5cbiAgLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoYmxhY2ssIDAuMzUpO1xuICB9XG5cbiAgLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIC5tYXRlcmlhbC1pY29ucyBwYXRoIHtcbiAgICBmaWxsOiByZ2IoMTA1LCAxMDMsIDEwMyk7XG4gIH1cblxuICAuY2FyZC5oaWdobGlnaHQtY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWluLXdpZHRoOiAzMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLmNhcmQuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcbiAgfVxuXG4gIHN2ZyNyb2NrZXQge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtMTBweDtcbiAgICB0b3A6IC0yNHB4O1xuICB9XG5cbiAgc3ZnI3JvY2tldC1zbW9rZSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxODBweDtcbiAgICB6LWluZGV4OiAtMTA7XG4gIH1cblxuICBhLFxuICBhOnZpc2l0ZWQsXG4gIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMTk3NmQyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMTI1Njk5O1xuICB9XG5cbiAgLnRlcm1pbmFsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwYWRkaW5nLXRvcDogNDVweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNik7XG4gIH1cblxuICAudGVybWluYWw6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXDIwMjIgXFwyMDIyIFxcMjAyMlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTgsIDU4LCA1OCk7XG4gICAgY29sb3I6ICNjMmMzYzQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDE0cHggMDtcbiAgICB0ZXh0LWluZGVudDogNHB4O1xuICB9XG5cbiAgLnRlcm1pbmFsIHByZSB7XG4gICAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLENvbnNvbGFzLExpYmVyYXRpb24gTW9ubyxNZW5sbyxtb25vc3BhY2U7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5jaXJjbGUtbGluayB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlLW91dDtcbiAgfVxuXG4gIC5jaXJjbGUtbGluazpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1cmVtKTtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB9XG5cbiAgZm9vdGVyIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG5cbiAgZm9vdGVyIGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5naXRodWItc3Rhci1iYWRnZSB7XG4gICAgY29sb3I6ICMyNDI5MmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LDMxLDM1LC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2ZhZmJmYywjZWZmM2Y2IDkwJSk7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZixBcHBsZSBDb2xvciBFbW9qaSxTZWdvZSBVSSBFbW9qaSxTZWdvZSBVSSBTeW1ib2w7XG4gIH1cblxuICAuZ2l0aHViLXN0YXItYmFkZ2U6aG92ZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmMGYzZjYsI2U2ZWJmMSA5MCUpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNywzMSwzNSwuMzUpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0uNWVtO1xuICB9XG5cbiAgLmdpdGh1Yi1zdGFyLWJhZGdlIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICB9XG5cbiAgc3ZnI2Nsb3VkcyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogLTE2MHB4O1xuICAgIGxlZnQ6IC0yMzBweDtcbiAgICB6LWluZGV4OiAtMTA7XG4gICAgd2lkdGg6IDE5MjBweDtcbiAgfVxuXG4gIC8qIFJlc3BvbnNpdmUgU3R5bGVzICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cbiAgICAuY2FyZC1jb250YWluZXIgPiAqOm5vdCguY2lyY2xlLWxpbmspICxcbiAgICAudGVybWluYWwge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xuICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICB9XG5cbiAgICAuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA3MnB4O1xuICAgIH1cblxuICAgIHN2ZyNyb2NrZXQtc21va2Uge1xuICAgICAgcmlnaHQ6IDEyMHB4O1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gICAgc3ZnI3JvY2tldC1zbW9rZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cbiAgfVxuIl19 */"];
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _routes_http_error_slice_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./routes/http-error/slice/selectors */
      "./src/app/routes/http-error/slice/selectors.ts");
      /* harmony import */


      var _routes_login_slice_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./routes/login/slice/selectors */
      "./src/app/routes/login/slice/selectors.ts");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(store, router) {
          _classCallCheck(this, AppComponent);

          this.store = store;
          this.router = router;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"](); // tslint:disable-next-line: typedef

          this.title = 'CRUDSeed: Products CRUD';
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.store.select(_routes_http_error_slice_selectors__WEBPACK_IMPORTED_MODULE_2__["selectHttpError"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$)).subscribe(function (httpError) {
              if (httpError) {
                _this.router.navigate(['/http-error']);
              }
            });
            this.store.select(_routes_login_slice_selectors__WEBPACK_IMPORTED_MODULE_3__["selectLoginUser"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$)).subscribe(function (user) {
              if (!user) {
                _this.router.navigate(['/']);

                console.log('no user');
              } else {
                _this.router.navigate(['/product-list']);
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next(true);
            this.destroy$.complete();
          }
        }]);

        return AppComponent;
      }();
      /***/

    },

    /***/
    "./src/app/app.module.ngfactory.js":
    /*!*****************************************!*\
      !*** ./src/app/app.module.ngfactory.js ***!
      \*****************************************/

    /*! exports provided: AppModuleNgFactory */

    /***/
    function srcAppAppModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function () {
        return AppModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../node_modules/@angular/router/router.ngfactory */
      "./node_modules/@angular/router/router.ngfactory.js");
      /* harmony import */


      var _routes_login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./routes/login/login.component.ngfactory */
      "./src/app/routes/login/login.component.ngfactory.js");
      /* harmony import */


      var _routes_http_error_http_error_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./routes/http-error/http-error.component.ngfactory */
      "./src/app/routes/http-error/http-error.component.ngfactory.js");
      /* harmony import */


      var _routes_products_product_list_product_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./routes/products/product-list/product-list.component.ngfactory */
      "./src/app/routes/products/product-list/product-list.component.ngfactory.js");
      /* harmony import */


      var _node_modules_angular_material_snack_bar_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../node_modules/@angular/material/snack-bar/index.ngfactory */
      "./node_modules/@angular/material/snack-bar/index.ngfactory.js");
      /* harmony import */


      var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component.ngfactory */
      "./src/app/app.component.ngfactory.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/animations/browser */
      "./node_modules/@angular/animations/fesm2015/browser.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/fesm2015/animations.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var _shared_interceptors_server_error_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./shared/interceptors/server-error.interceptor */
      "./src/app/shared/interceptors/server-error.interceptor.ts");
      /* harmony import */


      var _shared_interceptors_authentication_error_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./shared/interceptors/authentication-error.interceptor */
      "./src/app/shared/interceptors/authentication-error.interceptor.ts");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/fesm2015/store.js");
      /* harmony import */


      var _shared_notification_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./shared/notification.service */
      "./src/app/shared/notification.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/fesm2015/animations.js");
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "./node_modules/@angular/cdk/fesm2015/observers.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "./node_modules/@angular/cdk/fesm2015/overlay.js");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "./node_modules/@angular/cdk/fesm2015/bidi.js");
      /* harmony import */


      var _routes_products_products_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./routes/products/products.service */
      "./src/app/routes/products/products.service.ts");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @ngrx/effects */
      "./node_modules/@ngrx/effects/fesm2015/effects.js");
      /* harmony import */


      var _routes_login_slice_effects__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./routes/login/slice/effects */
      "./src/app/routes/login/slice/effects.ts");
      /* harmony import */


      var _routes_login_login_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./routes/login/login.service */
      "./src/app/routes/login/login.service.ts");
      /* harmony import */


      var _routes_products_slice_effects__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./routes/products/slice/effects */
      "./src/app/routes/products/slice/effects.ts");
      /* harmony import */


      var _shared_fake_http_error_slice_effects__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./shared/fake-http-error/slice/effects */
      "./src/app/shared/fake-http-error/slice/effects.ts");
      /* harmony import */


      var _shared_fake_http_error_fake_http_error_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./shared/fake-http-error/fake-http-error.service */
      "./src/app/shared/fake-http-error/fake-http-error.service.ts");
      /* harmony import */


      var _shared_errors_angular_error_handler_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./shared/errors/angular-error-handler.service */
      "./src/app/shared/errors/angular-error-handler.service.ts");
      /* harmony import */


      var _shared_logger_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./shared/logger.service */
      "./src/app/shared/logger.service.ts");
      /* harmony import */


      var _routes_login_login_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./routes/login/login.component */
      "./src/app/routes/login/login.component.ts");
      /* harmony import */


      var _routes_http_error_http_error_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./routes/http-error/http-error.component */
      "./src/app/routes/http-error/http-error.component.ts");
      /* harmony import */


      var _routes_products_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./routes/products/product-list/product-list.component */
      "./src/app/routes/products/product-list/product-list.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "./node_modules/@angular/cdk/fesm2015/platform.js");
      /* harmony import */


      var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @angular/cdk/text-field */
      "./node_modules/@angular/cdk/fesm2015/text-field.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/fesm2015/input.js");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "./node_modules/@angular/cdk/fesm2015/a11y.js");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "./node_modules/@angular/material/fesm2015/progress-spinner.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/fesm2015/card.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/fesm2015/button.js");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "./node_modules/@angular/cdk/fesm2015/portal.js");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "./node_modules/@angular/cdk/fesm2015/scrolling.js");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "./node_modules/@angular/material/fesm2015/snack-bar.js");
      /* harmony import */


      var _shared_app_material_module__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! ./shared/app-material.module */
      "./src/app/shared/app-material.module.ts");
      /* harmony import */


      var _shared_fake_http_error_fake_http_error_module__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! ./shared/fake-http-error/fake-http-error.module */
      "./src/app/shared/fake-http-error/fake-http-error.module.ts");
      /* harmony import */


      var _routes_products_products_module__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! ./routes/products/products.module */
      "./src/app/routes/products/products.module.ts");
      /* harmony import */


      var _routes_login_login_form_login_form_module__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! ./routes/login/login-form/login-form.module */
      "./src/app/routes/login/login-form/login-form.module.ts");
      /* harmony import */


      var _routes_login_login_module__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
      /*! ./routes/login/login.module */
      "./src/app/routes/login/login.module.ts");
      /* harmony import */


      var _routes_http_error_http_error_module__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
      /*! ./routes/http-error/http-error.module */
      "./src/app/routes/http-error/http-error.module.ts");
      /* harmony import */


      var _routes_http_error_slice_reducer__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
      /*! ./routes/http-error/slice/reducer */
      "./src/app/routes/http-error/slice/reducer.ts");
      /* harmony import */


      var _routes_login_slice_reducer__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
      /*! ./routes/login/slice/reducer */
      "./src/app/routes/login/slice/reducer.ts");
      /* harmony import */


      var _routes_login_login_form_slice_reducer__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
      /*! ./routes/login/login-form/slice/reducer */
      "./src/app/routes/login/login-form/slice/reducer.ts");
      /* harmony import */


      var _routes_products_slice_reducer__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
      /*! ./routes/products/slice/reducer */
      "./src/app/routes/products/slice/reducer.ts");
      /* harmony import */


      var _shared_fake_http_error_slice_reducer__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
      /*! ./shared/fake-http-error/slice/reducer */
      "./src/app/shared/fake-http-error/slice/reducer.ts");
      /* harmony import */


      var _shared_app_http_loading_slice_reducer__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
      /*! ./shared/app-http-loading/slice/reducer */
      "./src/app/shared/app-http-loading/slice/reducer.ts");
      /* harmony import */


      var _routes_http_error_slice_http_error_slice_module__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
      /*! ./routes/http-error/slice/http-error-slice.module */
      "./src/app/routes/http-error/slice/http-error-slice.module.ts");
      /* harmony import */


      var _routes_login_slice_login_slice_module__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
      /*! ./routes/login/slice/login-slice.module */
      "./src/app/routes/login/slice/login-slice.module.ts");
      /* harmony import */


      var _routes_login_login_form_slice_login_form_slice_module__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
      /*! ./routes/login/login-form/slice/login-form-slice.module */
      "./src/app/routes/login/login-form/slice/login-form-slice.module.ts");
      /* harmony import */


      var _routes_products_slice_products_slice_module__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
      /*! ./routes/products/slice/products-slice.module */
      "./src/app/routes/products/slice/products-slice.module.ts");
      /* harmony import */


      var _shared_fake_http_error_slice_fake_http_error_slice_module__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
      /*! ./shared/fake-http-error/slice/fake-http-error-slice.module */
      "./src/app/shared/fake-http-error/slice/fake-http-error-slice.module.ts");
      /* harmony import */


      var _shared_app_http_loading_slice_app_http_loading_slice_module__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
      /*! ./shared/app-http-loading/slice/app-http-loading-slice.module */
      "./src/app/shared/app-http-loading/slice/app-http-loading-slice.module.ts");
      /* harmony import */


      var _shared_root_store_root_store_module__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
      /*! ./shared/root-store/root-store.module */
      "./src/app/shared/root-store/root-store.module.ts");
      /* harmony import */


      var _shared_top_bar_top_bar_module__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
      /*! ./shared/top-bar/top-bar.module */
      "./src/app/shared/top-bar/top-bar.module.ts");
      /* harmony import */


      var _shared_app_http_loading_app_http_loading_module__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(
      /*! ./shared/app-http-loading/app-http-loading.module */
      "./src/app/shared/app-http-loading/app-http-loading.module.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(
      /*! ./shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _routes_login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["LoginComponentNgFactory"], _routes_http_error_http_error_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["HttpErrorComponentNgFactory"], _routes_products_product_list_product_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["ProductListComponentNgFactory"], _node_modules_angular_material_snack_bar_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarContainerNgFactory"], _node_modules_angular_material_snack_bar_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["SimpleSnackBarNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_x"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_t"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_g"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) {
          return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)];
        }, [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_11__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_11__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_11__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_11__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_11__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_11__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_13__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_13__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_13__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_13__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_13__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) {
          return [p0_0];
        }, [_angular_router__WEBPACK_IMPORTED_MODULE_13__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"], function (p0_0, p1_0, p1_1) {
          return [p0_0, new _shared_interceptors_server_error_interceptor__WEBPACK_IMPORTED_MODULE_15__["ServerErrorInterceptor"](p1_0, p1_1), new _shared_interceptors_authentication_error_interceptor__WEBPACK_IMPORTED_MODULE_16__["AuthenticationErrorInterceptor"]()];
        }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_h"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["Store"], _shared_notification_service__WEBPACK_IMPORTED_MODULE_18__["NotificationService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_20__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_21__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_21__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_23__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_23__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_23__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_23__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_23__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_23__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_24__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_23__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_23__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_23__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _routes_products_products_service__WEBPACK_IMPORTED_MODULE_25__["ProductsService"], _routes_products_products_service__WEBPACK_IMPORTED_MODULE_25__["ProductsService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["Actions"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["Actions"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ScannedActionsSubject"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _routes_login_slice_effects__WEBPACK_IMPORTED_MODULE_27__["LoginEffects"], _routes_login_slice_effects__WEBPACK_IMPORTED_MODULE_27__["LoginEffects"], [_routes_login_login_service__WEBPACK_IMPORTED_MODULE_28__["LoginService"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["Store"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _routes_products_slice_effects__WEBPACK_IMPORTED_MODULE_29__["ProductsEffects"], _routes_products_slice_effects__WEBPACK_IMPORTED_MODULE_29__["ProductsEffects"], [_routes_products_products_service__WEBPACK_IMPORTED_MODULE_25__["ProductsService"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["Actions"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_fake_http_error_slice_effects__WEBPACK_IMPORTED_MODULE_30__["FakeHttpErrorEffects"], _shared_fake_http_error_slice_effects__WEBPACK_IMPORTED_MODULE_30__["FakeHttpErrorEffects"], [_shared_fake_http_error_fake_http_error_service__WEBPACK_IMPORTED_MODULE_31__["FakeHttpErrorService"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["Actions"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _shared_errors_angular_error_handler_service__WEBPACK_IMPORTED_MODULE_32__["AngularErrorHandlerService"], [_shared_logger_service__WEBPACK_IMPORTED_MODULE_33__["LoggerService"], _shared_notification_service__WEBPACK_IMPORTED_MODULE_18__["NotificationService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () {
          return [_angular_router__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_router_router_b"]()];
        }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) {
          return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_browser_platform_browser_m"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_router_router_i"](p1_0)];
        }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_13__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_13__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_13__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_9__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_9__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_13__["ROUTES"], function () {
          return [[{
            path: "",
            component: _routes_login_login_component__WEBPACK_IMPORTED_MODULE_34__["LoginComponent"]
          }, {
            path: "http-error",
            component: _routes_http_error_http_error_component__WEBPACK_IMPORTED_MODULE_35__["HttpErrorComponent"]
          }, {
            path: "product-list",
            component: _routes_products_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_36__["ProductListComponent"]
          }]];
        }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_router_router_f"], [_angular_router__WEBPACK_IMPORTED_MODULE_13__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_13__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_37__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_37__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_38__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_38__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_39__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_39__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_21__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_21__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_40__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_40__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_41__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_41__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_24__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_24__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_42__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_43__["MatProgressSpinnerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_43__["MatProgressSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_card__WEBPACK_IMPORTED_MODULE_44__["MatCardModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_44__["MatCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_45__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_45__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_46__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_46__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_47__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_47__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_23__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_23__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_48__["MatSnackBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_48__["MatSnackBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_app_material_module__WEBPACK_IMPORTED_MODULE_49__["AppMaterialModule"], _shared_app_material_module__WEBPACK_IMPORTED_MODULE_49__["AppMaterialModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_fake_http_error_fake_http_error_module__WEBPACK_IMPORTED_MODULE_50__["FakeHttpErrorModule"], _shared_fake_http_error_fake_http_error_module__WEBPACK_IMPORTED_MODULE_50__["FakeHttpErrorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _routes_products_products_module__WEBPACK_IMPORTED_MODULE_51__["ProductsModule"], _routes_products_products_module__WEBPACK_IMPORTED_MODULE_51__["ProductsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _routes_login_login_form_login_form_module__WEBPACK_IMPORTED_MODULE_52__["LoginFormModule"], _routes_login_login_form_login_form_module__WEBPACK_IMPORTED_MODULE_52__["LoginFormModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _routes_login_login_module__WEBPACK_IMPORTED_MODULE_53__["LoginModule"], _routes_login_login_module__WEBPACK_IMPORTED_MODULE_53__["LoginModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _routes_http_error_http_error_module__WEBPACK_IMPORTED_MODULE_54__["HttpErrorModule"], _routes_http_error_http_error_module__WEBPACK_IMPORTED_MODULE_54__["HttpErrorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_n"], function () {
          return [{}, {}, {}, {}, {}, {}];
        }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["STORE_FEATURES"], function () {
          return [{
            key: "httpErrorFeature",
            reducerFactory: _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["combineReducers"],
            metaReducers: [],
            initialState: undefined
          }, {
            key: "loginFeature",
            reducerFactory: _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["combineReducers"],
            metaReducers: [],
            initialState: undefined
          }, {
            key: "loginFormFeature",
            reducerFactory: _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["combineReducers"],
            metaReducers: [],
            initialState: undefined
          }, {
            key: "productsFeature",
            reducerFactory: _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["combineReducers"],
            metaReducers: [],
            initialState: undefined
          }, {
            key: "fakeHttpErrorFeature",
            reducerFactory: _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["combineReducers"],
            metaReducers: [],
            initialState: undefined
          }, {
            key: "loadingFeature",
            reducerFactory: _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["combineReducers"],
            metaReducers: [],
            initialState: undefined
          }];
        }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_o"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_u"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_n"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["STORE_FEATURES"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_m"], function () {
          return [_routes_http_error_slice_reducer__WEBPACK_IMPORTED_MODULE_55__["featureReducer"], _routes_login_slice_reducer__WEBPACK_IMPORTED_MODULE_56__["featureReducer"], _routes_login_login_form_slice_reducer__WEBPACK_IMPORTED_MODULE_57__["featureReducer"], _routes_products_slice_reducer__WEBPACK_IMPORTED_MODULE_58__["featureReducer"], _shared_fake_http_error_slice_reducer__WEBPACK_IMPORTED_MODULE_59__["featureReducer"], _shared_app_http_loading_slice_reducer__WEBPACK_IMPORTED_MODULE_60__["featureReducer"]];
        }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_p"], function (p0_0, p1_0, p2_0, p3_0, p4_0, p5_0) {
          return [p0_0, p1_0, p2_0, p3_0, p4_0, p5_0];
        }, [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_m"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_m"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_m"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_m"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_m"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_m"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["FEATURE_REDUCERS"], function (p0_0, p0_1, p0_2, p1_0, p1_1, p1_2, p2_0, p2_1, p2_2, p3_0, p3_1, p3_2, p4_0, p4_1, p4_2, p5_0, p5_1, p5_2) {
          return [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_v"](p0_0, p0_1, p0_2), _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_v"](p1_0, p1_1, p1_2), _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_v"](p2_0, p2_1, p2_2), _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_v"](p3_0, p3_1, p3_2), _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_v"](p4_0, p4_1, p4_2), _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_v"](p5_0, p5_1, p5_2)];
        }, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_m"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_p"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_m"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_p"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_m"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_p"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_m"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_p"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_m"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_p"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_m"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_p"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ActionsSubject"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ReducerManagerDispatcher"], null, [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ActionsSubject"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_i"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["INITIAL_STATE"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_w"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_i"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_k"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_l"], null, [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_k"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["INITIAL_REDUCERS"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_t"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_k"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_l"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_j"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["combineReducers"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_r"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["USER_RUNTIME_CHECKS"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_be"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_r"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_s"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_z"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["USER_RUNTIME_CHECKS"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["META_REDUCERS"], function (p0_0, p1_0, p2_0) {
          return [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_bb"](p0_0), _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_ba"](p1_0), _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_bc"](p2_0)];
        }, [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_s"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_s"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_s"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["USER_PROVIDED_META_REDUCERS"], [], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_q"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_x"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["META_REDUCERS"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["USER_PROVIDED_META_REDUCERS"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["REDUCER_FACTORY"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["createReducerFactory"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_j"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_q"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ReducerManager"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ReducerManager"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ReducerManagerDispatcher"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["INITIAL_STATE"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["INITIAL_REDUCERS"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["REDUCER_FACTORY"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ReducerObservable"], null, [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ReducerManager"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ScannedActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ScannedActionsSubject"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["State"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["State"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ReducerObservable"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ScannedActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["INITIAL_STATE"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StateObservable"], null, [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["State"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["Store"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["Store"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StateObservable"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ReducerManager"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_h"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_y"], [[3, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["Store"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StoreRootModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StoreRootModule"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ReducerObservable"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ScannedActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["Store"], [2, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_h"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073873408, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StoreFeatureModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StoreFeatureModule"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_o"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["FEATURE_REDUCERS"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ReducerManager"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StoreRootModule"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _routes_http_error_slice_http_error_slice_module__WEBPACK_IMPORTED_MODULE_61__["HttpErrorSliceModule"], _routes_http_error_slice_http_error_slice_module__WEBPACK_IMPORTED_MODULE_61__["HttpErrorSliceModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["EFFECTS_ERROR_HANDLER"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["defaultEffectsErrorHandler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["EffectSources"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["EffectSources"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["EFFECTS_ERROR_HANDLER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["EffectsRunner"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["EffectsRunner"], [_ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["EffectSources"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["Store"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["ɵngrx_modules_effects_effects_e"], [[]], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["USER_PROVIDED_EFFECTS"], function () {
          return [[], [], [], []];
        }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["ɵngrx_modules_effects_effects_f"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["ɵngrx_modules_effects_effects_b"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["ɵngrx_modules_effects_effects_e"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["USER_PROVIDED_EFFECTS"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["ɵngrx_modules_effects_effects_d"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["ɵngrx_modules_effects_effects_c"], [[3, _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["EffectsRunner"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["EffectsRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["EffectsRootModule"], [_ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["EffectSources"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["EffectsRunner"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["Store"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["ɵngrx_modules_effects_effects_f"], [2, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StoreRootModule"]], [2, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StoreFeatureModule"]], [2, _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["ɵngrx_modules_effects_effects_d"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["ɵngrx_modules_effects_effects_g"], function () {
          return [[_routes_login_slice_effects__WEBPACK_IMPORTED_MODULE_27__["LoginEffects"]], [_routes_products_slice_effects__WEBPACK_IMPORTED_MODULE_29__["ProductsEffects"]], [_shared_fake_http_error_slice_effects__WEBPACK_IMPORTED_MODULE_30__["FakeHttpErrorEffects"]]];
        }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["ɵngrx_modules_effects_effects_h"], function (p0_0, p0_1, p0_2, p1_0, p1_1, p1_2, p2_0, p2_1, p2_2) {
          return [_ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["ɵngrx_modules_effects_effects_b"](p0_0, p0_1, p0_2), _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["ɵngrx_modules_effects_effects_b"](p1_0, p1_1, p1_2), _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["ɵngrx_modules_effects_effects_b"](p2_0, p2_1, p2_2)];
        }, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["ɵngrx_modules_effects_effects_g"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["USER_PROVIDED_EFFECTS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["ɵngrx_modules_effects_effects_g"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["USER_PROVIDED_EFFECTS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["ɵngrx_modules_effects_effects_g"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["USER_PROVIDED_EFFECTS"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["EffectsFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["EffectsFeatureModule"], [_ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["EffectsRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__["ɵngrx_modules_effects_effects_h"], [2, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StoreRootModule"]], [2, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StoreFeatureModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _routes_login_slice_login_slice_module__WEBPACK_IMPORTED_MODULE_62__["LoginSliceModule"], _routes_login_slice_login_slice_module__WEBPACK_IMPORTED_MODULE_62__["LoginSliceModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _routes_login_login_form_slice_login_form_slice_module__WEBPACK_IMPORTED_MODULE_63__["LoginFormSliceModule"], _routes_login_login_form_slice_login_form_slice_module__WEBPACK_IMPORTED_MODULE_63__["LoginFormSliceModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _routes_products_slice_products_slice_module__WEBPACK_IMPORTED_MODULE_64__["ProductsSliceModule"], _routes_products_slice_products_slice_module__WEBPACK_IMPORTED_MODULE_64__["ProductsSliceModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_fake_http_error_slice_fake_http_error_slice_module__WEBPACK_IMPORTED_MODULE_65__["FakeHttpErrorSliceModule"], _shared_fake_http_error_slice_fake_http_error_slice_module__WEBPACK_IMPORTED_MODULE_65__["FakeHttpErrorSliceModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_app_http_loading_slice_app_http_loading_slice_module__WEBPACK_IMPORTED_MODULE_66__["AppHttpLoadingSliceModule"], _shared_app_http_loading_slice_app_http_loading_slice_module__WEBPACK_IMPORTED_MODULE_66__["AppHttpLoadingSliceModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_root_store_root_store_module__WEBPACK_IMPORTED_MODULE_67__["RootStoreModule"], _shared_root_store_root_store_module__WEBPACK_IMPORTED_MODULE_67__["RootStoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_top_bar_top_bar_module__WEBPACK_IMPORTED_MODULE_68__["TopBarModule"], _shared_top_bar_top_bar_module__WEBPACK_IMPORTED_MODULE_68__["TopBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_app_http_loading_app_http_loading_module__WEBPACK_IMPORTED_MODULE_69__["AppHttpLoadingModule"], _shared_app_http_loading_app_http_loading_module__WEBPACK_IMPORTED_MODULE_69__["AppHttpLoadingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_70__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_70__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CURRENCY_CODE"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_u"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵINJECTOR_SCOPE"], "root", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", [])]);
      });
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };
      /***/

    },

    /***/
    "./src/app/routes/http-error/http-error.component.ngfactory.js":
    /*!*********************************************************************!*\
      !*** ./src/app/routes/http-error/http-error.component.ngfactory.js ***!
      \*********************************************************************/

    /*! exports provided: RenderType_HttpErrorComponent, View_HttpErrorComponent_0, View_HttpErrorComponent_Host_0, HttpErrorComponentNgFactory */

    /***/
    function srcAppRoutesHttpErrorHttpErrorComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_HttpErrorComponent", function () {
        return RenderType_HttpErrorComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_HttpErrorComponent_0", function () {
        return View_HttpErrorComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_HttpErrorComponent_Host_0", function () {
        return View_HttpErrorComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpErrorComponentNgFactory", function () {
        return HttpErrorComponentNgFactory;
      });
      /* harmony import */


      var _http_error_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./http-error.component.scss.shim.ngstyle */
      "./src/app/routes/http-error/http-error.component.scss.shim.ngstyle.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../node_modules/@angular/material/card/index.ngfactory */
      "./node_modules/@angular/material/card/index.ngfactory.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/fesm2015/card.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/fesm2015/animations.js");
      /* harmony import */


      var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../node_modules/@angular/material/button/index.ngfactory */
      "./node_modules/@angular/material/button/index.ngfactory.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/fesm2015/button.js");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "./node_modules/@angular/cdk/fesm2015/a11y.js");
      /* harmony import */


      var _http_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./http-error.component */
      "./src/app/routes/http-error/http-error.component.ts");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/fesm2015/store.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_HttpErrorComponent = [_http_error_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_HttpErrorComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_HttpErrorComponent,
        data: {}
      });

      function View_HttpErrorComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 22, "div", [["class", "http-error-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 21, "mat-card", [["class", "mat-elevation-z4 mat-card mat-focus-indicator"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 7, "mat-card-header", [["class", "mat-card-header"]], null, null, null, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCardHeader_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 1, 2, "mat-card-title", [["class", "mat-card-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["HTTP Error"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 1, 2, "mat-card-subtitle", [["class", "mat-card-subtitle"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["(contact your adminstrator)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 0, 5, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["error"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, 0, 5, "mat-card-actions", [["class", "mat-card-actions"]], [[2, "mat-card-actions-align-end", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 3, "div", [["class", "logout-button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 2, "button", [["class", "mat-focus-indicator"], ["color", "primary"], ["mat-stroked-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.logout() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], {
          color: [0, "color"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Logout "]))], function (_ck, _v) {
          var currVal_5 = "primary";

          _ck(_v, 21, 0, currVal_5);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._animationMode === "NoopAnimations";

          _ck(_v, 1, 0, currVal_0);

          var currVal_1 = _co.httpErrorMessage;

          _ck(_v, 16, 0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).align === "end";

          _ck(_v, 17, 0, currVal_2);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).disabled || null;
          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._animationMode === "NoopAnimations";

          _ck(_v, 20, 0, currVal_3, currVal_4);
        });
      }

      function View_HttpErrorComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "crud-seed-http-error", [], null, null, null, View_HttpErrorComponent_0, RenderType_HttpErrorComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _http_error_component__WEBPACK_IMPORTED_MODULE_8__["HttpErrorComponent"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var HttpErrorComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("crud-seed-http-error", _http_error_component__WEBPACK_IMPORTED_MODULE_8__["HttpErrorComponent"], View_HttpErrorComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "./src/app/routes/http-error/http-error.component.scss.shim.ngstyle.js":
    /*!*****************************************************************************!*\
      !*** ./src/app/routes/http-error/http-error.component.scss.shim.ngstyle.js ***!
      \*****************************************************************************/

    /*! exports provided: styles */

    /***/
    function srcAppRoutesHttpErrorHttpErrorComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = [".http-error-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  height: 800px;\n  max-width: 100%;\n}\n\n.logout-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2h0dHAtZXJyb3IvaHR0cC1lcnJvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBRUEsZUFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvaHR0cC1lcnJvci9odHRwLWVycm9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmh0dHAtZXJyb3ItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogODAwcHg7XG4gIC8vIHdpZHRoOiA5MDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlOyAvLyBwcmV2ZW50cyBleHRlbmRpbmcgYmV5b25kIHNjcmVlbiB3aWR0aFxufVxuXG4ubG9nb3V0LWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4iXX0= */"];
      /***/
    },

    /***/
    "./src/app/routes/http-error/http-error.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/routes/http-error/http-error.component.ts ***!
      \***********************************************************/

    /*! exports provided: HttpErrorComponent */

    /***/
    function srcAppRoutesHttpErrorHttpErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpErrorComponent", function () {
        return HttpErrorComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _routes_login_slice_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../routes/login/slice/actions */
      "./src/app/routes/login/slice/actions.ts");
      /* harmony import */


      var _slice_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./slice/selectors */
      "./src/app/routes/http-error/slice/selectors.ts");

      var HttpErrorComponent = /*#__PURE__*/function () {
        function HttpErrorComponent(store, router) {
          _classCallCheck(this, HttpErrorComponent);

          this.store = store;
          this.router = router;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"](); // tslint:disable-next-line: no-inferrable-types

          this.httpErrorMessage = 'please logout first';
        }

        _createClass(HttpErrorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.store.select(_slice_selectors__WEBPACK_IMPORTED_MODULE_3__["selectHttpError"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$)).subscribe(function (httpError) {
              if (httpError) {
                console.log(httpError);
                _this2.httpError = httpError;
                _this2.httpErrorMessage = httpError.message;
              }
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            this.store.dispatch(new _routes_login_slice_actions__WEBPACK_IMPORTED_MODULE_2__["LogoutRequestAction"]());
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next(true);
            this.destroy$.complete();
          }
        }]);

        return HttpErrorComponent;
      }();
      /***/

    },

    /***/
    "./src/app/routes/http-error/http-error.module.ts":
    /*!********************************************************!*\
      !*** ./src/app/routes/http-error/http-error.module.ts ***!
      \********************************************************/

    /*! exports provided: HttpErrorModule */

    /***/
    function srcAppRoutesHttpErrorHttpErrorModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpErrorModule", function () {
        return HttpErrorModule;
      });

      var HttpErrorModule = function HttpErrorModule() {
        _classCallCheck(this, HttpErrorModule);
      };
      /***/

    },

    /***/
    "./src/app/routes/http-error/slice/actions.ts":
    /*!****************************************************!*\
      !*** ./src/app/routes/http-error/slice/actions.ts ***!
      \****************************************************/

    /*! exports provided: ActionTypes, HttpErrorAction, HttpErrorClearAction */

    /***/
    function srcAppRoutesHttpErrorSliceActionsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActionTypes", function () {
        return ActionTypes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpErrorAction", function () {
        return HttpErrorAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpErrorClearAction", function () {
        return HttpErrorClearAction;
      });

      var ActionTypes;

      (function (ActionTypes) {
        ActionTypes["HTTP_ERROR"] = "[My Feature] HTTP Error";
        ActionTypes["HTTP_ERROR_CLEAR"] = "[My Feature] HTTP Error Clear";
      })(ActionTypes || (ActionTypes = {}));

      var HttpErrorAction = function HttpErrorAction(payload) {
        _classCallCheck(this, HttpErrorAction);

        this.payload = payload;
        this.type = ActionTypes.HTTP_ERROR;
      };

      var HttpErrorClearAction = function HttpErrorClearAction() {
        _classCallCheck(this, HttpErrorClearAction);

        this.type = ActionTypes.HTTP_ERROR_CLEAR;
      };
      /***/

    },

    /***/
    "./src/app/routes/http-error/slice/http-error-slice.module.ts":
    /*!********************************************************************!*\
      !*** ./src/app/routes/http-error/slice/http-error-slice.module.ts ***!
      \********************************************************************/

    /*! exports provided: HttpErrorSliceModule */

    /***/
    function srcAppRoutesHttpErrorSliceHttpErrorSliceModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpErrorSliceModule", function () {
        return HttpErrorSliceModule;
      });

      var HttpErrorSliceModule = function HttpErrorSliceModule() {
        _classCallCheck(this, HttpErrorSliceModule);
      };
      /***/

    },

    /***/
    "./src/app/routes/http-error/slice/reducer.ts":
    /*!****************************************************!*\
      !*** ./src/app/routes/http-error/slice/reducer.ts ***!
      \****************************************************/

    /*! exports provided: featureReducer */

    /***/
    function srcAppRoutesHttpErrorSliceReducerTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "featureReducer", function () {
        return featureReducer;
      });
      /* harmony import */


      var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./actions */
      "./src/app/routes/http-error/slice/actions.ts");
      /* harmony import */


      var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./state */
      "./src/app/routes/http-error/slice/state.ts");

      function featureReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _state__WEBPACK_IMPORTED_MODULE_1__["initialState"];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
          case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].HTTP_ERROR:
            return Object.assign(Object.assign({}, state), {
              httpError: action.payload.httpError
            });

          case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].HTTP_ERROR_CLEAR:
            return Object.assign(Object.assign({}, state), _state__WEBPACK_IMPORTED_MODULE_1__["initialState"]);

          default:
            {
              return state;
            }
        }
      }
      /***/

    },

    /***/
    "./src/app/routes/http-error/slice/selectors.ts":
    /*!******************************************************!*\
      !*** ./src/app/routes/http-error/slice/selectors.ts ***!
      \******************************************************/

    /*! exports provided: selectHttpErrorState, selectHttpError, ɵ0 */

    /***/
    function srcAppRoutesHttpErrorSliceSelectorsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectHttpErrorState", function () {
        return selectHttpErrorState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectHttpError", function () {
        return selectHttpError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/fesm2015/store.js");

      var getHttpError = function getHttpError(state) {
        return state.httpError;
      };

      var ɵ0 = getHttpError;
      var selectHttpErrorState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('httpErrorFeature');
      var selectHttpError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectHttpErrorState, getHttpError);
      /***/
    },

    /***/
    "./src/app/routes/http-error/slice/state.ts":
    /*!**************************************************!*\
      !*** ./src/app/routes/http-error/slice/state.ts ***!
      \**************************************************/

    /*! exports provided: initialState */

    /***/
    function srcAppRoutesHttpErrorSliceStateTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initialState", function () {
        return initialState;
      });

      var initialState = {
        httpError: null
      };
      /***/
    },

    /***/
    "./src/app/routes/login/login-form/login-form.component.ngfactory.js":
    /*!***************************************************************************!*\
      !*** ./src/app/routes/login/login-form/login-form.component.ngfactory.js ***!
      \***************************************************************************/

    /*! exports provided: RenderType_LoginFormComponent, View_LoginFormComponent_0, View_LoginFormComponent_Host_0, LoginFormComponentNgFactory */

    /***/
    function srcAppRoutesLoginLoginFormLoginFormComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_LoginFormComponent", function () {
        return RenderType_LoginFormComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_LoginFormComponent_0", function () {
        return View_LoginFormComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_LoginFormComponent_Host_0", function () {
        return View_LoginFormComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginFormComponentNgFactory", function () {
        return LoginFormComponentNgFactory;
      });
      /* harmony import */


      var _login_form_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login-form.component.scss.shim.ngstyle */
      "./src/app/routes/login/login-form/login-form.component.scss.shim.ngstyle.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/form-field/index.ngfactory */
      "./node_modules/@angular/material/form-field/index.ngfactory.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "./node_modules/@angular/cdk/fesm2015/bidi.js");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "./node_modules/@angular/cdk/fesm2015/platform.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/fesm2015/animations.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/fesm2015/input.js");
      /* harmony import */


      var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/text-field */
      "./node_modules/@angular/cdk/fesm2015/text-field.js");
      /* harmony import */


      var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/button/index.ngfactory */
      "./node_modules/@angular/material/button/index.ngfactory.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/fesm2015/button.js");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "./node_modules/@angular/cdk/fesm2015/a11y.js");
      /* harmony import */


      var _login_form_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./login-form.service */
      "./src/app/routes/login/login-form/login-form.service.ts");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/fesm2015/store.js");
      /* harmony import */


      var _login_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./login-form.component */
      "./src/app/routes/login/login-form/login-form.component.ts");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_LoginFormComponent = [_login_form_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_LoginFormComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_LoginFormComponent,
        data: {}
      });

      function View_LoginFormComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 64, "form", [["class", "login-form"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
          var ad = true;

          if ("submit" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onSubmit($event) !== false;
            ad = pd_0 && ad;
          }

          if ("reset" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onReset() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], [[8, null], [8, null]], {
          form: [0, "form"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 26, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 25, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          _controlNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, {
          _controlStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
          _labelChildNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 4, {
          _labelChildStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
          _placeholderChild: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
          _errorChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
          _hintChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
          _prefixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
          _suffixChildren: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 1, 7, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "uid"], ["matInput", ""], ["placeholder", "(username)"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) {
          var ad = true;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("blur" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._focusChanged(false) !== false;
            ad = pd_4 && ad;
          }

          if ("focus" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._focusChanged(true) !== false;
            ad = pd_5 && ad;
          }

          if ("input" === en) {
            var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._onInput() !== false;
            ad = pd_6 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_10__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          placeholder: [0, "placeholder"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[1, 4], [2, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, 6, 2, "mat-hint", [["class", "mat-hint"]], [[2, "mat-right", null], [1, "id", 0], [1, "align", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, [[7, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatHint"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](28, null, ["(uid = '", "')"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, 5, 2, "mat-error", [["class", "mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, [[6, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](31, null, ["(uid = '", "')"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 26, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 25, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
          _controlNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 11, {
          _controlStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
          _labelChildNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 13, {
          _labelChildStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, {
          _placeholderChild: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, {
          _errorChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, {
          _hintChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, {
          _prefixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, {
          _suffixChildren: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, 1, 7, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "pwd"], ["matInput", ""], ["placeholder", "(password)"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) {
          var ad = true;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("blur" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50)._focusChanged(false) !== false;
            ad = pd_4 && ad;
          }

          if ("focus" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50)._focusChanged(true) !== false;
            ad = pd_5 && ad;
          }

          if ("input" === en) {
            var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50)._onInput() !== false;
            ad = pd_6 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_10__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          placeholder: [0, "placeholder"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[10, 4], [11, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, 6, 2, "mat-hint", [["class", "mat-hint"]], [[2, "mat-right", null], [1, "id", 0], [1, "align", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 16384, [[16, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatHint"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](55, null, ["(password = '", "')"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, 5, 2, "mat-error", [["class", "mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 16384, [[15, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](58, null, ["(password = '", "')"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 5, "div", [["class", "login-button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 4, "button", [["class", "mat-focus-indicator"], ["color", "primary"], ["mat-stroked-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.submit($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], {
          disabled: [0, "disabled"],
          color: [1, "color"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, 0, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["account_circle"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Login "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_7 = _co.loginForm;

          _ck(_v, 2, 0, currVal_7);

          var currVal_46 = "uid";

          _ck(_v, 21, 0, currVal_46);

          var currVal_47 = "(username)";

          _ck(_v, 23, 0, currVal_47);

          var currVal_92 = "pwd";

          _ck(_v, 48, 0, currVal_92);

          var currVal_93 = "(password)";

          _ck(_v, 50, 0, currVal_93);

          var currVal_102 = _co.loginForm.invalid;
          var currVal_103 = "primary";

          _ck(_v, 61, 0, currVal_102, currVal_103);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassUntouched;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassTouched;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassPristine;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassDirty;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassValid;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassInvalid;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassPending;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).appearance == "standard";
          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).appearance == "fill";
          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).appearance == "outline";
          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).appearance == "legacy";

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._control.errorState;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._canLabelFloat;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._shouldLabelFloat();

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._hasFloatingLabel();

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._hideControlPlaceholder();

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._control.disabled;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._control.autofilled;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._control.focused;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).color == "accent";
          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).color == "warn";

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._shouldForward("untouched");

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._shouldForward("touched");

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._shouldForward("pristine");

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._shouldForward("dirty");

          var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._shouldForward("valid");

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._shouldForward("invalid");

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._shouldForward("pending");

          var currVal_29 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._animationsEnabled;

          _ck(_v, 6, 1, [currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29]);

          var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._isServer;

          var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).id;

          var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).placeholder;

          var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).disabled;

          var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).required;

          var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._isNativeSelect || null;
          var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._ariaDescribedby || null;

          var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).errorState;

          var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).required.toString();

          var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassUntouched;

          var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassTouched;

          var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassPristine;

          var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassDirty;

          var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassValid;

          var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassInvalid;

          var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassPending;

          _ck(_v, 18, 1, [currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45]);

          var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).align == "end";

          var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).id;

          var currVal_50 = null;

          _ck(_v, 26, 0, currVal_48, currVal_49, currVal_50);

          var currVal_51 = _co.loginFake.UID;

          _ck(_v, 28, 0, currVal_51);

          var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).id;

          _ck(_v, 29, 0, currVal_52);

          var currVal_53 = _co.loginFake.UID;

          _ck(_v, 31, 0, currVal_53);

          var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).appearance == "standard";
          var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).appearance == "fill";
          var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).appearance == "outline";
          var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).appearance == "legacy";

          var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._control.errorState;

          var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._canLabelFloat;

          var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._shouldLabelFloat();

          var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._hasFloatingLabel();

          var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._hideControlPlaceholder();

          var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._control.disabled;

          var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._control.autofilled;

          var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._control.focused;

          var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).color == "accent";
          var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).color == "warn";

          var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._shouldForward("untouched");

          var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._shouldForward("touched");

          var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._shouldForward("pristine");

          var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._shouldForward("dirty");

          var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._shouldForward("valid");

          var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._shouldForward("invalid");

          var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._shouldForward("pending");

          var currVal_75 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._animationsEnabled;

          _ck(_v, 33, 1, [currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75]);

          var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50)._isServer;

          var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).id;

          var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).placeholder;

          var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).disabled;

          var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).required;

          var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50)._isNativeSelect || null;
          var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50)._ariaDescribedby || null;

          var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).errorState;

          var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).required.toString();

          var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).ngClassUntouched;

          var currVal_86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).ngClassTouched;

          var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).ngClassPristine;

          var currVal_88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).ngClassDirty;

          var currVal_89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).ngClassValid;

          var currVal_90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).ngClassInvalid;

          var currVal_91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).ngClassPending;

          _ck(_v, 45, 1, [currVal_76, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81, currVal_82, currVal_83, currVal_84, currVal_85, currVal_86, currVal_87, currVal_88, currVal_89, currVal_90, currVal_91]);

          var currVal_94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).align == "end";

          var currVal_95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).id;

          var currVal_96 = null;

          _ck(_v, 53, 0, currVal_94, currVal_95, currVal_96);

          var currVal_97 = _co.loginFake.PWD;

          _ck(_v, 55, 0, currVal_97);

          var currVal_98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).id;

          _ck(_v, 56, 0, currVal_98);

          var currVal_99 = _co.loginFake.PWD;

          _ck(_v, 58, 0, currVal_99);

          var currVal_100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).disabled || null;
          var currVal_101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61)._animationMode === "NoopAnimations";

          _ck(_v, 60, 0, currVal_100, currVal_101);
        });
      }

      function View_LoginFormComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "crud-seed-login-form", [], null, null, null, View_LoginFormComponent_0, RenderType_LoginFormComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _login_form_service__WEBPACK_IMPORTED_MODULE_14__["LoginFormService"], _login_form_service__WEBPACK_IMPORTED_MODULE_14__["LoginFormService"], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ngrx_store__WEBPACK_IMPORTED_MODULE_15__["Store"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 245760, null, 0, _login_form_component__WEBPACK_IMPORTED_MODULE_16__["LoginFormComponent"], [_login_form_service__WEBPACK_IMPORTED_MODULE_14__["LoginFormService"]], null, null)], function (_ck, _v) {
          _ck(_v, 2, 0);
        }, null);
      }

      var LoginFormComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("crud-seed-login-form", _login_form_component__WEBPACK_IMPORTED_MODULE_16__["LoginFormComponent"], View_LoginFormComponent_Host_0, {}, {
        submitLogin: "submitLogin"
      }, []);
      /***/

    },

    /***/
    "./src/app/routes/login/login-form/login-form.component.scss.shim.ngstyle.js":
    /*!***********************************************************************************!*\
      !*** ./src/app/routes/login/login-form/login-form.component.scss.shim.ngstyle.js ***!
      \***********************************************************************************/

    /*! exports provided: styles */

    /***/
    function srcAppRoutesLoginLoginFormLoginFormComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = [".login-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2xvZ2luL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcm91dGVzL2xvZ2luL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAzMDBweDtcbn1cbiJdfQ== */"];
      /***/
    },

    /***/
    "./src/app/routes/login/login-form/login-form.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/routes/login/login-form/login-form.component.ts ***!
      \*****************************************************************/

    /*! exports provided: LoginFormComponent */

    /***/
    function srcAppRoutesLoginLoginFormLoginFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function () {
        return LoginFormComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _login_fake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../login.fake */
      "./src/app/routes/login/login.fake.ts");

      var LoginFormComponent = /*#__PURE__*/function () {
        function LoginFormComponent(loginFormService) {
          _classCallCheck(this, LoginFormComponent);

          this.loginFormService = loginFormService;
          this.submitLogin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.loginFake = _login_fake__WEBPACK_IMPORTED_MODULE_1__["ENUM_LOGIN_FAKE"];
          this.loginForm = this.loginFormService.loginForm;
        }

        _createClass(LoginFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // always clear form on entry. this will clear form slice too
            this.loginForm.reset();
          }
        }, {
          key: "submit",
          value: function submit(ev) {
            // this.submitLogin.emit({ uid: ENUM_LOGIN_FAKE.UID, password: ENUM_LOGIN_FAKE.PWD });
            this.submitLogin.emit({
              uid: this.loginFormService._loginForm.controls.uid.value,
              password: this.loginFormService._loginForm.controls.pwd.value
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }]);

        return LoginFormComponent;
      }();
      /***/

    },

    /***/
    "./src/app/routes/login/login-form/login-form.module.ts":
    /*!**************************************************************!*\
      !*** ./src/app/routes/login/login-form/login-form.module.ts ***!
      \**************************************************************/

    /*! exports provided: LoginFormModule */

    /***/
    function srcAppRoutesLoginLoginFormLoginFormModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginFormModule", function () {
        return LoginFormModule;
      });

      var LoginFormModule = function LoginFormModule() {
        _classCallCheck(this, LoginFormModule);
      };
      /***/

    },

    /***/
    "./src/app/routes/login/login-form/login-form.service.ts":
    /*!***************************************************************!*\
      !*** ./src/app/routes/login/login-form/login-form.service.ts ***!
      \***************************************************************/

    /*! exports provided: LoginFormService */

    /***/
    function srcAppRoutesLoginLoginFormLoginFormServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginFormService", function () {
        return LoginFormService;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/internal/operators/takeUntil */
      "./node_modules/rxjs/internal/operators/takeUntil.js");
      /* harmony import */


      var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _slice_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./slice/actions */
      "./src/app/routes/login/login-form/slice/actions.ts");
      /* harmony import */


      var _slice_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./slice/selectors */
      "./src/app/routes/login/login-form/slice/selectors.ts");

      var LoginFormService = /*#__PURE__*/function () {
        function LoginFormService(fb, store) {
          _classCallCheck(this, LoginFormService);

          this.fb = fb;
          this.store = store;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this._loginForm = null;
          this.initForm();
          this.subscribeLoginFormStoreSlice();
        }

        _createClass(LoginFormService, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next(true);
            this.destroy$.complete();
          }
        }, {
          key: "initForm",
          value: function initForm() {
            var _this3 = this;

            this.loginForm = this.fb.group({
              uid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              pwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            });
            this.loginForm.valueChanges.pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function (login) {
              // this merely updates fomr slice for later retrieval:
              _this3.store.dispatch(new _slice_actions__WEBPACK_IMPORTED_MODULE_3__["LoginFormUpdate"]({
                login: login
              }));
            });
          }
        }, {
          key: "subscribeLoginFormStoreSlice",
          value: function subscribeLoginFormStoreSlice() {
            var _this4 = this;

            this.store.select(_slice_selectors__WEBPACK_IMPORTED_MODULE_4__["selectLogin"]).pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function (user) {
              _this4.loginForm.patchValue(user, {
                emitEvent: false
              });
            });
          }
        }, {
          key: "loginForm",
          get: function get() {
            return this._loginForm;
          },
          set: function set(form) {
            this._loginForm = form;
          }
        }]);

        return LoginFormService;
      }();
      /***/

    },

    /***/
    "./src/app/routes/login/login-form/slice/actions.ts":
    /*!**********************************************************!*\
      !*** ./src/app/routes/login/login-form/slice/actions.ts ***!
      \**********************************************************/

    /*! exports provided: ActionTypes, LoginFormUpdate */

    /***/
    function srcAppRoutesLoginLoginFormSliceActionsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActionTypes", function () {
        return ActionTypes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginFormUpdate", function () {
        return LoginFormUpdate;
      });

      var ActionTypes;

      (function (ActionTypes) {
        ActionTypes["LOGIN_FORM_UPDATE"] = "[My Feature] Login Form Update";
      })(ActionTypes || (ActionTypes = {}));

      var LoginFormUpdate = function LoginFormUpdate(payload) {
        _classCallCheck(this, LoginFormUpdate);

        this.payload = payload;
        this.type = ActionTypes.LOGIN_FORM_UPDATE;
      };
      /***/

    },

    /***/
    "./src/app/routes/login/login-form/slice/login-form-slice.module.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/routes/login/login-form/slice/login-form-slice.module.ts ***!
      \**************************************************************************/

    /*! exports provided: LoginFormSliceModule */

    /***/
    function srcAppRoutesLoginLoginFormSliceLoginFormSliceModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginFormSliceModule", function () {
        return LoginFormSliceModule;
      });

      var LoginFormSliceModule = function LoginFormSliceModule() {
        _classCallCheck(this, LoginFormSliceModule);
      };
      /***/

    },

    /***/
    "./src/app/routes/login/login-form/slice/reducer.ts":
    /*!**********************************************************!*\
      !*** ./src/app/routes/login/login-form/slice/reducer.ts ***!
      \**********************************************************/

    /*! exports provided: featureReducer */

    /***/
    function srcAppRoutesLoginLoginFormSliceReducerTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "featureReducer", function () {
        return featureReducer;
      });
      /* harmony import */


      var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./actions */
      "./src/app/routes/login/login-form/slice/actions.ts");
      /* harmony import */


      var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./state */
      "./src/app/routes/login/login-form/slice/state.ts");

      function featureReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _state__WEBPACK_IMPORTED_MODULE_1__["initialState"];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
          case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].LOGIN_FORM_UPDATE:
            return Object.assign(Object.assign({}, state), {
              login: action.payload.login
            });

          default:
            {
              return state;
            }
        }
      }
      /***/

    },

    /***/
    "./src/app/routes/login/login-form/slice/selectors.ts":
    /*!************************************************************!*\
      !*** ./src/app/routes/login/login-form/slice/selectors.ts ***!
      \************************************************************/

    /*! exports provided: selectLoginState, selectLogin, ɵ0 */

    /***/
    function srcAppRoutesLoginLoginFormSliceSelectorsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectLoginState", function () {
        return selectLoginState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectLogin", function () {
        return selectLogin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/fesm2015/store.js");

      var getLogin = function getLogin(state) {
        return state.login;
      };

      var ɵ0 = getLogin;
      var selectLoginState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('loginFormFeature');
      var selectLogin = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectLoginState, getLogin);
      /***/
    },

    /***/
    "./src/app/routes/login/login-form/slice/state.ts":
    /*!********************************************************!*\
      !*** ./src/app/routes/login/login-form/slice/state.ts ***!
      \********************************************************/

    /*! exports provided: initialState */

    /***/
    function srcAppRoutesLoginLoginFormSliceStateTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initialState", function () {
        return initialState;
      });

      var initialState = {
        login: {
          uid: '',
          password: ''
        }
      };
      /***/
    },

    /***/
    "./src/app/routes/login/login.component.ngfactory.js":
    /*!***********************************************************!*\
      !*** ./src/app/routes/login/login.component.ngfactory.js ***!
      \***********************************************************/

    /*! exports provided: RenderType_LoginComponent, View_LoginComponent_0, View_LoginComponent_Host_0, LoginComponentNgFactory */

    /***/
    function srcAppRoutesLoginLoginComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_LoginComponent", function () {
        return RenderType_LoginComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_LoginComponent_0", function () {
        return View_LoginComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_LoginComponent_Host_0", function () {
        return View_LoginComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponentNgFactory", function () {
        return LoginComponentNgFactory;
      });
      /* harmony import */


      var _login_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login.component.scss.shim.ngstyle */
      "./src/app/routes/login/login.component.scss.shim.ngstyle.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../node_modules/@angular/material/card/index.ngfactory */
      "./node_modules/@angular/material/card/index.ngfactory.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/fesm2015/card.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/fesm2015/animations.js");
      /* harmony import */


      var _login_form_login_form_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-form/login-form.component.ngfactory */
      "./src/app/routes/login/login-form/login-form.component.ngfactory.js");
      /* harmony import */


      var _login_form_login_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login-form/login-form.service */
      "./src/app/routes/login/login-form/login-form.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/fesm2015/store.js");
      /* harmony import */


      var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./login-form/login-form.component */
      "./src/app/routes/login/login-form/login-form.component.ts");
      /* harmony import */


      var _login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./login.component */
      "./src/app/routes/login/login.component.ts");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_LoginComponent = [_login_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_LoginComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_LoginComponent,
        data: {}
      });

      function View_LoginComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "login-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "mat-card", [["class", "mat-elevation-z4 mat-card mat-focus-indicator"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 4, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "crud-seed-login-form", [], null, [[null, "submitLogin"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("submitLogin" === en) {
            var pd_0 = _co.requestLogin() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _login_form_login_form_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_LoginFormComponent_0"], _login_form_login_form_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_LoginFormComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _login_form_login_form_service__WEBPACK_IMPORTED_MODULE_6__["LoginFormService"], _login_form_login_form_service__WEBPACK_IMPORTED_MODULE_6__["LoginFormService"], [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 245760, null, 0, _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_9__["LoginFormComponent"], [_login_form_login_form_service__WEBPACK_IMPORTED_MODULE_6__["LoginFormService"]], null, {
          submitLogin: "submitLogin"
        })], function (_ck, _v) {
          _ck(_v, 7, 0);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._animationMode === "NoopAnimations";

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_LoginComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "crud-seed-login", [], null, null, null, View_LoginComponent_0, RenderType_LoginComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var LoginComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("crud-seed-login", _login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], View_LoginComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "./src/app/routes/login/login.component.scss.shim.ngstyle.js":
    /*!*******************************************************************!*\
      !*** ./src/app/routes/login/login.component.scss.shim.ngstyle.js ***!
      \*******************************************************************/

    /*! exports provided: styles */

    /***/
    function srcAppRoutesLoginLoginComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = [".login-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  height: 800px;\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFFQSxlQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogODAwcHg7XG4gIC8vIHdpZHRoOiA5MDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlOyAvLyBwcmV2ZW50cyBleHRlbmRpbmcgYmV5b25kIHNjcmVlbiB3aWR0aFxufVxuXG5cbiJdfQ== */"];
      /***/
    },

    /***/
    "./src/app/routes/login/login.component.ts":
    /*!*************************************************!*\
      !*** ./src/app/routes/login/login.component.ts ***!
      \*************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function srcAppRoutesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _login_slice_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../login/slice/actions */
      "./src/app/routes/login/slice/actions.ts");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(store) {
          _classCallCheck(this, LoginComponent);

          this.store = store;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "requestLogin",
          value: function requestLogin() {
            this.store.dispatch(new _login_slice_actions__WEBPACK_IMPORTED_MODULE_0__["LoginRequestAction"]());
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }]);

        return LoginComponent;
      }();
      /***/

    },

    /***/
    "./src/app/routes/login/login.fake.ts":
    /*!********************************************!*\
      !*** ./src/app/routes/login/login.fake.ts ***!
      \********************************************/

    /*! exports provided: ENUM_LOGIN_FAKE */

    /***/
    function srcAppRoutesLoginLoginFakeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ENUM_LOGIN_FAKE", function () {
        return ENUM_LOGIN_FAKE;
      });

      var ENUM_LOGIN_FAKE;

      (function (ENUM_LOGIN_FAKE) {
        ENUM_LOGIN_FAKE["UID"] = "moadeli";
        ENUM_LOGIN_FAKE["PWD"] = "1234";
      })(ENUM_LOGIN_FAKE || (ENUM_LOGIN_FAKE = {}));
      /***/

    },

    /***/
    "./src/app/routes/login/login.module.ts":
    /*!**********************************************!*\
      !*** ./src/app/routes/login/login.module.ts ***!
      \**********************************************/

    /*! exports provided: LoginModule */

    /***/
    function srcAppRoutesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
        return LoginModule;
      });

      var LoginModule = function LoginModule() {
        _classCallCheck(this, LoginModule);
      };
      /***/

    },

    /***/
    "./src/app/routes/login/login.service.ts":
    /*!***********************************************!*\
      !*** ./src/app/routes/login/login.service.ts ***!
      \***********************************************/

    /*! exports provided: LoginService */

    /***/
    function srcAppRoutesLoginLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginService", function () {
        return LoginService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");

      var LoginService = /*#__PURE__*/function () {
        function LoginService(http) {
          _classCallCheck(this, LoginService);

          this.http = http;
        }

        _createClass(LoginService, [{
          key: "login",
          value: function login(uid, password) {
            // return of({ uid, userName: ENUM_LOGIN_FAKE.UID, timeLoggedIn: ENUM_LOGIN_FAKE.PWD })
            //   .pipe(
            //     delay(2000) // simulate http api delay (with global state swirl)
            //   );
            // return of({ uid, userName: uid, timeLoggedIn: '3773' })
            //   .pipe(
            //     delay(2000) // simulate http api delay (with global state swirl)
            //   );
            return this.http.get('http://localhost:3000/api/login') // tslint:disable-next-line: no-any
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
              return res.data;
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(2000) // simulate http api delay (with global state swirl)
            // possibky cleanup local storage
            );
          }
        }]);

        return LoginService;
      }();

      LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        factory: function LoginService_Factory() {
          return new LoginService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
        },
        token: LoginService,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "./src/app/routes/login/slice/actions.ts":
    /*!***********************************************!*\
      !*** ./src/app/routes/login/slice/actions.ts ***!
      \***********************************************/

    /*! exports provided: ActionTypes, LoginRequestAction, LoginFailureAction, LoginSuccessAction, LogoutRequestAction, LogoutSuccessAction, LogoutFailureAction */

    /***/
    function srcAppRoutesLoginSliceActionsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActionTypes", function () {
        return ActionTypes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginRequestAction", function () {
        return LoginRequestAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginFailureAction", function () {
        return LoginFailureAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginSuccessAction", function () {
        return LoginSuccessAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoutRequestAction", function () {
        return LogoutRequestAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoutSuccessAction", function () {
        return LogoutSuccessAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoutFailureAction", function () {
        return LogoutFailureAction;
      });

      var ActionTypes;

      (function (ActionTypes) {
        ActionTypes["LOGIN_REQUEST"] = "[My Feature] Login Request";
        ActionTypes["LOGIN_FAILURE"] = "[My Feature] Login Failure";
        ActionTypes["LOGIN_SUCCESS"] = "[My Feature] Login Success";
        ActionTypes["LOGOUT_REQUEST"] = "[My Feature] Logout Request";
        ActionTypes["LOGOUT_SUCCESS"] = "[My Feature] Logout Success";
        ActionTypes["LOGOUT_FAILURE"] = "[My Feature] Logout Failure";
      })(ActionTypes || (ActionTypes = {}));

      var LoginRequestAction = function LoginRequestAction() {
        _classCallCheck(this, LoginRequestAction);

        this.type = ActionTypes.LOGIN_REQUEST;
      };

      var LoginFailureAction = function LoginFailureAction(payload) {
        _classCallCheck(this, LoginFailureAction);

        this.payload = payload;
        this.type = ActionTypes.LOGIN_FAILURE;
      };

      var LoginSuccessAction = function LoginSuccessAction(payload) {
        _classCallCheck(this, LoginSuccessAction);

        this.payload = payload;
        this.type = ActionTypes.LOGIN_SUCCESS;
      };

      var LogoutRequestAction = function LogoutRequestAction() {
        _classCallCheck(this, LogoutRequestAction);

        this.type = ActionTypes.LOGOUT_REQUEST;
      };

      var LogoutSuccessAction = function LogoutSuccessAction() {
        _classCallCheck(this, LogoutSuccessAction);

        this.type = ActionTypes.LOGOUT_SUCCESS;
      };

      var LogoutFailureAction = function LogoutFailureAction(payload) {
        _classCallCheck(this, LogoutFailureAction);

        this.payload = payload;
        this.type = ActionTypes.LOGOUT_FAILURE;
      };
      /***/

    },

    /***/
    "./src/app/routes/login/slice/effects.ts":
    /*!***********************************************!*\
      !*** ./src/app/routes/login/slice/effects.ts ***!
      \***********************************************/

    /*! exports provided: LoginEffects */

    /***/
    function srcAppRoutesLoginSliceEffectsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginEffects", function () {
        return LoginEffects;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/effects */
      "./node_modules/@ngrx/effects/fesm2015/effects.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _login_login_form_slice_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../login/login-form/slice/selectors */
      "./src/app/routes/login/login-form/slice/selectors.ts");
      /* harmony import */


      var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./actions */
      "./src/app/routes/login/slice/actions.ts");

      var LoginEffects = function LoginEffects(loginService, actions$, store) {
        var _this5 = this;

        _classCallCheck(this, LoginEffects);

        this.loginService = loginService;
        this.actions$ = actions$;
        this.store = store;
        this.loginRequestEffect$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].LOGIN_REQUEST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.store.select(_login_login_form_slice_selectors__WEBPACK_IMPORTED_MODULE_3__["selectLogin"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              login = _ref2[1];

          return _this5.loginService.login(login.uid, login.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (x) {
            console.log(x);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            return new _actions__WEBPACK_IMPORTED_MODULE_4__["LoginSuccessAction"]({
              user: user
            });
          }));
        }));
        this.logoutRequestEffect$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].LOGOUT_REQUEST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
          return _this5.loginService.logout().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return new _actions__WEBPACK_IMPORTED_MODULE_4__["LogoutSuccessAction"]();
          }));
        }));
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])()], LoginEffects.prototype, "loginRequestEffect$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])()], LoginEffects.prototype, "logoutRequestEffect$", void 0);
      /***/
    },

    /***/
    "./src/app/routes/login/slice/login-slice.module.ts":
    /*!**********************************************************!*\
      !*** ./src/app/routes/login/slice/login-slice.module.ts ***!
      \**********************************************************/

    /*! exports provided: LoginSliceModule */

    /***/
    function srcAppRoutesLoginSliceLoginSliceModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginSliceModule", function () {
        return LoginSliceModule;
      });

      var LoginSliceModule = function LoginSliceModule() {
        _classCallCheck(this, LoginSliceModule);
      };
      /***/

    },

    /***/
    "./src/app/routes/login/slice/reducer.ts":
    /*!***********************************************!*\
      !*** ./src/app/routes/login/slice/reducer.ts ***!
      \***********************************************/

    /*! exports provided: featureReducer */

    /***/
    function srcAppRoutesLoginSliceReducerTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "featureReducer", function () {
        return featureReducer;
      });
      /* harmony import */


      var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./actions */
      "./src/app/routes/login/slice/actions.ts");
      /* harmony import */


      var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./state */
      "./src/app/routes/login/slice/state.ts");

      function featureReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _state__WEBPACK_IMPORTED_MODULE_1__["initialState"];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
          case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].LOGIN_REQUEST:
            return Object.assign(Object.assign({}, state), {
              appHttpLoading: {
                isLoading: true,
                isLoaded: false
              }
            });

          case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].LOGIN_SUCCESS:
            return Object.assign(Object.assign({}, state), {
              user: action.payload.user,
              appHttpLoading: {
                isLoading: false,
                isLoaded: true
              }
            });

          case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].LOGIN_FAILURE:
            return Object.assign(Object.assign({}, state), {
              appHttpLoading: {
                isLoading: false,
                isLoaded: false
              }
            });

          case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].LOGOUT_REQUEST:
            return Object.assign(Object.assign({}, state), {
              user: null,
              appHttpLoading: {
                isLoading: true,
                isLoaded: false
              }
            });

          case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].LOGOUT_FAILURE:
            return Object.assign(Object.assign({}, state), {
              appHttpLoading: {
                isLoading: false,
                isLoaded: false
              }
            });

          case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].LOGOUT_SUCCESS:
            return Object.assign(Object.assign({}, state), _state__WEBPACK_IMPORTED_MODULE_1__["initialState"]);

          default:
            {
              return state;
            }
        }
      }
      /***/

    },

    /***/
    "./src/app/routes/login/slice/selectors.ts":
    /*!*************************************************!*\
      !*** ./src/app/routes/login/slice/selectors.ts ***!
      \*************************************************/

    /*! exports provided: selectLoginState, selectLoginIsLoading, selectLoginIsLoaded, selectLoginUser, ɵ0, ɵ1, ɵ2 */

    /***/
    function srcAppRoutesLoginSliceSelectorsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectLoginState", function () {
        return selectLoginState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectLoginIsLoading", function () {
        return selectLoginIsLoading;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectLoginIsLoaded", function () {
        return selectLoginIsLoaded;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectLoginUser", function () {
        return selectLoginUser;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ1", function () {
        return ɵ1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ2", function () {
        return ɵ2;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/fesm2015/store.js");

      var getIsLoading = function getIsLoading(state) {
        return state.appHttpLoading.isLoading;
      };

      var ɵ0 = getIsLoading;

      var getIsLoaded = function getIsLoaded(state) {
        return state.appHttpLoading.isLoaded;
      };

      var ɵ1 = getIsLoaded;

      var getUser = function getUser(state) {
        return state.user;
      };

      var ɵ2 = getUser;
      var selectLoginState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('loginFeature');
      var selectLoginIsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectLoginState, getIsLoading);
      var selectLoginIsLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectLoginState, getIsLoaded);
      var selectLoginUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectLoginState, getUser);
      /***/
    },

    /***/
    "./src/app/routes/login/slice/state.ts":
    /*!*********************************************!*\
      !*** ./src/app/routes/login/slice/state.ts ***!
      \*********************************************/

    /*! exports provided: initialState */

    /***/
    function srcAppRoutesLoginSliceStateTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initialState", function () {
        return initialState;
      });

      var initialState = {
        user: null,
        appHttpLoading: {
          isLoading: false,
          isLoaded: false
        }
      };
      /***/
    },

    /***/
    "./src/app/routes/products/product-list/product-list.component.ngfactory.js":
    /*!**********************************************************************************!*\
      !*** ./src/app/routes/products/product-list/product-list.component.ngfactory.js ***!
      \**********************************************************************************/

    /*! exports provided: RenderType_ProductListComponent, View_ProductListComponent_0, View_ProductListComponent_Host_0, ProductListComponentNgFactory */

    /***/
    function srcAppRoutesProductsProductListProductListComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_ProductListComponent", function () {
        return RenderType_ProductListComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ProductListComponent_0", function () {
        return View_ProductListComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ProductListComponent_Host_0", function () {
        return View_ProductListComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductListComponentNgFactory", function () {
        return ProductListComponentNgFactory;
      });
      /* harmony import */


      var _product_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./product-list.component.scss.shim.ngstyle */
      "./src/app/routes/products/product-list/product-list.component.scss.shim.ngstyle.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./product-list.component */
      "./src/app/routes/products/product-list/product-list.component.ts");
      /* harmony import */


      var _products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../products.service */
      "./src/app/routes/products/products.service.ts");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/fesm2015/store.js");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_ProductListComponent = [_product_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_ProductListComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_ProductListComponent,
        data: {}
      });

      function View_ProductListComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", "\xA0\xA0", "\xA0,\xA0", "\xA0,\xA0", " "]))], null, function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.id;
          var currVal_1 = _v.context.$implicit.name;
          var currVal_2 = _v.context.$implicit.date;
          var currVal_3 = _v.context.$implicit.hHMmSs;

          _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3);
        });
      }

      function View_ProductListComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "products-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Products"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_ProductListComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).transform(_co.products$));

          _ck(_v, 4, 0, currVal_0);
        }, null);
      }

      function View_ProductListComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "crud-seed-product-list", [], null, null, null, View_ProductListComponent_0, RenderType_ProductListComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"], [_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var ProductListComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("crud-seed-product-list", _product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"], View_ProductListComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "./src/app/routes/products/product-list/product-list.component.scss.shim.ngstyle.js":
    /*!******************************************************************************************!*\
      !*** ./src/app/routes/products/product-list/product-list.component.scss.shim.ngstyle.js ***!
      \******************************************************************************************/

    /*! exports provided: styles */

    /***/
    function srcAppRoutesProductsProductListProductListComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = [".products-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL3Byb2R1Y3RzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcm91dGVzL3Byb2R1Y3RzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjs7XG59XG4iXX0= */"];
      /***/
    },

    /***/
    "./src/app/routes/products/product-list/product-list.component.ts":
    /*!************************************************************************!*\
      !*** ./src/app/routes/products/product-list/product-list.component.ts ***!
      \************************************************************************/

    /*! exports provided: ProductListComponent */

    /***/
    function srcAppRoutesProductsProductListProductListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
        return ProductListComponent;
      });
      /* harmony import */


      var _slice_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../slice/actions */
      "./src/app/routes/products/slice/actions.ts");
      /* harmony import */


      var _slice_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../slice/selectors */
      "./src/app/routes/products/slice/selectors.ts");

      var ProductListComponent = /*#__PURE__*/function () {
        function ProductListComponent(productsService, store) {
          _classCallCheck(this, ProductListComponent);

          this.productsService = productsService;
          this.store = store;
        }

        _createClass(ProductListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.store.dispatch(new _slice_actions__WEBPACK_IMPORTED_MODULE_0__["ProductsRequestAction"]());
          }
        }, {
          key: "products$",
          get: function get() {
            return this.store.select(_slice_selectors__WEBPACK_IMPORTED_MODULE_1__["selectProducts"]);
          }
        }]);

        return ProductListComponent;
      }();
      /***/

    },

    /***/
    "./src/app/routes/products/products.module.ts":
    /*!****************************************************!*\
      !*** ./src/app/routes/products/products.module.ts ***!
      \****************************************************/

    /*! exports provided: ProductsModule */

    /***/
    function srcAppRoutesProductsProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsModule", function () {
        return ProductsModule;
      });

      var ProductsModule = function ProductsModule() {
        _classCallCheck(this, ProductsModule);
      };
      /***/

    },

    /***/
    "./src/app/routes/products/products.service.ts":
    /*!*****************************************************!*\
      !*** ./src/app/routes/products/products.service.ts ***!
      \*****************************************************/

    /*! exports provided: ProductsService */

    /***/
    function srcAppRoutesProductsProductsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsService", function () {
        return ProductsService;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");

      var ProductsService = /*#__PURE__*/function () {
        function ProductsService(http) {
          _classCallCheck(this, ProductsService);

          this.http = http;
        }

        _createClass(ProductsService, [{
          key: "products",
          value: function products() {
            return this.http.get('http://localhost:3000/api/products') // tslint:disable-next-line: no-any
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
              return res.data;
            }));
          }
        }]);

        return ProductsService;
      }();

      ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        factory: function ProductsService_Factory() {
          return new ProductsService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
        },
        token: ProductsService,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "./src/app/routes/products/slice/actions.ts":
    /*!**************************************************!*\
      !*** ./src/app/routes/products/slice/actions.ts ***!
      \**************************************************/

    /*! exports provided: ActionTypes, ProductsRequestAction, ProductsRequestFailureAction, ProductsRequestSuccessAction */

    /***/
    function srcAppRoutesProductsSliceActionsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActionTypes", function () {
        return ActionTypes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsRequestAction", function () {
        return ProductsRequestAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsRequestFailureAction", function () {
        return ProductsRequestFailureAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsRequestSuccessAction", function () {
        return ProductsRequestSuccessAction;
      });

      var ActionTypes;

      (function (ActionTypes) {
        ActionTypes["PRODUCTS_REQUEST"] = "[My Feature] Products Request";
        ActionTypes["PRODUCTS_REQUEST_FAILURE"] = "[My Feature] Products Request Failure";
        ActionTypes["PRODUCTS_REQUEST_SUCCESS"] = "[My Feature] Products Request Success";
      })(ActionTypes || (ActionTypes = {}));

      var ProductsRequestAction = function ProductsRequestAction() {
        _classCallCheck(this, ProductsRequestAction);

        this.type = ActionTypes.PRODUCTS_REQUEST;
      };

      var ProductsRequestFailureAction = function ProductsRequestFailureAction(payload) {
        _classCallCheck(this, ProductsRequestFailureAction);

        this.payload = payload;
        this.type = ActionTypes.PRODUCTS_REQUEST_FAILURE;
      };

      var ProductsRequestSuccessAction = function ProductsRequestSuccessAction(payload) {
        _classCallCheck(this, ProductsRequestSuccessAction);

        this.payload = payload;
        this.type = ActionTypes.PRODUCTS_REQUEST_SUCCESS;
      };
      /***/

    },

    /***/
    "./src/app/routes/products/slice/effects.ts":
    /*!**************************************************!*\
      !*** ./src/app/routes/products/slice/effects.ts ***!
      \**************************************************/

    /*! exports provided: ProductsEffects */

    /***/
    function srcAppRoutesProductsSliceEffectsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsEffects", function () {
        return ProductsEffects;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/effects */
      "./node_modules/@ngrx/effects/fesm2015/effects.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./actions */
      "./src/app/routes/products/slice/actions.ts");

      var ProductsEffects = function ProductsEffects(productsService, actions$) {
        var _this6 = this;

        _classCallCheck(this, ProductsEffects);

        this.productsService = productsService;
        this.actions$ = actions$;
        this.productsRequestEffect$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["ActionTypes"].PRODUCTS_REQUEST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
          return _this6.productsService.products().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (products) {
            return new _actions__WEBPACK_IMPORTED_MODULE_3__["ProductsRequestSuccessAction"]({
              products: products
            });
          }));
        }));
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])()], ProductsEffects.prototype, "productsRequestEffect$", void 0);
      /***/
    },

    /***/
    "./src/app/routes/products/slice/products-slice.module.ts":
    /*!****************************************************************!*\
      !*** ./src/app/routes/products/slice/products-slice.module.ts ***!
      \****************************************************************/

    /*! exports provided: ProductsSliceModule */

    /***/
    function srcAppRoutesProductsSliceProductsSliceModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsSliceModule", function () {
        return ProductsSliceModule;
      });

      var ProductsSliceModule = function ProductsSliceModule() {
        _classCallCheck(this, ProductsSliceModule);
      };
      /***/

    },

    /***/
    "./src/app/routes/products/slice/reducer.ts":
    /*!**************************************************!*\
      !*** ./src/app/routes/products/slice/reducer.ts ***!
      \**************************************************/

    /*! exports provided: featureReducer */

    /***/
    function srcAppRoutesProductsSliceReducerTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "featureReducer", function () {
        return featureReducer;
      });
      /* harmony import */


      var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./actions */
      "./src/app/routes/products/slice/actions.ts");
      /* harmony import */


      var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./state */
      "./src/app/routes/products/slice/state.ts");

      function featureReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _state__WEBPACK_IMPORTED_MODULE_1__["initialState"];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
          case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].PRODUCTS_REQUEST:
            return Object.assign(Object.assign({}, state), {
              appHttpLoading: {
                isLoading: true,
                isLoaded: false
              }
            });

          case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].PRODUCTS_REQUEST_SUCCESS:
            return Object.assign(Object.assign({}, state), {
              products: action.payload.products,
              appHttpLoading: {
                isLoading: false,
                isLoaded: true
              }
            });

          case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].PRODUCTS_REQUEST_FAILURE:
            return Object.assign(Object.assign({}, state), {
              appHttpLoading: {
                isLoading: false,
                isLoaded: false
              }
            });

          default:
            {
              return state;
            }
        }
      }
      /***/

    },

    /***/
    "./src/app/routes/products/slice/selectors.ts":
    /*!****************************************************!*\
      !*** ./src/app/routes/products/slice/selectors.ts ***!
      \****************************************************/

    /*! exports provided: selectProductsState, selectProductsIsLoading, selectProductsIsLoaded, selectProducts, ɵ0, ɵ1, ɵ2 */

    /***/
    function srcAppRoutesProductsSliceSelectorsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectProductsState", function () {
        return selectProductsState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectProductsIsLoading", function () {
        return selectProductsIsLoading;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectProductsIsLoaded", function () {
        return selectProductsIsLoaded;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectProducts", function () {
        return selectProducts;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ1", function () {
        return ɵ1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ2", function () {
        return ɵ2;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/fesm2015/store.js");

      var getIsLoading = function getIsLoading(state) {
        return state.appHttpLoading.isLoading;
      };

      var ɵ0 = getIsLoading;

      var getIsLoaded = function getIsLoaded(state) {
        return state.appHttpLoading.isLoaded;
      };

      var ɵ1 = getIsLoaded;

      var getProducts = function getProducts(state) {
        return state.products;
      };

      var ɵ2 = getProducts;
      var selectProductsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('productsFeature');
      var selectProductsIsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectProductsState, getIsLoading);
      var selectProductsIsLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectProductsState, getIsLoaded);
      var selectProducts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectProductsState, getProducts);
      /***/
    },

    /***/
    "./src/app/routes/products/slice/state.ts":
    /*!************************************************!*\
      !*** ./src/app/routes/products/slice/state.ts ***!
      \************************************************/

    /*! exports provided: initialState */

    /***/
    function srcAppRoutesProductsSliceStateTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initialState", function () {
        return initialState;
      });

      var initialState = {
        products: null,
        appHttpLoading: {
          isLoading: false,
          isLoaded: false
        }
      };
      /***/
    },

    /***/
    "./src/app/shared/app-http-loading/app-http-loading.component.ngfactory.js":
    /*!*********************************************************************************!*\
      !*** ./src/app/shared/app-http-loading/app-http-loading.component.ngfactory.js ***!
      \*********************************************************************************/

    /*! exports provided: RenderType_AppHttpLoadingComponent, View_AppHttpLoadingComponent_0, View_AppHttpLoadingComponent_Host_0, AppHttpLoadingComponentNgFactory */

    /***/
    function srcAppSharedAppHttpLoadingAppHttpLoadingComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_AppHttpLoadingComponent", function () {
        return RenderType_AppHttpLoadingComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_AppHttpLoadingComponent_0", function () {
        return View_AppHttpLoadingComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_AppHttpLoadingComponent_Host_0", function () {
        return View_AppHttpLoadingComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppHttpLoadingComponentNgFactory", function () {
        return AppHttpLoadingComponentNgFactory;
      });
      /* harmony import */


      var _app_http_loading_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-http-loading.component.scss.shim.ngstyle */
      "./src/app/shared/app-http-loading/app-http-loading.component.scss.shim.ngstyle.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _node_modules_angular_material_progress_spinner_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../node_modules/@angular/material/progress-spinner/index.ngfactory */
      "./node_modules/@angular/material/progress-spinner/index.ngfactory.js");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "./node_modules/@angular/material/fesm2015/progress-spinner.js");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "./node_modules/@angular/cdk/fesm2015/platform.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/fesm2015/animations.js");
      /* harmony import */


      var _app_http_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-http-loading.component */
      "./src/app/shared/app-http-loading/app-http-loading.component.ts");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/fesm2015/store.js");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_AppHttpLoadingComponent = [_app_http_loading_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_AppHttpLoadingComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_AppHttpLoadingComponent,
        data: {}
      });

      function View_AppHttpLoadingComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "progress-overlay"]], [[8, "hidden", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "div", [["class", "progress-loader"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "mat-spinner", [["class", "mat-spinner mat-progress-spinner"], ["mode", "indeterminate"], ["role", "progressbar"], ["style", "margin:0 auto;"]], [[2, "_mat-animation-noopable", null], [4, "width", "px"], [4, "height", "px"]], null, null, _node_modules_angular_material_progress_spinner_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatSpinner_0"], _node_modules_angular_material_progress_spinner_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatSpinner"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 0, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatSpinner"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS"]], null, null)], function (_ck, _v) {
          _ck(_v, 4, 0);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 0, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).transform(_co.isLoadingJoined$)) === false;

          _ck(_v, 0, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._noopAnimations;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).diameter;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).diameter;

          _ck(_v, 3, 0, currVal_1, currVal_2, currVal_3);
        });
      }

      function View_AppHttpLoadingComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "crud-seed-loading", [], null, null, null, View_AppHttpLoadingComponent_0, RenderType_AppHttpLoadingComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _app_http_loading_component__WEBPACK_IMPORTED_MODULE_7__["AppHttpLoadingComponent"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var AppHttpLoadingComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("crud-seed-loading", _app_http_loading_component__WEBPACK_IMPORTED_MODULE_7__["AppHttpLoadingComponent"], View_AppHttpLoadingComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "./src/app/shared/app-http-loading/app-http-loading.component.scss.shim.ngstyle.js":
    /*!*****************************************************************************************!*\
      !*** ./src/app/shared/app-http-loading/app-http-loading.component.scss.shim.ngstyle.js ***!
      \*****************************************************************************************/

    /*! exports provided: styles */

    /***/
    function srcAppSharedAppHttpLoadingAppHttpLoadingComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = [".progress-overlay[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.286);\n  z-index: 10;\n  top: 68;\n  left: 0;\n  position: fixed;\n}\n\n.progress-loader[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2FwcC1odHRwLWxvYWRpbmcvYXBwLWh0dHAtbG9hZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBR0EsNENBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9hcHAtaHR0cC1sb2FkaW5nL2FwcC1odHRwLWxvYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5wcm9ncmVzcy1vdmVybGF5e1xuICBoZWlnaHQ6MTAwdmg7XG4gIHdpZHRoOjEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjI4Nik7XG4gIHotaW5kZXg6ICAgIDEwO1xuICB0b3A6ICAgICAgICA2ODsgXG4gIGxlZnQ6ICAgICAgIDA7IFxuICBwb3NpdGlvbjogICBmaXhlZDtcbn1cblxuLnByb2dyZXNzLWxvYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG59XG4iXX0= */"];
      /***/
    },

    /***/
    "./src/app/shared/app-http-loading/app-http-loading.component.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/shared/app-http-loading/app-http-loading.component.ts ***!
      \***********************************************************************/

    /*! exports provided: AppHttpLoadingComponent */

    /***/
    function srcAppSharedAppHttpLoadingAppHttpLoadingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppHttpLoadingComponent", function () {
        return AppHttpLoadingComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/internal/operators/map */
      "./node_modules/rxjs/internal/operators/map.js");
      /* harmony import */


      var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _shared_root_store_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/root-store/selectors */
      "./src/app/shared/root-store/selectors.ts");
      /* harmony import */


      var _app_http_loading_slice_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app-http-loading/slice/selectors */
      "./src/app/shared/app-http-loading/slice/selectors.ts");

      var AppHttpLoadingComponent = /*#__PURE__*/function () {
        function AppHttpLoadingComponent(store) {
          _classCallCheck(this, AppHttpLoadingComponent);

          this.store = store;
        } // VERY IMPORTANT!!!
        // below the ONLY needed slice/observable stack is the
        // AppHttpLoadingSelectors.selectIsLoading which is handled
        // in the server interceptor
        // The global loading GlobalSelectors.selectIsLoading
        // is not need since it is redundantly added to each and every
        // slice which is not DRY. It is tmp'rarily used to merely
        // simulate an http call via a delay timer. When real http
        // api calls are made that entire infractructure slice
        // can be removed.


        _createClass(AppHttpLoadingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // this.isLoading$ =
            // this.store.select(
            //   GlobalSelectors.selectIsLoading
            // );
            this.isLoading$ = this.store.select(_app_http_loading_slice_selectors__WEBPACK_IMPORTED_MODULE_3__["selectIsLoading"]);
            this.isLoadingJoined$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])([this.store.select(_app_http_loading_slice_selectors__WEBPACK_IMPORTED_MODULE_3__["selectIsLoading"]), this.store.select(_shared_root_store_selectors__WEBPACK_IMPORTED_MODULE_2__["selectIsLoading"])]).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2),
                  appLoading = _ref4[0],
                  globalRedundantLoading = _ref4[1];

              return appLoading;
            }));
          }
        }]);

        return AppHttpLoadingComponent;
      }();
      /***/

    },

    /***/
    "./src/app/shared/app-http-loading/app-http-loading.module.ts":
    /*!********************************************************************!*\
      !*** ./src/app/shared/app-http-loading/app-http-loading.module.ts ***!
      \********************************************************************/

    /*! exports provided: AppHttpLoadingModule */

    /***/
    function srcAppSharedAppHttpLoadingAppHttpLoadingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppHttpLoadingModule", function () {
        return AppHttpLoadingModule;
      });

      var AppHttpLoadingModule = function AppHttpLoadingModule() {
        _classCallCheck(this, AppHttpLoadingModule);
      };
      /***/

    },

    /***/
    "./src/app/shared/app-http-loading/slice/actions.ts":
    /*!**********************************************************!*\
      !*** ./src/app/shared/app-http-loading/slice/actions.ts ***!
      \**********************************************************/

    /*! exports provided: ActionTypes, StartLoadingAction, StopLoadingAction */

    /***/
    function srcAppSharedAppHttpLoadingSliceActionsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActionTypes", function () {
        return ActionTypes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StartLoadingAction", function () {
        return StartLoadingAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StopLoadingAction", function () {
        return StopLoadingAction;
      });

      var ActionTypes;

      (function (ActionTypes) {
        ActionTypes["START_LOADING"] = "[My Feature] Start Loading";
        ActionTypes["STOP_LOADING"] = "[My Feature] Stop Loading";
      })(ActionTypes || (ActionTypes = {}));

      var StartLoadingAction = function StartLoadingAction() {
        _classCallCheck(this, StartLoadingAction);

        this.type = ActionTypes.START_LOADING;
      };

      var StopLoadingAction = function StopLoadingAction() {
        _classCallCheck(this, StopLoadingAction);

        this.type = ActionTypes.STOP_LOADING;
      };
      /***/

    },

    /***/
    "./src/app/shared/app-http-loading/slice/app-http-loading-slice.module.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/shared/app-http-loading/slice/app-http-loading-slice.module.ts ***!
      \********************************************************************************/

    /*! exports provided: AppHttpLoadingSliceModule */

    /***/
    function srcAppSharedAppHttpLoadingSliceAppHttpLoadingSliceModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppHttpLoadingSliceModule", function () {
        return AppHttpLoadingSliceModule;
      });

      var AppHttpLoadingSliceModule = function AppHttpLoadingSliceModule() {
        _classCallCheck(this, AppHttpLoadingSliceModule);
      };
      /***/

    },

    /***/
    "./src/app/shared/app-http-loading/slice/reducer.ts":
    /*!**********************************************************!*\
      !*** ./src/app/shared/app-http-loading/slice/reducer.ts ***!
      \**********************************************************/

    /*! exports provided: featureReducer */

    /***/
    function srcAppSharedAppHttpLoadingSliceReducerTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "featureReducer", function () {
        return featureReducer;
      });
      /* harmony import */


      var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./actions */
      "./src/app/shared/app-http-loading/slice/actions.ts");
      /* harmony import */


      var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./state */
      "./src/app/shared/app-http-loading/slice/state.ts");

      function featureReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _state__WEBPACK_IMPORTED_MODULE_1__["initialState"];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
          case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].START_LOADING:
            return Object.assign(Object.assign({}, state), {
              appHttpLoading: {
                isLoading: true,
                isLoaded: false
              }
            });

          case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].STOP_LOADING:
            return Object.assign(Object.assign({}, state), {
              appHttpLoading: {
                isLoading: false,
                isLoaded: true
              }
            });

          default:
            {
              return state;
            }
        }
      }
      /***/

    },

    /***/
    "./src/app/shared/app-http-loading/slice/selectors.ts":
    /*!************************************************************!*\
      !*** ./src/app/shared/app-http-loading/slice/selectors.ts ***!
      \************************************************************/

    /*! exports provided: selectLoadingState, selectIsLoading, selectIsLoaded, ɵ0, ɵ1 */

    /***/
    function srcAppSharedAppHttpLoadingSliceSelectorsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectLoadingState", function () {
        return selectLoadingState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectIsLoading", function () {
        return selectIsLoading;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectIsLoaded", function () {
        return selectIsLoaded;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ1", function () {
        return ɵ1;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/fesm2015/store.js");

      var getIsLoading = function getIsLoading(state) {
        return state.appHttpLoading.isLoading;
      };

      var ɵ0 = getIsLoading;

      var getIsLoaded = function getIsLoaded(state) {
        return state.appHttpLoading.isLoaded;
      };

      var ɵ1 = getIsLoaded;
      var selectLoadingState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('loadingFeature');
      var selectIsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectLoadingState, getIsLoading);
      var selectIsLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectLoadingState, getIsLoaded);
      /***/
    },

    /***/
    "./src/app/shared/app-http-loading/slice/state.ts":
    /*!********************************************************!*\
      !*** ./src/app/shared/app-http-loading/slice/state.ts ***!
      \********************************************************/

    /*! exports provided: initialState */

    /***/
    function srcAppSharedAppHttpLoadingSliceStateTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initialState", function () {
        return initialState;
      });

      var initialState = {
        appHttpLoading: {
          isLoading: false,
          isLoaded: false
        }
      };
      /***/
    },

    /***/
    "./src/app/shared/app-material.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/shared/app-material.module.ts ***!
      \***********************************************/

    /*! exports provided: AppMaterialModule */

    /***/
    function srcAppSharedAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function () {
        return AppMaterialModule;
      });

      var AppMaterialModule = function AppMaterialModule() {
        _classCallCheck(this, AppMaterialModule);
      };
      /***/

    },

    /***/
    "./src/app/shared/errors/angular-error-handler.service.ts":
    /*!****************************************************************!*\
      !*** ./src/app/shared/errors/angular-error-handler.service.ts ***!
      \****************************************************************/

    /*! exports provided: AngularErrorHandlerService */

    /***/
    function srcAppSharedErrorsAngularErrorHandlerServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularErrorHandlerService", function () {
        return AngularErrorHandlerService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var _translate_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./translate-errors */
      "./src/app/shared/errors/translate-errors.ts"); // One traditional way of handling errors in Angular is to provide an ErrorHandler class.
      // This class can be extended to create your own global error handler. This is also a useful
      // way to handle all errors that occur, but is mostly useful for tracking error logs. For
      // reference, you can check our earlier tutorial on how to use ErrorHandler in Angular 2+.
      // By implementing error handling in HttpClient or HttpInterceptor, you can work directly with
      // all HTTP requests in your application, providing the ability to transform the request, retry
      // it, and more. Therefore, ErrorHandler is useful for more generic error handling, but
      // HttpInterceptor provides a much more robust way to handle errors related to the server and network.
      // Handling errors with HttpClient


      var AngularErrorHandlerService = /*#__PURE__*/function () {
        function AngularErrorHandlerService(loggingService, notificationService) {
          _classCallCheck(this, AngularErrorHandlerService);

          this.loggingService = loggingService;
          this.notificationService = notificationService;
        }

        _createClass(AngularErrorHandlerService, [{
          key: "handleError",
          value: function handleError(error) {
            console.log('in error handler custom error type is: ' + '\n');

            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
              console.log('httperrorresponse is def handled in interceptors');
              this.message = _translate_errors__WEBPACK_IMPORTED_MODULE_1__["getServerMessage"](error);
              this.stackTrace = _translate_errors__WEBPACK_IMPORTED_MODULE_1__["getServerStack"](error);
            } else {
              this.message = _translate_errors__WEBPACK_IMPORTED_MODULE_1__["getClientMessage"](error);
              this.stackTrace = _translate_errors__WEBPACK_IMPORTED_MODULE_1__["getClientStack"](error);
              this.notificationService.showError(this.message);
            }

            this.loggingService.logError(error);
          }
        }]);

        return AngularErrorHandlerService;
      }();
      /***/

    },

    /***/
    "./src/app/shared/errors/translate-errors.ts":
    /*!***************************************************!*\
      !*** ./src/app/shared/errors/translate-errors.ts ***!
      \***************************************************/

    /*! exports provided: getClientMessage, getClientStack, getServerMessage, getServerStack */

    /***/
    function srcAppSharedErrorsTranslateErrorsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getClientMessage", function () {
        return getClientMessage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getClientStack", function () {
        return getClientStack;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getServerMessage", function () {
        return getServerMessage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getServerStack", function () {
        return getServerStack;
      });

      function getClientMessage(error) {
        if (!navigator.onLine) {
          return 'No Internet Connection';
        }

        return error.message ? error.message : error.toString();
      }

      function getClientStack(error) {
        return error.stack;
      }

      function getServerMessage(error) {
        return error.message;
      }

      function getServerStack(error) {
        // handle stack trace
        return 'stack';
      }
      /***/

    },

    /***/
    "./src/app/shared/fake-http-error/fake-http-error.module.ts":
    /*!******************************************************************!*\
      !*** ./src/app/shared/fake-http-error/fake-http-error.module.ts ***!
      \******************************************************************/

    /*! exports provided: FakeHttpErrorModule */

    /***/
    function srcAppSharedFakeHttpErrorFakeHttpErrorModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FakeHttpErrorModule", function () {
        return FakeHttpErrorModule;
      });

      var FakeHttpErrorModule = function FakeHttpErrorModule() {
        _classCallCheck(this, FakeHttpErrorModule);
      };
      /***/

    },

    /***/
    "./src/app/shared/fake-http-error/fake-http-error.service.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/shared/fake-http-error/fake-http-error.service.ts ***!
      \*******************************************************************/

    /*! exports provided: FakeHttpErrorService */

    /***/
    function srcAppSharedFakeHttpErrorFakeHttpErrorServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FakeHttpErrorService", function () {
        return FakeHttpErrorService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");

      var FakeHttpErrorService = /*#__PURE__*/function () {
        function FakeHttpErrorService(http) {
          _classCallCheck(this, FakeHttpErrorService);

          this.http = http;
        }

        _createClass(FakeHttpErrorService, [{
          key: "fake",
          value: function fake() {
            return this.http.get('http://www.zhgdsfdsfsdf.com');
          }
        }]);

        return FakeHttpErrorService;
      }();

      FakeHttpErrorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function FakeHttpErrorService_Factory() {
          return new FakeHttpErrorService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
        },
        token: FakeHttpErrorService,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "./src/app/shared/fake-http-error/slice/actions.ts":
    /*!*********************************************************!*\
      !*** ./src/app/shared/fake-http-error/slice/actions.ts ***!
      \*********************************************************/

    /*! exports provided: ActionTypes, FakeHttpErrorRequestAction, FakeHttpErrorRequestFailureAction */

    /***/
    function srcAppSharedFakeHttpErrorSliceActionsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActionTypes", function () {
        return ActionTypes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FakeHttpErrorRequestAction", function () {
        return FakeHttpErrorRequestAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FakeHttpErrorRequestFailureAction", function () {
        return FakeHttpErrorRequestFailureAction;
      });

      var ActionTypes;

      (function (ActionTypes) {
        ActionTypes["FAKE_HTTP_ERROR_REQUEST"] = "[My Feature] Fake Http Error Request";
        ActionTypes["FAKE_HTTP_ERROR_REQUEST_FAILURE"] = "[My Feature] Fake Http Error Request Failure";
      })(ActionTypes || (ActionTypes = {}));

      var FakeHttpErrorRequestAction = function FakeHttpErrorRequestAction() {
        _classCallCheck(this, FakeHttpErrorRequestAction);

        this.type = ActionTypes.FAKE_HTTP_ERROR_REQUEST;
      };

      var FakeHttpErrorRequestFailureAction = function FakeHttpErrorRequestFailureAction() {
        _classCallCheck(this, FakeHttpErrorRequestFailureAction);

        this.type = ActionTypes.FAKE_HTTP_ERROR_REQUEST_FAILURE;
      };
      /***/

    },

    /***/
    "./src/app/shared/fake-http-error/slice/effects.ts":
    /*!*********************************************************!*\
      !*** ./src/app/shared/fake-http-error/slice/effects.ts ***!
      \*********************************************************/

    /*! exports provided: FakeHttpErrorEffects */

    /***/
    function srcAppSharedFakeHttpErrorSliceEffectsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FakeHttpErrorEffects", function () {
        return FakeHttpErrorEffects;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/effects */
      "./node_modules/@ngrx/effects/fesm2015/effects.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./actions */
      "./src/app/shared/fake-http-error/slice/actions.ts");

      var FakeHttpErrorEffects = function FakeHttpErrorEffects(fakeHttpService, actions$) {
        var _this7 = this;

        _classCallCheck(this, FakeHttpErrorEffects);

        this.fakeHttpService = fakeHttpService;
        this.actions$ = actions$;
        this.fakeHttpErrorRequestEffect$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].FAKE_HTTP_ERROR_REQUEST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
          return _this7.fakeHttpService.fake().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) {
            return null;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_4__["FakeHttpErrorRequestFailureAction"]());
          }));
        }));
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])()], FakeHttpErrorEffects.prototype, "fakeHttpErrorRequestEffect$", void 0);
      /***/
    },

    /***/
    "./src/app/shared/fake-http-error/slice/fake-http-error-slice.module.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/shared/fake-http-error/slice/fake-http-error-slice.module.ts ***!
      \******************************************************************************/

    /*! exports provided: FakeHttpErrorSliceModule */

    /***/
    function srcAppSharedFakeHttpErrorSliceFakeHttpErrorSliceModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FakeHttpErrorSliceModule", function () {
        return FakeHttpErrorSliceModule;
      });

      var FakeHttpErrorSliceModule = function FakeHttpErrorSliceModule() {
        _classCallCheck(this, FakeHttpErrorSliceModule);
      };
      /***/

    },

    /***/
    "./src/app/shared/fake-http-error/slice/reducer.ts":
    /*!*********************************************************!*\
      !*** ./src/app/shared/fake-http-error/slice/reducer.ts ***!
      \*********************************************************/

    /*! exports provided: featureReducer */

    /***/
    function srcAppSharedFakeHttpErrorSliceReducerTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "featureReducer", function () {
        return featureReducer;
      });
      /* harmony import */


      var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./actions */
      "./src/app/shared/fake-http-error/slice/actions.ts");
      /* harmony import */


      var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./state */
      "./src/app/shared/fake-http-error/slice/state.ts");

      function featureReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _state__WEBPACK_IMPORTED_MODULE_1__["initialState"];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
          case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].FAKE_HTTP_ERROR_REQUEST:
            return Object.assign(Object.assign({}, state), {
              appHttpLoading: {
                isLoading: true,
                isLoaded: false
              }
            });

          case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].FAKE_HTTP_ERROR_REQUEST_FAILURE:
            return Object.assign(Object.assign({}, state), {
              appHttpLoading: {
                isLoading: false,
                isLoaded: false
              }
            });

          default:
            {
              return state;
            }
        }
      }
      /***/

    },

    /***/
    "./src/app/shared/fake-http-error/slice/selectors.ts":
    /*!***********************************************************!*\
      !*** ./src/app/shared/fake-http-error/slice/selectors.ts ***!
      \***********************************************************/

    /*! exports provided: selectFakeHttpErrorState, selectFakeHttpErrorIsLoading, selectFakeHttpErrorIsLoaded, selectFakeHttpError, ɵ0, ɵ1, ɵ2 */

    /***/
    function srcAppSharedFakeHttpErrorSliceSelectorsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectFakeHttpErrorState", function () {
        return selectFakeHttpErrorState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectFakeHttpErrorIsLoading", function () {
        return selectFakeHttpErrorIsLoading;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectFakeHttpErrorIsLoaded", function () {
        return selectFakeHttpErrorIsLoaded;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectFakeHttpError", function () {
        return selectFakeHttpError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ1", function () {
        return ɵ1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ2", function () {
        return ɵ2;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/fesm2015/store.js");

      var getIsLoading = function getIsLoading(state) {
        return state.appHttpLoading.isLoading;
      };

      var ɵ0 = getIsLoading;

      var getIsLoaded = function getIsLoaded(state) {
        return state.appHttpLoading.isLoaded;
      };

      var ɵ1 = getIsLoaded; // tslint:disable-next-line: no-any

      var getFakeData = function getFakeData(state) {
        return state.fakeData;
      };

      var ɵ2 = getFakeData;
      var selectFakeHttpErrorState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('fakeHttpErrorFeature');
      var selectFakeHttpErrorIsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFakeHttpErrorState, getIsLoading);
      var selectFakeHttpErrorIsLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFakeHttpErrorState, getIsLoaded);
      var selectFakeHttpError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFakeHttpErrorState, getFakeData);
      /***/
    },

    /***/
    "./src/app/shared/fake-http-error/slice/state.ts":
    /*!*******************************************************!*\
      !*** ./src/app/shared/fake-http-error/slice/state.ts ***!
      \*******************************************************/

    /*! exports provided: initialState */

    /***/
    function srcAppSharedFakeHttpErrorSliceStateTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initialState", function () {
        return initialState;
      });

      var initialState = {
        fakeData: null,
        appHttpLoading: {
          isLoading: false,
          isLoaded: false
        }
      };
      /***/
    },

    /***/
    "./src/app/shared/interceptors/authentication-error.interceptor.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/shared/interceptors/authentication-error.interceptor.ts ***!
      \*************************************************************************/

    /*! exports provided: AuthenticationErrorInterceptor */

    /***/
    function srcAppSharedInterceptorsAuthenticationErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationErrorInterceptor", function () {
        return AuthenticationErrorInterceptor;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var AuthenticationErrorInterceptor = /*#__PURE__*/function () {
        function AuthenticationErrorInterceptor() {
          _classCallCheck(this, AuthenticationErrorInterceptor);
        }

        _createClass(AuthenticationErrorInterceptor, [{
          key: "intercept",
          // tslint:disable-next-line: no-any
          value: function intercept(request, next) {
            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
              if (error.status === 401) {// refresh token
              } else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
              }
            }));
          }
        }]);

        return AuthenticationErrorInterceptor;
      }();
      /***/

    },

    /***/
    "./src/app/shared/interceptors/server-error.interceptor.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/shared/interceptors/server-error.interceptor.ts ***!
      \*****************************************************************/

    /*! exports provided: ServerErrorInterceptor */

    /***/
    function srcAppSharedInterceptorsServerErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServerErrorInterceptor", function () {
        return ServerErrorInterceptor;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_app_routes_http_error_slice_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/routes/http-error/slice/actions */
      "./src/app/routes/http-error/slice/actions.ts");
      /* harmony import */


      var _app_http_loading_slice_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../app-http-loading/slice/actions */
      "./src/app/shared/app-http-loading/slice/actions.ts"); // One traditional way of handling errors in Angular is to provide an ErrorHandler class.
      // This class can be extended to create your own global error handler. This is also a useful
      // way to handle all errors that occur, but is mostly useful for tracking error logs. For
      // reference, you can check our earlier tutorial on how to use ErrorHandler in Angular 2+.
      // By implementing error handling in HttpClient or HttpInterceptor, you can work directly with
      // all HTTP requests in your application, providing the ability to transform the request, retry
      // it, and more. Therefore, ErrorHandler is useful for more generic error handling, but
      // HttpInterceptor provides a much more robust way to handle errors related to the server and network.


      var ServerErrorInterceptor = /*#__PURE__*/function () {
        function ServerErrorInterceptor(store, notificationService) {
          _classCallCheck(this, ServerErrorInterceptor);

          this.store = store;
          this.notificationService = notificationService;
        } // tslint:disable-next-line: no-any


        _createClass(ServerErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this8 = this;

            if (request instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]) {
              console.log('--------> http HttpRequest dispatch loading spinner');
              this.store.dispatch(new _app_http_loading_slice_actions__WEBPACK_IMPORTED_MODULE_4__["StartLoadingAction"]());
            }

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), // tslint:disable-next-line: no-any
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) {
              if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                console.log('--------> http HttpResponse dispatch stop loading spinner');

                _this8.store.dispatch(new _app_http_loading_slice_actions__WEBPACK_IMPORTED_MODULE_4__["StopLoadingAction"]());
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
              console.log('--------> http HttpErrorResponse dispatch stop loading spinner');

              _this8.store.dispatch(new _app_http_loading_slice_actions__WEBPACK_IMPORTED_MODULE_4__["StopLoadingAction"]());

              var errorMessage = '';

              if (error.error instanceof ErrorEvent) {
                // A client-side htttp or network error occurred. Handle it accordingly.
                errorMessage = "Error: ".concat(error.error.message);

                _this8.notificationService.showError('error.error.message');
              } else {
                // here an actual server response was received.
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                _this8.store.dispatch(new src_app_routes_http_error_slice_actions__WEBPACK_IMPORTED_MODULE_3__["HttpErrorAction"]({
                  httpError: error
                }));

                errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }));
          }
        }]);

        return ServerErrorInterceptor;
      }();
      /***/

    },

    /***/
    "./src/app/shared/logger.service.ts":
    /*!******************************************!*\
      !*** ./src/app/shared/logger.service.ts ***!
      \******************************************/

    /*! exports provided: LoggerService */

    /***/
    function srcAppSharedLoggerServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoggerService", function () {
        return LoggerService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var LoggerService = /*#__PURE__*/function () {
        function LoggerService() {
          _classCallCheck(this, LoggerService);
        }

        _createClass(LoggerService, [{
          key: "logError",
          value: function logError(err) {
            this.logToLocalStorage(err);
            this.logToSessionStorage(err);
            this.logToRemoteLogger(err);
          }
        }, {
          key: "logToLocalStorage",
          value: function logToLocalStorage(err) {
            // here log proper localStorage keys
            var _stack = err.stack;
          }
        }, {
          key: "logToSessionStorage",
          value: function logToSessionStorage(err) {
            // here log proper sessionStorage keys
            var _stack = err.stack;
          }
        }, {
          key: "logToRemoteLogger",
          value: function logToRemoteLogger(err) {
            // log remote tracker such as Slack or Sentry
            var _stack = err.stack;
          }
        }]);

        return LoggerService;
      }();

      LoggerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function LoggerService_Factory() {
          return new LoggerService();
        },
        token: LoggerService,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "./src/app/shared/notification.service.ts":
    /*!************************************************!*\
      !*** ./src/app/shared/notification.service.ts ***!
      \************************************************/

    /*! exports provided: NotificationService */

    /***/
    function srcAppSharedNotificationServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
        return NotificationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "./node_modules/@angular/material/fesm2015/snack-bar.js");

      var NotificationService = /*#__PURE__*/function () {
        function NotificationService(snackBar) {
          _classCallCheck(this, NotificationService);

          this.snackBar = snackBar;
        }

        _createClass(NotificationService, [{
          key: "showSuccess",
          value: function showSuccess(message) {
            this.snackBar.open(message, null, {
              duration: 2500,
              panelClass: ['snackbar-no-error']
            });
          }
        }, {
          key: "showError",
          value: function showError(message) {
            // The second parameter is the text in the button.
            // In the third, we send in the css class for the snack bar.
            this.snackBar.open(message, null, {
              duration: 2500,
              panelClass: ['snackbar-error']
            });
          }
        }]);

        return NotificationService;
      }();

      NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function NotificationService_Factory() {
          return new NotificationService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]));
        },
        token: NotificationService,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "./src/app/shared/root-store/root-store.module.ts":
    /*!********************************************************!*\
      !*** ./src/app/shared/root-store/root-store.module.ts ***!
      \********************************************************/

    /*! exports provided: RootStoreModule */

    /***/
    function srcAppSharedRootStoreRootStoreModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RootStoreModule", function () {
        return RootStoreModule;
      });

      var RootStoreModule = function RootStoreModule() {
        _classCallCheck(this, RootStoreModule);
      };
      /***/

    },

    /***/
    "./src/app/shared/root-store/selectors.ts":
    /*!************************************************!*\
      !*** ./src/app/shared/root-store/selectors.ts ***!
      \************************************************/

    /*! exports provided: selectHttpError, selectIsLoading, selectIsLoaded, ɵ0, ɵ1, ɵ2 */

    /***/
    function srcAppSharedRootStoreSelectorsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectHttpError", function () {
        return selectHttpError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectIsLoading", function () {
        return selectIsLoading;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectIsLoaded", function () {
        return selectIsLoaded;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ1", function () {
        return ɵ1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ2", function () {
        return ɵ2;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/fesm2015/store.js");
      /* harmony import */


      var _routes_http_error_slice_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../routes/http-error/slice/selectors */
      "./src/app/routes/http-error/slice/selectors.ts");
      /* harmony import */


      var _routes_login_slice_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../routes/login/slice/selectors */
      "./src/app/routes/login/slice/selectors.ts");
      /* harmony import */


      var _routes_products_slice_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../routes/products/slice/selectors */
      "./src/app/routes/products/slice/selectors.ts");
      /* harmony import */


      var _fake_http_error_slice_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../fake-http-error/slice/selectors */
      "./src/app/shared/fake-http-error/slice/selectors.ts");

      var ɵ0 = function ɵ0(httpError) {
        return httpError;
      };

      var selectHttpError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_routes_http_error_slice_selectors__WEBPACK_IMPORTED_MODULE_1__["selectHttpError"], ɵ0);

      var ɵ1 = function ɵ1() {
        var loginIsLoading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var productsIsLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var fakeHttpErrorIsLoading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        return loginIsLoading || productsIsLoading || fakeHttpErrorIsLoading;
      };

      var selectIsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_routes_login_slice_selectors__WEBPACK_IMPORTED_MODULE_2__["selectLoginIsLoading"], _routes_products_slice_selectors__WEBPACK_IMPORTED_MODULE_3__["selectProductsIsLoading"], _fake_http_error_slice_selectors__WEBPACK_IMPORTED_MODULE_4__["selectFakeHttpErrorIsLoading"], ɵ1);

      var ɵ2 = function ɵ2() {
        var loginIsLoaded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var productsIsLoaded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var fakeHttpErrorIsLoaded = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        return loginIsLoaded || productsIsLoaded || fakeHttpErrorIsLoaded;
      };

      var selectIsLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_routes_login_slice_selectors__WEBPACK_IMPORTED_MODULE_2__["selectLoginIsLoaded"], _routes_products_slice_selectors__WEBPACK_IMPORTED_MODULE_3__["selectProductsIsLoaded"], _fake_http_error_slice_selectors__WEBPACK_IMPORTED_MODULE_4__["selectFakeHttpErrorIsLoaded"], ɵ2);
      /***/
    },

    /***/
    "./src/app/shared/shared.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };
      /***/

    },

    /***/
    "./src/app/shared/top-bar/top-bar.component.ngfactory.js":
    /*!***************************************************************!*\
      !*** ./src/app/shared/top-bar/top-bar.component.ngfactory.js ***!
      \***************************************************************/

    /*! exports provided: RenderType_TopBarComponent, View_TopBarComponent_0, View_TopBarComponent_Host_0, TopBarComponentNgFactory */

    /***/
    function srcAppSharedTopBarTopBarComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_TopBarComponent", function () {
        return RenderType_TopBarComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_TopBarComponent_0", function () {
        return View_TopBarComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_TopBarComponent_Host_0", function () {
        return View_TopBarComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopBarComponentNgFactory", function () {
        return TopBarComponentNgFactory;
      });
      /* harmony import */


      var _top_bar_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./top-bar.component.scss.shim.ngstyle */
      "./src/app/shared/top-bar/top-bar.component.scss.shim.ngstyle.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../node_modules/@angular/material/button/index.ngfactory */
      "./node_modules/@angular/material/button/index.ngfactory.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/fesm2015/button.js");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "./node_modules/@angular/cdk/fesm2015/a11y.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/fesm2015/animations.js");
      /* harmony import */


      var _top_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./top-bar.component */
      "./src/app/shared/top-bar/top-bar.component.ts");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/fesm2015/store.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_TopBarComponent = [_top_bar_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_TopBarComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_TopBarComponent,
        data: {}
      });

      function View_TopBarComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], {
          routerLink: [0, "routerLink"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["My Store"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 6, "button", [["class", "top-bar-item mat-focus-indicator"], ["mat-raised-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onClick() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          routerLink: [0, "routerLink"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](7, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 0, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["shopping_cart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Checkout"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 5, "button", [["class", "http-error top-bar-item mat-focus-indicator"], ["mat-raised-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.causeHttpError() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], {
          disabled: [0, "disabled"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 0, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["error"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" fake http error\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 4, "button", [["class", "top-bar-item mat-focus-indicator"], ["mat-raised-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.causePureError() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 0, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["error"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" fake general error\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 4, "button", [["class", "top-bar-item mat-focus-indicator"], ["mat-raised-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.logout() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, 0, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["account_circle"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Logout\n"]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_2 = _ck(_v, 2, 0, "/");

          _ck(_v, 1, 0, currVal_2);

          var currVal_5 = _ck(_v, 7, 0, "/cart");

          _ck(_v, 6, 0, currVal_5);

          var currVal_8 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 13, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).transform(_co.user$));

          _ck(_v, 13, 0, currVal_8);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).target;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).href;

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).disabled || null;
          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._animationMode === "NoopAnimations";

          _ck(_v, 5, 0, currVal_3, currVal_4);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).disabled || null;
          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._animationMode === "NoopAnimations";

          _ck(_v, 12, 0, currVal_6, currVal_7);

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).disabled || null;
          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._animationMode === "NoopAnimations";

          _ck(_v, 18, 0, currVal_9, currVal_10);

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).disabled || null;
          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._animationMode === "NoopAnimations";

          _ck(_v, 23, 0, currVal_11, currVal_12);
        });
      }

      function View_TopBarComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "crud-seed-top-bar", [], null, null, null, View_TopBarComponent_0, RenderType_TopBarComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _top_bar_component__WEBPACK_IMPORTED_MODULE_8__["TopBarComponent"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var TopBarComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("crud-seed-top-bar", _top_bar_component__WEBPACK_IMPORTED_MODULE_8__["TopBarComponent"], View_TopBarComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "./src/app/shared/top-bar/top-bar.component.scss.shim.ngstyle.js":
    /*!***********************************************************************!*\
      !*** ./src/app/shared/top-bar/top-bar.component.scss.shim.ngstyle.js ***!
      \***********************************************************************/

    /*! exports provided: styles */

    /***/
    function srcAppSharedTopBarTopBarComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = [".http-error[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RvcC1iYXIvdG9wLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC90b3AtYmFyL3RvcC1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaHR0cC1lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi8vIC50b3AtYmFyLWl0ZW0ge1xuLy8gICAvLyBmbGV4OiAxIDEgMHB4OyAvLyBzZXRzIGFsbCBidXR0b24gdG8gc2FtZSB3aWR0aFxuLy8gfVxuIl19 */"];
      /***/
    },

    /***/
    "./src/app/shared/top-bar/top-bar.component.ts":
    /*!*****************************************************!*\
      !*** ./src/app/shared/top-bar/top-bar.component.ts ***!
      \*****************************************************/

    /*! exports provided: TopBarComponent */

    /***/
    function srcAppSharedTopBarTopBarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopBarComponent", function () {
        return TopBarComponent;
      });
      /* harmony import */


      var _routes_login_slice_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../routes/login/slice/actions */
      "./src/app/routes/login/slice/actions.ts");
      /* harmony import */


      var _routes_login_slice_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../routes/login/slice/selectors */
      "./src/app/routes/login/slice/selectors.ts");
      /* harmony import */


      var _shared_fake_http_error_slice_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/fake-http-error/slice/actions */
      "./src/app/shared/fake-http-error/slice/actions.ts");

      var TopBarComponent = /*#__PURE__*/function () {
        function TopBarComponent(store, http) {
          _classCallCheck(this, TopBarComponent);

          this.store = store;
          this.http = http;
        }

        _createClass(TopBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.user$ = this.store.select(_routes_login_slice_selectors__WEBPACK_IMPORTED_MODULE_1__["selectLoginUser"]);
          }
        }, {
          key: "logout",
          value: function logout() {
            this.store.dispatch(new _routes_login_slice_actions__WEBPACK_IMPORTED_MODULE_0__["LogoutRequestAction"]());
          }
        }, {
          key: "causeHttpError",
          value: function causeHttpError() {
            this.store.dispatch(new _shared_fake_http_error_slice_actions__WEBPACK_IMPORTED_MODULE_2__["FakeHttpErrorRequestAction"]());
          }
        }, {
          key: "causePureError",
          value: function causePureError() {
            throw new Error('My pure Error');
          }
        }]);

        return TopBarComponent;
      }();
      /***/

    },

    /***/
    "./src/app/shared/top-bar/top-bar.module.ts":
    /*!**************************************************!*\
      !*** ./src/app/shared/top-bar/top-bar.module.ts ***!
      \**************************************************/

    /*! exports provided: TopBarModule */

    /***/
    function srcAppSharedTopBarTopBarModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopBarModule", function () {
        return TopBarModule;
      });

      var TopBarModule = function TopBarModule() {
        _classCallCheck(this, TopBarModule);
      };
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module.ngfactory */
      "./src/app/app.module.ngfactory.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Volumes/MacintoshHD/Users/megabyzus_hdd_homefolder/SoftwareDevelopment/Tutorials_n_Practice/Angular/v10x/jul-2020/CRUD-seed/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map