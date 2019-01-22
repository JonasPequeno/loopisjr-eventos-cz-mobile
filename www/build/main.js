webpackJsonp([4],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErroPage = /** @class */ (function () {
    function ErroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ErroPage.prototype.ionViewDidLoad = function () {
    };
    ErroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-erro',template:/*ion-inline-start:"/home/jonas/eventosCZ/loopisjr-eventos-cz-mobile/src/pages/erro/erro.html"*/'<ion-content class="background">\n  <h1 class="corBranca">\n    Sem conexão com a Internet. O WI-FI ou os dados da rede celular devem estar ativos. Tente novamente.\n  </h1>  \n</ion-content>'/*ion-inline-end:"/home/jonas/eventosCZ/loopisjr-eventos-cz-mobile/src/pages/erro/erro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ErroPage);
    return ErroPage;
}());

//# sourceMappingURL=erro.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_evento_evento__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventosPage = /** @class */ (function () {
    function EventosPage(navCtrl, navParams, eventoProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventoProvider = eventoProvider;
    }
    EventosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-eventos',template:/*ion-inline-start:"/home/jonas/eventosCZ/loopisjr-eventos-cz-mobile/src/pages/eventos/eventos.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Divulgue seu evento</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="background mg-top-40">\n\n    <h1 class="center transparente corBranca bold ">\n        INFORMAÇÕES DE CONTATO\n    </h1>\n\n    <ion-list class="mg-top-30 ">\n        <ion-item class="transparente corBranca">\n            <ion-icon item-start large ios="ios-call" md="md-call"></ion-icon>\n            <h2 class="quebraLinha">Ligar (83) 9 9396-7982</h2>\n        </ion-item>\n        <ion-item class="transparente corBranca">\n            <ion-icon item-start large ios="logo-facebook" md="logo-facebook"></ion-icon>\n            <h2 class="quebraLinha">Cajazeira Produtora Cultural</h2>\n        </ion-item>\n        <ion-item class="transparente corBranca">\n            <ion-icon item-start large ios="ios-mail" md="md-mail"></ion-icon>\n            <h2 class="quebraLinha">cajazeiraprodutoracultural@gmail.com</h2>\n        </ion-item>\n        <ion-item class="transparente corBranca">\n            <ion-icon item-start large ios="logo-instagram" md="logo-instagram"></ion-icon>\n            <h2 class="quebraLinha">@Cajazeiraprodutoracultural</h2>\n        </ion-item>\n        <ion-item class="transparente corBranca">\n            <ion-icon item-start large ios="ios-globe" md="md-globe"></ion-icon>\n            <h2 class="quebraLinha">https://cajazeiraprodutora.blogspot.com</h2>\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/home/jonas/eventosCZ/loopisjr-eventos-cz-mobile/src/pages/eventos/eventos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_evento_evento__["a" /* EventoProvider */]])
    ], EventosPage);
    return EventosPage;
}());

//# sourceMappingURL=eventos.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evento_detallhe_evento_detallhe__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_evento_evento__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProgramacaoPage = /** @class */ (function () {
    function ProgramacaoPage(navCtrl, navParams, eventoProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventoProvider = eventoProvider;
        this.loadingCtrl = loadingCtrl;
        this.eventos = [];
        this.eventosFiltro = new Array;
        this.isInput = false;
        this.isTitle = true;
    }
    ProgramacaoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.presentLoading();
        this.eventoProvider.getEventos(function (resul) {
            _this.eventos = resul;
            _this.eventosFiltro = resul;
        });
    };
    ProgramacaoPage.prototype.mostraDetalhes = function (evento) {
        console.log(evento);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__evento_detallhe_evento_detallhe__["a" /* EventoDetallhePage */], { event: evento });
    };
    ProgramacaoPage.prototype.inicializaLista = function () {
        this.eventosFiltro = this.eventos;
    };
    ProgramacaoPage.prototype.setFilteredItems = function (ev) {
        var val = ev.target.value;
        this.inicializaLista();
        console.log(val);
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.eventosFiltro = this.eventosFiltro.filter(function (item) {
                return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.eventos;
        }
    };
    ProgramacaoPage.prototype.mostraInput = function (ev) {
        this.isInput = !this.isInput;
        this.isTitle = !this.isTitle;
    };
    ProgramacaoPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Carregando eventos...",
            duration: 2000
        });
        loader.present();
    };
    //atualiza a view
    ProgramacaoPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        setTimeout(function () {
            _this.ngOnInit();
            refresher.complete();
        }, 2000);
    };
    ProgramacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-programacao',template:/*ion-inline-start:"/home/jonas/eventosCZ/loopisjr-eventos-cz-mobile/src/pages/programacao/programacao.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            Programação\n        </ion-title>\n    </ion-navbar>\n    <ion-toolbar>\n        <ion-searchbar [(ngModel)]="eventoFiltro" placeholder="Buscar evento" (ionInput)="setFilteredItems($event)"\n            clearInput>>\n        </ion-searchbar>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding class="background">\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles"\n            refreshingText="Atualizando...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <ion-list>\n        <ion-item *ngFor="let evento of eventosFiltro" (click)="mostraDetalhes(evento)">\n            <ion-avatar item item-start>\n                <img src="{{evento.foto.i}}">\n            </ion-avatar>\n            <h2>{{evento.nome}}</h2>\n            <p>{{evento.data}}</p>\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/home/jonas/eventosCZ/loopisjr-eventos-cz-mobile/src/pages/programacao/programacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_evento_evento__["a" /* EventoProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ProgramacaoPage);
    return ProgramacaoPage;
}());

//# sourceMappingURL=programacao.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/erro/erro.module": [
		296,
		3
	],
	"../pages/evento-detallhe/evento-detallhe.module": [
		297,
		2
	],
	"../pages/eventos/eventos.module": [
		298,
		1
	],
	"../pages/programacao/programacao.module": [
		299,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, network, toast) {
        this.navCtrl = navCtrl;
        this.network = network;
        this.toast = toast;
        this.verMais = false;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/jonas/eventosCZ/loopisjr-eventos-cz-mobile/src/pages/about/about.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Nossa Equipe</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="background">\n    <img src="assets/imgs/teatroSobre.jpg"/>\n    <ion-card class="transparente">        \n        <ion-card-content class="center mg-top-20" color="light">\n            <ion-label class="mg-top-5">SOBRE </ion-label> <br>\n            Cajazeira Produtora Cultural é uma empresa no ramo de entretenimento\n            que busca contribuir com a arte e a cultura da Cidade e Região. <br>\n        </ion-card-content>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/home/jonas/eventosCZ/loopisjr-eventos-cz-mobile/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_evento_evento__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__evento_detallhe_evento_detallhe__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, platform, geolocation, eventosProvider, navParams, alertCtrl, network, toast, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.geolocation = geolocation;
        this.eventosProvider = eventosProvider;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.toast = toast;
        this.loadingCtrl = loadingCtrl;
        this.eventos = [];
        this.aux = false;
        this.lat = -6.8895277;
        this.lng = -38.5602017;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready()
            .then(function () {
            //animação de load
            _this.presentLoading();
            //pega a localização
            _this.geolocation.getCurrentPosition()
                .then(function (res) {
                _this.initMap(res.coords.latitude, res.coords.longitude);
                setInterval(function () {
                    if (!_this.aux) {
                        _this.listEventos();
                        _this.aux = true;
                    }
                }, 2000);
            })
                .catch(function () {
                _this.initMap(_this.lat, _this.lng);
                setInterval(function () {
                    if (!_this.aux) {
                        _this.listEventos();
                        _this.aux = true;
                    }
                }, 2000);
            });
        });
    };
    HomePage.prototype.initMap = function (Lat, Lng) {
        this.lat = Lat;
        this.lng = Lng;
        this.map = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.map('mapid').setView([this.lat, this.lng], 14);
        this.titles = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            id: 'mapbox.streets',
        });
        this.titles.addTo(this.map);
        this.listEventos();
    };
    HomePage.prototype.listEventos = function () {
        var _this = this;
        this.eventosProvider.getEventos(function (list) {
            _this.eventos = list;
            _this.eventos.forEach(function (event) {
                var cood = _this.getCoodenadas(event);
                var marcador = _this.criaMarcador(cood[0], cood[1]);
                marcador.addTo(_this.map)
                    .bindPopup(event.nome)
                    .openPopup();
                marcador.addEventListener('click', function () {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__evento_detallhe_evento_detallhe__["a" /* EventoDetallhePage */], { event: event });
                });
            });
        });
    };
    //cria marcador
    HomePage.prototype.criaMarcador = function (lat, lng) {
        return __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.marker([lat, lng]);
    };
    HomePage.prototype.getCoodenadas = function (event) {
        var coo = event.local.replace('(', '').replace(')', '').split(',');
        coo[0] = parseFloat(coo[0]);
        coo[1] = parseFloat(coo[1]);
        return coo;
    };
    //animação de load
    HomePage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Carregando mapa...",
            duration: 2000
        });
        loader.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/jonas/eventosCZ/loopisjr-eventos-cz-mobile/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>EventosCZ</ion-title>\n        <button ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <div id="mapid">\n\n    </div>\n</ion-content>'/*ion-inline-end:"/home/jonas/eventosCZ/loopisjr-eventos-cz-mobile/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__providers_evento_evento__["a" /* EventoProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_evento_detallhe_evento_detallhe__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_eventos_eventos__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_programacao_programacao__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_erro_erro__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_evento_evento__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_network__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_screen_orientation__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//pages 






//provides 




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_evento_detallhe_evento_detallhe__["a" /* EventoDetallhePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_eventos_eventos__["a" /* EventosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_programacao_programacao__["a" /* ProgramacaoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_erro_erro__["a" /* ErroPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/erro/erro.module#ErroPageModule', name: 'ErroPage', segment: 'erro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/evento-detallhe/evento-detallhe.module#EventoDetallhePageModule', name: 'EventoDetallhePage', segment: 'evento-detallhe', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/eventos/eventos.module#EventosPageModule', name: 'EventosPage', segment: 'eventos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/programacao/programacao.module#ProgramacaoPageModule', name: 'ProgramacaoPage', segment: 'programacao', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_evento_detallhe_evento_detallhe__["a" /* EventoDetallhePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_eventos_eventos__["a" /* EventosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_programacao_programacao__["a" /* ProgramacaoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_erro_erro__["a" /* ErroPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_13__providers_evento_evento__["a" /* EventoProvider */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fireConfig; });
var fireConfig = {
    apiKey: "AIzaSyBg3HIaN2JHCiV0nZVq4wTRd1F2_BFyjOA",
    authDomain: "eventoscz-f0f2a.firebaseapp.com",
    databaseURL: "https://eventoscz-f0f2a.firebaseio.com",
    projectId: "eventoscz-f0f2a",
    storageBucket: "eventoscz-f0f2a.appspot.com",
    messagingSenderId: "330865102731"
};
//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_eventos_eventos__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_programacao_programacao__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_erro_erro__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//pages 

//import { EventoDetallhePage } from '../pages/evento-detallhe/evento-detallhe'




var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, network, toast, screen, iab, alertCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.network = network;
        this.toast = toast;
        this.screen = screen;
        this.iab = iab;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */];
        this.programacao = __WEBPACK_IMPORTED_MODULE_10__pages_programacao_programacao__["a" /* ProgramacaoPage */];
        this.divulgaEvento = __WEBPACK_IMPORTED_MODULE_8__pages_eventos_eventos__["a" /* EventosPage */];
        this.maps = __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */];
        this.equipe = __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */];
        this.erro = __WEBPACK_IMPORTED_MODULE_11__pages_erro_erro__["a" /* ErroPage */];
        this.mostraMenu = true;
        //this.verificaConexao();
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.verificaConexao();
            _this.screen.lock(_this.screen.ORIENTATIONS.PORTRAIT);
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.rootPage = page;
    };
    MyApp.prototype.verificaConexao = function () {
        var _this = this;
        this.network.onDisconnect().subscribe(function () {
            var alert = _this.alertCtrl.create({
                title: 'Você está desconectado',
                subTitle: 'Verifique sua conexão com a internet!',
                buttons: ['Ok']
            });
            alert.present();
            _this.rootPage = _this.erro;
            _this.mostraMenu = false;
        });
        this.network.onConnect().subscribe(function () {
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */];
            _this.mostraMenu = true;
        });
    };
    MyApp.prototype.openBrowser = function (url) {
        var browser = this.iab.create(url, '_blank', { location: 'no', zoom: 'no' });
        browser.show();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/jonas/eventosCZ/loopisjr-eventos-cz-mobile/src/app/app.html"*/'<ion-menu [content]="menu" *ngIf="mostraMenu">\n    <ion-header>\n        <ion-navbar>\n            <ion-title>EventosCZ</ion-title>\n        </ion-navbar>\n    </ion-header>\n\n    <ion-content>\n        <ion-list>\n            <button ion-item menuClose (click)="openPage(maps)">\n                <ion-icon ios="ios-locate" md="md-locate" item-start large></ion-icon>\n                Mapa\n            </button>\n            <button ion-item menuClose (click)="openPage(programacao)">\n                <ion-icon ios="ios-calendar" md="md-calendar" item-start large></ion-icon>\n                Programação\n            </button>\n            <button ion-item menuClose (click)="openPage(divulgaEvento)">\n                <ion-icon ios="ios-create" md="md-create" item-start large></ion-icon>\n                Divulgue seu evento\n            </button>\n            <button ion-item menuClose (click)="openPage(equipe)">\n                <ion-icon ios="ios-information-circle" md="md-information-circle" item-start large>\n                </ion-icon>\n                Nossa Equipe\n            </button>\n        </ion-list>\n        <ion-footer>\n            <ion-toolbar>\n                <img id="logo" src="assets/imgs/a.png"/>\n                <ion-item>\n                    <ion-icon (click)="openBrowser(\'https://m.facebook.com/loopisjr\')"  item-start large ios="logo-facebook" md="logo-facebook"></ion-icon>\n                    <ion-icon (click)="openBrowser(\'https://github.com/loopisjr\')"  item-start large ios="logo-github" md="logo-github"></ion-icon>\n                    <ion-icon (click)="openBrowser(\'https://www.instagram.com/loopisjr/\')"  item-start large ios="logo-instagram" md="logo-instagram"></ion-icon>                                        \n                </ion-item>\n            </ion-toolbar>\n        </ion-footer>\n    </ion-content>\n</ion-menu>\n<ion-nav #menu [root]="rootPage"></ion-nav>'/*ion-inline-end:"/home/jonas/eventosCZ/loopisjr-eventos-cz-mobile/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_firebase__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventoProvider = /** @class */ (function () {
    function EventoProvider(toast) {
        this.toast = toast;
        this.novosEventos = [];
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.initializeApp(__WEBPACK_IMPORTED_MODULE_2__config_firebase__["a" /* fireConfig */]);
    }
    EventoProvider.prototype.ngOnInit = function () {
    };
    EventoProvider.prototype.getEventos = function (callback) {
        //let eventos = firebase.database().ref('eventos');
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('eventos').once('value')
            .then(function (snapshot) {
            var lista = [];
            snapshot.forEach(function (event) {
                var evento = event.val();
                var foto = _this.getImageStorage(event.val().hash);
                evento.foto = foto;
                lista.push(evento);
                _this.novosEventos = lista;
            });
            callback(_this.novosEventos);
        })
            .catch(function (err) {
            console.log('erro nessa porra ', err);
            _this.toast.create({
                message: "Você está desconectado.",
                duration: 5000,
                position: 'middle'
            }).present();
        });
    };
    EventoProvider.prototype.getImageStorage = function (hash) {
        var referencia = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.storage().ref("eventos/" + hash);
        return referencia.getDownloadURL();
    };
    EventoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* ToastController */]])
    ], EventoProvider);
    return EventoProvider;
}());

//# sourceMappingURL=evento.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventoDetallhePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventoDetallhePage = /** @class */ (function () {
    function EventoDetallhePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EventoDetallhePage.prototype.ngOnInit = function () {
        var e = this.navParams.get('event') || {};
        if (e)
            this.evento = e;
    };
    EventoDetallhePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-evento-detallhe',template:/*ion-inline-start:"/home/jonas/eventosCZ/loopisjr-eventos-cz-mobile/src/pages/evento-detallhe/evento-detallhe.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detalhes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="background">\n  <ion-card>\n    <img class="mg-top-10" src="{{evento.foto.i}}" />\n    <ion-card-content>\n      <ion-card-title class="center bold">\n        {{evento.nome}}\n      </ion-card-title>\n      <ion-item>\n        <ion-icon item-start color="primary" ios="ios-calendar" md="md-calendar"></ion-icon>\n        <ion-label>Data : {{evento.data}}</ion-label>\n\n      </ion-item>\n      <ion-item>\n        <ion-icon item-start color="secondary" ios="ios-time" md="md-time"></ion-icon>\n        <ion-label>Hora de Inicio : {{evento.hora}}h</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-icon color="BondiBlue" item-start ios="logo-usd" md="logo-usd"></ion-icon>\n        <p>Meia :{{evento.preco.meia}} R$</p>\n        <p>Inteira :{{evento.preco.inteira}} R$</p>\n      </ion-item>\n      <ion-item>\n        <ion-icon color="danger" item-start ios="ios-alert" md="md-alert"></ion-icon>\n        <ion-label> Classificação : {{evento.classificacao}} anos</ion-label>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/home/jonas/eventosCZ/loopisjr-eventos-cz-mobile/src/pages/evento-detallhe/evento-detallhe.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], EventoDetallhePage);
    return EventoDetallhePage;
}());

//# sourceMappingURL=evento-detallhe.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map