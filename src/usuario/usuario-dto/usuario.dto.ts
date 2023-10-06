import { IsNumber, IsString } from "class-validator";

export class usuarioDTO  {
  // id?: number;
  @IsString()
   nome: string;

  @IsString()
   login: string;

  @IsString()
   senha:string;

  @IsNumber()
   id_perfil: number;
}