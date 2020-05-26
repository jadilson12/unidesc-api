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
  async create(@Body() professor: Professor) {
    await this.service.create(professor);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos professors' })
  async findAll(): Promise<Professor[]> {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Mostar professor' })
  async findOne(@Param('id') id: string): Promise<Professor> {
    return await this.service.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir professor' })
  async delete(@Param('id') id: string) {
    await this.service.delete(id);
    return null;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar professor' })
  async update(@Param('id') id: string, @Body() professor: Professor) {
    return await this.service.update(professor, id);
  }
}
