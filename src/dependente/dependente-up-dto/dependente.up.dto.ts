import { PartialType } from "@nestjs/mapped-types";
import { dependenteDTO } from "../dependente-dto/dependente.dto";

export class dependenteUpDTO extends PartialType(dependenteDTO){}