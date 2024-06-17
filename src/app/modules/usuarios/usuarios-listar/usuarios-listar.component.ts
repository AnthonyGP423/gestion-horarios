import { Component, ViewChild } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { Usuario } from '../../../core/models/usuario';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UsuariosModalComponent } from '../usuarios-modal/usuarios-modal.component';
import { FooterModalComponent } from '../../../shared/components/footer-modal/footer-modal.component';
import {
  TYPE_MODAL_MODIFICAR,
  TYPE_MODAL_NUEVO,
  TYPE_MODAL_VER,
} from '../../../shared/utils/constants';

@Component({
  selector: 'app-usuarios-listar',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
  ],
  templateUrl: './usuarios-listar.component.html',
  styleUrls: ['./usuarios-listar.component.scss'],
  providers: [DialogService],
})
export class UsuariosListarComponent {
  constructor(private dialogService: DialogService) {}

  @ViewChild('tblUsuariosListar') tblUsuariosListar: Table | undefined;

  ref: DynamicDialogRef | undefined;

  buttonStyle = {
    width: '2.3rem',
    height: '2.3rem',
    'margin-left': '0.5rem',
  };

  usuarios: Usuario[] = [
    {
      IdUsuario: 1,
      Nombre: 'Anthony',
      Apellido: 'Gutierrez',
      Correo: 'anthony@gmail.com',
      Telefono: '2132132',
      Dni: 1231,
      Estado_civil: 'Soltero',
      Direccion: 'Av Lima',
      Contraseña: 'asdadsads',
    },
    {
      IdUsuario: 2,
      Nombre: 'María',
      Apellido: 'López',
      Correo: 'maria@gmail.com',
      Telefono: '9876543',
      Dni: 4567,
      Estado_civil: 'Casada',
      Direccion: 'Calle Perú 123',
      Contraseña: 'qwerty123',
    },
    {
      IdUsuario: 3,
      Nombre: 'Carlos',
      Apellido: 'González',
      Correo: 'carlos@gmail.com',
      Telefono: '6543210',
      Dni: 7890,
      Estado_civil: 'Divorciado',
      Direccion: 'Jirón Peruanito 456',
      Contraseña: 'password',
    },
    {
      IdUsuario: 4,
      Nombre: 'Laura',
      Apellido: 'Martínez',
      Correo: 'laura@gmail.com',
      Telefono: '1122334',
      Dni: 1122,
      Estado_civil: 'Soltera',
      Direccion: 'Avenida Perú 789',
      Contraseña: 'abcde456',
    },
    {
      IdUsuario: 5,
      Nombre: 'Juan',
      Apellido: 'Pérez',
      Correo: 'juan@gmail.com',
      Telefono: '3344556',
      Dni: 3344,
      Estado_civil: 'Viudo',
      Direccion: 'Calle Lima Norte 567',
      Contraseña: 'zxcvbn789',
    },
    {
      IdUsuario: 6,
      Nombre: 'Ana',
      Apellido: 'Ramírez',
      Correo: 'ana.ramirez@gmail.com',
      Telefono: '8877665',
      Dni: 9988,
      Estado_civil: 'Soltera',
      Direccion: 'Avenida Lima Sur 890',
      Contraseña: 'qwerty987',
    },
    {
      IdUsuario: 7,
      Nombre: 'Pedro',
      Apellido: 'Sánchez',
      Correo: 'pedro@gmail.com',
      Telefono: '4455667',
      Dni: 2233,
      Estado_civil: 'Casado',
      Direccion: 'Calle Perú 234',
      Contraseña: 'password123',
    },
    {
      IdUsuario: 8,
      Nombre: 'Julia',
      Apellido: 'Herrera',
      Correo: 'julia.herrera@gmail.com',
      Telefono: '6677889',
      Dni: 7766,
      Estado_civil: 'Divorciada',
      Direccion: 'Avenida Peruanidad 456',
      Contraseña: 'abcd1234',
    },
    {
      IdUsuario: 9,
      Nombre: 'Martín',
      Apellido: 'Gómez',
      Correo: 'martin@gmail.com',
      Telefono: '1122334',
      Dni: 4455,
      Estado_civil: 'Soltero',
      Direccion: 'Jirón Lima 789',
      Contraseña: 'asdfgh789',
    },
    {
      IdUsuario: 10,
      Nombre: 'Lucía',
      Apellido: 'Fernández',
      Correo: 'lucia.fernandez@gmail.com',
      Telefono: '9988776',
      Dni: 1122,
      Estado_civil: 'Casada',
      Direccion: 'Calle Perú Sur 345',
      Contraseña: 'pass1234',
    },
    {
      IdUsuario: 11,
      Nombre: 'Diego',
      Apellido: 'Rojas',
      Correo: 'diego@gmail.com',
      Telefono: '3344556',
      Dni: 7788,
      Estado_civil: 'Soltero',
      Direccion: 'Avenida Lima Este 678',
      Contraseña: 'qazwsx123',
    },
    {
      IdUsuario: 12,
      Nombre: 'Valeria',
      Apellido: 'Soto',
      Correo: 'valeria.soto@gmail.com',
      Telefono: '5566778',
      Dni: 9988,
      Estado_civil: 'Casada',
      Direccion: 'Jirón Perú Norte 123',
      Contraseña: 'poiuyt098',
    },
    {
      IdUsuario: 13,
      Nombre: 'Gabriel',
      Apellido: 'Mendoza',
      Correo: 'gabriel@gmail.com',
      Telefono: '2233445',
      Dni: 6677,
      Estado_civil: 'Soltero',
      Direccion: 'Calle Lima Oeste 890',
      Contraseña: 'mnbvcxz567',
    },
    {
      IdUsuario: 14,
      Nombre: 'Renata',
      Apellido: 'Chávez',
      Correo: 'renata.chavez@gmail.com',
      Telefono: '9988776',
      Dni: 1122,
      Estado_civil: 'Divorciada',
      Direccion: 'Avenida Perú Este 567',
      Contraseña: 'zxcvbnm4321',
    },
    {
      IdUsuario: 15,
      Nombre: 'Mateo',
      Apellido: 'Ortega',
      Correo: 'mateo@gmail.com',
      Telefono: '3344556',
      Dni: 7788,
      Estado_civil: 'Viudo',
      Direccion: 'Calle Lima 123',
      Contraseña: 'qwertyui789',
    },
    {
      IdUsuario: 16,
      Nombre: 'Camila',
      Apellido: 'Torres',
      Correo: 'camila.torres@gmail.com',
      Telefono: '5566778',
      Dni: 9988,
      Estado_civil: 'Soltera',
      Direccion: 'Jirón Perú Sur 456',
      Contraseña: 'asdfghjkl123',
    },
    {
      IdUsuario: 17,
      Nombre: 'Felipe',
      Apellido: 'Vargas',
      Correo: 'felipe@gmail.com',
      Telefono: '2233445',
      Dni: 6677,
      Estado_civil: 'Soltero',
      Direccion: 'Avenida Lima 789',
      Contraseña: 'qwertyu123',
    },
    {
      IdUsuario: 18,
      Nombre: 'Antonella',
      Apellido: 'Martínez',
      Correo: 'antonella.martinez@gmail.com',
      Telefono: '9988776',
      Dni: 1122,
      Estado_civil: 'Casada',
      Direccion: 'Calle Perú 890',
      Contraseña: 'zxcvbn123',
    },
    {
      IdUsuario: 19,
      Nombre: 'Santiago',
      Apellido: 'García',
      Correo: 'santiago@gmail.com',
      Telefono: '3344556',
      Dni: 7788,
      Estado_civil: 'Soltero',
      Direccion: 'Jirón Lima Norte 234',
      Contraseña: 'asdfgh789',
    },
    {
      IdUsuario: 20,
      Nombre: 'Valentina',
      Apellido: 'López',
      Correo: 'valentina.lopez@gmail.com',
      Telefono: '5566778',
      Dni: 9988,
      Estado_civil: 'Soltera',
      Direccion: 'Avenida Perú 567',
      Contraseña: 'qwerty789',
    },
  ];

  applyFilterGlobal($event: any, stringVal: string) {
    this.tblUsuariosListar?.filterGlobal(
      ($event.target as HTMLInputElement).value,
      stringVal
    );
  }

  onClickNuevoUsuario() {
    console.log('onClickNuevoUsuario');
    this.dialogService.open(UsuariosModalComponent, {
      header: 'Nuevo Usuario',
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

  onClickVerUsuario(usuario: Usuario) {
    console.log('onClickVerUsuario');
    this.dialogService.open(UsuariosModalComponent, {
      header: 'Ver Usuario',
      width: '80vw',
      height: '80vh',
      templates: {
        footer: FooterModalComponent,
      },
      data: {
        typeModal: TYPE_MODAL_VER,
        data: usuario,
      },
    });
  }

  onClickModificarUsuario(usuario: Usuario) {
    console.log('onClickModificarUsuario');
    this.dialogService.open(UsuariosModalComponent, {
      header: 'Modificar Usuario',
      width: '80vw',
      height: '80vh',
      templates: {
        footer: FooterModalComponent,
      },
      data: {
        typeModal: TYPE_MODAL_MODIFICAR,
        data: usuario,
      },
    });
  }
}
