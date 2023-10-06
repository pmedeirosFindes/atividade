import { Injectable } from '@nestjs/common';
import { funcionarioDTO } from './funcionario-dto/funcionario.dto';
import { funcionarioUpDTO } from './funcionrario-up-dto/funcioanrio.up.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class FuncionarioService {
  constructor(private prisma: PrismaService){}

  async create(data:funcionarioDTO){
    //função cpf
    const cpfExist = await this.prisma.funcionario.findFirst({where:{cpf:data.cpf}});

    if(cpfExist){
     throw new Error('CPF já cadastrado');
     
    }

    const usuario = await this.prisma.funcionario.create({data});
    return usuario;

  };

  async findAll(){
    return this.prisma.funcionario.findMany();
  };

  async findOne(id:number){

    const userExist = await this.prisma.funcionario.findUnique({where:{id}});

    if(!userExist){
      throw new Error('Funcionario não existe');
    }

    const dependentes = await this.prisma.dependente.findMany({where:{id_funcionario:id}})
    
    return dependentes.map((e) => e.nome )
  };

  async update(id:number,data:funcionarioUpDTO){
    const userExist = await this.prisma.funcionario.findUnique({where:{id}});

    if(!userExist){
      throw new Error('Funcionario não existe');
    }

    return await this.prisma.funcionario.update({data,where:{id}})
  };

  async remove(id:number){
    const userExist = await this.prisma.funcionario.findUnique({where:{id}});

    if(!userExist){
      throw new Error('Funcionario não existe');
    }

    const dependentes = await this.prisma.dependente.findFirst({where:{id_funcionario:id}})

    if(dependentes){
      throw new Error('Não é possivel excluir, depententes cadastrados');
    }

    return await this.prisma.funcionario.delete({where:{id}});
  };

}
