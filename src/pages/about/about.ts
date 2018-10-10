import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { Network } from "@ionic-native/network"

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  private verMais = false;

  constructor(public navCtrl: NavController, public network : Network, public toast : ToastController) {    
  }

}
