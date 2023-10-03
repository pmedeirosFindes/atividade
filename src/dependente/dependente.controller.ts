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
  findOne( @Param ('id') id:string) {
    return this.dependenteService.findOne(parseInt(id));
  };

  @Put(':id')
  async update(@Param('id') id:string, @Body() data:dependenteUpDTO){
    return this.dependenteService.update(parseInt(id),data);
  };

  @Delete(':id')
  remove(@Param('id') id:string){
    return this.dependenteService.remove(parseInt(id));
  };
}
