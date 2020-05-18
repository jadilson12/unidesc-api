import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Turma {
  @ApiProperty({ example: 1, description: 'id da turma' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Lucas Souza', description: 'Nome do lider' })
  @Column()
  lider: string;

  @ApiProperty({
    example: 'lucalsouza@gmail.com',
    description: 'E-mail do lider',
  })
  @Column()
  email: string;
}
