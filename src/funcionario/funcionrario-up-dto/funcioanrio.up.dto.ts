import { PartialType } from "@nestjs/mapped-types";
import { funcionarioDTO } from "../funcionario-dto/funcionario.dto";

export class funcionarioUpDTO extends PartialType(funcionarioDTO) {}