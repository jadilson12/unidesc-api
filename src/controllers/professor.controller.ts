import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ProfessorService } from 'services';
import { Professor } from 'models';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('professores')
export class ProfessorController {
  constructor(private readonly service: ProfessorService) {}

  @Post()
  @ApiOperation({ summary: 'Criar professors' })
  @ApiResponse({ status: 403, description: 'Proibido.' })
  async create(@Body() professor: Professor) {
    await this.service.create(professor);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos professors' })
  @ApiResponse({ status: 403, description: 'Proibido.' })
  async findAll(): Promise<Professor[]> {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Mostar professor' })
  @ApiResponse({
    status: 200,
    description: 'O registro encontrado',
    type: Professor,
  })
  async findOne(@Param('id') id: string): Promise<Professor> {
    return await this.service.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir professor' })
  @ApiResponse({
    status: 200,
    description: 'O registro encontrado',
    type: Professor,
  })
  async delete(@Param('id') id: string) {
    await this.service.delete(id);
    return null;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar professor' })
  @ApiResponse({
    status: 200,
    description: 'O registro encontrado',
    type: Professor,
  })
  async update(@Param('id') id: string, @Body() professor: Professor) {
    return await this.service.update(professor, id);
  }
}
