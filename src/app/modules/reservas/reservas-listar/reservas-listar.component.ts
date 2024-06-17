import { Component, ViewChild } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { IReserva } from '../../../core/models/IReserva';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ReservasModalComponent } from '../reservas-modal/reservas-modal.component';
import { FooterModalComponent } from '../../../shared/components/footer-modal/footer-modal.component';
import { TYPE_MODAL_MODIFICAR, TYPE_MODAL_NUEVO, TYPE_MODAL_VER } from '../../../shared/utils/constants';

@Component({
  selector: 'app-reservas-listar',
  standalone: true,
  imports: [TableModule, ButtonModule, IconFieldModule, InputIconModule, InputTextModule],
  templateUrl: './reservas-listar.component.html',
  styleUrl: './reservas-listar.component.scss',
  providers: [DialogService]
})
export class ReservasListarComponent {


  constructor(
    
    private dialogService: DialogService
  ){

  }

  @ViewChild('tblReservasListar') tblReservasListar: Table | undefined;

  ref: DynamicDialogRef | undefined;


  buttonStyle= {
    width: '2.3rem',
    height: '2.3rem',
    'margin-left': '0.5rem'
  }

  reservas: IReserva[] = [{
    idReserva: 1,
    usuario: 'Juan',
    fecha: '15/06/2024',
    descripcion: 'vacaciones adelantadas',
    estado: 'Aprobado',
    horario: '8:00am - 5:00pm'

  },{
    idReserva: 2,
    usuario: 'Max',
    fecha: '16/06/2024',
    descripcion: 'Dia del Padre',
    estado: 'Rechazado',
    horario: '8:00am - 5:00pm'

  },{
    idReserva: 3,
    usuario: 'Willy',
    fecha: '17/06/2024',
    descripcion: 'Examen Parcial',
    estado: 'Rechazado',
    horario: '8:00am - 5:00pm'

  }
  ];

  applyFilterGlobal($event:any, stringVal:string) {
    this.tblReservasListar?.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  onClickNuevaReserva(){
    console.log('onClickNuevaReserva');
    this.dialogService.open(ReservasModalComponent,
      {
        header:'Nueva Reserva',
        width: '80vw',
        height: '80vh',
        templates:{
          footer: FooterModalComponent
        },
        data: {
          typeModal: TYPE_MODAL_NUEVO,
          data: undefined
        }
      }
    );
  }

  onClickVerReserva(reserva: IReserva){
    console.log('onClickVerReserva');
    this.dialogService.open(ReservasModalComponent,
      {
        header:'Reserva Creada',
        width: '80vw',
        height: '80vh',
        templates:{
          footer: FooterModalComponent
        },
        data: {
          typeModal: TYPE_MODAL_VER,
          data: reserva
        }
      }
    );
  }

  onClickModificarReserva(reserva: IReserva){
    console.log('onClickModificarReserva');
    this.dialogService.open(ReservasModalComponent,
      {
        header:'Modificar Reserva',
        width: '80vw',
        height: '80vh',
        templates:{
          footer: FooterModalComponent
        },
        data: {
          typeModal: TYPE_MODAL_MODIFICAR,
          data: reserva
        }
      }
    );
  }
}
