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
  findOne( @Param ('id') id:string) {
    return this.funcionarioService.findOne(parseInt(id));
  };

  @Put(':id')
  async update(@Param('id') id:string, @Body() data:funcionarioUpDTO){
    return this.funcionarioService.update(parseInt(id),data);
  };

  @Delete(':id')
  remove(@Param('id') id:string){
    return this.funcionarioService.remove(parseInt(id));
  };
}
