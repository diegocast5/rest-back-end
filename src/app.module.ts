import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { Clave } from './entities/clave.entity';
import { DatosContacto } from './entities/datosContacto.entity';
import { DtsClientesModule } from './dts/dts-clientes/dts-clientes.module';
import { UsersModule } from './users/users.module';
import { ClaveModule } from './clave/clave.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'prueba_fullstack',
      entities: [Cliente, Clave, DatosContacto],
      synchronize: false,
    }),
    DtsClientesModule,
    UsersModule,
    ClaveModule
  ],
})
export class AppModule {}

