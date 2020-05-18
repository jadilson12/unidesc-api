import { Professor } from 'models';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfessorService } from 'services';
import { ProfessorController } from 'controllers';

@Module({
  imports: [TypeOrmModule.forFeature([Professor])],
  providers: [ProfessorService],
  controllers: [ProfessorController],
})
export class ProfessorModule {}
