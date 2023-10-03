import { Module } from '@nestjs/common';
import { FuncionarioService } from './funcionario.service';
import { FuncionarioController } from './funcionario.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [FuncionarioController],
  providers: [FuncionarioService,PrismaService],
})
export class FuncionarioModule {}
