import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventoDetallhePage } from './evento-detallhe';

@NgModule({
  declarations: [
    EventoDetallhePage,
  ],
  imports: [
    IonicPageModule.forChild(EventoDetallhePage),
  ],
})
export class EventoDetallhePageModule {}
