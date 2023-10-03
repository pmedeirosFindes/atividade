import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { dependenteDTO } from './dependente-dto/dependente.dto';
import { dependenteUpDTO } from './dependente-up-dto/dependente.up.dto';

@Injectable()
export class DependenteService {
  constructor(private prisma: PrismaService){}
  
  async create(data:dependenteDTO){

    const idFuncionario = await this.prisma.funcionario.findFirst({where:{id:data.id_funcionario}});

    if(!idFuncionario){
     throw new Error('Funcionario não existe');
     
    }

    const usuario = await this.prisma.dependente.create({data});
    return usuario;

  };

  async findAll(){
    return this.prisma.dependente.findMany();
  };

  async findOne(id:number){

    const dependente = await this.prisma.dependente.findUnique({where:{id}});

    if(!dependente){
      throw new Error('Dependente não existe');
    }

    return dependente  
  };

  async update(id:number,data:dependenteUpDTO){
    const dependente = await this.prisma.dependente.findUnique({where:{id}});

    if(!dependente){
      throw new Error('Dependente não existe');
    }

    return await this.prisma.dependente.update({data,where:{id}})
  };

  async remove(id:number){
    const dependente = await this.prisma.dependente.findUnique({where:{id}});

    if(!dependente){
      throw new Error('Dependente não existe');
    }

    return await this.prisma.dependente.delete({where:{id}});
  };
  
    

}
