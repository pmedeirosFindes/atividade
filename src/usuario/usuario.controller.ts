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
  findOne( @Param ('id') id:string) {
    return this.usuarioService.findOne(parseInt(id));
  };
 
  @Put(':id')
  async update(@Param('id') id:string, @Body() data:updateDTO){
    return this.usuarioService.update(parseInt(id),data);
  };

  @Delete(':id')
  remove(@Param('id') id:string){
    return this.usuarioService.remove(parseInt(id));
  };

}
