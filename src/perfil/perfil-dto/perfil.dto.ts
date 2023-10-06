import { IsString } from "class-validator";

export class perfilDTO  {
  // id?: number;
  @IsString()
  tipo: string;
};