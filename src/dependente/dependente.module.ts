import { Module } from '@nestjs/common';
import { DependenteService } from './dependente.service';
import { DependenteController } from './dependente.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [DependenteController],
  providers: [DependenteService,PrismaService],
})
export class DependenteModule {}
