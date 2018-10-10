import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventoProvider } from '../../providers/evento/evento';

@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {
    
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public eventoProvider : EventoProvider
  ){}

 

}
