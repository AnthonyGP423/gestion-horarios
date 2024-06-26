import { Component, OnInit, ViewChild } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Horario } from '../../../core/models/horario';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FooterModalComponent } from '../../../shared/components/footer-modal/footer-modal.component';
import {
  TYPE_MODAL_MODIFICAR,
  TYPE_MODAL_NUEVO,
  TYPE_MODAL_VER,
} from '../../../shared/utils/constants';
import { HorariosModalComponent } from '../horarios-modal/horarios-modal.component';

@Component({
  selector: 'app-horarios-listar',
  standalone: true,
  imports: [
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    RippleModule,
    ToastModule,
    TableModule,
    CommonModule,
    InputTextModule,
  ],
  templateUrl: './horarios-listar.component.html',
  styleUrls: ['./horarios-listar.component.scss'],
  providers: [MessageService, DialogService],
})
export class HorariosListarComponent implements OnInit {
  ListHorarios: Horario[] = [
    {
      id: 1,
      Nombre: 'Horario de Mañana',
      Descripcion: 'Turno de mañana',
      Fecha_inicio: new Date(2032, 0, 1, 8, 0),
      Fecha_fin: new Date(2032, 0, 1, 14, 0),
      Creador_id: 1,
      Fecha_creacion: new Date(),
      Ubicacion: 'Planta 1',
      Tipo: 'Regular',
      Trabajador_id: 101,
    },
    {
      id: 2,
      Nombre: 'Horario de Tarde',
      Descripcion: 'Turno de tarde',
      Fecha_inicio: new Date(2032, 0, 1, 14, 0),
      Fecha_fin: new Date(2032, 0, 1, 20, 0),
      Creador_id: 2,
      Fecha_creacion: new Date(),
      Ubicacion: 'Planta 1',
      Tipo: 'Regular',
      Trabajador_id: 102,
    },
    {
      id: 3,
      Nombre: 'Horario Nocturno',
      Descripcion: 'Turno de noche',
      Fecha_inicio: new Date(2032, 0, 1, 20, 0),
      Fecha_fin: new Date(2032, 0, 2, 2, 0),
      Creador_id: 3,
      Fecha_creacion: new Date(),
      Ubicacion: 'Planta 2',
      Tipo: 'Regular',
      Trabajador_id: 103,
    },
    {
      id: 4,
      Nombre: 'Horario de Fin de Semana',
      Descripcion: 'Turno del sábado',
      Fecha_inicio: new Date(2032, 0, 7, 8, 0),
      Fecha_fin: new Date(2032, 0, 7, 14, 0),
      Creador_id: 1,
      Fecha_creacion: new Date(),
      Ubicacion: 'Planta 3',
      Tipo: 'Fin de semana',
      Trabajador_id: 104,
    },
    {
      id: 5,
      Nombre: 'Horario de Mañana',
      Descripcion: 'Turno de mañana',
      Fecha_inicio: new Date(2032, 0, 8, 8, 0),
      Fecha_fin: new Date(2032, 0, 8, 14, 0),
      Creador_id: 2,
      Fecha_creacion: new Date(),
      Ubicacion: 'Planta 2',
      Tipo: 'Regular',
      Trabajador_id: 105,
    },
    {
      id: 6,
      Nombre: 'Horario de Tarde',
      Descripcion: 'Turno de tarde',
      Fecha_inicio: new Date(2032, 0, 8, 14, 0),
      Fecha_fin: new Date(2032, 0, 8, 20, 0),
      Creador_id: 3,
      Fecha_creacion: new Date(),
      Ubicacion: 'Planta 1',
      Tipo: 'Regular',
      Trabajador_id: 106,
    },
    {
      id: 7,
      Nombre: 'Horario Nocturno',
      Descripcion: 'Turno de noche',
      Fecha_inicio: new Date(2032, 0, 8, 20, 0),
      Fecha_fin: new Date(2032, 0, 9, 2, 0),
      Creador_id: 1,
      Fecha_creacion: new Date(),
      Ubicacion: 'Planta 2',
      Tipo: 'Regular',
      Trabajador_id: 107,
    },
    {
      id: 8,
      Nombre: 'Horario de Fin de Semana',
      Descripcion: 'Turno del domingo',
      Fecha_inicio: new Date(2032, 0, 9, 8, 0),
      Fecha_fin: new Date(2032, 0, 9, 14, 0),
      Creador_id: 2,
      Fecha_creacion: new Date(),
      Ubicacion: 'Planta 3',
      Tipo: 'Fin de semana',
      Trabajador_id: 108,
    },
    {
      id: 9,
      Nombre: 'Horario de Mañana',
      Descripcion: 'Turno de mañana',
      Fecha_inicio: new Date(2032, 0, 10, 8, 0),
      Fecha_fin: new Date(2032, 0, 10, 14, 0),
      Creador_id: 3,
      Fecha_creacion: new Date(),
      Ubicacion: 'Planta 1',
      Tipo: 'Regular',
      Trabajador_id: 109,
    },
    {
      id: 10,
      Nombre: 'Horario de Tarde',
      Descripcion: 'Turno de tarde',
      Fecha_inicio: new Date(2032, 0, 10, 14, 0),
      Fecha_fin: new Date(2032, 0, 10, 20, 0),
      Creador_id: 1,
      Fecha_creacion: new Date(),
      Ubicacion: 'Planta 2',
      Tipo: 'Regular',
      Trabajador_id: 110,
    },
    {
      id: 11,
      Nombre: 'Horario Nocturno',
      Descripcion: 'Turno de noche',
      Fecha_inicio: new Date(2032, 0, 10, 20, 0),
      Fecha_fin: new Date(2032, 0, 11, 2, 0),
      Creador_id: 2,
      Fecha_creacion: new Date(),
      Ubicacion: 'Planta 3',
      Tipo: 'Regular',
      Trabajador_id: 111,
    },
    {
      id: 12,
      Nombre: 'Horario de Fin de Semana',
      Descripcion: 'Turno del sábado',
      Fecha_inicio: new Date(2032, 0, 14, 8, 0),
      Fecha_fin: new Date(2032, 0, 14, 14, 0),
      Creador_id: 3,
      Fecha_creacion: new Date(),
      Ubicacion: 'Planta 1',
      Tipo: 'Fin de semana',
      Trabajador_id: 112,
    },
    {
      id: 13,
      Nombre: 'Horario de Mañana',
      Descripcion: 'Turno de mañana',
      Fecha_inicio: new Date(2032, 0, 15, 8, 0),
      Fecha_fin: new Date(2032, 0, 15, 14, 0),
      Creador_id: 1,
      Fecha_creacion: new Date(),
      Ubicacion: 'Planta 2',
      Tipo: 'Regular',
      Trabajador_id: 113,
    },
    {
      id: 14,
      Nombre: 'Horario de Tarde',
      Descripcion: 'Turno de tarde',
      Fecha_inicio: new Date(2032, 0, 15, 14, 0),
      Fecha_fin: new Date(2032, 0, 15, 20, 0),
      Creador_id: 2,
      Fecha_creacion: new Date(),
      Ubicacion: 'Planta 3',
      Tipo: 'Regular',
      Trabajador_id: 114,
    },
    {
      id: 15,
      Nombre: 'Horario Nocturno',
      Descripcion: 'Turno de noche',
      Fecha_inicio: new Date(2032, 0, 15, 20, 0),
      Fecha_fin: new Date(2032, 0, 16, 2, 0),
      Creador_id: 3,
      Fecha_creacion: new Date(),
      Ubicacion: 'Planta 1',
      Tipo: 'Regular',
      Trabajador_id: 115,
    },
    {
      id: 16,
      Nombre: 'Horario de Fin de Semana',
      Descripcion: 'Turno del domingo',
      Fecha_inicio: new Date(2032, 0, 16, 8, 0),
      Fecha_fin: new Date(2032, 0, 16, 14, 0),
      Creador_id: 1,
      Fecha_creacion: new Date(),
      Ubicacion: 'Planta 2',
      Tipo: 'Fin de semana',
      Trabajador_id: 116,
    },
    {
      id: 17,
      Nombre: 'Horario de Mañana',
      Descripcion: 'Turno de mañana',
      Fecha_inicio: new Date(2032, 0, 17, 8, 0),
      Fecha_fin: new Date(2032, 0, 17, 14, 0),
      Creador_id: 2,
      Fecha_creacion: new Date(),
      Ubicacion: 'Planta 3',
      Tipo: 'Regular',
      Trabajador_id: 117,
    },
    {
      id: 18,
      Nombre: 'Horario de Tarde',
      Descripcion: 'Turno de tarde',
      Fecha_inicio: new Date(2032, 0, 17, 14, 0),
      Fecha_fin: new Date(2032, 0, 17, 20, 0),
      Creador_id: 3,
      Fecha_creacion: new Date(),
      Ubicacion: 'Planta 1',
      Tipo: 'Regular',
      Trabajador_id: 118,
    },
    {
      id: 19,
      Nombre: 'Horario Nocturno',
      Descripcion: 'Turno de noche',
      Fecha_inicio: new Date(2032, 0, 17, 20, 0),
      Fecha_fin: new Date(2032, 0, 18, 2, 0),
      Creador_id: 1,
      Fecha_creacion: new Date(),
      Ubicacion: 'Planta 2',
      Tipo: 'Regular',
      Trabajador_id: 119,
    },
    {
      id: 20,
      Nombre: 'Horario de Fin de Semana',
      Descripcion: 'Turno del sábado',
      Fecha_inicio: new Date(2032, 0, 21, 8, 0),
      Fecha_fin: new Date(2032, 0, 21, 14, 0),
      Creador_id: 2,
      Fecha_creacion: new Date(),
      Ubicacion: 'Planta 3',
      Tipo: 'Fin de semana',
      Trabajador_id: 120,
    },
  ];

  constructor(
    private messageService: MessageService,
    private dialogService: DialogService
  ) {}

  @ViewChild('tblHorarioListar') tblHorarioListar: Table | undefined;

  ref: DynamicDialogRef | undefined;

  buttonStyle = {
    width: '2.3rem',
    height: '2.3rem',
    'margin-left': '0.5rem',
  };

  applyFilterGlobal($event: any, stringVal: string) {
    this.tblHorarioListar?.filterGlobal(
      ($event.target as HTMLInputElement).value,
      stringVal
    );
  }

  onClickNuevoHorario() {
    console.log('onClickHorario');
    this.dialogService.open(HorariosModalComponent, {
      header: 'Nuevo Horario',
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

  onClickVerHorario(horario: Horario) {
    console.log('onClickVerHorario');
    this.dialogService.open(HorariosModalComponent, {
      header: 'Ver Horario',
      width: '80vw',
      height: '80vh',
      templates: {
        footer: FooterModalComponent,
      },
      data: {
        typeModal: TYPE_MODAL_VER,
        data: horario,
      },
    });
  }

  onClickModificarHorario(horario: Horario) {
    console.log('onClickModificarHorario');
    this.dialogService.open(HorariosModalComponent, {
      header: 'Modificar horario',
      width: '80vw',
      height: '80vh',
      templates: {
        footer: FooterModalComponent,
      },
      data: {
        typeModal: TYPE_MODAL_MODIFICAR,
        data: horario,
      },
    });
  }

  ngOnInit(): void {}

  selectHorario(horario: Horario): void {
    this.messageService.add({
      severity: 'info',
      summary: 'Horario Seleccionado',
      detail: `Nombre: ${horario.Nombre}`,
    });
  }
}
