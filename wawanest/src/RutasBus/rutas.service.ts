import { Injectable, BadRequestException, NotFoundException } from "@nestjs/common";
import { route } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { ObjectId } from 'mongodb';
import { ErrorsCapture } from "src/common/errors/errors.service";
import { CreateRouteDto } from "src/common/dto/route_validator.dto";
import { plainToClass } from "class-transformer";
import { validateOrReject, ValidationError } from "class-validator";

@Injectable()
export class RutasService {
    constructor(
        private prisma: PrismaService,
        private errorsCapture: ErrorsCapture
    ) {}

    // mostrar todas las rutas
    async showAllRutas(): Promise<route[]> {
        return this.prisma.route.findMany();
    }
    // mostrar una ruta
    async showOneRuta(id: string): Promise<route> {
        try {
            const ruta = await this.prisma.route.findUnique({
                where: {
                    id: new ObjectId(id).toString()
                }
            });
            return ruta
        } catch (error) {
            this.errorsCapture.handlePrismaError(id, error)
        }
    }
    // agregar una ruta nueva
    async aggRutas(data: CreateRouteDto): Promise<route> {
        const ruta = plainToClass(CreateRouteDto, data);
        try {
            await validateOrReject(ruta)
            return this.prisma.route.create({
                data: ruta
            });
        } catch (errors) {
            this.errorsCapture.handlePrismaError("", errors);
        }
    }
    // actualizar una ruta
    async updateRutas(id: string, data: CreateRouteDto): Promise<{message:string, ruta: route}> {
        const routeData = plainToClass(CreateRouteDto, data);
        try {
            await validateOrReject(routeData);
            const ruta = await this.prisma.route.update({
                where: {
                    id: new ObjectId(id).toString(),
                },
                data: routeData
            });
            return {
                message: "Ruta actualizada",
                ruta: ruta
            }
        } catch (errors) {
            this.errorsCapture.handlePrismaError(id, errors);
        }
    }
    // Eliminar rutas
    async deleteRutas(id: string): Promise<{message:string, ruta: route}> {
        try {
            const ruta = await this.prisma.route.delete({
                where: {
                    id: new ObjectId(id).toString()
                }
            });
            return {
                message: "Ruta eliminada exitosamente",
                ruta: ruta
            }
        } catch (error) {
            // captura errores durante ejecución
            this.errorsCapture.handlePrismaError(id, error)
        }
    }
}