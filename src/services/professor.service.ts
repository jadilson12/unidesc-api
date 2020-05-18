import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Professor } from 'models';
import { Repository } from 'typeorm';

@Injectable()
export class ProfessorService {
  constructor(
    @InjectRepository(Professor)
    private readonly _repository: Repository<Professor>
  ) {}

  async findAll(): Promise<Professor[]> {
    return this._repository.find();
  }

  async create(professor: Professor): Promise<Professor> {
    return await this._repository.save(professor);
  }

  async findOne(id: string): Promise<Professor> {
    return await this._repository.findOne(id);
  }

  async delete(id: string) {
    return await this._repository.delete(id);
  }

  async update(professor: Professor, id: string) {
    const productUpdate = await this._repository.findOne(id);
    productUpdate.nome = professor.nome;
    productUpdate.email = professor.email;
    productUpdate.matricula = professor.matricula;
    productUpdate.telefone = professor.telefone;
    return await this._repository.save(productUpdate);
  }
}
