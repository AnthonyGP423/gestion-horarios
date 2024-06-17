import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [MenubarModule, CommonModule, TagModule, ButtonModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss',
})
export class MenuBarComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/principal/login']);
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Horarios',
        icon: 'pi pi-clock',
        items: [
          {
            label: 'Gestionar Horarios',
            route: '/principal/menu/horarios',
          },
        ],
      },
      {
        label: 'Reservas',
        icon: 'pi pi-calendar-plus',
        items: [
          {
            label: 'Gestionar Horarios',
            route: '/principal/menu/reservas',
          },
        ],
      },
      {
        label: 'Usuarios',
        icon: 'pi pi-users',
        items: [
          {
            label: 'Gestionar Usuarios',
            url: '/principal/menu/usuarios',
          },
        ],
      },
    ];
  }
}
