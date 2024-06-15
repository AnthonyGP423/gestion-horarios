
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [MenubarModule, CommonModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent implements OnInit {

    items: MenuItem[] | undefined;

    constructor(private router: Router) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Horarios',
                icon: 'pi pi-clock',
                items: [
                    {
                        label: 'Ver Horarios',
                        route: '/principal/login'
                    },
                    {
                        label: 'Gestionar Horarios',
                        route: '/configuration'
                    }
                ]
            },
            {
                label: 'Reservas',
                icon: 'pi pi-calendar',
                command: () => {
                    this.router.navigate(['/installation']);
                }
            },
            {
                label: 'Usuarios',
                icon: 'pi pi-users',
                items: [
                    {
                        label: 'Angular',
                        url: 'https://angular.io/'
                    },
                    {
                        label: 'Vite.js',
                        url: 'https://vitejs.dev/'
                    }
                ]
            }
        ];
    }
}
