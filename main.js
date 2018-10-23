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
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngxs/storage-plugin */ "./node_modules/@ngxs/storage-plugin/fesm5/ngxs-storage-plugin.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_sk__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/locales/sk */ "./node_modules/@angular/common/locales/sk.js");
/* harmony import */ var _angular_common_locales_sk__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_sk__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _nos_wrapper_services_nos_api_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./nos-wrapper/services/nos-api.service */ "./src/app/nos-wrapper/services/nos-api.service.ts");
/* harmony import */ var _components_pool_summary_pool_summary_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pool-summary/pool-summary.component */ "./src/app/components/pool-summary/pool-summary.component.ts");
/* harmony import */ var _pages_create_pool_process_page_create_pool_process_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/create-pool-process-page/create-pool-process-page.component */ "./src/app/pages/create-pool-process-page/create-pool-process-page.component.ts");
/* harmony import */ var _pages_splash_screen_page_splash_screen_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/splash-screen-page/splash-screen-page.component */ "./src/app/pages/splash-screen-page/splash-screen-page.component.ts");
/* harmony import */ var _pages_contact_list_page_contact_list_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/contact-list-page/contact-list-page.component */ "./src/app/pages/contact-list-page/contact-list-page.component.ts");
/* harmony import */ var _pages_pools_page_pools_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/pools-page/pools-page.component */ "./src/app/pages/pools-page/pools-page.component.ts");
/* harmony import */ var _components_pool_tile_pool_tile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/pool-tile/pool-tile.component */ "./src/app/components/pool-tile/pool-tile.component.ts");
/* harmony import */ var _pages_pool_fill_page_pool_fill_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/pool-fill-page/pool-fill-page.component */ "./src/app/pages/pool-fill-page/pool-fill-page.component.ts");
/* harmony import */ var _components_pool_pool_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/pool/pool.component */ "./src/app/components/pool/pool.component.ts");
/* harmony import */ var _pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/profile-page/profile-page.component */ "./src/app/pages/profile-page/profile-page.component.ts");
/* harmony import */ var _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/about-page/about-page.component */ "./src/app/pages/about-page/about-page.component.ts");
/* harmony import */ var _pages_changelog_page_changelog_page_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/changelog-page/changelog-page.component */ "./src/app/pages/changelog-page/changelog-page.component.ts");
/* harmony import */ var _components_language_selector_language_selector_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/language-selector/language-selector.component */ "./src/app/components/language-selector/language-selector.component.ts");
/* harmony import */ var _components_pool_settings_pool_settings_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/pool-settings/pool-settings.component */ "./src/app/components/pool-settings/pool-settings.component.ts");
/* harmony import */ var _shared_localizationDatePipe_localization_date_pipe_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shared/localizationDatePipe/localization-date-pipe.pipe */ "./src/app/shared/localizationDatePipe/localization-date-pipe.pipe.ts");
/* harmony import */ var _pages_polls_result_polls_result_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/polls-result/polls-result.component */ "./src/app/pages/polls-result/polls-result.component.ts");
/* harmony import */ var _components_poll_result_poll_result_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/poll-result/poll-result.component */ "./src/app/components/poll-result/poll-result.component.ts");
/* harmony import */ var _components_create_question_create_question_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/create-question/create-question.component */ "./src/app/components/create-question/create-question.component.ts");
/* harmony import */ var _components_contact_add_dialog_contact_add_dialog_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/contact-add-dialog/contact-add-dialog.component */ "./src/app/components/contact-add-dialog/contact-add-dialog.component.ts");
/* harmony import */ var _shared_pools_pools_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./shared/pools/pools.service */ "./src/app/shared/pools/pools.service.ts");
/* harmony import */ var _shared_pools_polls_state__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./shared/pools/polls.state */ "./src/app/shared/pools/polls.state.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_page_skelet_page_skelet_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/page-skelet/page-skelet.component */ "./src/app/pages/page-skelet/page-skelet.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_pool_actions_pool_actions_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/pool-actions/pool-actions.component */ "./src/app/components/pool-actions/pool-actions.component.ts");
/* harmony import */ var _components_pool_action_element_pool_action_element_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/pool-action-element/pool-action-element.component */ "./src/app/components/pool-action-element/pool-action-element.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_new_question_page_new_question_page_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/new-question-page/new-question-page.component */ "./src/app/components/new-question-page/new-question-page.component.ts");
/* harmony import */ var _nos_wrapper_nos_wrapper_module__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./nos-wrapper/nos-wrapper.module */ "./src/app/nos-wrapper/nos-wrapper.module.ts");
/* harmony import */ var _components_profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/profile-detail/profile-detail.component */ "./src/app/components/profile-detail/profile-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














































Object(_angular_common__WEBPACK_IMPORTED_MODULE_12__["registerLocaleData"])(_angular_common_locales_sk__WEBPACK_IMPORTED_MODULE_13___default.a);
function HttpLoaderFactory(http) {
    // return new TranslateHttpLoader(http);
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_35__["AppComponent"],
                _pages_page_skelet_page_skelet_component__WEBPACK_IMPORTED_MODULE_36__["PageSkeletComponent"],
                _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_37__["PageNotFoundComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_38__["HeaderComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_39__["ProfileComponent"],
                _components_pool_actions_pool_actions_component__WEBPACK_IMPORTED_MODULE_40__["PoolActionsComponent"],
                _components_pool_action_element_pool_action_element_component__WEBPACK_IMPORTED_MODULE_41__["PoolActionElementComponent"],
                _components_new_question_page_new_question_page_component__WEBPACK_IMPORTED_MODULE_43__["NewQuestionPageComponent"],
                _components_pool_summary_pool_summary_component__WEBPACK_IMPORTED_MODULE_15__["PoolSummaryComponent"],
                _pages_create_pool_process_page_create_pool_process_page_component__WEBPACK_IMPORTED_MODULE_16__["CreatePoolProcessPageComponent"],
                _pages_splash_screen_page_splash_screen_page_component__WEBPACK_IMPORTED_MODULE_17__["SplashScreenPageComponent"],
                _pages_contact_list_page_contact_list_page_component__WEBPACK_IMPORTED_MODULE_18__["ContactListPageComponent"],
                _pages_pools_page_pools_page_component__WEBPACK_IMPORTED_MODULE_19__["PoolsPageComponent"],
                _components_pool_tile_pool_tile_component__WEBPACK_IMPORTED_MODULE_20__["PoolTileComponent"],
                _pages_pool_fill_page_pool_fill_page_component__WEBPACK_IMPORTED_MODULE_21__["PoolFillPageComponent"],
                _components_pool_pool_component__WEBPACK_IMPORTED_MODULE_22__["PoolComponent"],
                _pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_23__["ProfilePageComponent"],
                _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_24__["AboutPageComponent"],
                _pages_changelog_page_changelog_page_component__WEBPACK_IMPORTED_MODULE_25__["ChangelogPageComponent"],
                _components_language_selector_language_selector_component__WEBPACK_IMPORTED_MODULE_26__["LanguageSelectorComponent"],
                _components_pool_settings_pool_settings_component__WEBPACK_IMPORTED_MODULE_27__["PoolSettingsComponent"],
                _shared_localizationDatePipe_localization_date_pipe_pipe__WEBPACK_IMPORTED_MODULE_28__["LocalizedDatePipe"],
                _pages_polls_result_polls_result_component__WEBPACK_IMPORTED_MODULE_29__["PollsResultPageComponent"],
                _components_poll_result_poll_result_component__WEBPACK_IMPORTED_MODULE_30__["PollResultComponent"],
                _components_create_question_create_question_component__WEBPACK_IMPORTED_MODULE_31__["CreateQuestionComponent"],
                _components_contact_add_dialog_contact_add_dialog_component__WEBPACK_IMPORTED_MODULE_32__["ContactAddDialogComponent"],
                _components_profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_45__["ProfileDetailComponent"]
            ],
            imports: [
                primeng_chart__WEBPACK_IMPORTED_MODULE_10__["ChartModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_42__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _nos_wrapper_nos_wrapper_module__WEBPACK_IMPORTED_MODULE_44__["NosWrapperModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_3__["appRoutes"], { useHash: true }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_42__["FormsModule"],
                _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["NgxsModule"].forRoot([
                    _shared_pools_polls_state__WEBPACK_IMPORTED_MODULE_34__["PollsState"]
                ]),
                _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_11__["NgxsStoragePluginModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                    }
                }),
            ],
            providers: [
                _nos_wrapper_services_nos_api_service__WEBPACK_IMPORTED_MODULE_14__["NosApiService"],
                _shared_pools_pools_service__WEBPACK_IMPORTED_MODULE_33__["PoolsService"],
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], useClass: _angular_material__WEBPACK_IMPORTED_MODULE_8__["NativeDateAdapter"]
                },
            ],
            entryComponents: [_components_contact_add_dialog_contact_add_dialog_component__WEBPACK_IMPORTED_MODULE_32__["ContactAddDialogComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_35__["AppComponent"]]
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
/* harmony import */ var _pages_pool_fill_page_pool_fill_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/pool-fill-page/pool-fill-page.component */ "./src/app/pages/pool-fill-page/pool-fill-page.component.ts");
/* harmony import */ var _shared_pools_pool_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/pools/pool-resolver.service */ "./src/app/shared/pools/pool-resolver.service.ts");
/* harmony import */ var _pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/profile-page/profile-page.component */ "./src/app/pages/profile-page/profile-page.component.ts");
/* harmony import */ var _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/about-page/about-page.component */ "./src/app/pages/about-page/about-page.component.ts");
/* harmony import */ var _pages_changelog_page_changelog_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/changelog-page/changelog-page.component */ "./src/app/pages/changelog-page/changelog-page.component.ts");
/* harmony import */ var _shared_pools_pollListType__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/pools/pollListType */ "./src/app/shared/pools/pollListType.ts");
/* harmony import */ var _pages_polls_result_polls_result_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/polls-result/polls-result.component */ "./src/app/pages/polls-result/polls-result.component.ts");













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
                component: _pages_pools_page_pools_page_component__WEBPACK_IMPORTED_MODULE_5__["PoolsPageComponent"],
                data: { type: _shared_pools_pollListType__WEBPACK_IMPORTED_MODULE_11__["PollListType"].PRIVATE_LIST, animation: 'PollPage' }
            },
            {
                path: 'ownPools',
                component: _pages_pools_page_pools_page_component__WEBPACK_IMPORTED_MODULE_5__["PoolsPageComponent"],
                data: { type: _shared_pools_pollListType__WEBPACK_IMPORTED_MODULE_11__["PollListType"].OWN_LIST, animation: 'PollPage' }
            },
            {
                path: 'publicPools',
                component: _pages_pools_page_pools_page_component__WEBPACK_IMPORTED_MODULE_5__["PoolsPageComponent"],
                data: { type: _shared_pools_pollListType__WEBPACK_IMPORTED_MODULE_11__["PollListType"].PUBLIC_LIST, animation: 'PollPage' }
            },
            {
                path: 'pool/:id',
                component: _pages_pool_fill_page_pool_fill_page_component__WEBPACK_IMPORTED_MODULE_6__["PoolFillPageComponent"],
                resolve: { pool: _shared_pools_pool_resolver_service__WEBPACK_IMPORTED_MODULE_7__["PoolResolver"] }
            },
            {
                path: 'result/:id',
                component: _pages_polls_result_polls_result_component__WEBPACK_IMPORTED_MODULE_12__["PollsResultPageComponent"],
                resolve: { pool: _shared_pools_pool_resolver_service__WEBPACK_IMPORTED_MODULE_7__["PoolResolver"] }
            },
            {
                path: 'profile',
                component: _pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_8__["ProfilePageComponent"]
            }
        ]
    },
    {
        path: 'about',
        component: _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_9__["AboutPageComponent"]
    },
    {
        path: 'changelog',
        component: _pages_changelog_page_changelog_page_component__WEBPACK_IMPORTED_MODULE_10__["ChangelogPageComponent"]
    },
    {
        path: '**',
        component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__["PageNotFoundComponent"]
    }
];


/***/ }),

/***/ "./src/app/components/contact-add-dialog/contact-add-dialog.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/contact-add-dialog/contact-add-dialog.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3>{{'actions.createContact' | translate}}</h3>\n  <form class=\"add-wrapper\" [formGroup]=\"contactForm\" (submit)=\"saveContact()\">\n    <mat-form-field class=\"question-name\">\n      <input matInput [placeholder]=\"'profile.name' | translate\" formControlName=\"name\">\n    </mat-form-field>\n    <mat-form-field class=\"question-name\">\n      <input matInput [placeholder]=\"'profile.location' | translate\" formControlName=\"city\">\n    </mat-form-field>\n    <mat-form-field class=\"question-name\">\n      <input matInput [placeholder]=\"'profile.address' | translate\" formControlName=\"address\">\n    </mat-form-field>\n    <mat-form-field class=\"question-name\">\n      <input type=\"email\" matInput [placeholder]=\"'profile.email' | translate\" formControlName=\"email\">\n    </mat-form-field>\n    <button [disabled]=\"contactForm.invalid\" class=\"voteo-button\" type=\"submit\">{{'actions.save' | translate}}</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/contact-add-dialog/contact-add-dialog.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/contact-add-dialog/contact-add-dialog.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-wrapper {\n  display: flex;\n  flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/components/contact-add-dialog/contact-add-dialog.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/contact-add-dialog/contact-add-dialog.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ContactAddDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactAddDialogComponent", function() { return ContactAddDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_contact_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/contact/contact.service */ "./src/app/shared/contact/contact.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactAddDialogComponent = /** @class */ (function () {
    function ContactAddDialogComponent(_contactService, _dialogRef, fb) {
        this._contactService = _contactService;
        this._dialogRef = _dialogRef;
        this.fb = fb;
        this.contactForm = fb.group({
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: [''],
            city: ['']
        });
    }
    ContactAddDialogComponent.prototype.ngOnInit = function () {
    };
    ContactAddDialogComponent.prototype.saveContact = function () {
        this._contactService.addContact(this.contactForm.value);
        this._dialogRef.close();
    };
    ContactAddDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-add-dialog',
            template: __webpack_require__(/*! ./contact-add-dialog.component.html */ "./src/app/components/contact-add-dialog/contact-add-dialog.component.html"),
            styles: [__webpack_require__(/*! ./contact-add-dialog.component.scss */ "./src/app/components/contact-add-dialog/contact-add-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_contact_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ContactAddDialogComponent);
    return ContactAddDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/create-question/create-question.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/create-question/create-question.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  create-question works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/create-question/create-question.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/create-question/create-question.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/create-question/create-question.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/create-question/create-question.component.ts ***!
  \*************************************************************************/
/*! exports provided: CreateQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateQuestionComponent", function() { return CreateQuestionComponent; });
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

var CreateQuestionComponent = /** @class */ (function () {
    function CreateQuestionComponent() {
    }
    CreateQuestionComponent.prototype.ngOnInit = function () {
    };
    CreateQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-question',
            template: __webpack_require__(/*! ./create-question.component.html */ "./src/app/components/create-question/create-question.component.html"),
            styles: [__webpack_require__(/*! ./create-question.component.scss */ "./src/app/components/create-question/create-question.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateQuestionComponent);
    return CreateQuestionComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"wrapper d-flex flex-row justify-content-between\">\n  <div class=\"d-flex align-items-center\">\n    <div class=\"logo-wrapper\">\n      <img routerLink=\"/\" class=\"logo\" src=\"assets/img/voteologobiele.png\">\n    </div>\n    <!--<span  class=\"item\">{{'header.profile' | translate}}</span>-->\n    <span routerLink=\"/contacts\" class=\"item\">{{'header.contactList' | translate}}</span>\n    <span routerLink=\"/changelog\" class=\"item\">Changelog</span>\n    <span routerLink=\"/about\" class=\"item\">{{'header.about' | translate}}<span class=\"gold\">{{'header.title' | translate}}</span></span>\n  </div>\n  <app-profile-detail>\n    <div class=\"align-items-center\">\n      <div routerLink=\"/profile\" class=\"user\">\n        <div class=\"img-wrapper\">\n          <img class=\"rounded-circle\" src=\"/assets/img/siluette.png\">\n        </div>\n        <div class=\"details\">\n          <!--<span class=\"gold\">Kamil bitcoach</span>-->\n          <span class=\"gold\">{{address}}</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"language-selector align-items-center\">\n      <app-language-selector\n        [languages]=\"languages\"\n        [selectedLanguage]=\"selectedLanguage\"\n        (onSelectChange)=\"changeLanguage($event)\">\n      </app-language-selector>\n    </div>\n  </app-profile-detail>\n</header>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-wrapper {\n  float: left;\n  margin: 5px 35px 5px 0;\n  cursor: pointer; }\n  .logo-wrapper .name {\n    font-size: 32px;\n    color: #e1ab05; }\n  .gold {\n  color: #e1ab05; }\n  .menu {\n  display: flex;\n  align-items: center;\n  color: white; }\n  .address {\n  color: black; }\n  .item {\n  cursor: pointer;\n  font-size: 18px;\n  padding: 10px 25px; }\n  .item:hover {\n    color: #a1d0c5; }\n  .user {\n  display: flex;\n  float: right;\n  padding-right: 10px;\n  height: 100%;\n  position: relative;\n  justify-content: center;\n  cursor: pointer; }\n  .user span {\n    text-align: left; }\n  .bitcoach-menu {\n  display: flex;\n  align-items: center; }\n  .wrapper {\n  color: #fff;\n  padding: 0 30px;\n  height: 60px;\n  background: #2575fc; }\n  .col-4, span {\n  outline: none !important; }\n  mat-select {\n  border: 0px; }\n  mat-form-field {\n  display: block; }\n  mat-form-field .mat-select-value-text {\n    color: #fff !important; }\n  .language {\n  margin: auto; }\n  .language-wrapper {\n  margin: auto;\n  display: inline-block; }\n  .logo {\n  height: 50px; }\n  app-profile-detail {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  app-profile-detail .details {\n    margin: 3px;\n    display: flex;\n    flex-direction: column; }\n  .language-selector {\n  float: right;\n  padding: 10px; }\n  .img-wrapper {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .img-wrapper img {\n    background-color: white;\n    width: 45px;\n    height: 45px;\n    padding: 2px; }\n"

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

module.exports = ".selected {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .selected:hover {\n    color: #a1d0c5; }\n  .panel {\n  display: block;\n  position: absolute;\n  z-index: 99;\n  transition: all 1s;\n  overflow: hidden;\n  right: 0; }\n  .panel.closed {\n    max-height: 0px; }\n  .language-panel {\n  display: block;\n  cursor: pointer;\n  background-color: #fff;\n  padding: 10px; }\n  .language-panel .item {\n    cursor: pointer;\n    color: #09245d;\n    padding: 5px; }\n  .language-panel .item:hover {\n      color: #a1d0c5; }\n"

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

module.exports = "<div class=\"content\">\n  <div class=\"wrapper\">\n    <form [formGroup]=\"createQuestionForm\">\n      <span (click)=\"removeCurrentQuestion()\" class=\"remove\">X</span>\n      <!--<div class=\"title voteo-bold\">{{'pools.question' | translate}}</div>-->\n      <mat-form-field class=\"question-name\">\n        <input matInput [placeholder]=\"'pools.question' | translate\" formControlName=\"name\">\n      </mat-form-field>\n      <div class=\"parameters\">\n        <mat-slide-toggle class=\"param\" formControlName=\"openEnded\">\n          <span class=\"label voteo-bold\">{{'pools.create.openEnded' | translate}}</span>\n          <span class=\"hint\">{{'pools.create.openEndedHint' | translate}}</span>\n        </mat-slide-toggle>\n        <mat-slide-toggle class=\"param\" formControlName=\"multiple\">\n          <span class=\"label voteo-bold\">{{'pools.create.multiple' | translate}}</span>\n        </mat-slide-toggle>\n      </div>\n\n      <fieldset formArrayName=\"options\">\n        <button class=\"voteo-button add-option\" type=\"button\" (click)=\"addOption()\">\n          <mat-icon>subject</mat-icon> {{'pools.create.addOption' | translate}}\n        </button>\n        <div class=\"\" *ngFor=\"let option of options.controls; let j=index\"\n             [formGroupName]=\"j\">\n          <div class=\"option\">\n            <span class=\"label\">{{'pools.create.option' | translate}} {{j+1}}:</span>\n            <input class=\"question-name\" formControlName=\"label\">\n            <span class=\"remove\" (click)=\"removeOption(j)\">X</span>\n          </div>\n        </div>\n      </fieldset>\n\n      <div class=\"submit\">\n        <ng-content></ng-content>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/new-question-page/new-question-page.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/new-question-page/new-question-page.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".question-name {\n  width: 100%; }\n\nform {\n  margin: 0px 20px 10px 20px; }\n\nmat-slide-toggle {\n  font-size: 14px;\n  color: #09245d; }\n\n.wrapper {\n  margin: 0px 20px;\n  z-index: 100; }\n\n.parameters .param {\n  padding: 10px 30px; }\n\n.parameters .label {\n  padding-left: 10px; }\n\n.option {\n  display: flex;\n  padding-bottom: 5px; }\n\n.option .label {\n    font-size: 12px;\n    width: 15%;\n    margin: auto; }\n\n.option input {\n    width: 85%; }\n\n.option .remove {\n    padding-left: 5px; }\n\n.submit {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  width: 100%; }\n\n.submit button {\n    margin: 5px; }\n\n.add-option {\n  font-size: 12px;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  margin: 10px; }\n\n.left {\n  font-size: 32px;\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  left: -25px;\n  border-bottom-left-radius: 25px;\n  border-top-left-radius: 25px;\n  width: 40px;\n  display: flex;\n  justify-content: center;\n  border-right: 0px !important;\n  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2); }\n\n.right {\n  font-size: 32px;\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  right: -22px;\n  border-bottom-right-radius: 25px;\n  border-top-right-radius: 25px;\n  width: 40px;\n  display: flex;\n  justify-content: center;\n  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2); }\n\n.switch-btn {\n  background-color: white;\n  color: #09245d;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.switch-btn:hover {\n    background-color: rgba(48, 61, 144, 0.1); }\n\n.content {\n  position: relative; }\n\n.remove {\n  float: right;\n  font-size: 16px;\n  cursor: pointer; }\n\n.remove:hover {\n    color: #5d0d0f;\n    font-weight: bolder; }\n"

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
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
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
    function NewQuestionPageComponent(fb, _el) {
        this.fb = fb;
        this._el = _el;
        this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.afterClickOnRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.optionIndex = 0;
        this.initForm();
    }
    NewQuestionPageComponent.prototype.ngAfterViewInit = function () {
        this._el.nativeElement.scrollIntoView({
            behavior: 'smooth'
        });
    };
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
    NewQuestionPageComponent.prototype.removeOption = function (index) {
        this.options.removeAt(index);
    };
    NewQuestionPageComponent.prototype.initForm = function () {
        var _this = this;
        this.optionIndex = 0;
        this.createQuestionForm = this.fb.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'openEnded': [false],
            'multiple': [false],
            'options': this.fb.array([])
        });
        this.createQuestionForm.valueChanges.subscribe(function (questions) {
            _this.onUpdate.emit({ form: _this.createQuestionForm, questions: questions });
        });
    };
    NewQuestionPageComponent.prototype.addOption = function (label) {
        if (label === void 0) { label = ''; }
        var option = this.fb.group({
            'id': [Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])()],
            'label': [label, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.optionIndex++;
        this.options.push(option);
    };
    NewQuestionPageComponent.prototype.removeCurrentQuestion = function () {
        this.afterClickOnRemove.next();
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
        set: function (options) {
            this.createQuestionForm.get('options').setValue(options);
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
            styles: [__webpack_require__(/*! ./new-question-page.component.scss */ "./src/app/components/new-question-page/new-question-page.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NewQuestionPageComponent);
    return NewQuestionPageComponent;
}());



/***/ }),

/***/ "./src/app/components/poll-result/poll-result.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/poll-result/poll-result.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-chart [type]=\"chartType\" [options]=\"chartOptions\" [data]=\"data\"></p-chart>\n"

/***/ }),

/***/ "./src/app/components/poll-result/poll-result.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/poll-result/poll-result.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/poll-result/poll-result.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/poll-result/poll-result.component.ts ***!
  \*****************************************************************/
/*! exports provided: PollResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PollResultComponent", function() { return PollResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_pools_pools_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/pools/pools.service */ "./src/app/shared/pools/pools.service.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PollResultComponent = /** @class */ (function () {
    function PollResultComponent(_pollsService) {
        this._pollsService = _pollsService;
        this.chartType = 'pie';
        this.labels = [];
        this.dataset = [];
        this.results = {};
    }
    PollResultComponent.prototype.switchChartType = function () {
        this.chartType = this.chartType === 'pie' ? 'bar' : 'pie';
        this.setUpPie();
    };
    PollResultComponent.prototype.setUpPie = function () {
        if (this.chartType === 'pie') {
            this.chartOptions = {
                legend: {
                    position: 'top'
                }
            };
        }
        else {
            this.chartOptions = {
                legend: {
                    position: 'none'
                }
            };
        }
        this.data = __assign({}, this.data);
    };
    PollResultComponent.prototype.ngOnChanges = function (changes) {
        if (changes.chartType) {
            this.setUpPie();
        }
    };
    PollResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _loop_1 = function (option) {
            this_1._pollsService.getOptionResult(this_1.poll.id, option.id).subscribe(function (result) {
                _this.labels.push(option.label);
                _this.dataset.push(result.stack[0].value);
                _this.data = {
                    labels: _this.labels,
                    datasets: [
                        {
                            data: _this.dataset,
                            backgroundColor: [
                                '#FF6384',
                                '#36A2EB',
                                '#FFCE56'
                            ],
                            hoverBackgroundColor: [
                                '#FF6384',
                                '#36A2EB',
                                '#FFCE56'
                            ]
                        }
                    ]
                };
                _this.chartOptions = {
                    legend: {
                        position: 'top'
                    }
                },
                    function (error) { return alert(error); };
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var option = _a[_i];
            _loop_1(option);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PollResultComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PollResultComponent.prototype, "poll", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PollResultComponent.prototype, "chartType", void 0);
    PollResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-poll-result',
            template: __webpack_require__(/*! ./poll-result.component.html */ "./src/app/components/poll-result/poll-result.component.html"),
            styles: [__webpack_require__(/*! ./poll-result.component.scss */ "./src/app/components/poll-result/poll-result.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_pools_pools_service__WEBPACK_IMPORTED_MODULE_1__["PoolsService"]])
    ], PollResultComponent);
    return PollResultComponent;
}());



/***/ }),

/***/ "./src/app/components/pool-action-element/pool-action-element.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/pool-action-element/pool-action-element.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"action-wrapper\" (click)=\"redirectToPage()\" [ngClass]=\"{'hovered': hovered || isHovered}\">\n  <mat-card-content class=\"content\">\n    <div class=\"icon\">\n      <img class=\"img-fluid\" [src]=\"picture\">\n    </div>\n\n    <div class=\"action-name voteo-bold\">\n      {{label | translate}}\n    </div>\n\n    <div class=\"details\">\n      <ng-content></ng-content>\n    </div>\n\n    <!--<div class=\"button-wrapper\">-->\n      <!--<button (click)=\"redirectToPage()\" class=\"voteo-bold\">{{'actions.viewAll' | translate}}</button>-->\n    <!--</div>-->\n  </mat-card-content>\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/components/pool-action-element/pool-action-element.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/pool-action-element/pool-action-element.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".action-wrapper {\n  display: block;\n  margin: 2px;\n  cursor: pointer;\n  background-color: #edeef1;\n  text-align: center;\n  height: 100%;\n  transition: -webkit-transform .3s;\n  transition: transform .3s;\n  transition: transform .3s, -webkit-transform .3s; }\n  .action-wrapper.hovered {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n    box-shadow: 0px 0px 10px 0px #e1ab05;\n    z-index: 9999999999;\n    background-color: white !important; }\n  .action-name {\n  font-size: 20px;\n  color: #09245d; }\n  .content {\n  padding-bottom: 10px;\n  height: 100%; }\n  img {\n  height: 150px;\n  margin: 60px 0px; }\n  button {\n  cursor: pointer;\n  border: 1px solid #09245d;\n  border-radius: 2px;\n  box-shadow: 1px rgba(0, 0, 0, 0.2);\n  color: #09245d;\n  background: linear-gradient(to right, #fff, rgba(48, 61, 144, 0.1)); }\n  button:hover {\n    color: #fff;\n    background: linear-gradient(to right, #303d90, #09245d); }\n"

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
    PoolActionElementComponent.prototype.ngOnChanges = function (changes) {
        if (changes.isHovered) {
            if (this.isHovered) {
                this.index = 100000;
            }
            else {
                this.index = 10;
            }
        }
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PoolActionElementComponent.prototype, "isHovered", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.zIndex'),
        __metadata("design:type", Object)
    ], PoolActionElementComponent.prototype, "index", void 0);
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

module.exports = "<div class=\"title\">\n  <h1>{{'voteo.title' | translate}}</h1>\n</div>\n\n<div class=\"actions row\">\n  <app-pool-action-element\n    (mouseover)=\"onMouseOverItem(0)\"\n    [isHovered]=\"hoveredItem === 0\"\n    [picture]=\"'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZlggA4RAvHkDD1nPAUczniJr_ts8zpECLEFWayyzxaPwIhPPXQ'\"\n    [label]=\"'pools.types.add'\"\n    [redirectLink]=\"'/create'\"\n    class=\"col-md-3 action\">\n    {{'pools.clickAdd' | translate}}\n  </app-pool-action-element>\n\n  <app-pool-action-element\n    (mouseover)=\"onMouseOverItem(1)\"\n    [isHovered]=\"hoveredItem === 1\"\n    [picture]=\"'assets/img/pools.png'\"\n    [label]=\"'pools.types.create'\"\n    [redirectLink]=\"'/ownPools'\"\n    class=\"col-md-3 action\">\n\n    <div>{{'pools.your' | translate: numberOfOwnPolls}}</div>\n  </app-pool-action-element>\n\n  <app-pool-action-element\n    (mouseover)=\"onMouseOverItem(2)\"\n    [isHovered]=\"hoveredItem === 2\"\n    [picture]=\"'assets/img/vote.png'\"\n    [label]=\"'pools.types.vote'\"\n    [redirectLink]=\"'/pools'\"\n    class=\"col-md-3 action\">\n    {{'pools.noPending' | translate: numberOfPrivatePollsCount}}\n  </app-pool-action-element>\n\n  <app-pool-action-element\n    (mouseover)=\"onMouseOverItem(3)\"\n    [isHovered]=\"hoveredItem === 3\"\n    [picture]=\"'assets/img/public_pools.png'\"\n    [label]=\"'pools.types.public'\" class=\"col-md-3 action\"\n    [redirectLink]=\"'/publicPools'\">\n    {{'pools.public' | translate: numberOfPublicPools}}\n  </app-pool-action-element>\n</div>\n"

/***/ }),

/***/ "./src/app/components/pool-actions/pool-actions.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/pool-actions/pool-actions.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  position: relative; }\n\n.action {\n  padding: 0 !important;\n  transition: all .3s; }\n\n.actions {\n  margin: 0px 0px 0px 20px; }\n\n.title {\n  padding: 40px;\n  margin: auto;\n  text-align: center; }\n\n.create {\n  display: flex;\n  cursor: pointer;\n  justify-content: center;\n  align-items: center; }\n\n.create mat-icon {\n    font-size: 22px;\n    color: #09245d; }\n\n.create .text:hover {\n    color: #09245d;\n    text-decoration: underline; }\n"

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
/* harmony import */ var _shared_pools_pools_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/pools/pools.service */ "./src/app/shared/pools/pools.service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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
    function PoolActionsComponent(router, _pollService) {
        this.router = router;
        this._pollService = _pollService;
        this.isMouseOutside = true;
        this.hoveredItem = 2;
        this.items = [
            {
                picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZlggA4RAvHkDD1nPAUczniJr_ts8zpECLEFWayyzxaPwIhPPXQ',
                label: 'pools.types.add',
                redirectionLink: '/create'
            },
            {
                picture: 'assets/img/pools.png',
                label: 'pools.types.create',
                redirectionLink: '/ownPools'
            },
            {
                picture: 'assets/img/vote.png',
                label: 'pools.types.vote',
                redirectionLink: '/pools'
            },
            {
                picture: 'assets/img/public_pools.png',
                label: 'pools.types.create',
                redirectionLink: '/ownPools'
            }
        ];
    }
    PoolActionsComponent.prototype.onMouseOut = function () {
        this.hoveredItem = -1;
    };
    PoolActionsComponent.prototype.onKeyUp = function (event) {
        var keyCode = event.keyCode;
        if (event.key === 'Enter') {
            this.router.navigate([this.items[this.hoveredItem].redirectionLink]);
            return;
        }
        switch (keyCode) {
            case 39: {
                if (this.hoveredItem < this.items.length - 1) {
                    this.hoveredItem++;
                }
                break;
            }
            case 37: {
                if (this.hoveredItem > 0) {
                    this.hoveredItem--;
                }
            }
        }
    };
    PoolActionsComponent.prototype.onMouseOverItem = function (itemNumber) {
        this.hoveredItem = itemNumber;
    };
    PoolActionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.polls$.subscribe(function (polls) {
            _this.privatePollsCount = polls.privatePolls.filter(function (poll) { return poll.canVote === 'false'; }).length;
            _this.publicPollsCount = polls.publicPolls.filter(function (poll) { return poll.canVote === 'false'; }).length;
            _this.ownPollsCount = polls.ownPolls.length;
        });
        this._pollService.getAddress().subscribe(function (address) {
            _this._pollService.loadPrivatePolls();
            _this._pollService.loadPublicPolls();
            _this._pollService.loadOwnPolls();
        });
    };
    PoolActionsComponent.prototype.createPool = function () {
        this.router.navigate(['/create']);
    };
    Object.defineProperty(PoolActionsComponent.prototype, "numberOfPrivatePollsCount", {
        get: function () {
            return { numberOfPools: this.privatePollsCount };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PoolActionsComponent.prototype, "numberOfPublicPools", {
        get: function () {
            return { numberOfPools: this.publicPollsCount };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PoolActionsComponent.prototype, "numberOfOwnPolls", {
        get: function () {
            return { numberOfPools: this.ownPollsCount };
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(function (state) { return state.polls; }),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], PoolActionsComponent.prototype, "polls$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseout', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PoolActionsComponent.prototype, "onMouseOut", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PoolActionsComponent.prototype, "onKeyUp", null);
    PoolActionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pool-actions',
            template: __webpack_require__(/*! ./pool-actions.component.html */ "./src/app/components/pool-actions/pool-actions.component.html"),
            styles: [__webpack_require__(/*! ./pool-actions.component.scss */ "./src/app/components/pool-actions/pool-actions.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_pools_pools_service__WEBPACK_IMPORTED_MODULE_2__["PoolsService"]])
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

module.exports = "<div class=\"wrapper\">\n  <form [formGroup]=\"poolSettings\">\n    <div class=\"col-12 type\">\n      {{'pools.settings.private' | translate}}\n      <mat-slide-toggle formControlName=\"public\"></mat-slide-toggle>\n      {{'pools.settings.public' | translate}}\n    </div>\n\n    <fieldset class=\"col-12\" *ngIf=\"!isPublic\" formArrayName=\"privateAddresses\">\n      <button class=\"voteo-button add-option\" type=\"button\" (click)=\"addPrivateAddress()\">\n        {{'pools.create.addPrivateOption' |\n        translate}}\n      </button>\n      <div class=\"address\" *ngFor=\"let address of addresses.controls; let j=index\"\n           [formGroupName]=\"j\">\n        <div class=\"option\">\n          <span class=\"label\">{{'pools.create.address' | translate}} {{j}}:</span>\n          <input class=\"question-name\" formControlName=\"address\">\n        </div>\n      </div>\n    </fieldset>\n\n    <!--<div class=\"message\">-->\n    <!--{{'message.tbd' | translate}}-->\n    <!--</div>-->\n    <div class=\"col-12\">\n      <br>\n      <mat-form-field class=\"full-width\">\n        <mat-select [placeholder]=\"'pools.settings.verification' | translate\" formControlName=\"verification\">\n          <mat-option *ngFor=\"let verification of verifications\" [value]=\"verification.value\">\n            {{verification.label}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n\n    <div class=\"date col-md-6\">\n      <mat-form-field class=\"full-width\">\n        <input matInput [matDatepicker]=\"startPicker\" [placeholder]=\"'pools.settings.startDate' | translate\"\n               formControlName=\"startDate\">\n        <mat-datepicker-toggle matSuffix [for]=\"startPicker\"></mat-datepicker-toggle>\n        <mat-datepicker #startPicker></mat-datepicker>\n      </mat-form-field>\n    </div>\n\n    <div class=\"date col-md-6\">\n      <mat-form-field class=\"full-width\">\n        <input matInput [matDatepicker]=\"endPicker\" [placeholder]=\"'pools.settings.endDate' | translate\"\n               formControlName=\"endDate\">\n        <mat-datepicker-toggle matSuffix [for]=\"endPicker\"></mat-datepicker-toggle>\n        <mat-datepicker #endPicker></mat-datepicker>\n      </mat-form-field>\n    </div>\n\n    <div class=\"col-12\">\n      <mat-checkbox class=\"example-margin\" formControlName=\"reward\">\n        {{'pools.settings.reward' | translate}}\n      </mat-checkbox>\n    </div>\n\n    <ng-container *ngIf=\"isReward\">\n      <mat-form-field class=\"full-width col-4\">\n        <input matInput type=\"number\" [placeholder]=\"'pools.settings.totalBudget' | translate\"\n               formControlName=\"totalBudget\">\n        <span matSuffix>GAS</span>\n      </mat-form-field>\n\n      <mat-form-field class=\"full-width col-4\">\n        <input matInput type=\"number\" [placeholder]=\"'pools.settings.totalReward' | translate\"\n               formControlName=\"totalReward\">\n        <span matSuffix>GAS</span>\n      </mat-form-field>\n\n      <mat-form-field class=\"full-width col-4\">\n        <input matInput type=\"number\" [placeholder]=\"'pools.settings.participans' | translate\"\n               formControlName=\"participans\">\n      </mat-form-field>\n    </ng-container>\n\n    <div class=\"col-12\">\n      <mat-checkbox class=\"example-margin\" formControlName=\"tokenRequirements\">\n        {{'pools.settings.tokenRequirements' | translate}}\n      </mat-checkbox>\n    </div>\n\n\n    <ng-container *ngIf=\"areTokenRequirements\">\n      <mat-form-field class=\"col-md-6\">\n        <mat-select [placeholder]=\"'pools.settings.tokenType' | translate\" formControlName=\"tokenType\">\n          <mat-option *ngFor=\"let tokenType of tokenTypes\" [value]=\"tokenType.value\">\n            {{tokenType.label}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field class=\"col-md-6 full-width\">\n        <input type=\"number\" matInput [placeholder]=\"'pools.settings.minimumAmount' | translate\"\n               formControlName=\"minimumAmount\">\n      </mat-form-field>\n\n      <!--<mat-form-field class=\"col-md-6 full-width\">-->\n      <!--<input type=\"number\" matInput [placeholder]=\"'pools.settings.tokensPerVote' | translate\"-->\n      <!--formControlName=\"tokensPerVote\">-->\n      <!--</mat-form-field>-->\n\n      <div class=\"date col-md-6\">\n        <mat-form-field class=\"full-width\">\n          <input matInput [matDatepicker]=\"tokenSnapshot\" [placeholder]=\"'pools.settings.tokenSnapshot' | translate\"\n                 formControlName=\"tokenSnapshot\">\n          <mat-datepicker-toggle matSuffix [for]=\"tokenSnapshot\"></mat-datepicker-toggle>\n          <mat-datepicker #tokenSnapshot></mat-datepicker>\n        </mat-form-field>\n      </div>\n    </ng-container>\n\n    <div class=\"col-12\">\n      <mat-checkbox class=\"example-margin\" formControlName=\"audianceSpecification\">\n        {{'pools.settings.audianceSpecification' | translate}}\n      </mat-checkbox>\n    </div>\n    <!--<button (click)=\"back()\" class=\"voteo-button\">{{'actions.back' | translate}}</button>-->\n    <!--<button (click)=\"submit()\" class=\"voteo-button\">{{'actions.submit' | translate}}</button>-->\n    <ng-content></ng-content>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/pool-settings/pool-settings.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/pool-settings/pool-settings.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".date {\n  display: inline-block; }\n\n.full-width {\n  width: 100%; }\n\n.address {\n  margin: 5px; }\n\n.message {\n  position: absolute;\n  display: block;\n  top: 50%;\n  left: 44%;\n  z-index: 2;\n  font-size: 16px; }\n"

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
            public: [true],
            verification: [{ value: '', disabled: true }],
            startDate: [new Date()],
            endDate: [''],
            totalReward: [{ value: 0, disabled: true }],
            totalBudget: [{ value: 0, disabled: true }],
            reward: [{ value: '', disabled: true }],
            maxParticipants: [''],
            tokenRequirements: [false],
            minimumAmount: [],
            tokensPerVote: [{ value: '', disabled: true }],
            participans: [],
            tokenSnapshot: [new Date()],
            tokenType: [],
            privateAddresses: fb.array([]),
            audianceSpecification: [{ value: false, disabled: true }]
        });
    }
    PoolSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.poolSettings.valueChanges.subscribe(function (settings) {
            _this.onUpdate.emit({ settings: settings, form: _this.poolSettings });
        });
        this.onUpdate.emit({ settings: this.poolSettings.value, form: this.poolSettings });
    };
    PoolSettingsComponent.prototype.addPrivateAddress = function () {
        var option = this.fb.group({
            'address': [''],
        });
        this.addresses.push(option);
    };
    Object.defineProperty(PoolSettingsComponent.prototype, "isPublic", {
        get: function () {
            return this.poolSettings.get('public').value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PoolSettingsComponent.prototype, "addresses", {
        get: function () {
            return this.poolSettings.get('privateAddresses');
        },
        enumerable: true,
        configurable: true
    });
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

module.exports = "<div class=\"wrapper\">\n  <div class=\"header\">{{'pools.newPool' | translate}}</div>\n  <div class=\"title voteo-bold\">{{'pools.summary' | translate}}</div>\n\n  <ng-container *ngIf=\"title.length < 1\">\n    <div class=\"message\">\n      {{'pools.noTitle' | translate}}\n    </div>\n  </ng-container>\n\n  <div *ngIf=\"questions.length > 0; else noQuestions\" class=\"voteo-table\">\n    <ng-container *ngFor=\"let question of questions\">\n      <div class=\"highlight voteo-row\">\n        <span class=\"column key\">{{'pools.create.name' | translate}}</span>\n        <span class=\"column value\">{{question?.name}}</span>\n      </div>\n      <div class=\"voteo-row\">\n        <span class=\"column key\">{{'pools.create.openEnded' | translate}}</span>\n        <span class=\"column value\">{{question?.openEnded}}</span>\n      </div>\n      <div class=\"voteo-row\">\n        <span class=\"column key\">{{'pools.create.multiple' | translate}}</span>\n        <span class=\"column value\">{{question?.multiple}}</span>\n      </div>\n      <div *ngFor=\"let option of question?.options; let i=index\" class=\"voteo-row\">\n        <span class=\"column key\">{{'pools.create.option' | translate}} {{i}}</span>\n        <span class=\"column value\">{{option.label}}</span>\n      </div>\n    </ng-container>\n  </div>\n\n\n  <div class=\"voteo-table\">\n    <div class=\"highlight voteo-row\">\n      {{'pools.create.settings' | translate}}\n    </div>\n    <ng-container *ngIf=\"settings\">\n      <div class=\"voteo-row\">\n        <span class=\"column key\">{{'pools.settings.public' | translate}}</span>\n        <span class=\"column value\">{{settings?.public}}</span>\n      </div>\n      <ng-container *ngIf=\"!settings?.public\">\n        <div *ngFor=\"let privateAddress of settings?.privateAddresses; let i=index\" class=\"voteo-row\">\n          <span class=\"column key\">{{'pools.create.privateAddress' | translate}} {{i}}</span>\n          <span class=\"column value\">{{privateAddress}}</span>\n        </div>\n      </ng-container>\n      <div class=\"voteo-row\">\n        <span class=\"column key\">{{'pools.settings.verification' | translate}}</span>\n        <span class=\"column value\">{{settings?.verification}}</span>\n      </div>\n      <div class=\"voteo-row\">\n        <span class=\"column key\">{{'pools.settings.startDate' | translate}}</span>\n        <span class=\"column value\">{{settings?.startDate | localizedDate}}</span>\n      </div>\n      <div class=\"voteo-row\">\n        <span class=\"column key\">{{'pools.settings.endDate' | translate}}</span>\n        <span class=\"column value\">{{settings?.endDate | localizedDate}}</span>\n      </div>\n      <ng-container *ngIf=\"settings.reward\">\n        <div class=\"voteo-row\">\n          <span class=\"column key\">{{'pools.settings.totalReward' | translate}}</span>\n          <span class=\"column value\">{{settings?.totalReward}}</span>\n        </div>\n        <div class=\"voteo-row\">\n          <span class=\"column key\">{{'pools.settings.totalBudget' | translate}}</span>\n          <span class=\"column value\">{{settings?.totalBudget}}</span>\n        </div>\n        <div class=\"voteo-row\">\n          <span class=\"column key\">{{'pools.settings.participans' | translate}}</span>\n          <span class=\"column value\">{{settings?.participans}}</span>\n        </div>\n      </ng-container>\n      <ng-container *ngIf=\"settings.tokenRequirements\">\n        <div class=\"voteo-row\">\n          <span class=\"column key\">{{'pools.settings.tokenType' | translate}}</span>\n          <span class=\"column value\">{{settings?.tokenType}}</span>\n        </div>\n        <div class=\"voteo-row\">\n          <span class=\"column key\">{{'pools.settings.minimumAmount' | translate}}</span>\n          <span class=\"column value\">{{settings?.minimumAmount}}</span>\n        </div>\n        <div class=\"voteo-row\">\n          <span class=\"column key\">{{'pools.settings.tokensPerVote' | translate}}</span>\n          <span class=\"column value\">{{settings?.tokensPerVote}}</span>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n\n  <div class=\"button-wrapper\">\n    <ng-content></ng-content>\n    <!--<button (click)=\"back()\" class=\"voteo-button\">{{'actions.back' | translate}}</button>-->\n    <!--<button (click)=\"submit()\" class=\"voteo-button\">{{'actions.submit' | translate}}</button>-->\n  </div>\n</div>\n\n<ng-template #noQuestions>\n  <div class=\"message\">\n    {{'pools.noQuestions' | translate}}\n  </div>\n</ng-template>\n"

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
        this.pool.settings.privateAddresses = this.pool.settings.privateAddresses.map(function (address) { return address.address; });
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PoolSummaryComponent.prototype, "title", void 0);
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

module.exports = "<div class=\"tile-wrapper\">\n  <div class=\"upper-part\">\n    <span class=\"title voteo-bold\">{{poolTitle}}</span>\n  </div>\n  <div class=\"bottom-part\">\n    <div class=\"attributes\">\n      <div class=\"attribute\">\n        <mat-icon>help</mat-icon>\n        <span class=\"value\">{{'pools.questions' | translate}}:{{numberOfQuestions}}</span>\n      </div>\n      <div class=\"attribute\">\n        <mat-icon>people</mat-icon>\n        <span class=\"value\">{{'pools.voted' | translate}}:{{voted}}</span>\n      </div>\n    </div>\n    <div *ngIf=\"!isPending; else pendingMessage\" class=\"actions\">\n      <button [disabled]=\"hasVoted\" class=\"voteo-button\" (click)=\"openVoting()\">{{'pools.vote' | translate}}</button>\n      <button *ngIf=\"isOwnPoll\" class=\"voteo-button\" (click)=\"showResults()\">{{'pools.result' | translate}}</button>\n    </div>\n  </div>\n</div>\n\n<ng-template #pendingMessage>\n  IS PENDING...\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/pool-tile/pool-tile.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/pool-tile/pool-tile.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tile-wrapper {\n  border: 0.5px solid #9c9da0; }\n\n.upper-part {\n  background-color: #09245d;\n  border: 0.5px solid #09245d;\n  padding-left: 15px;\n  color: #fff; }\n\n.bottom-part {\n  position: relative;\n  display: flex;\n  width: 100%;\n  margin: 5px 0px;\n  align-items: center; }\n\n.bottom-part .actions {\n    width: 30%;\n    display: inline-block;\n    margin: 5px;\n    height: 28px; }\n\n.bottom-part .actions button:first-child {\n      margin-right: 4px; }\n\n.attributes {\n  display: inline-block;\n  width: 70%; }\n\n.attributes .attribute {\n    display: flex;\n    padding-left: 5px; }\n\n.attributes .attribute mat-icon {\n      color: #09245d;\n      cursor: default;\n      margin-right: 5px; }\n\n.attributes .attribute .value {\n      font-size: 14px;\n      display: flex;\n      justify-content: center;\n      align-items: center; }\n\n.title {\n  color: #fff; }\n"

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
    PoolTileComponent.prototype.openVoting = function () {
        if (this.hasFreeVoting) {
            this.router.navigate(["pool/" + this.pool.id]);
        }
    };
    PoolTileComponent.prototype.showResults = function () {
        if (this.isOwnPoll) {
            this.router.navigate(["result/" + this.pool.id]);
        }
    };
    Object.defineProperty(PoolTileComponent.prototype, "poolTitle", {
        get: function () {
            return this.pool.poolTitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PoolTileComponent.prototype, "numberOfQuestions", {
        get: function () {
            return this.pool.numberOfQuestions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PoolTileComponent.prototype, "voted", {
        get: function () {
            return this.pool.voted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PoolTileComponent.prototype, "hasVoted", {
        get: function () {
            return this.pool.canVote === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PoolTileComponent.prototype, "isOwnPoll", {
        get: function () {
            return this.ownPoll;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PoolTileComponent.prototype, "isPending", {
        get: function () {
            return this.pool.pending;
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PoolTileComponent.prototype, "ownPoll", void 0);
    PoolTileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pool-tile',
            template: __webpack_require__(/*! ./pool-tile.component.html */ "./src/app/components/pool-tile/pool-tile.component.html"),
            styles: [__webpack_require__(/*! ./pool-tile.component.scss */ "./src/app/components/pool-tile/pool-tile.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
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

module.exports = "<div class=\"pool-wrapper\">\n  <div class=\"pool-title voteo-bold\">{{pool.poolTitle}}</div>\n    <div class=\"question\" *ngFor=\"let question of pool.questions; let i = index\">\n      <div class=\"voteo-bold question-name\">{{question.name}}</div>\n      <div class=\"options\">\n\n        <ng-container *ngIf=\"question.multiple; else singleOption\">\n          <mat-checkbox (change)=\"updateAnswer($event, i, option)\" *ngFor=\"let option of question.options\">{{option.label}}</mat-checkbox>\n        </ng-container>\n\n        <ng-template #singleOption>\n          <mat-radio-group>\n            <mat-radio-button (change)=\"updateAnswer($event, i, option)\" *ngFor=\"let option of question.options\"\n                              class=\"example-margin\" [value]=\"option.label\">{{option.label}}\n            </mat-radio-button>\n          </mat-radio-group>\n        </ng-template>\n\n\n        <ng-container *ngIf=\"question.openEnded\">\n          <input (input)=\"updateAnswer($event, i, $event.target.value, true)\" class=\"freeText\">\n        </ng-container>\n      </div>\n    </div>\n    <div class=\"actions\">\n      <button (click)=\"vote()\" class=\"voteo-button\">{{'actions.vote' | translate}}</button>\n    </div>\n</div>\n"

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
/* harmony import */ var _shared_pools_pools_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/pools/pools.service */ "./src/app/shared/pools/pools.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _shared_pools_polls_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/pools/polls.actions */ "./src/app/shared/pools/polls.actions.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    function PoolComponent(_poolService, router, store) {
        this._poolService = _poolService;
        this.router = router;
        this.store = store;
        this.result = [];
        this.optionResult = [];
    }
    PoolComponent.prototype.ngOnInit = function () {
        this.result = new Array(this.pool.questions.length);
        this.result.fill({ answers: [], freeText: '' });
        // const option = this.fb.group({
        //   'label': [label, Validators.required]
        // });
        // this.options.push(option);
    };
    PoolComponent.prototype.vote = function () {
        var _this = this;
        this._poolService.registerVote(this.optionResult, this.pool.id).subscribe(function () {
            _this.pool.votePending = true;
            _this.store.dispatch(new _shared_pools_polls_actions__WEBPACK_IMPORTED_MODULE_4__["VoteOnPoll"](_this.pool));
            _this.router.navigate(['/']);
        }, function (error) { return alert(error); });
    };
    PoolComponent.prototype.updateAnswer = function (event, questionIndex, answer, freeText) {
        var _this = this;
        if (freeText === void 0) { freeText = false; }
        var question = this.pool.questions[questionIndex];
        if (!freeText) {
            if (question.multiple) {
                if (event.checked) {
                    this.result[questionIndex] = __assign({}, this.result[questionIndex], { answers: this.result[questionIndex].answers.concat([answer.id]) });
                }
                else {
                    this.result[questionIndex].answers.splice(answer.id, 1);
                }
            }
            else {
                this.result[questionIndex] = { answers: [answer.id] };
            }
        }
        else {
            this.result[questionIndex] = { answers: this.result[questionIndex].answers.slice(), freeText: answer };
        }
        this.optionResult = [];
        this.result.map(function (optionIds) {
            _this.optionResult = _this.optionResult.concat(optionIds.answers);
        });
    };
    PoolComponent.prototype.isMultiple = function (question) {
        return question.multiple;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PoolComponent.prototype, "pool", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PoolComponent.prototype, "type", void 0);
    PoolComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pool',
            template: __webpack_require__(/*! ./pool.component.html */ "./src/app/components/pool/pool.component.html"),
            styles: [__webpack_require__(/*! ./pool.component.scss */ "./src/app/components/pool/pool.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_pools_pools_service__WEBPACK_IMPORTED_MODULE_1__["PoolsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], PoolComponent);
    return PoolComponent;
}());



/***/ }),

/***/ "./src/app/components/profile-detail/profile-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/profile-detail/profile-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-wrapper\">\n  <div (click)=\"toggleShowDetail()\" class=\"img-wrapper\">\n    <img class=\"rounded-circle\" src=\"/assets/img/siluette.png\">\n  </div>\n  <ng-container *ngIf=\"showDetail\">\n    <div class=\"detail-wrapper\">\n      <ng-content></ng-content>\n    </div>\n  </ng-container>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/profile-detail/profile-detail.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/profile-detail/profile-detail.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-wrapper {\n  cursor: pointer;\n  display: flex;\n  height: 45px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 45px;\n  justify-content: center; }\n  .img-wrapper img {\n    padding: 2px;\n    width: 45px;\n    height: 45px;\n    background-color: white; }\n  .img-wrapper img:hover {\n      background: #edeef1; }\n  .detail-wrapper {\n  margin-top: 7px;\n  background: #edeef1;\n  position: absolute;\n  z-index: 3;\n  right: 0;\n  opacity: 1;\n  padding: 3px;\n  color: #09245d; }\n"

/***/ }),

/***/ "./src/app/components/profile-detail/profile-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/profile-detail/profile-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProfileDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDetailComponent", function() { return ProfileDetailComponent; });
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

var ProfileDetailComponent = /** @class */ (function () {
    function ProfileDetailComponent() {
        this.showDetail = false;
    }
    ProfileDetailComponent.prototype.toggleShowDetail = function () {
        this.showDetail = !this.showDetail;
    };
    ProfileDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-detail',
            template: __webpack_require__(/*! ./profile-detail.component.html */ "./src/app/components/profile-detail/profile-detail.component.html"),
            styles: [__webpack_require__(/*! ./profile-detail.component.scss */ "./src/app/components/profile-detail/profile-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileDetailComponent);
    return ProfileDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n  <div class=\"social-wrapper\">\n    <div class=\"profile-picture\">\n      <img class=\"img-fluid\" [src]=\"picture\"\n           [style.width.px]=\"pictureSize\"\n           [style.height.px]=\"pictureSize\">\n    </div>\n\n    <div class=\"name\">\n      {{name}} <span *ngIf=\"isValidated\"><img class=\"validated\" src=\"assets/img/check.png\"></span>\n    </div>\n  </div>\n  <div class=\"information\">\n    <div class=\"voteo-table\">\n      <input #cryptoAddressElement class=\"voteo-row\"\n             (click)=\"copyToClipboard()\" [ngModel]=\"cryptoAddress\">\n      <div class=\"voteo-row\">{{city}}</div>\n      <div class=\"voteo-row\">{{contacts}} {{'profile.contacts' | translate}}</div>\n      <div class=\"voteo-row\">{{email}}</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  border: 1px solid #e1ab05;\n  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  position: relative;\n  text-align: center;\n  height: 370px; }\n\n.profile-picture {\n  padding: 10px; }\n\n.profile-picture img {\n    height: 150px; }\n\n.name {\n  font-size: 26px; }\n\n.validated {\n  width: 26px;\n  height: 26px; }\n\n.detail {\n  display: block;\n  position: relative;\n  width: 90%;\n  margin: auto;\n  border: 1px solid #9c9da0;\n  border-radius: 10px; }\n\n.detail input {\n    border-radius: 10px 10px 0px 0px;\n    width: 100%;\n    text-align: left;\n    border: 0px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    border-bottom: 1px solid #9c9da0;\n    outline: none !important;\n    cursor: pointer; }\n\n.row {\n  display: block;\n  padding: 5px;\n  text-align: left;\n  margin: auto;\n  border-bottom: 1px solid #9c9da0;\n  word-wrap: break-word; }\n\n.row:last-child {\n    border-bottom: 0px; }\n\n.information {\n  padding: 10px 0px; }\n"

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
        this.isOwn = false;
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
            if (this.isOwn) {
                return this._poolsService.address || '-';
            }
            else {
                return this.profile.address;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "city", {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProfileComponent.prototype, "isOwn", void 0);
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

/***/ "./src/app/nos-wrapper/nos-wrapper.module.ts":
/*!***************************************************!*\
  !*** ./src/app/nos-wrapper/nos-wrapper.module.ts ***!
  \***************************************************/
/*! exports provided: NosWrapperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NosWrapperModule", function() { return NosWrapperModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_nos_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/nos-api.service */ "./src/app/nos-wrapper/services/nos-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NosWrapperModule = /** @class */ (function () {
    function NosWrapperModule() {
    }
    NosWrapperModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            providers: [_services_nos_api_service__WEBPACK_IMPORTED_MODULE_2__["NosApiService"]],
            declarations: [],
            exports: []
        })
    ], NosWrapperModule);
    return NosWrapperModule;
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

module.exports = "<div class=\"about-header\">\n  About us\n</div>\n\n<div class=\"about-desc\">\n  This dApp is provided to nOS by Bitcoach development team. Bitcoach community is a group of SK-CZ crypto-enthusiasts.\n  <br>\n  You can join us on the following channels:\n  <br><br>\n  <b>Telegram:  </b>t.me/join_bitcoachCHAT<br>\n  <b>Twitter:  </b><a href=\"https://twitter.com/BitC0ach\">twitter.com/BitC0ach</a>\n  <br>\n  <b>Facebook:  </b><a href=\"https://www.facebook.com/bitc0ach/\">facebook.com/bitc0ach</a>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/about-page/about-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/about-page/about-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-header {\n  margin: 20px;\n  font-size: 36px;\n  align-items: center;\n  text-align: center;\n  padding: 10px;\n  background: #edeef1; }\n\n.about-desc {\n  border: 1px;\n  border-style: solid;\n  border-color: #e1ab05;\n  margin: 20px;\n  font-size: 16px;\n  padding: 10px;\n  background: #edeef1; }\n"

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

/***/ "./src/app/pages/changelog-page/changelog-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/changelog-page/changelog-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-header\">\n  Changelog\n</div>\n\n<div class=\"about-desc\">\n  <h4>Current version (0.9.1):</h4>\n  <li>Creation of public and private polls and voting</li>\n  <li>Multiple choice questions and open-ended option working</li>\n  <li>Listing of a public, assigned and created polls</li>\n  <li>Right now only creator of the poll can see the results</li>\n</div>\n\n<div class=\"about-desc\">\n  <h4>Next version (0.9.2):</h4>\n  <li>Date constraints</li>\n  <li>Token balances constraints</li>\n  <li>Working contact list</li>\n</div>\n\n<div class=\"about-desc\">\n  <h4>Planned:</h4>\n  <li>Rewards system</li>\n  <li>KYC</li>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/changelog-page/changelog-page.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/changelog-page/changelog-page.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-header {\n  margin: 20px;\n  font-size: 36px;\n  align-items: center;\n  text-align: center;\n  padding: 10px;\n  background: #edeef1; }\n\n.about-desc {\n  border: 1px;\n  border-style: solid;\n  border-color: #e1ab05;\n  margin: 20px;\n  font-size: 16px;\n  padding: 10px;\n  background: #edeef1; }\n"

/***/ }),

/***/ "./src/app/pages/changelog-page/changelog-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/changelog-page/changelog-page.component.ts ***!
  \******************************************************************/
/*! exports provided: ChangelogPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangelogPageComponent", function() { return ChangelogPageComponent; });
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

var ChangelogPageComponent = /** @class */ (function () {
    function ChangelogPageComponent() {
    }
    ChangelogPageComponent.prototype.ngOnInit = function () {
    };
    ChangelogPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-changelog-page',
            template: __webpack_require__(/*! ./changelog-page.component.html */ "./src/app/pages/changelog-page/changelog-page.component.html"),
            styles: [__webpack_require__(/*! ./changelog-page.component.scss */ "./src/app/pages/changelog-page/changelog-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChangelogPageComponent);
    return ChangelogPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact-list-page/contact-list-page.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/contact-list-page/contact-list-page.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list\">\n\n  <app-profile class=\"item\"\n               *ngFor=\"let contact of contacts$ | async\"\n               [profile]=\"contact\"\n               [pictureSize]=\"100\"></app-profile>\n  <div class=\"actions\">\n    <mat-icon class=\"action-button\" (click)=\"openAddContact()\">add</mat-icon>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/contact-list-page/contact-list-page.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/contact-list-page/contact-list-page.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list {\n  display: flex;\n  flex-wrap: wrap; }\n  .list .item {\n    display: block;\n    width: 180px !important;\n    padding: 0px;\n    margin: 10px;\n    margin-top: 0px;\n    transition: all .4s;\n    -webkit-user-select: none !important;\n       -moz-user-select: none !important;\n        -ms-user-select: none !important;\n            user-select: none !important;\n    border-radius: 10px; }\n  .list .item:hover {\n      -webkit-transform: scale(1.1);\n              transform: scale(1.1);\n      z-index: 99;\n      background-color: #edeef1; }\n  .actions {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .actions mat-icon {\n    height: 50px;\n    width: 50px;\n    margin: auto;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_contact_add_dialog_contact_add_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/contact-add-dialog/contact-add-dialog.component */ "./src/app/components/contact-add-dialog/contact-add-dialog.component.ts");
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
    function ContactListPageComponent(_contactService, dialog) {
        this._contactService = _contactService;
        this.dialog = dialog;
        this.contacts$ = _contactService.getContacts();
    }
    ContactListPageComponent.prototype.ngOnInit = function () {
    };
    ContactListPageComponent.prototype.openAddContact = function () {
        this.dialog.open(_components_contact_add_dialog_contact_add_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ContactAddDialogComponent"]);
    };
    ContactListPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-list-page',
            template: __webpack_require__(/*! ./contact-list-page.component.html */ "./src/app/pages/contact-list-page/contact-list-page.component.html"),
            styles: [__webpack_require__(/*! ./contact-list-page.component.scss */ "./src/app/pages/contact-list-page/contact-list-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_contact_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
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

module.exports = "<mat-horizontal-stepper [linear]=\"true\" #stepper>\n  <mat-step [stepControl]=\"questionsForm\">\n    <div class=\"questions-part\">\n      <mat-form-field class=\"title-input\">\n        <input matInput [placeholder]=\"'pools.name' | translate\" [(ngModel)]=\"poolName\">\n      </mat-form-field>\n      <form>\n        <ng-template matStepLabel>{{'pools.createQuestions' | translate}}</ng-template>\n        <div class=\"title voteo-bold\">{{'pools.questions' | translate}}</div>\n        <app-new-question-page *ngFor=\"let question of questions; let i = index\"\n                               class=\"question\"\n                               [question]=\"question\"\n                               [currentQuestionIndex]=\"i\"\n                               (afterClickOnRemove)=\"removeCurrentQuestion(i)\"\n                               (onUpdate)=\"questionsUpdate($event, i)\">\n        </app-new-question-page>\n        <div class=\"button-wrapper\">\n          <button #newQuestion class=\"voteo-button\" mat-button (click)=\"addNew()\">\n            <span class=\"content\"><mat-icon>add</mat-icon>{{'actions.addQuestion' | translate}}</span>\n          </button>\n        </div>\n      </form>\n    </div>\n    <div class=\"button-wrapper\">\n      <button class=\"voteo-button\" [disabled]=\"questionsForm?.invalid || poolName.length < 1\" mat-button matStepperNext>Next</button>\n    </div>\n\n  </mat-step>\n  <mat-step [stepControl]=\"settingsForm\">\n    <form>\n      <ng-template matStepLabel>{{'pools.poolSettings' | translate}}</ng-template>\n      <app-pool-settings (onUpdate)=\"settingUpdate($event)\">\n        <div class=\"button-wrapper\">\n          <button class=\"voteo-button\" mat-button matStepperPrevious>Back</button>\n          <button [disabled]=\"settingsForm?.invalid\" class=\"voteo-button\" mat-button matStepperNext>Next</button>\n        </div>\n      </app-pool-settings>\n    </form>\n  </mat-step>\n  <mat-step>\n    <form>\n      <ng-template matStepLabel>{{'pools.summary' | translate}}</ng-template>\n      <app-pool-summary [pool]=\"pool\"\n                        [title]=\"poolName\"\n                        (onSubmitPressed)=\"createPool()\"\n                        (onBackPressed)=\"goToEdit()\">\n        <div class=\"button-wrapper\">\n          <button class=\"voteo-button\" mat-button matStepperPrevious>Back</button>\n          <button class=\"voteo-button\" mat-button [disabled]=\"!hasQuestions || poolName.length < 1\"\n                  (click)=\"createPool()\">{{'pools.create.message' | translate}}\n          </button>\n        </div>\n      </app-pool-summary>\n      <div>\n\n      </div>\n    </form>\n  </mat-step>\n  <!--<mat-step>-->\n  <!--<ng-template matStepLabel>{{'pools.done' | translate}}</ng-template>-->\n  <!--{{'pools.confirmation' | translate}}-->\n  <!--<div>-->\n  <!--<button mat-button matStepperPrevious>Back</button>-->\n  <!--<button mat-button [disabled]=\"!hasQuestions\" (click)=\"createPool()\">{{'pools.create.message' | translate}}</button>-->\n  <!--<button mat-button (click)=\"stepper.reset()\">Reset</button>-->\n  <!--</div>-->\n  <!--</mat-step>-->\n</mat-horizontal-stepper>\n"

/***/ }),

/***/ "./src/app/pages/create-pool-process-page/create-pool-process-page.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/create-pool-process-page/create-pool-process-page.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  color: #09245d;\n  font-size: 20px;\n  text-align: center; }\n\n.wrapper {\n  border: 1px solid #e1ab05;\n  border-radius: 5px; }\n\n.title-input {\n  width: 100%; }\n\n.button-wrapper {\n  width: 100%;\n  justify-content: center;\n  display: flex;\n  margin: 10px; }\n\n.button-wrapper button:first-child {\n    margin-right: 5px; }\n\n.question {\n  display: block;\n  margin: 25px 0px; }\n\n.voteo-button .content {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n"

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
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _shared_pools_polls_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/pools/polls.actions */ "./src/app/shared/pools/polls.actions.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    function CreatePoolProcessPageComponent(_poolsService, router, store) {
        this._poolsService = _poolsService;
        this.router = router;
        this.store = store;
        this.pool = {
            questions: [
                {
                    'name': '',
                    'openEnded': false,
                    'multiple': false,
                    'options': []
                }
            ],
            settings: {},
            poolTitle: '',
            id: '',
            pending: true,
            numberOfQuestions: '',
            voted: 0,
            canVote: true,
            created: null,
            votePending: false,
        };
        this.currentIndex = 0;
        this.currentQuestion = {};
        this.waitingValidation = false;
        this.poolName = '';
        this.updatedQuestions = [];
        this.questions = [{}];
    }
    CreatePoolProcessPageComponent.prototype.ngOnInit = function () {
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
    CreatePoolProcessPageComponent.prototype.addNew = function () {
        this.questions.push({});
    };
    CreatePoolProcessPageComponent.prototype.removeCurrentQuestion = function (index) {
        // this.currentQuestion = this.pool[this.currentIndex];
        this.questions.splice(index, 1);
        this.pool.questions.splice(index, 1);
    };
    CreatePoolProcessPageComponent.prototype.settingUpdate = function (data) {
        var settings = data.settings, form = data.form;
        this.settingsForm = form;
        console.log(settings, form);
        this.pool.settings = __assign({}, settings, { privateAddresses: settings.privateAddresses.map(function (address) { return address.address; }) });
    };
    CreatePoolProcessPageComponent.prototype.questionsUpdate = function (data, index) {
        var questions = data.questions, form = data.form;
        this.pool.questions[index] = questions;
        this.questionsForm = form;
    };
    CreatePoolProcessPageComponent.prototype.createPool = function () {
        var _this = this;
        if (this.hasQuestions && this.poolName.length > 0) {
            this.pool.poolTitle = this.poolName;
            this.pool.id = Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])() + "_" + this.poolName + "_" + this.pool.questions.length;
            this.pool.numberOfQuestions = String(this.pool.questions.length);
            this.pool.created = new Date();
            this._poolsService.createPool(this.pool, this.pool.id).subscribe(function () {
                _this.store.dispatch(new _shared_pools_polls_actions__WEBPACK_IMPORTED_MODULE_5__["AddPoll"](_this.pool));
                _this.router.navigate(['/ownPools']);
                // this.receivedPool = result.script.replace('\'','');
            }, function (error) {
                alert('There was some issue with writing data into blockchain. Wait a couple of minutes and try again.');
                _this.error = error;
            });
        }
    };
    CreatePoolProcessPageComponent.prototype.testInvoke = function () {
        var _this = this;
        this._poolsService.testInvoke().subscribe(function (result) {
            _this.testResult = result;
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('newQuestion'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CreatePoolProcessPageComponent.prototype, "newQuestion", void 0);
    CreatePoolProcessPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-pool-process-page',
            template: __webpack_require__(/*! ./create-pool-process-page.component.html */ "./src/app/pages/create-pool-process-page/create-pool-process-page.component.html"),
            styles: [__webpack_require__(/*! ./create-pool-process-page.component.scss */ "./src/app/pages/create-pool-process-page/create-pool-process-page.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_shared_pools_pools_service__WEBPACK_IMPORTED_MODULE_1__["PoolsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], CreatePoolProcessPageComponent);
    return CreatePoolProcessPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  404: This page doesn't exists. We are sorry!\n</p>\n"

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

module.exports = "<div class=\"content\">\n  <router-outlet #outlet=\"outlet\"></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/page-skelet/page-skelet.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/page-skelet/page-skelet.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  height: 75%; }\n\n.header {\n  width: 100%;\n  display: block;\n  position: relative; }\n\n.content {\n  padding: 10px;\n  margin: 20px 8%;\n  width: 100%; }\n\n.profile {\n  position: -webkit-sticky;\n  position: sticky;\n  display: table;\n  top: 0; }\n"

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
/* harmony import */ var _shared_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/animations */ "./src/app/shared/animations.ts");
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
    PageSkeletComponent.prototype.prepareRoute = function (outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    };
    PageSkeletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-skelet',
            template: __webpack_require__(/*! ./page-skelet.component.html */ "./src/app/pages/page-skelet/page-skelet.component.html"),
            styles: [__webpack_require__(/*! ./page-skelet.component.scss */ "./src/app/pages/page-skelet/page-skelet.component.scss")],
            animations: [
                _shared_animations__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]
                // animation triggers go here
            ]
        }),
        __metadata("design:paramtypes", [_shared_contact_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"]])
    ], PageSkeletComponent);
    return PageSkeletComponent;
}());



/***/ }),

/***/ "./src/app/pages/polls-result/polls-result.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/polls-result/polls-result.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pool-wrapper\">\n  <h3>\n    <mat-icon class=\"back-button\" (click)=\"goBack()\">arrow_back</mat-icon>\n    {{poll.poolTitle}}\n    <div class=\"chart-actions\">\n      <mat-icon class=\"action-button\" (click)=\"switchChartType()\">{{chartTypeIcon}}</mat-icon>\n      <mat-icon class=\"action-button\" (click)=\"print()\">print</mat-icon>\n    </div>\n  </h3>\n  <div class=\"results\">\n    <div class=\"col-md-4 col-sm-12\" *ngFor=\"let question of poll.questions; let i=index\">\n      <div class=\"question\">\n        <div class=\"voteo-bold question-name\">{{i+1}}. {{question.name}}</div>\n        <app-poll-result class=\"result\" [poll]=\"poll\" [chartType]=\"chartType\"\n                         [options]=\"question.options\"></app-poll-result>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/polls-result/polls-result.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/polls-result/polls-result.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".results {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  justify-content: center; }\n\n.question {\n  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);\n  border: 0.5px solid #9c9da0;\n  padding: 20px;\n  margin: 15px;\n  width: 100%; }\n\n.pool-wrapper {\n  width: 85%;\n  text-align: center; }\n\n.question-name {\n  font-size: 18px; }\n\n.back-button {\n  float: left; }\n\n.back-button {\n  cursor: pointer;\n  color: #09245d;\n  user-input: none; }\n\n.back-button:hover {\n    color: #e1ab05; }\n\nh3 .chart-actions {\n  display: inline-block;\n  float: right;\n  margin-right: 20px; }\n"

/***/ }),

/***/ "./src/app/pages/polls-result/polls-result.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/polls-result/polls-result.component.ts ***!
  \**************************************************************/
/*! exports provided: PollsResultPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PollsResultPageComponent", function() { return PollsResultPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_core_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/core/helper */ "./src/app/shared/core/helper.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PollsResultPageComponent = /** @class */ (function () {
    function PollsResultPageComponent(route, elementRef) {
        this.route = route;
        this.elementRef = elementRef;
        this.chartType = 'pie';
        this.chartTypeIcon = 'show_chart';
        this.poll = JSON.parse(Object(_shared_core_helper__WEBPACK_IMPORTED_MODULE_1__["stringFromHex"])(this.route.snapshot.data.pool.stack[0].value[1].value));
    }
    PollsResultPageComponent.prototype.print = function () {
        window.print();
        // const doc = new jsPDF();
        // alert(doc);
        // doc.fromHTML(this.elementRef.nativeElement.html(), 15, 15, {
        //   'width': 170,
        // });
        // doc.save('sample-file.pdf');
        // const openWindow = window.open("", "title", "attributes");
        // openWindow.document.write(this.chart.nativeElement.innerHTML);
        // openWindow.document.close();
        // openWindow.focus();
        // openWindow.print();
        // openWindow.close();
    };
    PollsResultPageComponent.prototype.goBack = function () {
        history.back();
    };
    PollsResultPageComponent.prototype.switchChartType = function () {
        this.chartType = this.chartType === 'pie' ? 'bar' : 'pie';
        this.chartTypeIcon = this.chartTypeIcon === 'pie_chart' ? 'show_chart' : 'pie_chart';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chart'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PollsResultPageComponent.prototype, "chart", void 0);
    PollsResultPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-polls-result',
            template: __webpack_require__(/*! ./polls-result.component.html */ "./src/app/pages/polls-result/polls-result.component.html"),
            styles: [__webpack_require__(/*! ./polls-result.component.scss */ "./src/app/pages/polls-result/polls-result.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], PollsResultPageComponent);
    return PollsResultPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/pool-fill-page/pool-fill-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/pool-fill-page/pool-fill-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pool-fill-wrapper\">\n  <app-pool [pool]=\"pool\"></app-pool>\n</div>\n"

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
/* harmony import */ var _shared_core_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/core/helper */ "./src/app/shared/core/helper.ts");
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
    function PoolFillPageComponent(route) {
        this.route = route;
        this.pool = {};
    }
    PoolFillPageComponent.prototype.ngOnInit = function () {
        this.pool = JSON.parse(Object(_shared_core_helper__WEBPACK_IMPORTED_MODULE_2__["stringFromHex"])(this.route.snapshot.data.pool.stack[0].value[1].value));
    };
    PoolFillPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pool-fill-page',
            template: __webpack_require__(/*! ./pool-fill-page.component.html */ "./src/app/pages/pool-fill-page/pool-fill-page.component.html"),
            styles: [__webpack_require__(/*! ./pool-fill-page.component.scss */ "./src/app/pages/pool-fill-page/pool-fill-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
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

module.exports = "<div class=\"content-wrapper\">\n  <div class=\"floating\">\n    <h4 class=\"center\">\n      <mat-icon class=\"back-button\" (click)=\"goBack()\">arrow_back</mat-icon>\n      {{title | translate}}\n    </h4>\n    <div class=\"settings-wrapper\">\n      <div class=\"settings\">\n        <span>{{'pools.list.settings' | translate}}</span>\n\n        <mat-button-toggle-group [value]=\"'all'\" (change)=\"changeView($event)\">\n          <mat-button-toggle value=\"all\">{{'pools.list.all' | translate}}</mat-button-toggle>\n          <mat-button-toggle value=\"notVoted\">{{'pools.list.notVoted' | translate}}</mat-button-toggle>\n          <mat-button-toggle value=\"voted\">{{'pools.list.voted' | translate}}</mat-button-toggle>\n        </mat-button-toggle-group>\n      </div>\n      <div class=\"settings columns\">\n        <span>{{'pools.list.columns' | translate}}</span>\n\n        <mat-button-toggle-group [value]=\"12 / itemSize\" (change)=\"changeColumns($event)\">\n          <mat-button-toggle [value]=\"1\">1</mat-button-toggle>\n          <mat-button-toggle [value]=\"2\">2</mat-button-toggle>\n          <mat-button-toggle [value]=\"3\">3</mat-button-toggle>\n        </mat-button-toggle-group>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"pools-wrapper\">\n    <app-pool-tile [class]=\"'pool-item col-ms-12 col-md-' + itemSize\" *ngFor=\"let pool of polls; trackBy: pollTracker\"\n                   [ownPoll]=\"areOwnPools\" [pool]=\"pool\"></app-pool-tile>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/pools-page/pools-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/pools-page/pools-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pool-item {\n  display: block;\n  padding: 5px 10px;\n  transition: all .2s; }\n\n.pools-wrapper {\n  display: flex;\n  flex-wrap: wrap; }\n\n.floating {\n  top: 0px;\n  padding: 10px 0px;\n  margin: auto;\n  position: -webkit-sticky;\n  position: sticky;\n  display: flex;\n  background-color: white;\n  z-index: 2;\n  width: 100%; }\n\n.center {\n  display: flex;\n  align-items: center;\n  width: 180px;\n  margin: 0; }\n\n.back-button {\n  width: 35px;\n  height: 35px;\n  font-size: 35px;\n  cursor: pointer;\n  color: #09245d;\n  user-input: none;\n  position: absolute;\n  left: -40px; }\n\n.back-button:hover {\n    color: #e1ab05; }\n\n.settings-wrapper {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  align-items: stretch; }\n\n.settings {\n  display: flex;\n  align-items: center;\n  flex-direction: column; }\n\n.settings mat-button-toggle-group {\n    justify-content: center;\n    align-items: center;\n    height: 20px; }\n\n.settings.columns {\n    position: absolute;\n    right: 0; }\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_pools_pollListType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/pools/pollListType */ "./src/app/shared/pools/pollListType.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_pools_polls_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/pools/polls.actions */ "./src/app/shared/pools/polls.actions.ts");
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
    function PoolsPageComponent(_poolsService, _activatedRoute, router, store) {
        var _this = this;
        this._poolsService = _poolsService;
        this._activatedRoute = _activatedRoute;
        this.router = router;
        this.store = store;
        this.itemSize = 6;
        _activatedRoute.data.subscribe(function (result) {
            _this.type = result.type;
            _this.store.dispatch(new _shared_pools_polls_actions__WEBPACK_IMPORTED_MODULE_6__["SetType"](_this.type));
            switch (_this.type) {
                case _shared_pools_pollListType__WEBPACK_IMPORTED_MODULE_3__["PollListType"].PRIVATE_LIST: {
                    _this.title = 'pools.title.private';
                    _poolsService.loadPrivatePolls();
                    _this.polls$.subscribe(function (polls) {
                        _this.polls = polls.privatePolls;
                    });
                    break;
                }
                case _shared_pools_pollListType__WEBPACK_IMPORTED_MODULE_3__["PollListType"].OWN_LIST: {
                    _this.title = 'pools.title.own';
                    _this._poolsService.loadOwnPolls();
                    _this.areOwnPools = true;
                    _this.polls$.subscribe(function (polls) {
                        _this.polls = polls.ownPolls;
                    });
                    break;
                }
                case _shared_pools_pollListType__WEBPACK_IMPORTED_MODULE_3__["PollListType"].PUBLIC_LIST: {
                    _this.title = 'pools.title.public';
                    _this._poolsService.loadPublicPolls();
                    _this.polls$.subscribe(function (polls) {
                        _this.polls = polls.publicPolls;
                    });
                }
            }
            _this.allPolls = _this.polls;
        });
    }
    ;
    PoolsPageComponent.prototype.changeColumns = function (data) {
        var value = data.value;
        this.itemSize = 12 / value;
    };
    PoolsPageComponent.prototype.changeView = function (data) {
        var value = data.value;
        switch (value) {
            case 'all': {
                this.polls = this.allPolls;
                break;
            }
            case 'notVoted': {
                this.polls = this.allPolls.filter(function (poll) { return poll.canVote === 'false'; });
                break;
            }
            case 'voted': {
                console.log('here');
                this.polls = this.allPolls.filter(function (poll) { return poll.canVote === 'true'; });
                break;
            }
        }
    };
    PoolsPageComponent.prototype.goBack = function () {
        this.router.navigate(['/']);
    };
    PoolsPageComponent.prototype.pollTracker = function (index, poll) {
        return poll.id;
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(function (state) { return state.polls; }),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], PoolsPageComponent.prototype, "polls$", void 0);
    PoolsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pools-page',
            template: __webpack_require__(/*! ./pools-page.component.html */ "./src/app/pages/pools-page/pools-page.component.html"),
            styles: [__webpack_require__(/*! ./pools-page.component.scss */ "./src/app/pages/pools-page/pools-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_pools_pools_service__WEBPACK_IMPORTED_MODULE_1__["PoolsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
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

module.exports = "<div class=\"profile-wrapper\">\n  <div class=\"info\">\n    <div routerLink=\"/pools\" class=\"assigned\">{{'pools.youHaveGotAssigned' | translate : numberOfAssignedPools}}</div>\n    <div routerLink=\"/ownPools\" class=\"created\">{{'pools.youHaveCreated' | translate : numberOfCreatedPools}}</div>\n  </div>\n</div>\n"

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
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
        this.subscriptions = [];
    }
    ProfilePageComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.subscriptions; _i < _a.length; _i++) {
            var subscription = _a[_i];
            subscription.unsubscribe();
        }
    };
    ProfilePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.polls$.subscribe(function (polls) {
            var ownPolls = polls.ownPolls, privatePolls = polls.privatePolls;
            _this.createdPollsLength = ownPolls.length;
            _this.assignmedPollsLength = privatePolls.filter(function (poll) { return poll.canVote === 'false'; }).length;
        }));
    };
    Object.defineProperty(ProfilePageComponent.prototype, "numberOfCreatedPools", {
        get: function () {
            return {
                number: this.createdPollsLength
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfilePageComponent.prototype, "numberOfAssignedPools", {
        get: function () {
            return {
                number: this.assignmedPollsLength
            };
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(function (state) { return state.polls; }),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], ProfilePageComponent.prototype, "polls$", void 0);
    ProfilePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-page',
            template: __webpack_require__(/*! ./profile-page.component.html */ "./src/app/pages/profile-page/profile-page.component.html"),
            styles: [__webpack_require__(/*! ./profile-page.component.scss */ "./src/app/pages/profile-page/profile-page.component.scss")]
        })
    ], ProfilePageComponent);
    return ProfilePageComponent;
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

/***/ "./src/app/shared/animations.ts":
/*!**************************************!*\
  !*** ./src/app/shared/animations.ts ***!
  \**************************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('PollPage <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ right: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> FilterPage', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ])
]);


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
        this.contacts = [
            {
                name: 'Lukas Cader',
                picture: '/assets/img/siluette.png',
                city: 'Bratislava',
                contacts: 4,
                email: 'info@bitcoach.net',
                validated: true
            },
            {
                name: 'Michal Sevcik',
                picture: '/assets/img/siluette.png',
                city: 'Bratislava',
                contacts: 3,
                email: 'info@bitcoach.net',
                validated: true
            },
            {
                name: 'Branislav Mojsej',
                picture: '/assets/img/siluette.png',
                city: 'Horna Dolna',
                contacts: 150,
                email: 'info@bitcoach.net',
                validated: false
            }
        ];
    }
    ContactService.prototype.getOwnUserInfo = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
            name: 'Kamil Bitcoach',
            city: 'Bratislava',
            contacts: 3,
            email: 'info@bitcoach.net',
            picture: '/assets/img/siluette.png',
            validated: true
        });
    };
    ContactService.prototype.getContacts = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.contacts);
    };
    ContactService.prototype.addContact = function (contact) {
        // this part should be added through the smart contract?
        contact.contacts = 12;
        contact.picture = '/assets/img/siluette.png';
        this.contacts.push(contact);
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

/***/ "./src/app/shared/core/Methods.ts":
/*!****************************************!*\
  !*** ./src/app/shared/core/Methods.ts ***!
  \****************************************/
/*! exports provided: Methods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Methods", function() { return Methods; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");

var Methods = /** @class */ (function () {
    function Methods() {
    }
    Methods.scriptHash = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? 'f24b174d2d1e6551ed3274a436f731b4765ccfca' : '7135c7bb56bf7a79162651cdafa3fd6fb11d3b5e';
    // OPERATIONS HERE
    Methods.getPoolOperation = 'GetPoll';
    Methods.createPoolOperation = 'RegisterPoll';
    Methods.getPublicAll = 'GetPublicAll';
    Methods.getCreatedPolls = 'GetCreatedPolls';
    Methods.getAssignedPolls = 'GetAssignedPolls';
    Methods.getPoolById = 'GetPollById';
    Methods.registerVote = 'RegisterVote';
    Methods.getOptionResults = 'GetOptionResults';
    Methods.getPools = 'ENTER_OPERATION_CODE_HERE';
    return Methods;
}());



/***/ }),

/***/ "./src/app/shared/core/helper.ts":
/*!***************************************!*\
  !*** ./src/app/shared/core/helper.ts ***!
  \***************************************/
/*! exports provided: stringFromArray, stringFromHex, hexToString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringFromArray", function() { return stringFromArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringFromHex", function() { return stringFromHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToString", function() { return hexToString; });
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
function hexToString(str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
        result += str.charCodeAt(i).toString(16);
    }
    return result;
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

/***/ "./src/app/shared/pools/pollListType.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/pools/pollListType.ts ***!
  \**********************************************/
/*! exports provided: PollListType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PollListType", function() { return PollListType; });
var PollListType;
(function (PollListType) {
    PollListType[PollListType["OWN_LIST"] = 0] = "OWN_LIST";
    PollListType[PollListType["PRIVATE_LIST"] = 1] = "PRIVATE_LIST";
    PollListType[PollListType["PUBLIC_LIST"] = 2] = "PUBLIC_LIST";
})(PollListType || (PollListType = {}));


/***/ }),

/***/ "./src/app/shared/pools/polls.actions.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/pools/polls.actions.ts ***!
  \***********************************************/
/*! exports provided: AddPoll, SetOwnPolls, SetPrivatePolls, SetPublicPolls, SetType, VoteOnPoll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPoll", function() { return AddPoll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetOwnPolls", function() { return SetOwnPolls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPrivatePolls", function() { return SetPrivatePolls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPublicPolls", function() { return SetPublicPolls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetType", function() { return SetType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteOnPoll", function() { return VoteOnPoll; });
var AddPoll = /** @class */ (function () {
    function AddPoll(poll) {
        this.poll = poll;
    }
    AddPoll.type = '[Pools] Add Poll';
    return AddPoll;
}());

var SetOwnPolls = /** @class */ (function () {
    function SetOwnPolls(polls) {
        this.polls = polls;
    }
    SetOwnPolls.type = '[Pools] Setting own Polls';
    return SetOwnPolls;
}());

var SetPrivatePolls = /** @class */ (function () {
    function SetPrivatePolls(polls) {
        this.polls = polls;
    }
    SetPrivatePolls.type = '[Pools] Setting private Polls';
    return SetPrivatePolls;
}());

var SetPublicPolls = /** @class */ (function () {
    function SetPublicPolls(polls) {
        this.polls = polls;
    }
    SetPublicPolls.type = '[Pools] Setting public Polls';
    return SetPublicPolls;
}());

var SetType = /** @class */ (function () {
    function SetType(pollType) {
        this.pollType = pollType;
    }
    SetType.type = '[Pools] Setting type of current Polls';
    return SetType;
}());

var VoteOnPoll = /** @class */ (function () {
    function VoteOnPoll(poll) {
        this.poll = poll;
    }
    VoteOnPoll.type = '[Pools] Vote on private Poll';
    return VoteOnPoll;
}());



/***/ }),

/***/ "./src/app/shared/pools/polls.helper.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/pools/polls.helper.ts ***!
  \**********************************************/
/*! exports provided: parsePolls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePolls", function() { return parsePolls; });
/* harmony import */ var _core_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/helper */ "./src/app/shared/core/helper.ts");

function parsePolls(polls) {
    var parsedPolls = Array();
    // this.result = result.stack[0];
    for (var _i = 0, _a = polls.stack[0].value; _i < _a.length; _i++) {
        var pool = _a[_i];
        var id = Object(_core_helper__WEBPACK_IMPORTED_MODULE_0__["stringFromHex"])(pool.value[0].value);
        var parsedArray = id.split('_');
        var poolTitle = parsedArray[1] ? parsedArray[1] : '-';
        var numberOfQuestions = parsedArray[2] ? parsedArray[2] : '0';
        parsedPolls.push({
            id: id,
            poolTitle: poolTitle,
            numberOfQuestions: numberOfQuestions,
            voted: pool.value[1].value,
            canVote: Object(_core_helper__WEBPACK_IMPORTED_MODULE_0__["stringFromHex"])(pool.value[2].value),
            pending: false,
            votePending: false
        });
    }
    return parsedPolls;
}


/***/ }),

/***/ "./src/app/shared/pools/polls.state.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/pools/polls.state.ts ***!
  \*********************************************/
/*! exports provided: PollsState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PollsState", function() { return PollsState; });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _polls_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polls.actions */ "./src/app/shared/pools/polls.actions.ts");
/* harmony import */ var _pollListType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pollListType */ "./src/app/shared/pools/pollListType.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PollsState = /** @class */ (function () {
    function PollsState() {
    }
    PollsState.prototype.AddPoll = function (ctx, action) {
        var state = ctx.getState();
        console.log(action);
        ctx.setState(__assign({}, state, { ownPolls: [action.poll].concat(state.ownPolls) }));
    };
    PollsState.prototype.SetOwnPolls = function (ctx, action) {
        var state = ctx.getState();
        var pendingPolls = state.ownPolls.filter(function (poll) {
            if ((poll.pending && !action.polls.some(function (actualPoll) { return poll.id === actualPoll.id; }))) {
                return poll;
            }
        });
        var pendingVotes = state.ownPolls.filter(function (poll) { return poll.votePending; });
        var polls = action.polls.map(function (poll) {
            var pendingPoll = pendingVotes.find(function (actualPendingPoll) { return actualPendingPoll.id === poll.id && poll.canVote === 'false'; });
            if (pendingPoll) {
                return pendingPoll;
            }
            else {
                return poll;
            }
        }).reverse();
        ctx.setState(__assign({}, state, { ownPolls: pendingPolls.concat(polls) }));
    };
    PollsState.prototype.SetPrivatePolls = function (ctx, action) {
        var state = ctx.getState();
        var pendingVotes = state.privatePolls.filter(function (poll) { return poll.votePending; });
        var polls = action.polls.map(function (poll) {
            var pendingPoll = pendingVotes.find(function (actualPendingPoll) { return actualPendingPoll.id === poll.id && poll.canVote === 'false'; });
            if (pendingPoll) {
                return pendingPoll;
            }
            else {
                return poll;
            }
        }).reverse();
        ctx.setState(__assign({}, state, { privatePolls: polls.slice() }));
    };
    PollsState.prototype.SetPublicPolls = function (ctx, action) {
        var state = ctx.getState();
        var pendingVotes = state.publicPolls.filter(function (poll) { return poll.votePending; });
        var polls = action.polls.map(function (poll) {
            var pendingPoll = pendingVotes.find(function (actualPendingPoll) { return actualPendingPoll.id === poll.id && poll.canVote === 'false'; });
            if (pendingPoll) {
                return pendingPoll;
            }
            else {
                return poll;
            }
        }).reverse();
        ctx.setState(__assign({}, state, { publicPolls: polls.slice() }));
    };
    PollsState.prototype.VoteOnPoll = function (ctx, action) {
        var state = ctx.getState();
        switch (state.poolListType) {
            case _pollListType__WEBPACK_IMPORTED_MODULE_2__["PollListType"].OWN_LIST: {
                ctx.setState(__assign({}, state, { ownPolls: state.ownPolls.filter(function (poll) { return poll.id !== action.poll.id; }).concat([action.poll]) }));
                break;
            }
            case _pollListType__WEBPACK_IMPORTED_MODULE_2__["PollListType"].PUBLIC_LIST: {
                ctx.setState(__assign({}, state, { publicPolls: state.publicPolls.filter(function (poll) { return poll.id !== action.poll.id; }).concat([action.poll]) }));
                break;
            }
            case _pollListType__WEBPACK_IMPORTED_MODULE_2__["PollListType"].PRIVATE_LIST: {
                ctx.setState(__assign({}, state, { privatePolls: state.privatePolls.filter(function (poll) { return poll.id !== action.poll.id; }).concat([action.poll]) }));
                break;
            }
        }
    };
    PollsState.prototype.SetType = function (ctx, action) {
        var state = ctx.getState();
        ctx.setState(__assign({}, state, { poolListType: action.pollType }));
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_polls_actions__WEBPACK_IMPORTED_MODULE_1__["AddPoll"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _polls_actions__WEBPACK_IMPORTED_MODULE_1__["AddPoll"]]),
        __metadata("design:returntype", void 0)
    ], PollsState.prototype, "AddPoll", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_polls_actions__WEBPACK_IMPORTED_MODULE_1__["SetOwnPolls"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _polls_actions__WEBPACK_IMPORTED_MODULE_1__["SetOwnPolls"]]),
        __metadata("design:returntype", void 0)
    ], PollsState.prototype, "SetOwnPolls", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_polls_actions__WEBPACK_IMPORTED_MODULE_1__["SetPrivatePolls"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _polls_actions__WEBPACK_IMPORTED_MODULE_1__["SetPrivatePolls"]]),
        __metadata("design:returntype", void 0)
    ], PollsState.prototype, "SetPrivatePolls", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_polls_actions__WEBPACK_IMPORTED_MODULE_1__["SetPublicPolls"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _polls_actions__WEBPACK_IMPORTED_MODULE_1__["SetPublicPolls"]]),
        __metadata("design:returntype", void 0)
    ], PollsState.prototype, "SetPublicPolls", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_polls_actions__WEBPACK_IMPORTED_MODULE_1__["VoteOnPoll"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _polls_actions__WEBPACK_IMPORTED_MODULE_1__["VoteOnPoll"]]),
        __metadata("design:returntype", void 0)
    ], PollsState.prototype, "VoteOnPoll", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_polls_actions__WEBPACK_IMPORTED_MODULE_1__["SetType"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _polls_actions__WEBPACK_IMPORTED_MODULE_1__["SetType"]]),
        __metadata("design:returntype", void 0)
    ], PollsState.prototype, "SetType", null);
    PollsState = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["State"])({
            name: 'polls',
            defaults: {
                ownPolls: [],
                privatePolls: [],
                publicPolls: [],
                poolListType: null
            }
        }),
        __metadata("design:paramtypes", [])
    ], PollsState);
    return PollsState;
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
/* harmony import */ var _core_Methods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Methods */ "./src/app/shared/core/Methods.ts");
/* harmony import */ var _polls_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./polls.helper */ "./src/app/shared/pools/polls.helper.ts");
/* harmony import */ var _polls_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./polls.actions */ "./src/app/shared/pools/polls.actions.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
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
    function PoolsService(_nosService, store) {
        var _this = this;
        this._nosService = _nosService;
        this.store = store;
        if (_nosService.isConnected()) {
            _nosService.getAddress().subscribe(function (address) {
                _this.address = address;
            });
        }
    }
    PoolsService.prototype.getOptionResult = function (pollId, optionId) {
        return this._nosService.testInvoke(_core_Methods__WEBPACK_IMPORTED_MODULE_2__["Methods"].scriptHash, _core_Methods__WEBPACK_IMPORTED_MODULE_2__["Methods"].getOptionResults, [this._nosService.address, pollId, optionId]);
    };
    PoolsService.prototype.getPrivatePolls = function (address) {
        if (address === void 0) { address = this._nosService.address; }
        // TODO: CHHANGE
        return this._nosService.testInvoke(_core_Methods__WEBPACK_IMPORTED_MODULE_2__["Methods"].scriptHash, _core_Methods__WEBPACK_IMPORTED_MODULE_2__["Methods"].getAssignedPolls, [address]);
    };
    PoolsService.prototype.getOwnPolls = function (address) {
        if (address === void 0) { address = this._nosService.address; }
        // TODO: CHHANGE
        return this._nosService.testInvoke(_core_Methods__WEBPACK_IMPORTED_MODULE_2__["Methods"].scriptHash, _core_Methods__WEBPACK_IMPORTED_MODULE_2__["Methods"].getCreatedPolls, [address]);
    };
    PoolsService.prototype.getAddress = function () {
        return this._nosService.getAddress();
    };
    PoolsService.prototype.loadPublicPolls = function () {
        var _this = this;
        this.getAllPublic().subscribe(function (pools) {
            var parsedPolls = Object(_polls_helper__WEBPACK_IMPORTED_MODULE_3__["parsePolls"])(pools);
            _this.store.dispatch(new _polls_actions__WEBPACK_IMPORTED_MODULE_4__["SetPublicPolls"](parsedPolls));
        });
    };
    PoolsService.prototype.loadOwnPolls = function () {
        var _this = this;
        this.getOwnPolls().subscribe(function (pools) {
            var parsedPolls = Object(_polls_helper__WEBPACK_IMPORTED_MODULE_3__["parsePolls"])(pools);
            _this.store.dispatch(new _polls_actions__WEBPACK_IMPORTED_MODULE_4__["SetOwnPolls"](parsedPolls));
        });
    };
    PoolsService.prototype.loadPrivatePolls = function () {
        var _this = this;
        this.getPrivatePolls().subscribe(function (pools) {
            var parsedPolls = Object(_polls_helper__WEBPACK_IMPORTED_MODULE_3__["parsePolls"])(pools);
            _this.store.dispatch(new _polls_actions__WEBPACK_IMPORTED_MODULE_4__["SetPrivatePolls"](parsedPolls));
        });
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
        return this._nosService.testInvoke(_core_Methods__WEBPACK_IMPORTED_MODULE_2__["Methods"].scriptHash, _core_Methods__WEBPACK_IMPORTED_MODULE_2__["Methods"].getPoolOperation, ['eqweqw']);
    };
    PoolsService.prototype.registerVote = function (results, poolId) {
        var result = [poolId].concat(results);
        return this._nosService.invoke(_core_Methods__WEBPACK_IMPORTED_MODULE_2__["Methods"].scriptHash, _core_Methods__WEBPACK_IMPORTED_MODULE_2__["Methods"].registerVote, [this._nosService.address, 'DATA'].concat(result));
    };
    PoolsService.prototype.getAllPublic = function (address) {
        if (address === void 0) { address = this._nosService.address; }
        return this._nosService.testInvoke(_core_Methods__WEBPACK_IMPORTED_MODULE_2__["Methods"].scriptHash, _core_Methods__WEBPACK_IMPORTED_MODULE_2__["Methods"].getPublicAll, [address]);
    };
    PoolsService.prototype.getPoolById = function (id) {
        return this._nosService.testInvoke(_core_Methods__WEBPACK_IMPORTED_MODULE_2__["Methods"].scriptHash, _core_Methods__WEBPACK_IMPORTED_MODULE_2__["Methods"].getPoolById, [this._nosService.address, id]);
    };
    PoolsService.prototype.createPool = function (poolParams, poolName) {
        var addresses = (poolParams.settings.public) ? [''] : poolParams.settings.privateAddresses;
        return this._nosService.invoke(_core_Methods__WEBPACK_IMPORTED_MODULE_2__["Methods"].scriptHash, _core_Methods__WEBPACK_IMPORTED_MODULE_2__["Methods"].createPoolOperation, [this._nosService.address, JSON.stringify(poolParams), poolName].concat(addresses));
    };
    PoolsService.prototype.getPoolInvoke = function (script) {
        return this._nosService.invoke(script, _core_Methods__WEBPACK_IMPORTED_MODULE_2__["Methods"].createPoolOperation, ['dsajdksajkasdjskksksajdaskjsadkdjaskLUKAS', 'LUKAS']);
    };
    PoolsService.prototype.testStorage = function () {
        return this._nosService.getStorage('9a309cfe03cead5b653bbb11f68ff6beced8f031', 'bucket.neo.target');
    };
    PoolsService.prototype.testInvoke = function () {
        return this._nosService.testInvoke('9a309cfe03cead5b653bbb11f68ff6beced8f031', 'GetDomain', ['AK2nJJpJr6o664CWJKi1QRXjqeic2zRp8y', 'bucket.neo']);
    };
    PoolsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_nos_wrapper_services_nos_api_service__WEBPACK_IMPORTED_MODULE_1__["NosApiService"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
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