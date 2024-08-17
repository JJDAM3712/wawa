import { Module } from "@nestjs/common";
import { RutasController } from "./rutas.controller";
import { RutasService } from "./rutas.service";
import { PrismaModule } from "src/prisma/prisma.module";
import { ErrorModule } from "src/common/errors/errors.module";

@Module({
    imports: [PrismaModule, ErrorModule],
    controllers: [RutasController],
    providers: [RutasService],
    exports: [RutasModule]
})
export class RutasModule {}