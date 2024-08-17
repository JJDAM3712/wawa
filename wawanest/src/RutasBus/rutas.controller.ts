import { Controller, Get, Post, Put, Delete, Param, Body } from "@nestjs/common";
import { RutasService } from "./rutas.service";
import { route } from "@prisma/client";
import { CreateRouteDto } from "src/common/dto/route_validator.dto";

// controlladores
@Controller("rutas")
export class RutasController{
    constructor( 
        private readonly RutaService: RutasService
    ){}
    // mostrar todas las rutas disponibles
    @Get()
    async ShowRutas() {
        return this.RutaService.showAllRutas()
    }
    // mostrar una ruta
    @Get(':id')
    async ShowRuta(@Param('id') id: string) {
        const ruta = await this.RutaService.showOneRuta(id)
        return ruta
    }
    // agregar una ruta
    @Post()
    async NewRuta(@Body() CreateRouteDto: CreateRouteDto) {
        try {
            const ruta = await this.RutaService.aggRutas(CreateRouteDto);
            return {
                message: "Ruta creada exitosamente",
                route: ruta 
            }
        } catch (error) {
            throw error; 
        }
    }
    // actualizar ruta
    @Put(':id')
    async UpdateRuta(@Param('id') id: string, @Body() data: route) {
        return this.RutaService.updateRutas(id, data)
    }
    // eliminar ruta
    @Delete(':id')
    async DeleteRuta(@Param('id') id: string) {
        const ruta = await this.RutaService.deleteRutas(id)
        return ruta
    }    
}