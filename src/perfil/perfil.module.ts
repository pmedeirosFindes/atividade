import { Module } from '@nestjs/common';
import { PerfilService } from './perfil.service';
import { PerfilController } from './perfil.controller';
import {PrismaService} from '../database/PrismaService';

@Module({
  controllers: [PerfilController],
  providers: [PerfilService,PrismaService],
})
export class PerfilModule {}
