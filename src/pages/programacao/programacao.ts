import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EventoDetallhePage } from '../evento-detallhe/evento-detallhe';
import { EventoProvider } from '../../providers/evento/evento';
import { Observable } from 'rxjs/Observable';
@IonicPage()
@Component({
  selector: 'page-programacao',
  templateUrl: 'programacao.html',
})
export class ProgramacaoPage implements OnInit {

  private eventos = [];
  private eventosFiltro : Array<any> = new Array;
  private isInput = false;
  private isTitle = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public eventoProvider: EventoProvider,
    private loadingCtrl : LoadingController
  ) {}

  ngOnInit() {
    this.presentLoading();
    this.eventoProvider.getEventos((resul) => {
      this.eventos = resul;
      this.eventosFiltro = resul;
    });

  }

  mostraDetalhes(evento) {
    console.log(evento);
    this.navCtrl.push(EventoDetallhePage, { event: evento });
  }

  inicializaLista() {
    this.eventosFiltro = this.eventos;
  }

  setFilteredItems(ev: any) {
    const val = ev.target.value;
    this.inicializaLista();
    console.log(val);
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.eventosFiltro = this.eventosFiltro.filter((item) => {
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.eventos;
    }
  }

  mostraInput(ev : any) {
    this.isInput = !this.isInput;
    this.isTitle = !this.isTitle;
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Carregando eventos...",
      duration: 2000
    });
    loader.present();
  }

   //atualiza a view
   doRefresh(refresher) {
    setTimeout(() => {
      this.ngOnInit();
      refresher.complete();
    }, 2000);
  }

}


