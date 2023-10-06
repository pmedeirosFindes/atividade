import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DependenteService } from './dependente.service';
import { dependenteDTO } from './dependente-dto/dependente.dto';
import { dependenteUpDTO } from './dependente-up-dto/dependente.up.dto';

@Controller('dependente')
export class DependenteController {
  constructor(private readonly dependenteService: DependenteService) {}

  @Post()
  async create(@Body() data: dependenteDTO){
    return this.dependenteService.create(data);
  };

  @Get()
  async findAll(){
    return this.dependenteService.findAll();
  };

  @Get(':id')
  async findOne( @Param ('id') id:string) {
    const parametro = parseInt(id);
    if(!parametro){
      throw new Error('Id invalido!!');
    }else{
      return this.dependenteService.findOne(parametro);
    };
  };

  @Put(':id')
  async update(@Param('id') id:string, @Body() data:dependenteUpDTO){
    const parametro = parseInt(id);
    if(!parametro){
      throw new Error('Id invalido!!');
    }else{
      return this.dependenteService.update(parametro,data);
    };
  };

  @Delete(':id')
  async remove(@Param('id') id:string){
    const parametro = parseInt(id);
    if(!parametro){
      throw new Error('Id invalido!!');
    }else{
      return this.dependenteService.remove(parametro);
    };
  };
}
