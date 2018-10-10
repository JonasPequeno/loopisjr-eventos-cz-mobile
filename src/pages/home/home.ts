import { Component, OnInit } from '@angular/core';
import { NavController, Platform, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation'
import leaflet from 'leaflet';
import L from 'leaflet';

import { EventoProvider } from '../../providers/evento/evento';
import { EventoDetallhePage } from '../evento-detallhe/evento-detallhe';
import { Network } from '@ionic-native/network';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  private map: any;
  private eventos = [];
  public center: leaflet.PointTuple;
  private aux: boolean = false;
  private titles: any;
  private lat = -6.8895277;
  private lng = -38.5602017;

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public geolocation: Geolocation,
    public eventosProvider: EventoProvider,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public network: Network,
    public toast: ToastController,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.platform.ready()
      .then(() => {
        //animação de load
        this.presentLoading();

        //pega a localização
        this.geolocation.getCurrentPosition()
          .then((res) => {
            this.initMap(res.coords.latitude, res.coords.longitude);
            setInterval(() => {
              if (!this.aux) {
                this.listEventos();
                this.aux = true;
              }
            }, 2000);

          })
          .catch(() => {
            this.initMap(this.lat, this.lng);
            setInterval(() => {
              if (!this.aux) {
                this.listEventos();
                this.aux = true;
              }
            }, 2000);
          })
      })
  }

  private initMap(Lat, Lng) {

    this.lat = Lat;
    this.lng = Lng;

    this.map = L.map('mapid').setView([this.lat, this.lng], 14);

    this.titles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        id: 'mapbox.streets',
      })
    this.titles.addTo(this.map);

    this.listEventos();
  }

  private listEventos() {

    this.eventosProvider.getEventos( (list) => {

      this.eventos = list;

       this.eventos.forEach((event) => {

        let cood = this.getCoodenadas(event);
        let marcador = this.criaMarcador(cood[0], cood[1]);
        marcador.addTo(this.map)
          .bindPopup(event.nome)
          .openPopup();
        marcador.addEventListener('click', () => {
          this.navCtrl.push(EventoDetallhePage, { event: event });
        })
      })

    })
  }

  //cria marcador
  private criaMarcador(lat, lng) {
    return L.marker([lat, lng]);
  }

  getCoodenadas(event) {
    let coo = event.local.replace('(', '').replace(')', '').split(',');

    coo[0] = parseFloat(coo[0]);
    coo[1] = parseFloat(coo[1]);

    return coo;
  }
  //animação de load
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Carregando mapa...",
      duration: 2000
    });
    loader.present();
  }
}

