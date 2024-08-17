import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy{
    async onModuleInit() {
        try {
            await this.$connect();
            console.log('Conectado a mongodb');
        } catch (error) {
            console.error(`Error al conectarse ${error}`);
        }
    }
    async onModuleDestroy() {
        await this.$disconnect();
        console.log('BD desconectada');
    }
}
