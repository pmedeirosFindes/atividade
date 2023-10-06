import { PartialType } from "@nestjs/mapped-types";
import { usuarioDTO } from "../usuario-dto/usuario.dto";

export class updateDTO extends PartialType(usuarioDTO) {}
 
