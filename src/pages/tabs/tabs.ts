import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { EventosPage } from '../eventos/eventos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  //recebe e string do tab e troca as paginas
  tabHome = HomePage;
  tabSobre = AboutPage;
  tabEventos = EventosPage;

  constructor() {

  }
}
