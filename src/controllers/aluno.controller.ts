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
  @ApiResponse({ status: 403, description: 'Proibido.' })
  async create(@Body() aluno: Aluno) {
    await this.service.create(aluno);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos alunos' })
  @ApiResponse({ status: 403, description: 'Proibido.' })
  async findAll(): Promise<Aluno[]> {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Mostar aluno' })
  @ApiResponse({
    status: 200,
    description: 'O registro encontrado',
    type: Aluno,
  })
  async findOne(@Param('id') id: string): Promise<Aluno> {
    return await this.service.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir aluno' })
  @ApiResponse({
    status: 200,
    description: 'O registro encontrado',
    type: Aluno,
  })
  async delete(@Param('id') id: string) {
    await this.service.delete(id);
    return null;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar aluno' })
  @ApiResponse({
    status: 200,
    description: 'O registro encontrado',
    type: Aluno,
  })
  async update(@Param('id') id: string, @Body() aluno: Aluno) {
    return await this.service.update(aluno, id);
  }
}
