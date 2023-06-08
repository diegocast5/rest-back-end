import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('DATOS_CONTACTO')
export class DatosContacto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  cliente_id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  direccion: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  telefono: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  ciudad: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  estado: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  pais: string;
}
