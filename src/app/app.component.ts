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
import { ErroPage } from '../pages/erro/erro';

declare var navigator: any;
declare var Connection: any;

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
  private erro = ErroPage;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public network: Network,
    private toast: ToastController,
    private screen: ScreenOrientation,
    private iab: InAppBrowser,
    public alertCtrl: AlertController

  ) {
    this.verificaConexao();
    this.initializeApp()
  }

  initializeApp() {    
    this.platform.ready().then(() => {
      this.verificaConexao();
      this.screen.lock(this.screen.ORIENTATIONS.PORTRAIT);
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.rootPage = page;
  }

  verificaConexao() {

    this.network.onDisconnect().subscribe(() => {

      const alert = this.alertCtrl.create({
        title: 'Você está desconectado',
        subTitle: 'Verifique sua conexão com a internet!',
        buttons: ['Ok']
      });
      alert.present();    
      this.rootPage = this.erro;
    })

    this.network.onConnect().subscribe(() => {
      this.rootPage =  HomePage;
    })
  }
  openBrowser(url) {
    let browser = this.iab.create(url, '_blank', { location: 'no', zoom: 'no' })
    browser.show();
  }
}
