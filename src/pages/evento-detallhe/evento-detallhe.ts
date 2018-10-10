import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-evento-detallhe',
  templateUrl: 'evento-detallhe.html',
})
export class EventoDetallhePage implements OnInit {
  private evento : {}
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {}

  ngOnInit(): void {   
    let e = this.navParams.get('event') || {};
    if(e) this.evento = e;
  }
}
