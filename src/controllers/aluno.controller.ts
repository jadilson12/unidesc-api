import { Aluno } from 'models';
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { AlunoService } from 'services';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('alunos')
export class AlunoController {
  constructor(private readonly service: AlunoService) {}

  @Post()
  @ApiOperation({ summary: 'Criar alunos' })
  async create(@Body() aluno: Aluno) {
    await this.service.create(aluno);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos alunos' })
  async findAll(): Promise<Aluno[]> {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Mostar aluno' })
  async findOne(@Param('id') id: string): Promise<Aluno> {
    return await this.service.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir aluno' })
  async delete(@Param('id') id: string) {
    await this.service.delete(id);
    return null;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar aluno' })
  async update(@Param('id') id: string, @Body() aluno: Aluno) {
    return await this.service.update(aluno, id);
  }
}
