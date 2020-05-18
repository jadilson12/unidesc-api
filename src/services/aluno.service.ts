import { Aluno } from 'models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AlunoService {
  constructor(
    @InjectRepository(Aluno)
    private readonly _repository: Repository<Aluno>
  ) {}

  async findAll(): Promise<Aluno[]> {
    return this._repository.find();
  }

  async create(aluno: Aluno): Promise<Aluno> {
    return await this._repository.save(aluno);
  }

  async findOne(id: string): Promise<Aluno> {
    return await this._repository.findOne(id);
  }

  async delete(id: string) {
    return await this._repository.delete(id);
  }

  async update(aluno: Aluno, id: string) {
    const productUpdate = await this._repository.findOne(id);
    productUpdate.nome = aluno.nome;
    productUpdate.matricula = aluno.matricula;
    productUpdate.semestre = aluno.semestre;
    return await this._repository.save(productUpdate);
  }
}
