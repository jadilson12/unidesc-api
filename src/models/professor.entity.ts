import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Professor {
  @ApiProperty({ example: 1, description: 'id do professor' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Jadilson', description: 'Nome do professor' })
  @Column()
  nome: string;

  @ApiProperty({
    example: 'jadilson12@gmail.com',
    description: 'E-mail do professor',
  })
  @Column()
  email: string;

  @ApiProperty({
    example: 2343343,
    description: 'Matricula do professor',
  })
  @Column()
  matricula: number;

  @ApiProperty({
    example: '629992225454',
    description: 'Telefone do professor',
  })
  @Column()
  telefone: string;
}
