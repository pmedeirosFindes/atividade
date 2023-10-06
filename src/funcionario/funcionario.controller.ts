import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FuncionarioService } from './funcionario.service';
import { funcionarioDTO } from './funcionario-dto/funcionario.dto';
import { funcionarioUpDTO } from './funcionrario-up-dto/funcioanrio.up.dto';

@Controller('funcionario')
export class FuncionarioController {
  constructor(private readonly funcionarioService: FuncionarioService) {}

  @Post()
  async create(@Body() data: funcionarioDTO){
    return this.funcionarioService.create(data);
  };

  @Get()
  async findAll(){
    return this.funcionarioService.findAll();
  };

  @Get(':id')
  async findOne( @Param ('id') id:string) {
    const parametro = parseInt(id);
    if(!parametro){
      throw new Error('Id invalido!!');
    }else{
      return this.funcionarioService.findOne(parametro);
    };
  };

  @Put(':id')
  async update(@Param('id') id:string, @Body() data:funcionarioUpDTO){
    const parametro = parseInt(id);
    if(!parametro){
      throw new Error('Id invalido!!');
    }else{
      return this.funcionarioService.update(parametro,data);
    };
  };

  @Delete(':id')
  async remove(@Param('id') id:string){
    const parametro = parseInt(id);
    if(!parametro){
      throw new Error('Id invalido!!');
    }else{
      return this.funcionarioService.remove(parametro);
    };
  };
}
