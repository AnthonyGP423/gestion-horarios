import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-menu',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './inicio-menu.component.html',
  styleUrl: './inicio-menu.component.scss',
})
export class InicioMenuComponent {
  constructor(private router: Router) {}

  horarios() {
    this.router.navigate(['/principal/menu/horarios']);
  }
  reservas() {
    this.router.navigate(['/principal/menu/reservas']);
  }
  usuarios() {
    this.router.navigate(['/principal/menu/usuarios']);
  }
}
