import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { Horario } from '../../../core/models/horario';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TYPE_MODAL_VER } from '../../../shared/utils/constants';

@Component({
  selector: 'app-horarios-modal',
  standalone: true,
  imports: [InputTextModule, FloatLabelModule, FormsModule, ButtonModule],
  templateUrl: './horarios-modal.component.html',
  styleUrl: './horarios-modal.component.scss'
})
export class HorariosModalComponent {
  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ){
  }

  horario: Horario = {
    id: 0,
    Nombre: '',
    Descripcion: '',
    Fecha_inicio: new Date,
    Fecha_fin: new Date,
    Creador_id: 0,
    Fecha_creacion: new Date(),
    Ubicacion: '',
    Tipo: '',
    Trabajador_id: 0,
  };


  ngOnInit(): void {
  console.log('HorariosModalComponent',this.config.data);
  if(this.config.data.data){
   this.horario = this.config.data.data;
  }
  }
  isModoVer():boolean{
  return this.config.data.typeModal == TYPE_MODAL_VER
  }

}
