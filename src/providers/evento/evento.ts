import { Injectable, OnInit } from '@angular/core';
import firebase from 'firebase';
import { fireConfig } from '../../config/firebase';
import { ToastController } from 'ionic-angular';


@Injectable()
export class EventoProvider implements OnInit {
  private novosEventos: Array<any> = [];

  constructor(private toast: ToastController) {
    firebase.initializeApp(fireConfig);       
  }

  ngOnInit(): void {
    
  }

  getEventos(callback) {

    //let eventos = firebase.database().ref('eventos');

    firebase.database().ref('eventos').once('value')
      .then((snapshot) => {
        let lista = [];
        snapshot.forEach(event => {
          let evento = event.val();

          let foto = this.getImageStorage(event.val().hash);

          evento.foto = foto;
          lista.push(evento);
          this.novosEventos = lista;
        });
        callback(this.novosEventos);
      })    
      .catch((err) => {
        console.log('erro nessa porra ' ,err);
        
        this.toast.create({
          message: "Você está desconectado.",
          duration: 5000,
          position:'middle'
        }).present();
      })
     
  
  }

  getImageStorage(hash) {
    let referencia = firebase.storage().ref(`eventos/${hash}`);
    return referencia.getDownloadURL();
  }

}
