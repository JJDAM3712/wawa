import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { RutasModule } from './RutasBus/rutas.module';
import { ErrorModule } from './common/errors/errors.module';

@Module({
  imports: [PrismaModule, RutasModule, ErrorModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
