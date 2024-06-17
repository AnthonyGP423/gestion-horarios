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
import {
  TYPE_MODAL_MODIFICAR,
  TYPE_MODAL_NUEVO,
  TYPE_MODAL_VER,
} from '../../../shared/utils/constants';

@Component({
  selector: 'app-reservas-listar',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
  ],
  templateUrl: './reservas-listar.component.html',
  styleUrl: './reservas-listar.component.scss',
  providers: [DialogService],
})
export class ReservasListarComponent {
  constructor(private dialogService: DialogService) {}

  @ViewChild('tblReservasListar') tblReservasListar: Table | undefined;

  ref: DynamicDialogRef | undefined;

  buttonStyle = {
    width: '2.3rem',
    height: '2.3rem',
    'margin-left': '0.5rem',
  };

  reservas: IReserva[] = [
    {
      idReserva: 1,
      usuario: 'Juan',
      fecha: '15/06/2024',
      descripcion: 'Vacaciones adelantadas',
      estado: 'Aprobado',
      horario: '8:00am - 5:00pm',
    },
    {
      idReserva: 2,
      usuario: 'Max',
      fecha: '16/06/2024',
      descripcion: 'Día del Padre',
      estado: 'Rechazado',
      horario: '8:00am - 5:00pm',
    },
    {
      idReserva: 3,
      usuario: 'Willy',
      fecha: '17/06/2024',
      descripcion: 'Examen Parcial',
      estado: 'Rechazado',
      horario: '8:00am - 5:00pm',
    },
    {
      idReserva: 4,
      usuario: 'Laura',
      fecha: '18/06/2024',
      descripcion: 'Consulta médica',
      estado: 'Aprobado',
      horario: '9:00am - 3:00pm',
    },
    {
      idReserva: 5,
      usuario: 'Ana',
      fecha: '19/06/2024',
      descripcion: 'Reunión familiar',
      estado: 'Pendiente',
      horario: '10:00am - 4:00pm',
    },
    {
      idReserva: 6,
      usuario: 'Carlos',
      fecha: '20/06/2024',
      descripcion: 'Viaje de negocios',
      estado: 'Aprobado',
      horario: '7:00am - 6:00pm',
    },
    {
      idReserva: 7,
      usuario: 'María',
      fecha: '21/06/2024',
      descripcion: 'Evento deportivo',
      estado: 'Rechazado',
      horario: '8:00am - 5:00pm',
    },
    {
      idReserva: 8,
      usuario: 'Pedro',
      fecha: '22/06/2024',
      descripcion: 'Día libre',
      estado: 'Pendiente',
      horario: '8:00am - 5:00pm',
    },
    {
      idReserva: 9,
      usuario: 'Lucía',
      fecha: '23/06/2024',
      descripcion: 'Vacaciones',
      estado: 'Aprobado',
      horario: '8:00am - 5:00pm',
    },
    {
      idReserva: 10,
      usuario: 'Sofia',
      fecha: '24/06/2024',
      descripcion: 'Capacitación',
      estado: 'Aprobado',
      horario: '8:00am - 5:00pm',
    },
    {
      idReserva: 11,
      usuario: 'Luis',
      fecha: '25/06/2024',
      descripcion: 'Consulta médica',
      estado: 'Rechazado',
      horario: '8:00am - 12:00pm',
    },
    {
      idReserva: 12,
      usuario: 'Miguel',
      fecha: '26/06/2024',
      descripcion: 'Asuntos personales',
      estado: 'Pendiente',
      horario: '1:00pm - 5:00pm',
    },
    {
      idReserva: 13,
      usuario: 'Andrea',
      fecha: '27/06/2024',
      descripcion: 'Reunión de trabajo',
      estado: 'Aprobado',
      horario: '9:00am - 6:00pm',
    },
    {
      idReserva: 14,
      usuario: 'David',
      fecha: '28/06/2024',
      descripcion: 'Viaje de negocios',
      estado: 'Rechazado',
      horario: '8:00am - 5:00pm',
    },
    {
      idReserva: 15,
      usuario: 'Elena',
      fecha: '29/06/2024',
      descripcion: 'Examen final',
      estado: 'Pendiente',
      horario: '10:00am - 4:00pm',
    },
    {
      idReserva: 16,
      usuario: 'Pablo',
      fecha: '30/06/2024',
      descripcion: 'Día de descanso',
      estado: 'Aprobado',
      horario: '8:00am - 5:00pm',
    },
    {
      idReserva: 17,
      usuario: 'Carla',
      fecha: '01/07/2024',
      descripcion: 'Consulta médica',
      estado: 'Rechazado',
      horario: '9:00am - 11:00am',
    },
    {
      idReserva: 18,
      usuario: 'Ricardo',
      fecha: '02/07/2024',
      descripcion: 'Reunión familiar',
      estado: 'Aprobado',
      horario: '12:00pm - 8:00pm',
    },
    {
      idReserva: 19,
      usuario: 'Teresa',
      fecha: '03/07/2024',
      descripcion: 'Evento social',
      estado: 'Pendiente',
      horario: '3:00pm - 11:00pm',
    },
    {
      idReserva: 20,
      usuario: 'Adriana',
      fecha: '04/07/2024',
      descripcion: 'Capacitación',
      estado: 'Aprobado',
      horario: '8:00am - 5:00pm',
    },
    {
      idReserva: 21,
      usuario: 'Roberto',
      fecha: '05/07/2024',
      descripcion: 'Día libre',
      estado: 'Pendiente',
      horario: '8:00am - 5:00pm',
    },
    {
      idReserva: 22,
      usuario: 'Gabriela',
      fecha: '06/07/2024',
      descripcion: 'Reunión de trabajo',
      estado: 'Aprobado',
      horario: '8:00am - 3:00pm',
    },
    {
      idReserva: 23,
      usuario: 'Jorge',
      fecha: '07/07/2024',
      descripcion: 'Consulta médica',
      estado: 'Rechazado',
      horario: '9:00am - 1:00pm',
    },
  ];
  applyFilterGlobal($event: any, stringVal: string) {
    this.tblReservasListar?.filterGlobal(
      ($event.target as HTMLInputElement).value,
      stringVal
    );
  }

  onClickNuevaReserva() {
    console.log('onClickNuevaReserva');
    this.dialogService.open(ReservasModalComponent, {
      header: 'Nueva Reserva',
      width: '80vw',
      height: '80vh',
      templates: {
        footer: FooterModalComponent,
      },
      data: {
        typeModal: TYPE_MODAL_NUEVO,
        data: undefined,
      },
    });
  }

  onClickVerReserva(reserva: IReserva) {
    console.log('onClickVerReserva');
    this.dialogService.open(ReservasModalComponent, {
      header: 'Reserva Creada',
      width: '80vw',
      height: '80vh',
      templates: {
        footer: FooterModalComponent,
      },
      data: {
        typeModal: TYPE_MODAL_VER,
        data: reserva,
      },
    });
  }

  onClickModificarReserva(reserva: IReserva) {
    console.log('onClickModificarReserva');
    this.dialogService.open(ReservasModalComponent, {
      header: 'Modificar Reserva',
      width: '80vw',
      height: '80vh',
      templates: {
        footer: FooterModalComponent,
      },
      data: {
        typeModal: TYPE_MODAL_MODIFICAR,
        data: reserva,
      },
    });
  }
}
