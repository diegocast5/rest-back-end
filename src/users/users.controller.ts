// usuarios.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { UsuariosService } from './users.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  create(@Body() body) {
    const { cliente} = body;
    return this.usuariosService.create(cliente);
  }
}
