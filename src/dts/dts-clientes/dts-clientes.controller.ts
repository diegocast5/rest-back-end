import { Controller, Post, Body, Logger } from '@nestjs/common';
import { DtsClientesService } from './dts-clientes.service';

@Controller('datos_contacto')
export class DtsClientesController {
    private readonly logger = new Logger(DtsClientesController.name)
  constructor(private readonly dtsClientesService: DtsClientesService) {}

  @Post()
  async create(@Body() datosContacto: any) {
    this.logger.log(datosContacto);
    return await this.dtsClientesService.create(datosContacto);
  }
}
