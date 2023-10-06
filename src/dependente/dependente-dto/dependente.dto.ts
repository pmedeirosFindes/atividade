import { IsNumber, IsString } from "class-validator";

export class dependenteDTO  {
  // id?:number;
  @IsString()
  nome:string;

  @IsNumber()
  idade:number;

  @IsNumber()
  id_funcionario:number;
}