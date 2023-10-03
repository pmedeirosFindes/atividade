import { Body, Controller, Get, Post } from '@nestjs/common';
import { PerfilService } from './perfil.service';
import {perfilDTO} from './perfil-dto/perfil.dto'

@Controller('perfil')
export class PerfilController {
  constructor(private readonly perfilService: PerfilService) {}

    @Post()
    async create(@Body() data: perfilDTO){
      return this.perfilService.create(data);
    }
    
    @Get()
    async findAll(){
      return this.perfilService.findAll();
    }

}
