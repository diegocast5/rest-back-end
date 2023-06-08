// usuarios.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from 'src/entities/cliente.entity';
import { transporter } from 'src/config/mailer';
@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
    
  ) {}

  async create(clienteData) {
    const nuevoCliente = this.clienteRepository.create(clienteData);
    await this.clienteRepository.save(nuevoCliente);

    try {
        // send mail with defined transport object
   await transporter.sendMail({
    from: '"Fred Foo 👻" <juancarlosgutiimarquina36@gmail.com>', // sender address
    to: clienteData.correo, // list of receivers
    subject: 'Bienvenido/a a nuestra plataforma', // Subject line
    html: `Hola ${clienteData.nombre}, \n\nGracias por registrarte en nuestra plataforma. ¡Estamos emocionados de tenerte con nosotros!`, // html body
  });
        
    } catch (error) {
        
    }

    return nuevoCliente;
  }
}

