(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_translateService) {
        this._translateService = _translateService;
        this.title = 'app';
        _translateService.addLangs(['sk', 'en']);
        _translateService.setDefaultLang('en');
        // const browserLang = this._translateService.getBrowserLang();
        _translateService.use('en');
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_page_skelet_page_skelet_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/page-skelet/page-skelet.component */ "./src/app/pages/page-skelet/page-skelet.component.ts");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_pool_actions_pool_actions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pool-actions/pool-actions.component */ "./src/app/components/pool-actions/pool-actions.component.ts");
/* harmony import */ var _components_pool_action_element_pool_action_element_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pool-action-element/pool-action-element.component */ "./src/app/components/pool-action-element/pool-action-element.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_new_question_page_new_question_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/new-question-page/new-question-page.component */ "./src/app/components/new-question-page/new-question-page.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_pool_summary_pool_summary_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/pool-summary/pool-summary.component */ "./src/app/components/pool-summary/pool-summary.component.ts");
/* harmony import */ var _pages_create_pool_process_page_create_pool_process_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/create-pool-process-page/create-pool-process-page.component */ "./src/app/pages/create-pool-process-page/create-pool-process-page.component.ts");
/* harmony import */ var _pages_splash_screen_page_splash_screen_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/splash-screen-page/splash-screen-page.component */ "./src/app/pages/splash-screen-page/splash-screen-page.component.ts");
/* harmony import */ var _pages_contact_list_page_contact_list_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/contact-list-page/contact-list-page.component */ "./src/app/pages/contact-list-page/contact-list-page.component.ts");
/* harmony import */ var _pages_pools_page_pools_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/pools-page/pools-page.component */ "./src/app/pages/pools-page/pools-page.component.ts");
/* harmony import */ var _components_pool_tile_pool_tile_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/pool-tile/pool-tile.component */ "./src/app/components/pool-tile/pool-tile.component.ts");
/* harmony import */ var _pages_public_pools_page_public_pools_page_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/public-pools-page/public-pools-page.component */ "./src/app/pages/public-pools-page/public-pools-page.component.ts");
/* harmony import */ var _pages_pool_fill_page_pool_fill_page_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/pool-fill-page/pool-fill-page.component */ "./src/app/pages/pool-fill-page/pool-fill-page.component.ts");
/* harmony import */ var _components_pool_pool_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/pool/pool.component */ "./src/app/components/pool/pool.component.ts");
/* harmony import */ var _pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/profile-page/profile-page.component */ "./src/app/pages/profile-page/profile-page.component.ts");
/* harmony import */ var _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/about-page/about-page.component */ "./src/app/pages/about-page/about-page.component.ts");
/* harmony import */ var _components_language_selector_language_selector_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/language-selector/language-selector.component */ "./src/app/components/language-selector/language-selector.component.ts");
/* harmony import */ var _components_pool_settings_pool_settings_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/pool-settings/pool-settings.component */ "./src/app/components/pool-settings/pool-settings.component.ts");
/* harmony import */ var _shared_localizationDatePipe_localization_date_pipe_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./shared/localizationDatePipe/localization-date-pipe.pipe */ "./src/app/shared/localizationDatePipe/localization-date-pipe.pipe.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_sk__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/common/locales/sk */ "./node_modules/@angular/common/locales/sk.js");
/* harmony import */ var _angular_common_locales_sk__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_sk__WEBPACK_IMPORTED_MODULE_35__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































Object(_angular_common__WEBPACK_IMPORTED_MODULE_34__["registerLocaleData"])(_angular_common_locales_sk__WEBPACK_IMPORTED_MODULE_35___default.a);
function HttpLoaderFactory(http) {
    // return new TranslateHttpLoader(http);
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _pages_page_skelet_page_skelet_component__WEBPACK_IMPORTED_MODULE_8__["PageSkeletComponent"],
                _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__["HomePageComponent"],
                _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _components_pool_actions_pool_actions_component__WEBPACK_IMPORTED_MODULE_14__["PoolActionsComponent"],
                _components_pool_action_element_pool_action_element_component__WEBPACK_IMPORTED_MODULE_15__["PoolActionElementComponent"],
                _components_new_question_page_new_question_page_component__WEBPACK_IMPORTED_MODULE_17__["NewQuestionPageComponent"],
                _components_pool_summary_pool_summary_component__WEBPACK_IMPORTED_MODULE_20__["PoolSummaryComponent"],
                _pages_create_pool_process_page_create_pool_process_page_component__WEBPACK_IMPORTED_MODULE_21__["CreatePoolProcessPageComponent"],
                _pages_splash_screen_page_splash_screen_page_component__WEBPACK_IMPORTED_MODULE_22__["SplashScreenPageComponent"],
                _pages_contact_list_page_contact_list_page_component__WEBPACK_IMPORTED_MODULE_23__["ContactListPageComponent"],
                _pages_pools_page_pools_page_component__WEBPACK_IMPORTED_MODULE_24__["PoolsPageComponent"],
                _components_pool_tile_pool_tile_component__WEBPACK_IMPORTED_MODULE_25__["PoolTileComponent"],
                _pages_public_pools_page_public_pools_page_component__WEBPACK_IMPORTED_MODULE_26__["PublicPoolsPageComponent"],
                _pages_pool_fill_page_pool_fill_page_component__WEBPACK_IMPORTED_MODULE_27__["PoolFillPageComponent"],
                _components_pool_pool_component__WEBPACK_IMPORTED_MODULE_28__["PoolComponent"],
                _pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_29__["ProfilePageComponent"],
                _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_30__["AboutPageComponent"],
                _components_language_selector_language_selector_component__WEBPACK_IMPORTED_MODULE_31__["LanguageSelectorComponent"],
                _components_pool_settings_pool_settings_component__WEBPACK_IMPORTED_MODULE_32__["PoolSettingsComponent"],
                _shared_localizationDatePipe_localization_date_pipe_pipe__WEBPACK_IMPORTED_MODULE_33__["LocalizedDatePipe"]
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_2__["appRoutes"], { useHash: true }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                }),
            ],
            providers: [
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_18__["DateAdapter"], useClass: _angular_material__WEBPACK_IMPORTED_MODULE_18__["NativeDateAdapter"]
                },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _pages_page_skelet_page_skelet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/page-skelet/page-skelet.component */ "./src/app/pages/page-skelet/page-skelet.component.ts");
/* harmony import */ var _components_pool_actions_pool_actions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pool-actions/pool-actions.component */ "./src/app/components/pool-actions/pool-actions.component.ts");
/* harmony import */ var _pages_create_pool_process_page_create_pool_process_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/create-pool-process-page/create-pool-process-page.component */ "./src/app/pages/create-pool-process-page/create-pool-process-page.component.ts");
/* harmony import */ var _pages_contact_list_page_contact_list_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/contact-list-page/contact-list-page.component */ "./src/app/pages/contact-list-page/contact-list-page.component.ts");
/* harmony import */ var _pages_pools_page_pools_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/pools-page/pools-page.component */ "./src/app/pages/pools-page/pools-page.component.ts");
/* harmony import */ var _pages_public_pools_page_public_pools_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/public-pools-page/public-pools-page.component */ "./src/app/pages/public-pools-page/public-pools-page.component.ts");
/* harmony import */ var _pages_pool_fill_page_pool_fill_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/pool-fill-page/pool-fill-page.component */ "./src/app/pages/pool-fill-page/pool-fill-page.component.ts");
/* harmony import */ var _shared_pools_pool_resolver_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/pools/pool-resolver.service */ "./src/app/shared/pools/pool-resolver.service.ts");
/* harmony import */ var _pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/profile-page/profile-page.component */ "./src/app/pages/profile-page/profile-page.component.ts");
/* harmony import */ var _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/about-page/about-page.component */ "./src/app/pages/about-page/about-page.component.ts");











var appRoutes = [
    {
        path: '',
        component: _pages_page_skelet_page_skelet_component__WEBPACK_IMPORTED_MODULE_1__["PageSkeletComponent"],
        children: [
            {
                path: '',
                component: _components_pool_actions_pool_actions_component__WEBPACK_IMPORTED_MODULE_2__["PoolActionsComponent"],
            },
            {
                path: 'create',
                component: _pages_create_pool_process_page_create_pool_process_page_component__WEBPACK_IMPORTED_MODULE_3__["CreatePoolProcessPageComponent"],
            },
            {
                path: 'contacts',
                component: _pages_contact_list_page_contact_list_page_component__WEBPACK_IMPORTED_MODULE_4__["ContactListPageComponent"]
            },
            {
                path: 'pools',
                component: _pages_pools_page_pools_page_component__WEBPACK_IMPORTED_MODULE_5__["PoolsPageComponent"]
            },
            {
                path: 'publicpools',
                component: _pages_public_pools_page_public_pools_page_component__WEBPACK_IMPORTED_MODULE_6__["PublicPoolsPageComponent"]
            },
            {
                path: 'pool/:id',
                component: _pages_pool_fill_page_pool_fill_page_component__WEBPACK_IMPORTED_MODULE_7__["PoolFillPageComponent"],
                resolve: { pool: _shared_pools_pool_resolver_service__WEBPACK_IMPORTED_MODULE_8__["PoolResolver"] }
            },
            {
                path: 'profile',
                component: _pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_9__["ProfilePageComponent"]
            }
        ]
        // data: { title: 'Heroes List' }
    },
    {
        path: 'about',
        component: _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_10__["AboutPageComponent"]
    },
    {
        path: '**',
        component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__["PageNotFoundComponent"]
    }
];


/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"col-7 menu\">\n      <div class=\"logo-wrapper\">\n        <img routerLink=\"/\" class=\"logo\" src=\"assets/img/voteologobiele.png\">\n      </div>\n      <!--<span  class=\"item\">{{'header.profile' | translate}}</span>-->\n      <span routerLink=\"/contacts\" class=\"item\">{{'header.contactList' | translate}}</span>\n      <span routerLink=\"/about\" class=\"item\">{{'header.about' | translate}}<span class=\"gold\">{{'header.title' | translate}}</span></span>\n    </div>\n\n    <div class=\"col-4\">\n      <div routerLink=\"/profile\" class=\"user\">\n        <span class=\"gold\">Kamil bitcoach</span>\n        <span class=\"address\">{{address}}</span>\n      </div>\n    </div>\n    <div class=\"col-1 menu\">\n      <app-language-selector\n        [languages]=\"languages\"\n        [selectedLanguage]=\"selectedLanguage\"\n        (onSelectChange)=\"changeLanguage($event)\">\n      </app-language-selector>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-wrapper {\n  float: left;\n  margin: 5px 35px 5px 15px;\n  cursor: pointer; }\n  .logo-wrapper .name {\n    font-size: 32px;\n    color: #e1ab05; }\n  .gold {\n  color: #e1ab05; }\n  .menu {\n  display: flex;\n  align-items: center;\n  color: white; }\n  .item {\n  cursor: pointer;\n  font-size: 18px;\n  padding: 10px 25px; }\n  .item:hover {\n    color: #a1d0c5; }\n  .user {\n  display: flex;\n  flex-direction: column;\n  float: right;\n  padding-right: 10px;\n  height: 100%;\n  position: relative;\n  justify-content: center;\n  cursor: pointer; }\n  .user span {\n    text-align: left; }\n  .bitcoach-menu {\n  display: flex;\n  align-items: center; }\n  .wrapper {\n  color: #fff;\n  width: 100%;\n  height: 60px;\n  background: linear-gradient(to right, #303d90, #09245d); }\n  .col-4, span {\n  outline: none !important; }\n  mat-select {\n  border: 0px; }\n  mat-form-field {\n  display: block; }\n  mat-form-field .mat-select-value-text {\n    color: #fff !important; }\n  .language {\n  margin: auto; }\n  .language-wrapper {\n  margin: auto;\n  display: inline-block; }\n  .logo {\n  height: 50px; }\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_pools_pools_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/pools/pools.service */ "./src/app/shared/pools/pools.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_translateService, _poolsService) {
        this._translateService = _translateService;
        this._poolsService = _poolsService;
        this.languages = [
            'sk', 'en'
        ];
    }
    HeaderComponent.prototype.changeLanguage = function (language) {
        this._translateService.use(language);
        this.selectedLanguage = language;
    };
    HeaderComponent.prototype.ngOnInit = function () {
        this.selectedLanguage = this.languages[1];
    };
    Object.defineProperty(HeaderComponent.prototype, "address", {
        get: function () {
            return this._poolsService.address || '-';
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _shared_pools_pools_service__WEBPACK_IMPORTED_MODULE_1__["PoolsService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/language-selector/language-selector.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/language-selector/language-selector.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"togglePanel()\" class=\"selected\">{{'language.'+selectedLanguage | translate}}</div>\n\n<div class=\"panel\" [ngClass]=\"{'closed': !isOpened}\">\n  <div class=\"language-panel\">\n    <div class=\"item\" (click)=\"changeSelection(language)\"\n         *ngFor=\"let language of languages\">{{'language.'+language | translate}}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/language-selector/language-selector.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/language-selector/language-selector.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selected {\n  color: #fff;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .selected:hover {\n    color: #a1d0c5; }\n  .panel {\n  display: block;\n  position: absolute;\n  z-index: 99;\n  transition: all 1s;\n  overflow: hidden; }\n  .panel.closed {\n    max-height: 0px; }\n  .language-panel {\n  display: block;\n  cursor: pointer;\n  background-color: #fff;\n  padding: 10px; }\n  .language-panel .item {\n    cursor: pointer;\n    color: #09245d;\n    padding: 5px; }\n  .language-panel .item:hover {\n      color: #a1d0c5; }\n"

/***/ }),

/***/ "./src/app/components/language-selector/language-selector.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/language-selector/language-selector.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LanguageSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageSelectorComponent", function() { return LanguageSelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LanguageSelectorComponent = /** @class */ (function () {
    function LanguageSelectorComponent() {
        this.onSelectChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isOpened = false;
    }
    LanguageSelectorComponent.prototype.ngOnInit = function () {
    };
    LanguageSelectorComponent.prototype.togglePanel = function () {
        this.isOpened = !this.isOpened;
    };
    LanguageSelectorComponent.prototype.changeSelection = function (language) {
        this.onSelectChange.next(language);
        this.isOpened = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LanguageSelectorComponent.prototype, "languages", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LanguageSelectorComponent.prototype, "selectedLanguage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LanguageSelectorComponent.prototype, "onSelectChange", void 0);
    LanguageSelectorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-language-selector',
            template: __webpack_require__(/*! ./language-selector.component.html */ "./src/app/components/language-selector/language-selector.component.html"),
            styles: [__webpack_require__(/*! ./language-selector.component.scss */ "./src/app/components/language-selector/language-selector.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LanguageSelectorComponent);
    return LanguageSelectorComponent;
}());



/***/ }),

/***/ "./src/app/components/new-question-page/new-question-page.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/new-question-page/new-question-page.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"right switch-btn voteo-bold\" (click)=\"getNextQuestion(createQuestionForm)\">{{operation}}</div>\n  <div *ngIf=\"currentQuestionIndex > 0\" class=\"left switch-btn\" (click)=\"getPreviousQuestion(createQuestionForm)\"><</div>\n  <div class=\"wrapper\">\n    <div class=\"header\">{{'pools.newPool' | translate}}</div>\n    <form [formGroup]=\"createQuestionForm\">\n      <div class=\"title voteo-bold\">{{'pools.question' | translate}} {{currentQuestionIndex + 1}}/{{numberOfQuestions + 1}}</div>\n      <input class=\"question-name\" formControlName=\"name\">\n\n      <div class=\"parameters\">\n        <mat-slide-toggle class=\"param\" formControlName=\"openEnded\">\n          <span class=\"label voteo-bold\">{{'pools.create.openEnded' | translate}}</span>\n          <span class=\"hint\">{{'pools.create.openEndedHint' | translate}}</span>\n        </mat-slide-toggle>\n        <mat-slide-toggle class=\"param\" formControlName=\"multiple\">\n          <span class=\"label voteo-bold\">{{'pools.create.multiple' | translate}}</span>\n        </mat-slide-toggle>\n      </div>\n\n      <fieldset formArrayName=\"options\">\n        <button class=\"voteo-button add-option\" type=\"button\" (click)=\"addOption()\">{{'pools.create.addOption' |\n          translate}}\n        </button>\n        <div class=\"\" *ngFor=\"let option of options.controls; let j=index\"\n             [formGroupName]=\"j\">\n          <div class=\"option\">\n            <span class=\"label\">{{'pools.create.option' | translate}} {{j}}:</span>\n            <input class=\"question-name\" formControlName=\"label\">\n          </div>\n        </div>\n      </fieldset>\n\n      <div class=\"submit\">\n        <button *ngIf=\"currentQuestionIndex > 0\" type=\"button\" (click)=\"removeCurrentQuestion()\" class=\"voteo-button\">{{'actions.delete' | translate}}</button>\n        <ng-content></ng-content>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/new-question-page/new-question-page.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/new-question-page/new-question-page.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".question-name {\n  width: 100%; }\n\nform {\n  margin: 0px 20px 10px 20px; }\n\nmat-slide-toggle {\n  font-size: 14px;\n  color: #09245d; }\n\n.wrapper {\n  margin: 0px 20px;\n  z-index: 100; }\n\n.parameters .param {\n  padding: 10px 30px; }\n\n.parameters .label {\n  padding-left: 10px; }\n\n.option {\n  display: flex;\n  padding-bottom: 5px; }\n\n.option .label {\n    font-size: 12px;\n    width: 15%;\n    margin: auto; }\n\n.option input {\n    width: 85%; }\n\n.submit {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  width: 100%; }\n\n.submit button {\n    margin: 5px; }\n\n.add-option {\n  font-size: 12px; }\n\n.left {\n  font-size: 32px;\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  left: -25px;\n  border-bottom-left-radius: 25px;\n  border-top-left-radius: 25px;\n  width: 40px;\n  display: flex;\n  justify-content: center;\n  border-right: 0px !important;\n  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2); }\n\n.right {\n  font-size: 32px;\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  right: -22px;\n  border-bottom-right-radius: 25px;\n  border-top-right-radius: 25px;\n  width: 40px;\n  display: flex;\n  justify-content: center;\n  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2); }\n\n.switch-btn {\n  background-color: white;\n  color: #09245d;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.switch-btn:hover {\n    background-color: rgba(48, 61, 144, 0.1); }\n\n.content {\n  position: relative; }\n"

/***/ }),

/***/ "./src/app/components/new-question-page/new-question-page.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/new-question-page/new-question-page.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NewQuestionPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewQuestionPageComponent", function() { return NewQuestionPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewQuestionPageComponent = /** @class */ (function () {
    function NewQuestionPageComponent(fb) {
        this.fb = fb;
        this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.afterNextQuestionPressed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.afterPreviousQuestionPressed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.afterClickOnRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.initForm();
    }
    NewQuestionPageComponent.prototype.ngOnChanges = function (changes) {
        if (changes.question) {
            this.initForm();
            if (this.question) {
                if (this.question.options) {
                    for (var _i = 0, _a = this.question.options; _i < _a.length; _i++) {
                        var option = _a[_i];
                        this.addOption();
                    }
                }
                this.createQuestionForm.patchValue(this.question);
            }
        }
    };
    NewQuestionPageComponent.prototype.initForm = function () {
        var _this = this;
        this.createQuestionForm = this.fb.group({
            'name': [''],
            'openEnded': [false],
            'multiple': [false],
            'options': this.fb.array([])
        });
        this.createQuestionForm.valueChanges.subscribe(function (questions) {
            console.log('questions change', questions);
            _this.onUpdate.emit(questions);
        });
    };
    NewQuestionPageComponent.prototype.addOption = function (label) {
        if (label === void 0) { label = ''; }
        var option = this.fb.group({
            'label': [label, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.options.push(option);
    };
    NewQuestionPageComponent.prototype.getNextQuestion = function (_a) {
        var value = _a.value;
        this.afterNextQuestionPressed.next(value);
    };
    NewQuestionPageComponent.prototype.getPreviousQuestion = function (_a) {
        var value = _a.value;
        this.afterPreviousQuestionPressed.next(value);
    };
    NewQuestionPageComponent.prototype.removeCurrentQuestion = function () {
        this.afterClickOnRemove.next(this.currentQuestionIndex);
    };
    Object.defineProperty(NewQuestionPageComponent.prototype, "hasMoreQuestions", {
        get: function () {
            return this.currentQuestionIndex < this.numberOfQuestions - 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewQuestionPageComponent.prototype, "options", {
        get: function () {
            return this.createQuestionForm.get('options');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewQuestionPageComponent.prototype, "operation", {
        get: function () {
            return this.currentQuestionIndex < this.numberOfQuestions ? '>' : '+';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NewQuestionPageComponent.prototype, "onUpdate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NewQuestionPageComponent.prototype, "afterNextQuestionPressed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NewQuestionPageComponent.prototype, "afterPreviousQuestionPressed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NewQuestionPageComponent.prototype, "afterClickOnRemove", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NewQuestionPageComponent.prototype, "question", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NewQuestionPageComponent.prototype, "numberOfQuestions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NewQuestionPageComponent.prototype, "currentQuestionIndex", void 0);
    NewQuestionPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-question-page',
            template: __webpack_require__(/*! ./new-question-page.component.html */ "./src/app/components/new-question-page/new-question-page.component.html"),
            styles: [__webpack_require__(/*! ./new-question-page.component.scss */ "./src/app/components/new-question-page/new-question-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], NewQuestionPageComponent);
    return NewQuestionPageComponent;
}());



/***/ }),

/***/ "./src/app/components/pool-action-element/pool-action-element.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/pool-action-element/pool-action-element.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" [ngClass]=\"{'hovered': hovered}\">\n  <div class=\"content\">\n    <div class=\"icon\">\n      <img class=\"img-fluid\" [src]=\"picture\">\n    </div>\n\n    <div class=\"action-name voteo-bold\">\n      {{label | translate}}\n    </div>\n\n    <div class=\"details\">\n      <ng-content></ng-content>\n    </div>\n\n    <div class=\"button-wrapper\">\n      <button (click)=\"redirectToPage()\" class=\"voteo-bold\">{{'actions.viewAll' | translate}}</button>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/pool-action-element/pool-action-element.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/pool-action-element/pool-action-element.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host:hover {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n  z-index: 10;\n  background-color: white !important; }\n\n.wrapper {\n  margin: 2px;\n  border: 1px solid #e1ab05;\n  background-color: #edeef1;\n  text-align: center;\n  height: 100%; }\n\n.wrapper.hovered {\n    background-color: white; }\n\n.action-name {\n  font-size: 20px;\n  color: #09245d; }\n\n.content {\n  padding-bottom: 10px;\n  height: 100%; }\n\nimg {\n  height: 150px;\n  margin: 60px 0px; }\n\nbutton {\n  cursor: pointer;\n  border: 1px solid #09245d;\n  border-radius: 2px;\n  box-shadow: 1px rgba(0, 0, 0, 0.2);\n  color: #09245d;\n  background: linear-gradient(to right, #fff, rgba(48, 61, 144, 0.1)); }\n\nbutton:hover {\n    color: #fff;\n    background: linear-gradient(to right, #303d90, #09245d); }\n"

/***/ }),

/***/ "./src/app/components/pool-action-element/pool-action-element.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/pool-action-element/pool-action-element.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PoolActionElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoolActionElementComponent", function() { return PoolActionElementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PoolActionElementComponent = /** @class */ (function () {
    function PoolActionElementComponent(router) {
        this.router = router;
    }
    PoolActionElementComponent.prototype.onMouseOver = function () {
        this.hovered = true;
    };
    PoolActionElementComponent.prototype.onMouseOut = function () {
        this.hovered = false;
    };
    PoolActionElementComponent.prototype.ngOnInit = function () {
    };
    PoolActionElementComponent.prototype.redirectToPage = function () {
        this.router.navigate([this.redirectLink]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PoolActionElementComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PoolActionElementComponent.prototype, "picture", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PoolActionElementComponent.prototype, "redirectLink", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseover', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PoolActionElementComponent.prototype, "onMouseOver", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseout', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PoolActionElementComponent.prototype, "onMouseOut", null);
    PoolActionElementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pool-action-element',
            template: __webpack_require__(/*! ./pool-action-element.component.html */ "./src/app/components/pool-action-element/pool-action-element.component.html"),
            styles: [__webpack_require__(/*! ./pool-action-element.component.scss */ "./src/app/components/pool-action-element/pool-action-element.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PoolActionElementComponent);
    return PoolActionElementComponent;
}());



/***/ }),

/***/ "./src/app/components/pool-actions/pool-actions.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/pool-actions/pool-actions.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"actions row\">\n  <app-pool-action-element\n    [picture]=\"'assets/img/pools.png'\"\n    [label]=\"'pools.types.create'\" class=\"col-4 action\">\n    <div class=\"create\" (click)=\"createPool()\">\n        <span class=\"img-fluid\">\n          <img src=\"assets/img/create.png\">\n        </span>\n      {{'pools.createNew' | translate}}\n    </div>\n    <div>{{'pools.or' | translate}}</div>\n  </app-pool-action-element>\n  <app-pool-action-element\n    [picture]=\"'assets/img/vote.png'\"\n    [label]=\"'pools.types.vote'\"\n    [redirectLink]=\"'/pools'\"\n    class=\"col-4 action\">\n    {{'pools.noPending' | translate}}\n  </app-pool-action-element>\n\n  <app-pool-action-element\n    [picture]=\"'assets/img/public_pools.png'\"\n    [label]=\"'pools.types.public'\" class=\"col-4 action\"\n    [redirectLink]=\"'/publicpools'\">\n    {{'pools.public' | translate: numberOfPools}}\n  </app-pool-action-element>\n</div>\n"

/***/ }),

/***/ "./src/app/components/pool-actions/pool-actions.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/pool-actions/pool-actions.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  position: relative; }\n\n.action {\n  padding: 0 !important;\n  transition: all .4s; }\n\n.actions {\n  margin: 50px 0px 0px 20px; }\n\n.create {\n  display: block;\n  cursor: pointer; }\n\n.create img {\n    width: 18px;\n    height: 18px; }\n\n.create:hover {\n    color: #09245d;\n    text-decoration: underline; }\n"

/***/ }),

/***/ "./src/app/components/pool-actions/pool-actions.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/pool-actions/pool-actions.component.ts ***!
  \*******************************************************************/
/*! exports provided: PoolActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoolActionsComponent", function() { return PoolActionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PoolActionsComponent = /** @class */ (function () {
    function PoolActionsComponent(router) {
        this.router = router;
    }
    PoolActionsComponent.prototype.ngOnInit = function () {
    };
    PoolActionsComponent.prototype.createPool = function () {
        this.router.navigate(['/create']);
    };
    Object.defineProperty(PoolActionsComponent.prototype, "numberOfPools", {
        get: function () {
            return { numberOfPools: 386 };
        },
        enumerable: true,
        configurable: true
    });
    PoolActionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pool-actions',
            template: __webpack_require__(/*! ./pool-actions.component.html */ "./src/app/components/pool-actions/pool-actions.component.html"),
            styles: [__webpack_require__(/*! ./pool-actions.component.scss */ "./src/app/components/pool-actions/pool-actions.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PoolActionsComponent);
    return PoolActionsComponent;
}());



/***/ }),

/***/ "./src/app/components/pool-settings/pool-settings.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/pool-settings/pool-settings.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <form [formGroup]=\"poolSettings\">\n    <div class=\"col-12 type\">\n      {{'pools.settings.private' | translate}}\n      <mat-slide-toggle formControlName=\"public\"></mat-slide-toggle>\n      {{'pools.settings.public' | translate}}\n    </div>\n\n    <div class=\"col-12\">\n      <mat-form-field class=\"full-width\">\n        <mat-select [placeholder]=\"'pools.settings.verification' | translate\" formControlName=\"verification\">\n          <mat-option *ngFor=\"let verification of verifications\" [value]=\"verification.value\">\n            {{verification.label}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n\n    <div class=\"date col-12\">\n      <mat-form-field class=\"full-width\">\n        <input matInput [matDatepicker]=\"startPicker\" [placeholder]=\"'pools.settings.startDate' | translate\"\n               formControlName=\"startDate\">\n        <mat-datepicker-toggle matSuffix [for]=\"startPicker\"></mat-datepicker-toggle>\n        <mat-datepicker #startPicker></mat-datepicker>\n      </mat-form-field>\n    </div>\n\n    <div class=\"date col-12\">\n      <mat-form-field class=\"full-width\">\n        <input matInput [matDatepicker]=\"endPicker\" [placeholder]=\"'pools.settings.endDate' | translate\"\n               formControlName=\"endDate\">\n        <mat-datepicker-toggle matSuffix [for]=\"endPicker\"></mat-datepicker-toggle>\n        <mat-datepicker #endPicker></mat-datepicker>\n      </mat-form-field>\n    </div>\n\n    <div class=\"col-12\">\n      <mat-checkbox class=\"example-margin\" formControlName=\"reward\">\n        {{'pools.settings.reward' | translate}}\n      </mat-checkbox>\n    </div>\n\n    <ng-container *ngIf=\"isReward\">\n      <mat-form-field class=\"full-width col-4\">\n        <input matInput type=\"number\" [placeholder]=\"'pools.settings.totalBudget' | translate\"\n               formControlName=\"totalBudget\">\n        <span matSuffix>GAS</span>\n      </mat-form-field>\n\n      <mat-form-field class=\"full-width col-4\">\n        <input matInput type=\"number\" [placeholder]=\"'pools.settings.totalReward' | translate\"\n               formControlName=\"totalReward\">\n        <span matSuffix>GAS</span>\n      </mat-form-field>\n\n      <mat-form-field class=\"full-width col-4\">\n        <input matInput type=\"number\" [placeholder]=\"'pools.settings.participans' | translate\"\n               formControlName=\"participans\">\n      </mat-form-field>\n    </ng-container>\n\n    <div class=\"col-12\">\n      <mat-checkbox class=\"example-margin\" formControlName=\"tokenRequirements\">\n        {{'pools.settings.tokenRequirements' | translate}}\n      </mat-checkbox>\n    </div>\n\n    <mat-form-field class=\"col-4\">\n      <mat-select [placeholder]=\"'pools.settings.tokenType' | translate\" formControlName=\"tokenType\">\n        <mat-option *ngFor=\"let tokenType of tokenTypes\" [value]=\"tokenType.value\">\n          {{tokenType.label}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <ng-container *ngIf=\"areTokenRequirements\">\n      <mat-form-field class=\"col-4 full-width\">\n        <input type=\"number\" matInput [placeholder]=\"'pools.settings.minimumAmount' | translate\"\n               formControlName=\"minimumAmount\">\n\n      </mat-form-field>\n\n      <mat-form-field class=\"col-4 full-width\">\n        <input type=\"number\" matInput [placeholder]=\"'pools.settings.tokensPerVote' | translate\"\n               formControlName=\"tokensPerVote\">\n      </mat-form-field>\n\n      <mat-checkbox class=\"col-4 example-margin\" formControlName=\"audianceSpecification\">\n        {{'pools.settings.audianceSpecification' | translate}}\n      </mat-checkbox>\n    </ng-container>\n\n      <ng-content></ng-content>\n      <!--<button (click)=\"back()\" class=\"voteo-button\">{{'actions.back' | translate}}</button>-->\n      <!--<button (click)=\"submit()\" class=\"voteo-button\">{{'actions.submit' | translate}}</button>-->\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/pool-settings/pool-settings.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/pool-settings/pool-settings.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".date {\n  display: inline-block; }\n\n.full-width {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/components/pool-settings/pool-settings.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/pool-settings/pool-settings.component.ts ***!
  \*********************************************************************/
/*! exports provided: PoolSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoolSettingsComponent", function() { return PoolSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PoolSettingsComponent = /** @class */ (function () {
    function PoolSettingsComponent(fb) {
        this.fb = fb;
        this.verifications = [{
                value: 'KYC',
                label: 'KYC'
            },
            {
                value: 'KYC 2.0',
                label: 'KYC 2.0'
            }];
        this.tokenTypes = [
            {
                value: 'ETH',
                label: 'ETH'
            },
            {
                value: 'NEO',
                label: 'NEO'
            }
        ];
        this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.poolSettings = fb.group({
            public: [false],
            verification: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            startDate: [new Date()],
            endDate: [''],
            totalReward: [0],
            totalBudget: [0],
            reward: [false],
            maxParticipants: [''],
            tokenRequirements: [false],
            minimumAmount: [],
            tokensPerVote: [],
            participans: [],
            tokenType: [],
            audianceSpecification: [false]
        });
    }
    PoolSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.poolSettings.valueChanges.subscribe(function (form) {
            _this.onUpdate.emit(form);
        });
    };
    Object.defineProperty(PoolSettingsComponent.prototype, "isReward", {
        get: function () {
            return this.poolSettings.get('reward').value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PoolSettingsComponent.prototype, "areTokenRequirements", {
        get: function () {
            return this.poolSettings.get('tokenRequirements').value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PoolSettingsComponent.prototype, "onUpdate", void 0);
    PoolSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pool-settings',
            template: __webpack_require__(/*! ./pool-settings.component.html */ "./src/app/components/pool-settings/pool-settings.component.html"),
            styles: [__webpack_require__(/*! ./pool-settings.component.scss */ "./src/app/components/pool-settings/pool-settings.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], PoolSettingsComponent);
    return PoolSettingsComponent;
}());



/***/ }),

/***/ "./src/app/components/pool-summary/pool-summary.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/pool-summary/pool-summary.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"header\">{{'pools.newPool' | translate}}</div>\n  <div class=\"title voteo-bold\">{{'pools.summary' | translate}}</div>\n  <div *ngIf=\"questions.length > 0; else noQuestions\" class=\"voteo-table\">\n    <ng-container *ngFor=\"let question of questions\">\n      <div class=\"highlight voteo-row\">\n        <span class=\"column key\">{{'pools.create.name' | translate}}</span>\n        <span class=\"column value\">{{question?.name}}</span>\n      </div>\n      <div class=\"voteo-row\">\n        <span class=\"column key\">{{'pools.create.openEnded' | translate}}</span>\n        <span class=\"column value\">{{question?.openEnded}}</span>\n      </div>\n      <div class=\"voteo-row\">\n        <span class=\"column key\">{{'pools.create.multiple' | translate}}</span>\n        <span class=\"column value\">{{question?.multiple}}</span>\n      </div>\n      <div *ngFor=\"let option of question?.options; let i=index\" class=\"voteo-row\">\n        <span class=\"column key\">{{'pools.create.option' | translate}} {{i}}</span>\n        <span class=\"column value\">{{option.label}}</span>\n      </div>\n    </ng-container>\n  </div>\n\n  <div class=\"voteo-table\">\n    <div class=\"highlight voteo-row\">\n      {{'pools.create.settings' | translate}}\n    </div>\n    <ng-container *ngIf=\"settings\">\n      <div class=\"voteo-row\">\n        <span class=\"column key\">{{'pools.settings.public' | translate}}</span>\n        <span class=\"column value\">{{settings?.public}}</span>\n      </div>\n      <div class=\"voteo-row\">\n        <span class=\"column key\">{{'pools.settings.verification' | translate}}</span>\n        <span class=\"column value\">{{settings?.verification}}</span>\n      </div>\n      <div class=\"voteo-row\">\n        <span class=\"column key\">{{'pools.settings.startDate' | translate}}</span>\n        <span class=\"column value\">{{settings?.startDate | localizedDate}}</span>\n      </div>\n      <div class=\"voteo-row\">\n        <span class=\"column key\">{{'pools.settings.endDate' | translate}}</span>\n        <span class=\"column value\">{{settings?.endDate | localizedDate}}</span>\n      </div>\n      <ng-container *ngIf=\"settings.reward\">\n        <div class=\"voteo-row\">\n          <span class=\"column key\">{{'pools.settings.totalReward' | translate}}</span>\n          <span class=\"column value\">{{settings?.totalReward}}</span>\n        </div>\n        <div class=\"voteo-row\">\n          <span class=\"column key\">{{'pools.settings.totalBudget' | translate}}</span>\n          <span class=\"column value\">{{settings?.totalBudget}}</span>\n        </div>\n        <div class=\"voteo-row\">\n          <span class=\"column key\">{{'pools.settings.participans' | translate}}</span>\n          <span class=\"column value\">{{settings?.participans}}</span>\n        </div>\n      </ng-container>\n      <ng-container *ngIf=\"settings.tokenRequirements\">\n        <div class=\"voteo-row\">\n          <span class=\"column key\">{{'pools.settings.tokenType' | translate}}</span>\n          <span class=\"column value\">{{settings?.tokenType}}</span>\n        </div>\n        <div class=\"voteo-row\">\n          <span class=\"column key\">{{'pools.settings.minimumAmount' | translate}}</span>\n          <span class=\"column value\">{{settings?.minimumAmount}}</span>\n        </div>\n        <div class=\"voteo-row\">\n          <span class=\"column key\">{{'pools.settings.tokensPerVote' | translate}}</span>\n          <span class=\"column value\">{{settings?.tokensPerVote}}</span>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n\n  <div class=\"button-wrapper\">\n    <ng-content></ng-content>\n    <!--<button (click)=\"back()\" class=\"voteo-button\">{{'actions.back' | translate}}</button>-->\n    <!--<button (click)=\"submit()\" class=\"voteo-button\">{{'actions.submit' | translate}}</button>-->\n  </div>\n</div>\n\n<ng-template #noQuestions>\n  <div class=\"message\">\n    {{'pools.noQuestions' | translate}}\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/pool-summary/pool-summary.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/pool-summary/pool-summary.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".column {\n  display: inline-block;\n  width: 50%;\n  border-right: 1px solid #9c9da0; }\n  .column:last-child {\n    border-right: 0px; }\n  .key {\n  color: #09245d;\n  font-family: BrochaBold; }\n  .highlight .key {\n  color: #fff !important; }\n  .highlight {\n  color: #fff !important;\n  background-color: #09245d; }\n  .highlight:first-child {\n    border-top-right-radius: 9px;\n    border-top-left-radius: 9px; }\n  .value {\n  text-align: center; }\n  .header {\n  width: 100%;\n  display: block;\n  position: relative; }\n  .button-wrapper {\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .button-wrapper button:nth-child(n-1) {\n    margin-left: 10px; }\n  .voteo-table {\n  margin-bottom: 10px; }\n  .message {\n  text-align: center;\n  padding: 10px;\n  border-radius: 5px;\n  margin: 30px;\n  background-color: #edeef1;\n  border: 1px solid #5d0d0f; }\n"

/***/ }),

/***/ "./src/app/components/pool-summary/pool-summary.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/pool-summary/pool-summary.component.ts ***!
  \*******************************************************************/
/*! exports provided: PoolSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoolSummaryComponent", function() { return PoolSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PoolSummaryComponent = /** @class */ (function () {
    function PoolSummaryComponent() {
        this.onSubmitPressed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBackPressed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PoolSummaryComponent.prototype.ngOnInit = function () {
    };
    PoolSummaryComponent.prototype.submit = function () {
        this.onSubmitPressed.next();
    };
    PoolSummaryComponent.prototype.back = function () {
        this.onBackPressed.next();
    };
    Object.defineProperty(PoolSummaryComponent.prototype, "name", {
        get: function () {
            return this.questions.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PoolSummaryComponent.prototype, "openEnded", {
        get: function () {
            return this.questions.openEnded;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PoolSummaryComponent.prototype, "multiple", {
        get: function () {
            return this.questions.multiple;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PoolSummaryComponent.prototype, "options", {
        get: function () {
            return this.questions.options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PoolSummaryComponent.prototype, "questions", {
        get: function () {
            return this.pool.questions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PoolSummaryComponent.prototype, "settings", {
        get: function () {
            return this.pool.settings;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PoolSummaryComponent.prototype, "onSubmitPressed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PoolSummaryComponent.prototype, "onBackPressed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PoolSummaryComponent.prototype, "pool", void 0);
    PoolSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pool-summary',
            template: __webpack_require__(/*! ./pool-summary.component.html */ "./src/app/components/pool-summary/pool-summary.component.html"),
            styles: [__webpack_require__(/*! ./pool-summary.component.scss */ "./src/app/components/pool-summary/pool-summary.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PoolSummaryComponent);
    return PoolSummaryComponent;
}());



/***/ }),

/***/ "./src/app/components/pool-tile/pool-tile.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/pool-tile/pool-tile.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tile-wrapper\">\n  <div class=\"upper-part\">\n    <span class=\"title voteo-bold\">{{poolTitle}}</span>\n  </div>\n  <div class=\"bottom-part\">\n    <span class=\"question-count\">{{'pools.questions' | translate}}:{{numberOfQuestions}}</span>\n    <span class=\"voters\">{{'pools.voted' | translate}}: {{voted}}/{{neededVoters}}</span>\n    <div class=\"actions\">\n      <button [disabled]=\"!hasFreeVoting\" class=\"voteo-button\" (click)=\"openVoting()\">{{'pools.vote' | translate}}</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/pool-tile/pool-tile.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/pool-tile/pool-tile.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tile-wrapper {\n  border: 0.5px solid #9c9da0; }\n\n.upper-part {\n  background-color: #09245d;\n  border: 0.5px solid #09245d;\n  color: #fff; }\n\n.bottom-part {\n  position: relative;\n  display: flex;\n  width: 100%; }\n\n.bottom-part .actions {\n    width: 30%;\n    display: inline-block;\n    margin: 5px;\n    height: 28px; }\n\n.question-count {\n  display: inline-block;\n  width: 35%; }\n\n.voters {\n  width: 35%; }\n\n.title {\n  color: #fff; }\n"

/***/ }),

/***/ "./src/app/components/pool-tile/pool-tile.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/pool-tile/pool-tile.component.ts ***!
  \*************************************************************/
/*! exports provided: PoolTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoolTileComponent", function() { return PoolTileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PoolTileComponent = /** @class */ (function () {
    function PoolTileComponent(router) {
        this.router = router;
    }
    PoolTileComponent.prototype.ngOnInit = function () {
    };
    PoolTileComponent.prototype.openVoting = function () {
        if (this.hasFreeVoting) {
            this.router.navigate(["pool/" + this.pool]);
        }
    };
    Object.defineProperty(PoolTileComponent.prototype, "poolTitle", {
        get: function () {
            return (this.pool.name) ? this.pool.name : this.pool;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PoolTileComponent.prototype, "numberOfQuestions", {
        get: function () {
            return (this.pool.questionCount) ? this.pool.questionCount : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PoolTileComponent.prototype, "voted", {
        get: function () {
            return (this.pool.voted) ? this.pool.voted : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PoolTileComponent.prototype, "neededVoters", {
        get: function () {
            return (this.pool.needsVotes) ? this.pool.needsVotes : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PoolTileComponent.prototype, "hasFreeVoting", {
        get: function () {
            return true; //this.voted < this.neededVoters;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PoolTileComponent.prototype, "pool", void 0);
    PoolTileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pool-tile',
            template: __webpack_require__(/*! ./pool-tile.component.html */ "./src/app/components/pool-tile/pool-tile.component.html"),
            styles: [__webpack_require__(/*! ./pool-tile.component.scss */ "./src/app/components/pool-tile/pool-tile.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PoolTileComponent);
    return PoolTileComponent;
}());



/***/ }),

/***/ "./src/app/components/pool/pool.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/pool/pool.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pool-wrapper\">\n  <div class=\"pool-title voteo-bold\">{{pool.name}}</div>\n  <form (ngSubmit)=\"submitForm()\">\n    <div class=\"question\" *ngFor=\"let question of pool.questions\">\n      <div class=\"voteo-bold question-name\">{{question.name}}</div>\n      <div class=\"options\">\n\n        <ng-container *ngIf=\"question.multiple; else singleOption\">\n          <mat-checkbox *ngFor=\"let option of question.options\">{{option.label}}</mat-checkbox>\n        </ng-container>\n\n        <ng-template #singleOption>\n          <mat-radio-group>\n            <mat-radio-button *ngFor=\"let option of question.options\"\n                              class=\"example-margin\" [value]=\"option.label\">{{option.label}}\n            </mat-radio-button>\n          </mat-radio-group>\n        </ng-template>\n\n        <ng-container *ngIf=\"question.openEnded\">\n          <input class=\"freeText\">\n        </ng-container>\n      </div>\n    </div>\n    <div class=\"actions\">\n      <button class=\"voteo-button\">{{'actions.submit' | translate}}</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/pool/pool.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/pool/pool.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".options, mat-radio-group {\n  display: block;\n  width: 100%; }\n  .options input, mat-radio-group input {\n    display: inline-block;\n    width: 40%; }\n  mat-checkbox, mat-radio-button {\n  display: inline-block;\n  width: 40%; }\n  .actions {\n  width: 100%;\n  margin: auto;\n  text-align: center;\n  padding: 20px; }\n  .pool-title {\n  font-size: 28px; }\n  .question-name {\n  padding: 5px;\n  width: 100%;\n  color: #fff !important;\n  background-color: #e1ab05;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px; }\n  .question {\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n  margin: 10px 0px; }\n  .options {\n  padding: 10px;\n  border: 0.5px solid #9c9da0;\n  border-top: 0px; }\n"

/***/ }),

/***/ "./src/app/components/pool/pool.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/pool/pool.component.ts ***!
  \***************************************************/
/*! exports provided: PoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoolComponent", function() { return PoolComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PoolComponent = /** @class */ (function () {
    function PoolComponent(fb) {
        this.fb = fb;
    }
    PoolComponent.prototype.ngOnInit = function () {
        this.poolForm = this.fb.group({
            'id': [this.pool.id],
            questions: this.fb.array([]),
        });
    };
    PoolComponent.prototype.submitForm = function (_a) {
        var value = _a.value;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PoolComponent.prototype, "pool", void 0);
    PoolComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pool',
            template: __webpack_require__(/*! ./pool.component.html */ "./src/app/components/pool/pool.component.html"),
            styles: [__webpack_require__(/*! ./pool.component.scss */ "./src/app/components/pool/pool.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], PoolComponent);
    return PoolComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n  <div class=\"social-wrapper\">\n    <div class=\"profile-picture\">\n      <img class=\"img-fluid\" [src]=\"picture\"\n           [style.width.px]=\"pictureSize\"\n           [style.height.px]=\"pictureSize\">\n    </div>\n\n    <div class=\"name\">\n      {{name}} <span *ngIf=\"isValidated\"><img class=\"validated\" src=\"assets/img/check.png\"></span>\n    </div>\n  </div>\n  <div class=\"information\">\n    <div class=\"voteo-table\">\n      <input #cryptoAddressElement class=\"voteo-row\"\n             (click)=\"copyToClipboard()\" [(ngModel)]=\"cryptoAddress\">\n      <div class=\"voteo-row\">{{address}}</div>\n      <div class=\"voteo-row\">{{contacts}} {{'profile.contacts' | translate}}</div>\n      <div class=\"voteo-row\">{{email}}</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  border: 1px solid #e1ab05;\n  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  position: relative;\n  text-align: center; }\n\n.profile-picture {\n  padding: 10px; }\n\n.profile-picture img {\n    height: 150px;\n    width: 150px; }\n\n.name {\n  font-size: 26px; }\n\n.validated {\n  width: 26px;\n  height: 26px; }\n\n.detail {\n  display: block;\n  position: relative;\n  width: 90%;\n  margin: auto;\n  border: 1px solid #9c9da0;\n  border-radius: 10px; }\n\n.detail input {\n    border-radius: 10px 10px 0px 0px;\n    width: 100%;\n    text-align: left;\n    border: 0px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    border-bottom: 1px solid #9c9da0;\n    outline: none !important;\n    cursor: pointer; }\n\n.row {\n  display: block;\n  padding: 5px;\n  text-align: left;\n  margin: auto;\n  border-bottom: 1px solid #9c9da0;\n  word-wrap: break-word; }\n\n.row:last-child {\n    border-bottom: 0px; }\n\n.information {\n  padding: 10px 0px; }\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_pools_pools_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/pools/pools.service */ "./src/app/shared/pools/pools.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(_poolsService) {
        this._poolsService = _poolsService;
        this.pictureSize = 150;
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.copyToClipboard = function () {
        this.cryptoAddressElement.nativeElement.select();
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
    };
    Object.defineProperty(ProfileComponent.prototype, "cryptoAddress", {
        get: function () {
            return this._poolsService.address || '-';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "address", {
        get: function () {
            return this.profile.city;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "contacts", {
        get: function () {
            return this.profile.contacts;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "email", {
        get: function () {
            return this.profile.email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "isValidated", {
        get: function () {
            return this.profile.validated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "name", {
        get: function () {
            return this.profile.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "picture", {
        get: function () {
            return this.profile.picture;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cryptoAddressElement'),
        __metadata("design:type", Object)
    ], ProfileComponent.prototype, "cryptoAddressElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProfileComponent.prototype, "profile", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProfileComponent.prototype, "pictureSize", void 0);
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/components/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_pools_pools_service__WEBPACK_IMPORTED_MODULE_1__["PoolsService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/nos-wrapper/services/nos-api.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/nos-wrapper/services/nos-api.service.ts ***!
  \*********************************************************/
/*! exports provided: NosApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NosApiService", function() { return NosApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NosApiService = /** @class */ (function () {
    function NosApiService() {
        var _this = this;
        if (window.NOS) {
            this.nos = window.NOS.V1;
        }
        if (this.isConnected()) {
            this.getAddress().subscribe(function (address) {
                return _this.address = address;
            });
        }
    }
    NosApiService.prototype.isConnected = function () {
        return this.nos;
    };
    NosApiService.prototype.getAddress = function () {
        if (this.nos) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.nos.getAddress());
        }
    };
    NosApiService.prototype.getBalance = function (asset, addres) {
        //examples asset - NEO
        var NEO = 'c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b';
        var address = 'AZPkgTJixxkSFPyBZrcVpLj9nsHsPDUVkF';
        if (!addres) {
            return this.nos.getBalance({ asset: asset });
        }
        else {
            this.nos.getBalance({ asset: asset, address: address });
        }
    };
    NosApiService.prototype.testInvoke = function (scriptHash, operation, args) {
        if (this.nos) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.nos.testInvoke({ scriptHash: scriptHash, operation: operation, args: args }));
        }
    };
    NosApiService.prototype.invoke = function (scriptHash, operation, args) {
        alert(args);
        if (this.nos) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.nos.invoke({ scriptHash: scriptHash, operation: operation, args: args }));
        }
    };
    NosApiService.prototype.getStorage = function (scriptHash, key) {
        if (this.nos) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.nos.getStorage({ scriptHash: scriptHash, key: key }));
        }
    };
    NosApiService.prototype.claimGas = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.nos.claimGas());
    };
    NosApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NosApiService);
    return NosApiService;
}());



/***/ }),

/***/ "./src/app/pages/about-page/about-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/about-page/about-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/about-page/about-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/about-page/about-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/about-page/about-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/about-page/about-page.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent.prototype.ngOnInit = function () {
    };
    AboutPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-page',
            template: __webpack_require__(/*! ./about-page.component.html */ "./src/app/pages/about-page/about-page.component.html"),
            styles: [__webpack_require__(/*! ./about-page.component.scss */ "./src/app/pages/about-page/about-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact-list-page/contact-list-page.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/contact-list-page/contact-list-page.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list\">\n  <app-profile class=\"item\"\n               *ngFor=\"let contact of contacts$ | async\"\n                [profile]=\"contact\"\n                [pictureSize]=\"100\"></app-profile>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/contact-list-page/contact-list-page.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/contact-list-page/contact-list-page.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list {\n  display: flex;\n  flex-wrap: wrap; }\n  .list .item {\n    display: block;\n    width: 180px !important;\n    padding: 10px;\n    transition: all .4s;\n    -webkit-user-select: none !important;\n       -moz-user-select: none !important;\n        -ms-user-select: none !important;\n            user-select: none !important;\n    border-radius: 10px; }\n  .list .item:hover {\n      -webkit-transform: scale(1.3);\n              transform: scale(1.3);\n      z-index: 99;\n      background-color: #edeef1; }\n"

/***/ }),

/***/ "./src/app/pages/contact-list-page/contact-list-page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/contact-list-page/contact-list-page.component.ts ***!
  \************************************************************************/
/*! exports provided: ContactListPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListPageComponent", function() { return ContactListPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_contact_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/contact/contact.service */ "./src/app/shared/contact/contact.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactListPageComponent = /** @class */ (function () {
    function ContactListPageComponent(_contactService) {
        this._contactService = _contactService;
        this.contacts$ = _contactService.getContacts();
    }
    ContactListPageComponent.prototype.ngOnInit = function () {
    };
    ContactListPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-list-page',
            template: __webpack_require__(/*! ./contact-list-page.component.html */ "./src/app/pages/contact-list-page/contact-list-page.component.html"),
            styles: [__webpack_require__(/*! ./contact-list-page.component.scss */ "./src/app/pages/contact-list-page/contact-list-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_contact_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"]])
    ], ContactListPageComponent);
    return ContactListPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/create-pool-process-page/create-pool-process-page.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/create-pool-process-page/create-pool-process-page.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-horizontal-stepper [linear]=\"true\" #stepper>\n  <mat-step [stepControl]=\"questionsForm\">\n    <form>\n      <ng-template matStepLabel>{{'pools.createQuestions' | translate}}</ng-template>\n      <app-new-question-page [question]=\"currentQuestion\"\n                             [numberOfQuestions]=\"numberOfQuestions\"\n                             [currentQuestionIndex]=\"currentIndex\"\n                             (afterNextQuestionPressed)=\"setNextQuestion($event)\"\n                             (afterPreviousQuestionPressed)=\"setPreviousQuestion($event)\"\n                             (afterClickOnRemove)=\"removeCurrentQuestion($event)\"\n                             (onUpdate)=\"questionsUpdate($event)\">\n        <button class=\"voteo-button\" mat-button matStepperNext>Next</button>\n      </app-new-question-page>\n      <div>\n\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"settingsForm\">\n    <form>\n      <ng-template matStepLabel>{{'pools.poolSettings' | translate}}</ng-template>\n      <app-pool-settings (onUpdate)=\"settingUpdate($event)\">\n        <div class=\"button-wrapper\">\n          <button class=\"voteo-button\" mat-button matStepperPrevious>Back</button>\n          <button class=\"voteo-button\" mat-button matStepperNext>Next</button>\n        </div>\n      </app-pool-settings>\n    </form>\n  </mat-step>\n  <mat-step>\n    <form>\n      <ng-template matStepLabel>{{'pools.summary' | translate}}</ng-template>\n      <app-pool-summary [pool]=\"pool\"\n                        (onSubmitPressed)=\"createPool()\"\n                        (onBackPressed)=\"goToEdit()\">\n        <div class=\"button-wrapper\">\n          <button class=\"voteo-button\" mat-button matStepperPrevious>Back</button>\n          <button class=\"voteo-button\" mat-button [disabled]=\"!hasQuestions\" (click)=\"createPool()\">{{'pools.create.message' | translate}}</button>\n        </div>\n      </app-pool-summary>\n      <div>\n\n      </div>\n    </form>\n  </mat-step>\n  <!--<mat-step>-->\n    <!--<ng-template matStepLabel>{{'pools.done' | translate}}</ng-template>-->\n    <!--{{'pools.confirmation' | translate}}-->\n    <!--<div>-->\n      <!--<button mat-button matStepperPrevious>Back</button>-->\n      <!--<button mat-button [disabled]=\"!hasQuestions\" (click)=\"createPool()\">{{'pools.create.message' | translate}}</button>-->\n      <!--<button mat-button (click)=\"stepper.reset()\">Reset</button>-->\n    <!--</div>-->\n  <!--</mat-step>-->\n</mat-horizontal-stepper>\n"

/***/ }),

/***/ "./src/app/pages/create-pool-process-page/create-pool-process-page.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/create-pool-process-page/create-pool-process-page.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  color: #09245d;\n  font-size: 20px;\n  text-align: center; }\n\n.wrapper {\n  border: 1px solid #e1ab05;\n  border-radius: 5px; }\n\n.button-wrapper {\n  width: 100%;\n  justify-content: center;\n  display: flex;\n  margin: 10px; }\n\n.button-wrapper button:first-child {\n    margin-right: 5px; }\n"

/***/ }),

/***/ "./src/app/pages/create-pool-process-page/create-pool-process-page.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/create-pool-process-page/create-pool-process-page.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CreatePoolProcessPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePoolProcessPageComponent", function() { return CreatePoolProcessPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_pools_pools_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/pools/pools.service */ "./src/app/shared/pools/pools.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreatePoolProcessPageComponent = /** @class */ (function () {
    function CreatePoolProcessPageComponent(_poolsService) {
        this._poolsService = _poolsService;
        this.pool = { questions: [], settings: {} };
        this.currentIndex = 0;
        this.currentQuestion = {};
        this.waitingValidation = false;
    }
    CreatePoolProcessPageComponent.prototype.ngOnInit = function () {
        this.currentIndex = 0;
        this.currentQuestion = this.pool[this.currentIndex];
    };
    CreatePoolProcessPageComponent.prototype.continueToSummary = function (question) {
        this.pool[this.currentIndex] = question;
        this.currentQuestion = question;
        this.waitingValidation = true;
    };
    CreatePoolProcessPageComponent.prototype.goToEdit = function () {
        this.waitingValidation = false;
    };
    CreatePoolProcessPageComponent.prototype.setNextQuestion = function (question) {
        this.pool[this.currentIndex] = question;
        this.currentIndex++;
        if (this.pool[this.currentIndex]) {
            this.currentQuestion = this.pool.questions[this.currentIndex];
        }
        else {
            this.pool.questions[this.currentIndex] = {};
            this.currentQuestion = {
                'name': '',
                'openEnded': false,
                'multiple': false,
                'options': []
            };
        }
    };
    CreatePoolProcessPageComponent.prototype.setPreviousQuestion = function (question) {
        this.pool[this.currentIndex] = question;
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.currentQuestion = this.pool[this.currentIndex];
        }
    };
    CreatePoolProcessPageComponent.prototype.removeCurrentQuestion = function (index) {
        this.currentIndex--;
        // this.currentQuestion = this.pool[this.currentIndex];
        this.pool.questions.splice(index, 1);
    };
    CreatePoolProcessPageComponent.prototype.settingUpdate = function (settings) {
        this.pool.settings = settings;
        console.log(this.pool);
    };
    CreatePoolProcessPageComponent.prototype.questionsUpdate = function (questions) {
        this.pool.questions[this.currentIndex] = questions;
        console.log(this.pool);
    };
    CreatePoolProcessPageComponent.prototype.createPool = function () {
        var _this = this;
        if (this.hasQuestions) {
            console.log('create', this.pool);
            this._poolsService.createPool(this.pool).subscribe(function (result) {
                alert("USPECHH");
                // this.receivedPool = result.script.replace('\'','');
            }, function (error) { alert('NEUSPECH'); _this.error = error; });
        }
    };
    CreatePoolProcessPageComponent.prototype.getPool = function () {
        var _this = this;
        this._poolsService.getPool(1).subscribe(function (result) {
            alert('got pool');
            _this.newPool = result;
            //this.newPool = stringFromHex(result.stack[0].value);
        }, function (error) { return _this.error = error; });
    };
    CreatePoolProcessPageComponent.prototype.testStorage = function () {
        var _this = this;
        this._poolsService.testStorage().subscribe(function (result) {
            _this.testResult = result;
            console.log('rest ', result);
        }, function (error) { return console.log('ON ERROR =', error); });
    };
    CreatePoolProcessPageComponent.prototype.testInvoke = function () {
        var _this = this;
        this._poolsService.testInvoke().subscribe(function (result) {
            _this.testResult = result;
            console.log('rest ', result);
            if (result.stack) {
                _this.testResult = result;
                // this.testResult = stringFromHex(result.stack[0].value);
            }
            // this.testResult = stringFromArray(result.stack[0].value);
        }, function (error) { return console.log('ON ERROR =', error); });
    };
    Object.defineProperty(CreatePoolProcessPageComponent.prototype, "hasQuestions", {
        get: function () {
            return this.pool.questions.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreatePoolProcessPageComponent.prototype, "numberOfQuestions", {
        get: function () {
            return this.pool.questions.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    CreatePoolProcessPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-pool-process-page',
            template: __webpack_require__(/*! ./create-pool-process-page.component.html */ "./src/app/pages/create-pool-process-page/create-pool-process-page.component.html"),
            styles: [__webpack_require__(/*! ./create-pool-process-page.component.scss */ "./src/app/pages/create-pool-process-page/create-pool-process-page.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_shared_pools_pools_service__WEBPACK_IMPORTED_MODULE_1__["PoolsService"]])
    ], CreatePoolProcessPageComponent);
    return CreatePoolProcessPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/pages/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/pages/home-page/home-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/pages/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/pages/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-skelet/page-skelet.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/page-skelet/page-skelet.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content row\">\n  <div class=\"col-4\">\n    <app-profile [profile]=\"contact$ | async\"></app-profile>\n  </div>\n  <div class=\"col-8\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/page-skelet/page-skelet.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/page-skelet/page-skelet.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  width: 100%;\n  display: block;\n  position: relative; }\n\n.content {\n  margin-top: 20px;\n  padding: 10px;\n  margin-right: 15px; }\n"

/***/ }),

/***/ "./src/app/pages/page-skelet/page-skelet.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/page-skelet/page-skelet.component.ts ***!
  \************************************************************/
/*! exports provided: PageSkeletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageSkeletComponent", function() { return PageSkeletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_contact_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/contact/contact.service */ "./src/app/shared/contact/contact.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageSkeletComponent = /** @class */ (function () {
    function PageSkeletComponent(_contactService) {
        this._contactService = _contactService;
        this.contact$ = _contactService.getOwnUserInfo();
    }
    PageSkeletComponent.prototype.ngOnInit = function () {
    };
    PageSkeletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-skelet',
            template: __webpack_require__(/*! ./page-skelet.component.html */ "./src/app/pages/page-skelet/page-skelet.component.html"),
            styles: [__webpack_require__(/*! ./page-skelet.component.scss */ "./src/app/pages/page-skelet/page-skelet.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_contact_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"]])
    ], PageSkeletComponent);
    return PageSkeletComponent;
}());



/***/ }),

/***/ "./src/app/pages/pool-fill-page/pool-fill-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/pool-fill-page/pool-fill-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pool-fill-wrapper\">\n  {{pool | json}}\n  {{error | json}}\n  <app-pool [pool]=\"pool\"></app-pool>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/pool-fill-page/pool-fill-page.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/pool-fill-page/pool-fill-page.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/pool-fill-page/pool-fill-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/pool-fill-page/pool-fill-page.component.ts ***!
  \******************************************************************/
/*! exports provided: PoolFillPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoolFillPageComponent", function() { return PoolFillPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var _shared_pools_pools_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/pools/pools.service */ "./src/app/shared/pools/pools.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PoolFillPageComponent = /** @class */ (function () {
    function PoolFillPageComponent(route, _poolService) {
        this.route = route;
        this._poolService = _poolService;
        this.pool = {};
    }
    PoolFillPageComponent.prototype.ngOnInit = function () {
        // this.pool = stringFromHex(this.route.snapshot.data.pool.stack[0].value);
        var _this = this;
        this._poolService.getPoolById("1").subscribe(function (result) { return _this.pool = Object(_shared_helper__WEBPACK_IMPORTED_MODULE_2__["stringFromHex"])(result.stack[0].value); }, function (error) { return _this.error = error; });
        //this.pool = JSON.parse(stringFromHex(this.route.snapshot.data.pool.stack[0].value));
    };
    PoolFillPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pool-fill-page',
            template: __webpack_require__(/*! ./pool-fill-page.component.html */ "./src/app/pages/pool-fill-page/pool-fill-page.component.html"),
            styles: [__webpack_require__(/*! ./pool-fill-page.component.scss */ "./src/app/pages/pool-fill-page/pool-fill-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _shared_pools_pools_service__WEBPACK_IMPORTED_MODULE_3__["PoolsService"]])
    ], PoolFillPageComponent);
    return PoolFillPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/pools-page/pools-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/pools-page/pools-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pools-wrapper\">\n  <span>{{'pools.active' | translate}}</span>\n  <app-pool-tile class=\"pool-item\" *ngFor=\"let pool of pools$ | async\" [pool]=\"pool\"></app-pool-tile>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/pools-page/pools-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/pools-page/pools-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pool-item {\n  display: block;\n  padding: 5px 0px; }\n"

/***/ }),

/***/ "./src/app/pages/pools-page/pools-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/pools-page/pools-page.component.ts ***!
  \**********************************************************/
/*! exports provided: PoolsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoolsPageComponent", function() { return PoolsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_pools_pools_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/pools/pools.service */ "./src/app/shared/pools/pools.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PoolsPageComponent = /** @class */ (function () {
    function PoolsPageComponent(_poolsService) {
        this._poolsService = _poolsService;
        this.pools$ = _poolsService.getUserPools();
    }
    PoolsPageComponent.prototype.ngOnInit = function () {
    };
    PoolsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pools-page',
            template: __webpack_require__(/*! ./pools-page.component.html */ "./src/app/pages/pools-page/pools-page.component.html"),
            styles: [__webpack_require__(/*! ./pools-page.component.scss */ "./src/app/pages/pools-page/pools-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_pools_pools_service__WEBPACK_IMPORTED_MODULE_1__["PoolsService"]])
    ], PoolsPageComponent);
    return PoolsPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile-page/profile-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/profile-page/profile-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-wrapper\">\n  <div class=\"info\">\n    <div class=\"assigned\">{{'pools.youHaveGotAssigned' | translate : numberOfAssignedPools}}</div>\n    <div class=\"created\">{{'pools.youHaveCreated' | translate : numberOfCreatedPools}}</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/profile-page/profile-page.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/profile-page/profile-page.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/profile-page/profile-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/profile-page/profile-page.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfilePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageComponent", function() { return ProfilePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfilePageComponent = /** @class */ (function () {
    function ProfilePageComponent() {
        this.numberOfCreatedPools = {
            number: 20
        };
        this.numberOfAssignedPools = {
            number: 40
        };
    }
    ProfilePageComponent.prototype.ngOnInit = function () {
    };
    ProfilePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-page',
            template: __webpack_require__(/*! ./profile-page.component.html */ "./src/app/pages/profile-page/profile-page.component.html"),
            styles: [__webpack_require__(/*! ./profile-page.component.scss */ "./src/app/pages/profile-page/profile-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfilePageComponent);
    return ProfilePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/public-pools-page/public-pools-page.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/public-pools-page/public-pools-page.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pools-wrapper\">\n  <span>{{'pools.publicPools' | translate}}</span>\n  <app-pool-tile class=\"pool-item\" *ngFor=\"let pool of pools\" [pool]=\"pool\"></app-pool-tile>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/public-pools-page/public-pools-page.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/public-pools-page/public-pools-page.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pool-item {\n  display: block;\n  padding: 5px 0px; }\n"

/***/ }),

/***/ "./src/app/pages/public-pools-page/public-pools-page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/public-pools-page/public-pools-page.component.ts ***!
  \************************************************************************/
/*! exports provided: PublicPoolsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicPoolsPageComponent", function() { return PublicPoolsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_pools_pools_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/pools/pools.service */ "./src/app/shared/pools/pools.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PublicPoolsPageComponent = /** @class */ (function () {
    function PublicPoolsPageComponent(_poolsService) {
        var _this = this;
        this._poolsService = _poolsService;
        _poolsService.getAllPublic().subscribe(function (result) {
            _this.pools = [];
            // this.result = result.stack[0];
            for (var _i = 0, _a = result.stack[0].value; _i < _a.length; _i++) {
                var pool = _a[_i];
                // alert('here');
                _this.pools.push(pool.value);
            }
        }, function (error) { return _this.error = error; });
    }
    PublicPoolsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-public-pools-page',
            template: __webpack_require__(/*! ./public-pools-page.component.html */ "./src/app/pages/public-pools-page/public-pools-page.component.html"),
            styles: [__webpack_require__(/*! ./public-pools-page.component.scss */ "./src/app/pages/public-pools-page/public-pools-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_pools_pools_service__WEBPACK_IMPORTED_MODULE_1__["PoolsService"]])
    ], PublicPoolsPageComponent);
    return PublicPoolsPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/splash-screen-page/splash-screen-page.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/splash-screen-page/splash-screen-page.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  splash-screen-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/splash-screen-page/splash-screen-page.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/splash-screen-page/splash-screen-page.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/splash-screen-page/splash-screen-page.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/splash-screen-page/splash-screen-page.component.ts ***!
  \**************************************************************************/
/*! exports provided: SplashScreenPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenPageComponent", function() { return SplashScreenPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SplashScreenPageComponent = /** @class */ (function () {
    function SplashScreenPageComponent() {
    }
    SplashScreenPageComponent.prototype.ngOnInit = function () {
    };
    SplashScreenPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-splash-screen-page',
            template: __webpack_require__(/*! ./splash-screen-page.component.html */ "./src/app/pages/splash-screen-page/splash-screen-page.component.html"),
            styles: [__webpack_require__(/*! ./splash-screen-page.component.scss */ "./src/app/pages/splash-screen-page/splash-screen-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SplashScreenPageComponent);
    return SplashScreenPageComponent;
}());



/***/ }),

/***/ "./src/app/shared/Methods.ts":
/*!***********************************!*\
  !*** ./src/app/shared/Methods.ts ***!
  \***********************************/
/*! exports provided: Methods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Methods", function() { return Methods; });
var Methods = /** @class */ (function () {
    function Methods() {
    }
    Methods.scriptHash = '8ec4dc95f3960517f808bbbd3cdb8ece4b31e16d';
    // OPERATIONS HERE
    Methods.getPoolOperation = 'GetPoll';
    Methods.createPoolOperation = 'RegisterPoll';
    Methods.getPublicAll = 'GetPublicAll';
    Methods.getPoolById = 'GetPollById';
    Methods.getPools = 'ENTER_OPERATION_CODE_HERE';
    return Methods;
}());



/***/ }),

/***/ "./src/app/shared/contact/contact.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/contact/contact.service.ts ***!
  \***************************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactService = /** @class */ (function () {
    function ContactService() {
    }
    ContactService.prototype.getOwnUserInfo = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
            name: 'Kamil Bitcoach',
            city: 'Bratislava',
            contacts: 12,
            email: 'info@bitcoach.net',
            picture: 'https://pbs.twimg.com/profile_images/934317901745655809/giHHc1bR_400x400.jpg',
            validated: true
        });
    };
    ContactService.prototype.getContacts = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([
            {
                name: 'Branislav Mojsej',
                picture: '/assets/img/check.png',
                city: 'Munchen',
                contacts: 12,
                email: 'branomo@gmail.com',
                validated: true
            },
            {
                name: 'Branislav Mojsej',
                picture: '/assets/img/check.png',
                city: 'Munchen',
                contacts: 12,
                email: 'branomo@gmail.com',
                validated: true
            },
            {
                name: 'Branislav Mojsej',
                picture: '/assets/img/check.png',
                city: 'Munchen',
                contacts: 12,
                email: 'branomo@gmail.com',
                validated: true
            },
            {
                name: 'Branislav Mojsej',
                picture: '/assets/img/check.png',
                city: 'Munchen',
                contacts: 12,
                email: 'branomo@gmail.com'
            },
            {
                name: 'Branislav Mojsej',
                picture: '/assets/img/check.png',
                city: 'Munchen',
                contacts: 12,
                email: 'branomo@gmail.com'
            },
            {
                name: 'Branislav Mojsej',
                picture: '/assets/img/check.png',
                city: 'Munchen',
                contacts: 32,
                email: 'branomo@gmail.com'
            },
            {
                name: 'Branislav Mojsej',
                picture: '/assets/img/check.png',
                city: 'Munchen',
                contacts: 12,
                email: 'branomo@gmail.com'
            }, {
                name: 'Branislav Mojsej',
                picture: '/assets/img/check.png',
                city: 'Munchen',
                contacts: 920,
                email: 'branomo@gmail.com'
            }
        ]);
    };
    ContactService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/shared/helper.ts":
/*!**********************************!*\
  !*** ./src/app/shared/helper.ts ***!
  \**********************************/
/*! exports provided: stringFromArray, stringFromHex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringFromArray", function() { return stringFromArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringFromHex", function() { return stringFromHex; });
function stringFromArray(data) {
    var count = data.length;
    var str = '';
    for (var index = 0; index < count; index += 1) {
        str += String.fromCharCode(data[index]);
    }
    return str;
}
function stringFromHex(str1) {
    var hex = str1.toString();
    var str = '';
    for (var n = 0; n < hex.length; n += 2) {
        str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }
    return str;
}


/***/ }),

/***/ "./src/app/shared/localizationDatePipe/localization-date-pipe.pipe.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/localizationDatePipe/localization-date-pipe.pipe.ts ***!
  \****************************************************************************/
/*! exports provided: LocalizedDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizedDatePipe", function() { return LocalizedDatePipe; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocalizedDatePipe = /** @class */ (function () {
    function LocalizedDatePipe(translateService) {
        this.translateService = translateService;
    }
    LocalizedDatePipe.prototype.transform = function (value, pattern) {
        if (pattern === void 0) { pattern = 'mediumDate'; }
        var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"](this.translateService.currentLang);
        return datePipe.transform(value, pattern);
    };
    LocalizedDatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'localizedDate',
            pure: false
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], LocalizedDatePipe);
    return LocalizedDatePipe;
}());



/***/ }),

/***/ "./src/app/shared/pools/pool-resolver.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/pools/pool-resolver.service.ts ***!
  \*******************************************************/
/*! exports provided: PoolResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoolResolver", function() { return PoolResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pools_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pools.service */ "./src/app/shared/pools/pools.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PoolResolver = /** @class */ (function () {
    function PoolResolver(_poolsService) {
        this._poolsService = _poolsService;
    }
    PoolResolver.prototype.resolve = function (route) {
        var id = route.paramMap.get('id').toString();
        return this._poolsService.getPoolById(id);
        // return this._poolsService.getPool(route.paramMap.get('id'));
    };
    PoolResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_pools_service__WEBPACK_IMPORTED_MODULE_1__["PoolsService"]])
    ], PoolResolver);
    return PoolResolver;
}());



/***/ }),

/***/ "./src/app/shared/pools/pools.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/pools/pools.service.ts ***!
  \***********************************************/
/*! exports provided: PoolsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoolsService", function() { return PoolsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nos_wrapper_services_nos_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../nos-wrapper/services/nos-api.service */ "./src/app/nos-wrapper/services/nos-api.service.ts");
/* harmony import */ var _Methods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Methods */ "./src/app/shared/Methods.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PoolsService = /** @class */ (function () {
    function PoolsService(_nosService) {
        var _this = this;
        this._nosService = _nosService;
        if (_nosService.isConnected()) {
            _nosService.getAddress().subscribe(function (address) { return _this.address = address; });
        }
    }
    PoolsService.prototype.getUserPools = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([
            {
                name: 'What do you like?',
                questionCount: 14,
                voted: 12,
                needsVotes: 100
            },
            {
                name: 'What do you want for christmas?',
                questionCount: 14,
                voted: 80,
                needsVotes: 100
            },
            {
                name: 'What kind of person are you',
                questionCount: 20,
                voted: 120,
                needsVotes: 120
            },
        ]);
    };
    PoolsService.prototype.getPublicPools = function () {
        var publicPools = [];
        for (var i = 0; i < 100; i++) {
            publicPools.push({
                name: 'What do you like?',
                questionCount: 14,
                voted: 12,
                needsVotes: 100
            });
            publicPools.push({
                name: 'What do you want for christmas?',
                questionCount: 14,
                voted: 80,
                needsVotes: 100
            });
            publicPools.push({
                name: 'What kind of person are you',
                questionCount: 20,
                voted: 120,
                needsVotes: 120
            });
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(publicPools);
    };
    PoolsService.prototype.getPool = function (id) {
        // return of({
        //   id: 0,
        //   name: 'What do you think about yourself',
        //   questions: [{
        //     name: 'kto si',
        //     'openEnded': false,
        //     'multiple': false,
        //     'options': [
        //       {'label': 'ja'},
        //       {'label': 'ty'},
        //       {'label': 'on'},
        //     ]
        //   },{
        //       name: 'where have you been',
        //       'openEnded': true,
        //       'multiple': true,
        //       'options': [
        //         {'label': 'ja'},
        //         {'label': 'ty'},
        //         {'label': 'on'},
        //       ]
        //     }]
        // });
        // return this._nosService.getStorage(
        //   Methods.scriptHash,
        //   'poll'
        // );
        return this._nosService.testInvoke(_Methods__WEBPACK_IMPORTED_MODULE_2__["Methods"].scriptHash, _Methods__WEBPACK_IMPORTED_MODULE_2__["Methods"].getPoolOperation, ['eqweqw']);
    };
    PoolsService.prototype.getAllPublic = function () {
        return this._nosService.testInvoke(_Methods__WEBPACK_IMPORTED_MODULE_2__["Methods"].scriptHash, _Methods__WEBPACK_IMPORTED_MODULE_2__["Methods"].getPublicAll, [this._nosService.address]);
    };
    PoolsService.prototype.getPoolById = function (id) {
        return this._nosService.testInvoke(_Methods__WEBPACK_IMPORTED_MODULE_2__["Methods"].scriptHash, _Methods__WEBPACK_IMPORTED_MODULE_2__["Methods"].getPoolById, [this._nosService.address, id]);
    };
    PoolsService.prototype.createPool = function (poolParams) {
        return this._nosService.invoke(_Methods__WEBPACK_IMPORTED_MODULE_2__["Methods"].scriptHash, _Methods__WEBPACK_IMPORTED_MODULE_2__["Methods"].createPoolOperation, [this._nosService.address, JSON.stringify(poolParams), '']);
    };
    PoolsService.prototype.getPoolInvoke = function (script) {
        return this._nosService.invoke(script, _Methods__WEBPACK_IMPORTED_MODULE_2__["Methods"].createPoolOperation, ['dsajdksajkasdjskksksajdaskjsadkdjaskLUKAS', 'LUKAS']);
    };
    PoolsService.prototype.testStorage = function () {
        return this._nosService.getStorage('9a309cfe03cead5b653bbb11f68ff6beced8f031', 'bucket.neo.target');
    };
    PoolsService.prototype.testInvoke = function () {
        return this._nosService.testInvoke('9a309cfe03cead5b653bbb11f68ff6beced8f031', 'GetDomain', ['AK2nJJpJr6o664CWJKi1QRXjqeic2zRp8y', 'bucket.neo']);
    };
    PoolsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_nos_wrapper_services_nos_api_service__WEBPACK_IMPORTED_MODULE_1__["NosApiService"]])
    ], PoolsService);
    return PoolsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sevcik/Documents/Projects/voteo2/skyrow.github.io/voteo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map