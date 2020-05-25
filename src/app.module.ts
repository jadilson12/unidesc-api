import { Module } from '@nestjs/common';
import { AppService } from 'services';
import { AppController } from 'controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TurmaModule } from './modules/turma.module';
import { AlunoModule } from './modules/aluno.module';
import { ProfessorModule } from './modules/professor.module';

@Module({
  imports: [
    AlunoModule,
    ProfessorModule,
    TurmaModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'unidesc',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
