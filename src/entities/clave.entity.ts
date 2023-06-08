import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Cliente } from './cliente.entity';

@Entity('CLAVES')
export class Clave {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Cliente, cliente => cliente.clave)
  cliente: Cliente;

  @Column({ type: 'varchar', length: 255, nullable: false })
  hash_clave: string;
}
