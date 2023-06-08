// dtsClientes.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DatosContacto } from 'src/entities/datosContacto.entity';


@Injectable()
export class DtsClientesService {
    private readonly logger= new Logger(DtsClientesService.name);
  constructor(
    @InjectRepository(DatosContacto)
    private datosContactoRepository: Repository<DatosContacto>,
  ) {}

  async create(data) {
    // Crea y guarda los nuevos datos de contacto
    const nuevoDatosContacto = this.datosContactoRepository.create(data.datosContacto);

    this.logger.log(data.datosContacto);
    await this.datosContactoRepository.save(nuevoDatosContacto);

    return nuevoDatosContacto;
}

}