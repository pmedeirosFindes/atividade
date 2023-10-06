import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { usuarioDTO } from './usuario-dto/usuario.dto';
import { updateDTO } from './update-dto/update.dto';
import { loginDTO } from './login-dto/login.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async create(@Body() data: usuarioDTO){
    return this.usuarioService.create(data);
  };

  @Post('/login')
  async login(@Body() data:loginDTO){
    
    return this.usuarioService.login(data);
  };
  
  @Get()
  async findAll(){
    return this.usuarioService.findAll();
  };

  @Get(':id')
  async findOne( @Param ('id') id:string) {
    const parametro = parseInt(id);
    if(!parametro){
      throw new Error('Id invalido!!');
    }else{
      return this.usuarioService.findOne(parametro);
    };
  };
 
  @Put(':id')
  async update(@Param('id') id:string, @Body() data:updateDTO){
    const parametro = parseInt(id);
    if(!parametro){
      throw new Error('Id invalido!!');
    }else{
      return this.usuarioService.update(parametro,data);
    };
  };

  @Delete(':id')
  async remove(@Param('id') id:string){
    const parametro = parseInt(id);
    if(!parametro){
      throw new Error('Id invalido!!');
    }else{
      return this.usuarioService.remove(parametro);
    };
  };

}
