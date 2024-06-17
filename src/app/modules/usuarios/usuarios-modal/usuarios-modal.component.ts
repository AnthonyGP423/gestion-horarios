import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../../core/models/usuario';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TYPE_MODAL_VER } from '../../../shared/utils/constants';

@Component({
  selector: 'app-usuarios-modal',
  standalone: true,
  imports: [InputTextModule, FloatLabelModule, FormsModule, ButtonModule],
  templateUrl: './usuarios-modal.component.html',
  styleUrl: './usuarios-modal.component.scss',
})
export class UsuariosModalComponent implements OnInit {
  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ) {}

  usuarios: Usuario = {
    IdUsuario: 0,
    Nombre: '',
    Apellido: '',
    Correo: '',
    Telefono: '',
    Dni: 0,
    Estado_civil: '',
    Direccion: '',
    Contraseña: '',
  };

  ngOnInit(): void {
    console.log('UsuariosModalComponent', this.config.data);
    if (this.config.data.data) {
      this.usuarios = this.config.data.data;
    }
  }
  isModoVer(): boolean {
    return this.config.data.typeModal == TYPE_MODAL_VER;
  }
}
