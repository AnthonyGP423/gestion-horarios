import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Horario } from '../../../core/models/horario';

@Component({
  selector: 'app-horarios-listar',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './horarios-listar.component.html',
  styleUrl: './horarios-listar.component.scss',
})
export class HorariosListarComponent implements OnInit {
  ListHorarios: Horario[] = [
    { dia: 'martes', mes: 'marzo', descripcion: 'martes' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
