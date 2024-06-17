export interface Horario {
  id?: number;
  Nombre: string;
  Descripcion?: string;
  Fecha_inicio: Date;
  Fecha_fin: Date;
  Creador_id: number;
  Fecha_creacion: Date;
  Ubicacion: string;
  Tipo: string;
  Trabajador_id: number;
}
