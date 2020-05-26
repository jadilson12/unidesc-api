import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Aluno {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Jadilson Lima', description: 'Nome do aluno' })
  @Column()
  nome: string;

  @ApiProperty({
    example: 2343343,
    description: 'Matricula do aluno',
  })
  @Column()
  matricula: number;

  @ApiProperty({ example: 3, description: 'Semestre do aluno' })
  @Column()
  semestre: number;
}
