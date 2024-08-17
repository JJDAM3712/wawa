import { IsString, IsNotEmpty, IsInt, IsDateString } from 'class-validator';

export class CreateRouteDto {
    @IsString()
    @IsNotEmpty()
    ruta: string;

    @IsString()
    @IsNotEmpty()
    origen: string;

    @IsString()
    @IsNotEmpty()
    destino: string;

    @IsString()
    @IsNotEmpty()
    duracion: string;

    @IsString()
    @IsNotEmpty()
    h_salida: string;

    @IsString()
    @IsNotEmpty()
    h_llegada: string;

    @IsDateString()
    @IsNotEmpty()
    fecha: string;

    @IsInt()
    @IsNotEmpty()
    n_bus: number;

    @IsInt()
    @IsNotEmpty()
    capacidad: number;
}