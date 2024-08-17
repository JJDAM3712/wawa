import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ObjectId } from 'mongodb';
import { ValidationError } from 'class-validator';

@Injectable()
export class ErrorsCapture {
    handleValidation(errors: ValidationError[]): void {
        const errorMessages = errors.map(error => 
            Object.values(error.constraints).join(', ')
        ).join('; ');
        throw new BadRequestException(`Validation failed: ${errorMessages}`);
    }
    handlePrismaError(id: string, error: any): void {
        if (Array.isArray(error) && error[0] instanceof ValidationError) {
            this.handleValidation(error);
        }
        if(!ObjectId.isValid(id)) {
            throw new BadRequestException('Formato de ID invalido')
        }
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            switch (error.code) {
                case 'P2025':
                    throw new NotFoundException('El registro no existe');
                default:
                    throw new BadRequestException('Error de base de datos');
            }
        } else {
            throw new BadRequestException('Error desconocido');
        }
    }
    
}