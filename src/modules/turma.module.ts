import { Turma } from 'models';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TurmaService } from 'services';
import { TurmaController } from 'controllers';

@Module({
  imports: [TypeOrmModule.forFeature([Turma])],
  providers: [TurmaService],
  controllers: [TurmaController],
})
export class TurmaModule {}
