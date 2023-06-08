import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatosContacto } from 'src/entities/datosContacto.entity';
import { DtsClientesService } from './dts-clientes.service';
import { DtsClientesController } from './dts-clientes.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([DatosContacto]) // Importa tus entidades en el módulo de TypeORM
  ],
  providers: [DtsClientesService],
  controllers: [DtsClientesController],
})
export class DtsClientesModule {}

