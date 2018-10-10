import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//pages 
import { AboutPage } from '../pages/about/about';
import { EventoDetallhePage } from '../pages/evento-detallhe/evento-detallhe'
import { EventosPage } from '../pages/eventos/eventos';
import { HomePage } from '../pages/home/home';
import { ProgramacaoPage } from '../pages/programacao/programacao';

//provides 
  import { EventoProvider } from '../providers/evento/evento';
  import { Network } from '@ionic-native/network';
  import { ScreenOrientation } from '@ionic-native/screen-orientation';
  import { InAppBrowser } from '@ionic-native/in-app-browser';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    EventoDetallhePage,
    EventosPage,
    HomePage,
    ProgramacaoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    EventoDetallhePage,
    EventosPage,
    HomePage,
    ProgramacaoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    EventoProvider,
    Network,
    InAppBrowser,
    ScreenOrientation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
