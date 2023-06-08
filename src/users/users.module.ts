import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosController } from './users.controller';
import { UsuariosService } from './users.service';
import { Cliente } from 'src/entities/cliente.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cliente])
  ],
  controllers: [UsuariosController],
  providers: [UsuariosService]
})
export class UsersModule {}
