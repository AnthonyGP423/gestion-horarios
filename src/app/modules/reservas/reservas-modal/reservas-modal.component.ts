import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { IReserva } from '../../../core/models/IReserva';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TYPE_MODAL_VER } from '../../../shared/utils/constants';

@Component({
  selector: 'app-reservas-modal',
  standalone: true,
  imports: [InputTextModule, FloatLabelModule, FormsModule, ButtonModule],
  templateUrl: './reservas-modal.component.html',
  styleUrl: './reservas-modal.component.scss'
})
export class ReservasModalComponent implements OnInit {

  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ){
  }

  reserva: IReserva = {
    idReserva: 0,
    usuario:'',
    fecha:'',
    descripcion:'',
    estado:'',
    horario:'',
};


ngOnInit(): void {
  console.log('ReservasModalComponent',this.config.data);
  if(this.config.data.data){
   this.reserva = this.config.data.data;
  }
 }
 isModoVer():boolean{
  return this.config.data.typeModal == TYPE_MODAL_VER
}

  

  

  

}
