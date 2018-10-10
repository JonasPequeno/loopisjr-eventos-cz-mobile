import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Network } from '@ionic-native/network';

import { AlertController } from 'ionic-angular';
import { ToastController } from "ionic-angular";
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { InAppBrowser } from '@ionic-native/in-app-browser';



//pages 
import { AboutPage } from '../pages/about/about';
//import { EventoDetallhePage } from '../pages/evento-detallhe/evento-detallhe'
import { EventosPage } from '../pages/eventos/eventos';
import { HomePage } from '../pages/home/home';
import { ProgramacaoPage } from '../pages/programacao/programacao';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  private programacao = ProgramacaoPage;
  private divulgaEvento = EventosPage;
  private maps = HomePage;
  private equipe = AboutPage;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public network: Network,
    private toast: ToastController,
    private screen: ScreenOrientation,
    private iab: InAppBrowser,

  ) {
    this.initializeApp()
  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.screen.lock(this.screen.ORIENTATIONS.PORTRAIT);
      this.verificaConexao();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.rootPage = page;
  }

  verificaConexao() {

    this.network.onConnect().subscribe(() => {

      this.toast.create({
        message: `Você está conectado em ${this.network.type}.`,
        duration: 4000,
      }).present();

    })

    this.network.onDisconnect().subscribe(() => {

      let to = this.toast.create({
        message: "Você está desconectado.",
        duration: 5000,
        position: 'middle'
      }).present();
    })

  }
  openBrowser(url) {
    let browser = this.iab.create(url, '_blank', { location: 'no', zoom: 'no' })
    browser.show();
  }
}
