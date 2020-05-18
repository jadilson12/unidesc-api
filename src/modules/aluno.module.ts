import { Aluno } from 'models';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AlunoService } from 'services';
import { AlunoController } from 'controllers';

@Module({
  imports: [TypeOrmModule.forFeature([Aluno])],
  providers: [AlunoService],
  controllers: [AlunoController],
})
export class AlunoModule {}
