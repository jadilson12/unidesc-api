import { Turma } from 'models';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class TurmaService {
  constructor(
    @InjectRepository(Turma)
    private readonly _repository: Repository<Turma>
  ) {}

  async findAll(): Promise<Turma[]> {
    return this._repository.find();
  }

  async create(turma: Turma): Promise<Turma> {
    return await this._repository.save(turma);
  }

  async findOne(id: string): Promise<Turma> {
    return await this._repository.findOne(id);
  }

  async delete(id: string) {
    return await this._repository.delete(id);
  }

  async update(turma: Turma, id: string) {
    const productUpdate = await this._repository.findOne(id);
    productUpdate.lider = turma.lider;
    productUpdate.email = turma.email;
    return await this._repository.save(productUpdate);
  }
}
