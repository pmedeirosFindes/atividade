import { Injectable } from '@nestjs/common';
import {perfilDTO} from './perfil-dto/perfil.dto'
import { PrismaService } from '../database/PrismaService';

@Injectable()
export class PerfilService {

    constructor(private prisma: PrismaService){}

    async create(data:perfilDTO){

      const perfilExist = await this.prisma.perfil.findFirst({where:{tipo:data.tipo}});

      if(perfilExist){
       throw new Error('Tipo já exitente');
       
      }

      const perfil = await this.prisma.perfil.create({data});
      return perfil;

    };

    async findAll(){
      return this.prisma.perfil.findMany();
    }

};
