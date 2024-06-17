export interface Usuario {
    IdUsuario: number;
    Nombre: string;
    Apellido: string;
    Correo: string;
    Telefono: string;
    Dni: number;
    Estado_civil?: string;
    Direccion?: string;
    Contraseña: string;
}
