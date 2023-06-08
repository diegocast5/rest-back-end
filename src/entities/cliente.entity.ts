import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Clave } from './clave.entity';
import { DatosContacto } from './datosContacto.entity';

@Entity('CLIENTES')
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nombre: string;

  @Column({ length: 255, unique: true })
  correo: string;

  @Column({ length: 255 })
  clave: string;

  
}

