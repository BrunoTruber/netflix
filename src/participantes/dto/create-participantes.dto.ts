/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateParticipanteDto {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  imagem: string;

  @IsNotEmpty()
  data_nascimento: string;

  @IsNotEmpty()
  staff: string;

  @IsOptional()
  filmes: number[];
}
