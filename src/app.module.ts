import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PerfilModule } from './perfil/perfil.module';
import { UsuarioModule } from './usuario/usuario.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { DependenteModule } from './dependente/dependente.module';

@Module({
  imports: [PerfilModule, UsuarioModule, FuncionarioModule, DependenteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
