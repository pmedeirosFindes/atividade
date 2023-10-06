import { IsString } from "class-validator";

export class funcionarioDTO  {
  // id?: number;
  @IsString()

  @IsString()
  nome: string;

  @IsString()
  cargo?: string;

  @IsString()
  cpf:string;
}