import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TurmaService } from 'services';
import { Turma } from 'models';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('turmas')
export class TurmaController {
  constructor(private readonly service: TurmaService) {}

  @Post()
  @ApiOperation({ summary: 'Criar turmas' })
  async create(@Body() turma: Turma) {
    await this.service.create(turma);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos turmas' })
  async findAll(): Promise<Turma[]> {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Mostar turma' })
  async findOne(@Param('id') id: string): Promise<Turma> {
    return await this.service.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir turma' })
  async delete(@Param('id') id: string) {
    await this.service.delete(id);
    return null;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar turma' })
  async update(@Param('id') id: string, @Body() turma: Turma) {
    return await this.service.update(turma, id);
  }
}
