import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, InputTextModule, FloatLabelModule, PasswordModule, ButtonModule, CheckboxModule, DropdownModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  nombre!: string;
  apellido!: string;
  correo!: string;
  telefono!: string;
  dni!: string;
  estadoCivil: any[] = [];
  direccion!: string;
  password!: string;
  confirmPassword!: string;
  aceptarTerminos: boolean = false;

  estadosCiviles: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.estadosCiviles = [
      { label: 'Soltero', value: 'Soltero' },
      { label: 'Casado', value: 'Casado' },
      { label: 'Divorciado', value: 'Divorciado' },
      { label: 'Viudo', value: 'Viudo' }
    ];
  }

  register() {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    if (!this.aceptarTerminos) {
      alert('Debes aceptar los términos y condiciones');
      return;
    }
    this.router.navigate(['/principal/menu']);
  }
}
