import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/PrismaService';
import {usuarioDTO} from './usuario-dto/usuario.dto';
import {updateDTO} from './update-dto/update.dto';
import { loginDTO } from './login-dto/login.dto';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class UsuarioService {

  constructor(private prisma: PrismaService){}

  async create(data:usuarioDTO){

    const e = await bcrypt.genSalt();

    data.senha = await bcrypt.hash(data.senha,e); 

    const loginExist = await this.prisma.usuario.findFirst({where:{login:data.login}});

    if(loginExist){ 
     throw new Error('Login já exitente');
    }

    const usuario = await this.prisma.usuario.create({data});
    return usuario;

  };

  async login(data:loginDTO){

    const user = await this.prisma.usuario.findFirst({where:{login:data.login}});
    if(!user){
      throw new Error('Login não exite');
    }
    
    const validacaoSenha = await bcrypt.compare(data.senha, user.senha);

    if(!validacaoSenha){
      throw new Error('Senha incorreta')
    }
    
    return user
  };

  async findAll(){
    return this.prisma.usuario.findMany();
  };

  async findOne(id:number){
    
    const user = await this.prisma.usuario.findUnique({where:{id}});

    if(!user){

      throw new Error('Usuario não existe');
    }

    return user  
  };

  async update(id:number,data:updateDTO){
    const userExist = await this.prisma.usuario.findUnique({where:{id}});

    if(!userExist){
      throw new Error('Usuario não existe');
    }

    return await this.prisma.usuario.update({data,where:{id}})
  };

  async remove(id: number){
    const userExist = await this.prisma.usuario.findUnique({where:{id}});

    if(!userExist){
      throw new Error('Usuario não existe');
    }

    return await this.prisma.usuario.delete({where:{id}});
  };

};
